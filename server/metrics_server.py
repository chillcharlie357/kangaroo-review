#!/usr/bin/env python3
"""Lightweight SQLite metrics service for the Kangaroo review site."""

import argparse
import hashlib
import json
import mimetypes
import os
import sqlite3
import time
import urllib.parse
from datetime import datetime, timedelta, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from socketserver import ThreadingMixIn
from typing import Any, Dict, List, Optional, Tuple, Type


EVENT_TYPES = {
    "site_visit",
    "page_view",
    "page_click",
    "topic_view",
    "glossary_view",
    "question_view",
    "source_preview",
    "source_open",
    "diagram_open",
    "whiteboard_open",
    "reward_open",
    "search",
    "filter_change",
}

MAX_BODY_BYTES = 64 * 1024
MAX_LABEL_LENGTH = 180
MAX_KEY_LENGTH = 240
MAX_META_LENGTH = 2048
VISITOR_EXPR = "CASE WHEN visitor_hash != '' THEN visitor_hash ELSE ip_hash || ':' || user_agent END"
SITE_ROOT_FILES = {
    "index.html",
    "app.js",
    "content.js",
    "styles.css",
    "metrics.html",
    "metrics.js",
}


class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def utc_day(ts: Optional[float] = None) -> str:
    timestamp = time.time() if ts is None else ts
    return datetime.fromtimestamp(timestamp, timezone.utc).strftime("%Y-%m-%d")


def utc_cutoff_iso(days: int) -> str:
    cutoff = datetime.now(timezone.utc) - timedelta(days=max(0, days - 1))
    return cutoff.replace(hour=0, minute=0, second=0, microsecond=0).isoformat()


def clamp_text(value: Any, limit: int) -> str:
    text = str(value or "").strip()
    return text[:limit]


def json_response(handler: BaseHTTPRequestHandler, status: int, payload: Dict[str, Any]) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.end_headers()
    if handler.command != "HEAD":
        handler.wfile.write(body)


class MetricsStore:
    def __init__(self, db_path: Path, salt: str) -> None:
        self.db_path = db_path
        self.salt = salt
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.init_schema()

    def connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(str(self.db_path), timeout=10)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON")
        conn.execute("PRAGMA busy_timeout = 10000")
        return conn

    def init_schema(self) -> None:
        with self.connect() as conn:
            conn.execute("PRAGMA journal_mode = WAL")
            conn.executescript(
                """
                CREATE TABLE IF NOT EXISTS events (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  event_type TEXT NOT NULL,
                  metric_key TEXT NOT NULL,
                  label TEXT NOT NULL,
                  page TEXT NOT NULL,
                  target TEXT NOT NULL,
                  session_id TEXT NOT NULL,
                  ip_hash TEXT NOT NULL,
                  visitor_hash TEXT NOT NULL DEFAULT '',
                  user_agent TEXT NOT NULL,
                  accept_language TEXT NOT NULL DEFAULT '',
                  referrer TEXT NOT NULL,
                  meta_json TEXT NOT NULL,
                  created_at TEXT NOT NULL
                );

                CREATE TABLE IF NOT EXISTS counters (
                  event_type TEXT NOT NULL,
                  metric_key TEXT NOT NULL,
                  label TEXT NOT NULL,
                  total INTEGER NOT NULL DEFAULT 0,
                  updated_at TEXT NOT NULL,
                  PRIMARY KEY (event_type, metric_key)
                );

                CREATE TABLE IF NOT EXISTS daily_counts (
                  event_date TEXT NOT NULL,
                  event_type TEXT NOT NULL,
                  metric_key TEXT NOT NULL,
                  label TEXT NOT NULL,
                  total INTEGER NOT NULL DEFAULT 0,
                  updated_at TEXT NOT NULL,
                  PRIMARY KEY (event_date, event_type, metric_key)
                );

                CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at);
                CREATE INDEX IF NOT EXISTS idx_events_type_key ON events(event_type, metric_key);
                """
            )
            self.migrate_schema(conn)

    def migrate_schema(self, conn: sqlite3.Connection) -> None:
        columns = {row["name"] for row in conn.execute("PRAGMA table_info(events)").fetchall()}
        if "visitor_hash" not in columns:
            conn.execute("ALTER TABLE events ADD COLUMN visitor_hash TEXT NOT NULL DEFAULT ''")
        if "accept_language" not in columns:
            conn.execute("ALTER TABLE events ADD COLUMN accept_language TEXT NOT NULL DEFAULT ''")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_events_visitor_created_at ON events(visitor_hash, created_at)")

    def client_ip_from_headers(self, headers: Any, client_ip: str) -> str:
        forwarded_for = clamp_text(headers.get("X-Forwarded-For", ""), 240)
        if forwarded_for:
            first = forwarded_for.split(",")[0].strip()
            if first:
                return first
        real_ip = clamp_text(headers.get("X-Real-IP", ""), 120)
        return real_ip or client_ip

    def anonymize_ip(self, ip: str) -> str:
        material = f"{self.salt}:{ip}".encode("utf-8", errors="ignore")
        return hashlib.sha256(material).hexdigest()[:24]

    def anonymize_visitor(self, ip: str, user_agent: str, accept_language: str) -> str:
        material = f"{self.salt}:{ip}:{user_agent[:180]}:{accept_language[:80]}".encode("utf-8", errors="ignore")
        return hashlib.sha256(material).hexdigest()[:24]

    def track(self, payload: Dict[str, Any], headers: Any, client_ip: str) -> Dict[str, Any]:
        event_type = clamp_text(payload.get("event_type"), 60)
        if event_type not in EVENT_TYPES:
            raise ValueError("unsupported event_type")

        metric_key = clamp_text(payload.get("key"), MAX_KEY_LENGTH)
        if not metric_key:
            raise ValueError("key is required")

        label = clamp_text(payload.get("label") or metric_key, MAX_LABEL_LENGTH)
        page = clamp_text(payload.get("page"), 120)
        target = clamp_text(payload.get("target"), 240)
        session_id = clamp_text(payload.get("session_id"), 80)
        meta_json = json.dumps(payload.get("meta") or {}, ensure_ascii=False, sort_keys=True)[:MAX_META_LENGTH]
        created_at = utc_now_iso()
        today = utc_day()
        user_agent = clamp_text(headers.get("User-Agent", ""), 240)
        accept_language = clamp_text(headers.get("Accept-Language", ""), 120)
        referrer = clamp_text(headers.get("Referer", ""), 240)
        client_identity_ip = self.client_ip_from_headers(headers, client_ip)
        ip_hash = self.anonymize_ip(client_identity_ip)
        visitor_hash = self.anonymize_visitor(client_identity_ip, user_agent, accept_language)

        with self.connect() as conn:
            conn.execute("BEGIN IMMEDIATE")
            conn.execute(
                """
                INSERT INTO events (
                  event_type, metric_key, label, page, target, session_id,
                  ip_hash, visitor_hash, user_agent, accept_language, referrer, meta_json, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    event_type,
                    metric_key,
                    label,
                    page,
                    target,
                    session_id,
                    ip_hash,
                    visitor_hash,
                    user_agent,
                    accept_language,
                    referrer,
                    meta_json,
                    created_at,
                ),
            )
            conn.execute(
                """
                INSERT INTO counters(event_type, metric_key, label, total, updated_at)
                VALUES (?, ?, ?, 1, ?)
                ON CONFLICT(event_type, metric_key)
                DO UPDATE SET total = total + 1, label = excluded.label, updated_at = excluded.updated_at
                """,
                (event_type, metric_key, label, created_at),
            )
            conn.execute(
                """
                INSERT INTO daily_counts(event_date, event_type, metric_key, label, total, updated_at)
                VALUES (?, ?, ?, ?, 1, ?)
                ON CONFLICT(event_date, event_type, metric_key)
                DO UPDATE SET total = total + 1, label = excluded.label, updated_at = excluded.updated_at
                """,
                (today, event_type, metric_key, label, created_at),
            )
            conn.commit()

        return {"ok": True, "event_type": event_type, "key": metric_key}

    def stats(self, items: List[str]) -> Dict[str, Any]:
        pairs = []
        for item in items:
            if "::" not in item:
                continue
            event_type, metric_key = item.split("::", 1)
            if event_type in EVENT_TYPES and metric_key:
                pairs.append((event_type, metric_key[:MAX_KEY_LENGTH]))

        if not pairs:
            return {"counts": {}, "items": []}

        counts = {}
        conditions = " OR ".join(["(event_type = ? AND metric_key = ?)"] * len(pairs))
        params = [value for pair in pairs for value in pair]
        with self.connect() as conn:
            rows = conn.execute(
                """
                SELECT event_type, metric_key, total
                FROM counters
                WHERE {conditions}
                """.format(conditions=conditions),
                params,
            ).fetchall()

        for row in rows:
            counts[f"{row['event_type']}::{row['metric_key']}"] = int(row["total"])
        for event_type, metric_key in pairs:
            counts.setdefault(f"{event_type}::{metric_key}", 0)
        return {"counts": counts, "items": [f"{event_type}::{metric_key}" for event_type, metric_key in pairs]}

    def trend(self, conn: sqlite3.Connection, days: int, grain: str) -> List[Dict[str, Any]]:
        bucket_expr = "substr(created_at, 1, 13) || ':00'" if grain == "hour" else "substr(created_at, 1, 10)"
        cutoff = utc_cutoff_iso(days)
        return [
            dict(row)
            for row in conn.execute(
                """
                SELECT {bucket_expr} AS bucket,
                       COUNT(*) AS total,
                       COUNT(DISTINCT {visitor_expr}) AS unique_visitors
                FROM events
                WHERE created_at >= ?
                GROUP BY bucket
                ORDER BY bucket ASC
                """.format(bucket_expr=bucket_expr, visitor_expr=VISITOR_EXPR),
                (cutoff,),
            ).fetchall()
        ]

    def visitor_totals(self, conn: sqlite3.Connection, days: int) -> Dict[str, int]:
        cutoff = utc_cutoff_iso(days)
        row = conn.execute(
            """
            SELECT COUNT(DISTINCT {visitor_expr}) AS unique_visitors,
                   COUNT(DISTINCT session_id) AS sessions
            FROM events
            WHERE created_at >= ?
            """.format(visitor_expr=VISITOR_EXPR),
            (cutoff,),
        ).fetchone()
        return {
            "unique_visitors": int(row["unique_visitors"] or 0),
            "sessions": int(row["sessions"] or 0),
        }

    def summary(self, days: int = 14, grain: str = "day") -> Dict[str, Any]:
        days = max(1, min(days, 90))
        grain = grain if grain in {"day", "hour"} else "day"
        with self.connect() as conn:
            totals = conn.execute(
                """
                SELECT event_type, SUM(total) AS total
                FROM counters
                GROUP BY event_type
                ORDER BY total DESC
                """
            ).fetchall()
            top_items = conn.execute(
                """
                SELECT event_type, metric_key, label, total
                FROM counters
                ORDER BY total DESC, updated_at DESC
                LIMIT 40
                """
            ).fetchall()
            visitors = self.visitor_totals(conn, days)
            trend = self.trend(conn, days, grain)
            daily = conn.execute(
                """
                SELECT event_date, event_type, SUM(total) AS total
                FROM daily_counts
                WHERE event_date >= date('now', ?)
                GROUP BY event_date, event_type
                ORDER BY event_date ASC, event_type ASC
                """,
                (f"-{days - 1} days",),
            ).fetchall()
            recent = conn.execute(
                """
                SELECT event_type, metric_key, label, page, target, created_at
                FROM events
                ORDER BY id DESC
                LIMIT 30
                """
            ).fetchall()

        return {
            "generated_at": utc_now_iso(),
            "days": days,
            "grain": grain,
            "totals": [dict(row) for row in totals],
            "top_items": [dict(row) for row in top_items],
            "visitors": visitors,
            "trend": trend,
            "daily": [dict(row) for row in daily],
            "recent": [dict(row) for row in recent],
        }


class MetricsHandler(BaseHTTPRequestHandler):
    server_version = "KangarooMetrics/1.0"

    @property
    def app(self) -> "MetricsHTTPServer":
        return self.server  # type: ignore[return-value]

    def do_OPTIONS(self) -> None:
        json_response(self, HTTPStatus.OK, {"ok": True})

    def do_POST(self) -> None:
        endpoint = self.api_endpoint()
        if endpoint not in {"track", "stats"}:
            json_response(self, HTTPStatus.NOT_FOUND, {"error": "not found"})
            return
        try:
            length = min(int(self.headers.get("Content-Length", "0")), MAX_BODY_BYTES)
            payload = json.loads(self.rfile.read(length) or b"{}")
            if endpoint == "stats":
                items = payload.get("items") or []
                if not isinstance(items, list):
                    raise ValueError("items must be a list")
                result = self.app.store.stats([str(item) for item in items])
            else:
                result = self.app.store.track(payload, self.headers, self.client_address[0])
            json_response(self, HTTPStatus.OK, result)
        except (json.JSONDecodeError, ValueError) as error:
            json_response(self, HTTPStatus.BAD_REQUEST, {"error": str(error)})
        except sqlite3.Error as error:
            json_response(self, HTTPStatus.INTERNAL_SERVER_ERROR, {"error": f"database error: {error}"})

    def do_GET(self) -> None:
        endpoint = self.api_endpoint()
        if endpoint == "stats":
            query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            json_response(self, HTTPStatus.OK, self.app.store.stats(query.get("item", [])))
            return
        if endpoint == "summary":
            query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            try:
                days = int((query.get("days") or ["14"])[0])
            except ValueError:
                days = 14
            grain = (query.get("grain") or ["day"])[0]
            json_response(self, HTTPStatus.OK, self.app.store.summary(days, grain))
            return
        if endpoint:
            json_response(self, HTTPStatus.NOT_FOUND, {"error": "not found"})
            return
        self.serve_static(head=False)

    def do_HEAD(self) -> None:
        endpoint = self.api_endpoint()
        if endpoint:
            json_response(self, HTTPStatus.METHOD_NOT_ALLOWED, {"error": "method not allowed"})
            return
        self.serve_static(head=True)

    def api_endpoint(self) -> str:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        mount = self.app.mount.rstrip("/")
        prefixes = ["/api/"]
        if mount:
            prefixes.insert(0, f"{mount}/api/")
        for prefix in prefixes:
            if path.startswith(prefix):
                return path[len(prefix):].strip("/")
        return ""

    def serve_static(self, head: bool) -> None:
        parsed = urllib.parse.urlparse(self.path)
        mount = self.app.mount.rstrip("/")
        if mount and parsed.path == mount:
            self.send_response(HTTPStatus.MOVED_PERMANENTLY)
            self.send_header("Location", f"{mount}/")
            self.end_headers()
            return

        target = self.resolve_static_path()
        if not target or not target.exists() or not target.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        body = target.read_bytes()
        mime = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        if not head:
            self.wfile.write(body)

    def resolve_static_path(self) -> Optional[Path]:
        parsed = urllib.parse.urlparse(self.path)
        raw_path = urllib.parse.unquote(parsed.path)
        mount = self.app.mount.rstrip("/")

        if mount and raw_path.startswith(f"{mount}/"):
            rel = raw_path[len(mount) + 1 :]
            return self.resolve_mounted_path(rel)

        rel = raw_path.lstrip("/") or "site/index.html"
        return self.safe_join(rel)

    def resolve_mounted_path(self, rel: str) -> Optional[Path]:
        if not rel:
            return self.safe_join("site/index.html")

        if rel in SITE_ROOT_FILES or rel.startswith("assets/"):
            return self.safe_join(f"site/{rel}")

        root_candidate = self.safe_join(rel)
        if root_candidate and root_candidate.exists():
            return root_candidate
        return self.safe_join(f"site/{rel}")

    def safe_join(self, rel: str) -> Optional[Path]:
        root = self.app.static_root.resolve()
        target = (root / rel).resolve()
        try:
            target.relative_to(root)
        except ValueError:
            return None
        if target.is_dir():
            target = target / "index.html"
        return target

    def log_message(self, fmt: str, *args: Any) -> None:
        if not self.app.quiet:
            super().log_message(fmt, *args)


class MetricsHTTPServer(ThreadingHTTPServer):
    def __init__(
        self,
        server_address: Tuple[str, int],
        handler_class: Type[MetricsHandler],
        store: MetricsStore,
        static_root: Path,
        mount: str,
        quiet: bool,
    ) -> None:
        super().__init__(server_address, handler_class)
        self.store = store
        self.static_root = static_root
        self.mount = mount.rstrip("/") if mount != "/" else ""
        self.quiet = quiet


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default=os.environ.get("KANGAROO_METRICS_HOST", "127.0.0.1"))
    parser.add_argument("--port", type=int, default=int(os.environ.get("KANGAROO_METRICS_PORT", "18080")))
    parser.add_argument("--db", default=os.environ.get("KANGAROO_DB_PATH", "data/metrics.sqlite3"))
    parser.add_argument("--static-root", default=os.environ.get("KANGAROO_STATIC_ROOT", "."))
    parser.add_argument("--mount", default=os.environ.get("KANGAROO_MOUNT", "/kangaroo-review"))
    parser.add_argument("--salt", default=os.environ.get("KANGAROO_METRICS_SALT", "kangaroo-review-local"))
    parser.add_argument("--quiet", action="store_true", default=os.environ.get("KANGAROO_QUIET", "") == "1")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    store = MetricsStore(Path(args.db), args.salt)
    static_root = Path(args.static_root)
    httpd = MetricsHTTPServer(
        (args.host, args.port),
        MetricsHandler,
        store=store,
        static_root=static_root,
        mount=args.mount,
        quiet=args.quiet,
    )
    print(
        f"Serving kangaroo-review metrics on http://{args.host}:{args.port}"
        f" mount={httpd.mount or '/'} db={Path(args.db)} static_root={static_root}",
        flush=True,
    )
    httpd.serve_forever()


if __name__ == "__main__":
    main()
