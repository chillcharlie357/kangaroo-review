#!/usr/bin/env python3
"""Lightweight SQLite metrics service for the Kangaroo review site."""

import argparse
import hashlib
import json
import mimetypes
import os
import re
import sqlite3
import time
import urllib.parse
import unicodedata
from datetime import datetime, timedelta, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from socketserver import ThreadingMixIn
from typing import Any, Dict, List, Optional, Tuple, Type


CHINA_TZ = timezone(timedelta(hours=8), "Asia/Shanghai")
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
MAX_COMMENT_LENGTH = 1000
MAX_NICKNAME_LENGTH = 32
MAX_PAGE_LENGTH = 80
COMMENT_PAGE_SIZE = 50
COMMENT_IDENTITY_RATE_LIMIT = 5
COMMENT_VISITOR_RATE_LIMIT = 8
COMMENT_IP_RATE_LIMIT = 20
COMMENT_RATE_WINDOW_SECONDS = 10 * 60
VISITOR_EXPR = "CASE WHEN visitor_hash != '' THEN visitor_hash ELSE ip_hash || ':' || user_agent END"
DEFAULT_BLOCK_WORDS = (
    "博彩",
    "赌博",
    "彩票",
    "裸聊",
    "色情",
    "成人",
    "代考",
    "代写",
    "办证",
    "发票",
    "贷款",
    "加微信",
    "casino",
    "porn",
    "viagra",
    "loan",
    "telegram",
    "whatsapp",
)
SITE_ROOT_FILES = {
    "index.html",
    "app.js",
    "content.js",
    "styles.css",
    "metrics.html",
    "metrics.js",
}


class RateLimitError(ValueError):
    pass


class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def china_now_iso() -> str:
    return datetime.now(CHINA_TZ).replace(microsecond=0).isoformat()


def china_day(ts: Optional[float] = None) -> str:
    timestamp = time.time() if ts is None else ts
    return datetime.fromtimestamp(timestamp, CHINA_TZ).strftime("%Y-%m-%d")


def china_cutoff_utc_iso(days: int) -> str:
    cutoff = datetime.now(CHINA_TZ) - timedelta(days=max(0, days - 1))
    local_midnight = cutoff.replace(hour=0, minute=0, second=0, microsecond=0)
    return local_midnight.astimezone(timezone.utc).isoformat()


def china_bucket_expr(grain: str) -> str:
    fmt = "%Y-%m-%dT%H:00" if grain == "hour" else "%Y-%m-%d"
    return f"strftime('{fmt}', created_at, '+8 hours')"


def clamp_text(value: Any, limit: int) -> str:
    text = str(value or "").strip()
    return text[:limit]


def moderation_text(value: str) -> str:
    normalized = unicodedata.normalize("NFKC", value or "").lower()
    return re.sub(r"[\W_]+", "", normalized, flags=re.UNICODE)


def origin_is_allowed(origin: str, host: str, allowed_origins: set[str]) -> bool:
    if not origin:
        return True
    parsed_origin = urllib.parse.urlparse(origin)
    same_origin = bool(
        host
        and parsed_origin.netloc.lower() == host.lower()
        and parsed_origin.scheme in {"http", "https"}
    )
    return same_origin or origin.rstrip("/") in allowed_origins


def json_response(handler: BaseHTTPRequestHandler, status: int, payload: Dict[str, Any]) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    origin = handler.headers.get("Origin", "")
    host = handler.headers.get("Host", "")
    allowed_origins = getattr(getattr(handler, "app", None), "allowed_origins", set())
    if origin and origin_is_allowed(origin, host, allowed_origins):
        handler.send_header("Access-Control-Allow-Origin", origin)
        handler.send_header("Vary", "Origin")
        handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.end_headers()
    if handler.command != "HEAD":
        handler.wfile.write(body)


class MetricsStore:
    def __init__(self, db_path: Path, salt: str, block_words: Optional[List[str]] = None) -> None:
        self.db_path = db_path
        self.salt = salt
        words = list(DEFAULT_BLOCK_WORDS) + list(block_words or [])
        self.block_words = sorted({moderation_text(word) for word in words if moderation_text(word)})
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

                CREATE TABLE IF NOT EXISTS comments (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  page TEXT NOT NULL,
                  nickname TEXT NOT NULL,
                  body TEXT NOT NULL,
                  identity_hash TEXT NOT NULL,
                  ip_hash TEXT NOT NULL,
                  visitor_hash TEXT NOT NULL,
                  user_agent TEXT NOT NULL,
                  accept_language TEXT NOT NULL DEFAULT '',
                  created_at TEXT NOT NULL,
                  status TEXT NOT NULL DEFAULT 'visible'
                );

                CREATE INDEX IF NOT EXISTS idx_comments_page_created_at ON comments(page, created_at);
                CREATE INDEX IF NOT EXISTS idx_comments_identity_created_at ON comments(identity_hash, created_at);
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

        comment_columns = {row["name"] for row in conn.execute("PRAGMA table_info(comments)").fetchall()}
        if comment_columns:
            if "visitor_hash" not in comment_columns:
                conn.execute("ALTER TABLE comments ADD COLUMN visitor_hash TEXT NOT NULL DEFAULT ''")
            if "accept_language" not in comment_columns:
                conn.execute("ALTER TABLE comments ADD COLUMN accept_language TEXT NOT NULL DEFAULT ''")
            if "status" not in comment_columns:
                conn.execute("ALTER TABLE comments ADD COLUMN status TEXT NOT NULL DEFAULT 'visible'")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_comments_page_created_at ON comments(page, created_at)")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_comments_page_status_id ON comments(page, status, id DESC)")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_comments_identity_created_at ON comments(identity_hash, created_at)")

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

    def anonymize_commenter(self, ip: str, user_agent: str, accept_language: str, client_id: str) -> str:
        material = f"{self.salt}:comment:{ip}:{user_agent[:180]}:{accept_language[:80]}:{client_id[:120]}".encode(
            "utf-8",
            errors="ignore",
        )
        return hashlib.sha256(material).hexdigest()[:24]

    def normalize_page(self, value: Any) -> str:
        page = clamp_text(value, MAX_PAGE_LENGTH).lower()
        if not page.replace("-", "").replace("_", "").isalnum():
            raise ValueError("invalid page")
        return page

    def validate_comment_text(self, body: str) -> None:
        compact = moderation_text(body)
        for word in self.block_words:
            if word and word in compact:
                raise ValueError("comment contains blocked words")

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
        today = china_day()
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

    def list_comments(self, page: str, limit: int = COMMENT_PAGE_SIZE) -> Dict[str, Any]:
        page_key = self.normalize_page(page)
        limit = max(1, min(limit, COMMENT_PAGE_SIZE))
        with self.connect() as conn:
            rows = conn.execute(
                """
                SELECT id, page, nickname, body, created_at
                FROM comments
                WHERE page = ? AND status = 'visible'
                ORDER BY id DESC
                LIMIT ?
                """,
                (page_key, limit),
            ).fetchall()
        comments = [dict(row) for row in reversed(rows)]
        return {"ok": True, "page": page_key, "comments": comments}

    def add_comment(self, payload: Dict[str, Any], headers: Any, client_ip: str) -> Dict[str, Any]:
        page = self.normalize_page(payload.get("page") or "")
        nickname = clamp_text(payload.get("nickname") or "匿名同学", MAX_NICKNAME_LENGTH) or "匿名同学"
        body = clamp_text(payload.get("body") or "", MAX_COMMENT_LENGTH)
        if len(body) < 2:
            raise ValueError("comment is too short")
        self.validate_comment_text(body)

        created_at = utc_now_iso()
        user_agent = clamp_text(headers.get("User-Agent", ""), 240)
        accept_language = clamp_text(headers.get("Accept-Language", ""), 120)
        client_identity_ip = self.client_ip_from_headers(headers, client_ip)
        client_id = clamp_text(payload.get("client_id"), 120)
        ip_hash = self.anonymize_ip(client_identity_ip)
        visitor_hash = self.anonymize_visitor(client_identity_ip, user_agent, accept_language)
        identity_hash = self.anonymize_commenter(client_identity_ip, user_agent, accept_language, client_id)
        cutoff = datetime.now(timezone.utc) - timedelta(seconds=COMMENT_RATE_WINDOW_SECONDS)
        cutoff_iso = cutoff.replace(microsecond=0).isoformat()

        with self.connect() as conn:
            conn.execute("BEGIN IMMEDIATE")
            recent_count = conn.execute(
                """
                SELECT COUNT(*) AS total
                FROM comments
                WHERE created_at >= ?
                  AND (
                    identity_hash = ?
                    OR visitor_hash = ?
                  )
                """,
                (cutoff_iso, identity_hash, visitor_hash),
            ).fetchone()["total"]
            if int(recent_count or 0) >= COMMENT_VISITOR_RATE_LIMIT:
                raise RateLimitError("comment rate limit exceeded")
            identity_count = conn.execute(
                """
                SELECT COUNT(*) AS total
                FROM comments
                WHERE identity_hash = ? AND created_at >= ?
                """,
                (identity_hash, cutoff_iso),
            ).fetchone()["total"]
            if int(identity_count or 0) >= COMMENT_IDENTITY_RATE_LIMIT:
                raise RateLimitError("comment rate limit exceeded")
            ip_count = conn.execute(
                """
                SELECT COUNT(*) AS total
                FROM comments
                WHERE ip_hash = ? AND created_at >= ?
                """,
                (ip_hash, cutoff_iso),
            ).fetchone()["total"]
            if int(ip_count or 0) >= COMMENT_IP_RATE_LIMIT:
                raise RateLimitError("comment rate limit exceeded")
            cursor = conn.execute(
                """
                INSERT INTO comments (
                  page, nickname, body, identity_hash, ip_hash, visitor_hash,
                  user_agent, accept_language, created_at, status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'visible')
                """,
                (page, nickname, body, identity_hash, ip_hash, visitor_hash, user_agent, accept_language, created_at),
            )
            conn.commit()
        return {
            "ok": True,
            "comment": {
                "id": int(cursor.lastrowid),
                "page": page,
                "nickname": nickname,
                "body": body,
                "created_at": created_at,
            },
        }

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
        cutoff = china_cutoff_utc_iso(days)
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
                """.format(bucket_expr=china_bucket_expr(grain), visitor_expr=VISITOR_EXPR),
                (cutoff,),
            ).fetchall()
        ]

    def daily_breakdown(self, conn: sqlite3.Connection, days: int) -> List[Dict[str, Any]]:
        cutoff = china_cutoff_utc_iso(days)
        return [
            dict(row)
            for row in conn.execute(
                """
                SELECT {bucket_expr} AS event_date,
                       event_type,
                       COUNT(*) AS total
                FROM events
                WHERE created_at >= ?
                GROUP BY event_date, event_type
                ORDER BY event_date ASC, event_type ASC
                """.format(bucket_expr=china_bucket_expr("day")),
                (cutoff,),
            ).fetchall()
        ]

    def visitor_totals(self, conn: sqlite3.Connection, days: int) -> Dict[str, int]:
        cutoff = china_cutoff_utc_iso(days)
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
            daily = self.daily_breakdown(conn, days)
            recent = conn.execute(
                """
                SELECT event_type, metric_key, label, page, target, created_at
                FROM events
                ORDER BY id DESC
                LIMIT 30
                """
            ).fetchall()

        return {
            "generated_at": china_now_iso(),
            "timezone": "Asia/Shanghai",
            "days": days,
            "grain": grain,
            "totals": [dict(row) for row in totals],
            "top_items": [dict(row) for row in top_items],
            "visitors": visitors,
            "trend": trend,
            "daily": daily,
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
        if endpoint not in {"track", "stats", "comments"}:
            json_response(self, HTTPStatus.NOT_FOUND, {"error": "not found"})
            return
        if not self.request_origin_allowed():
            json_response(self, HTTPStatus.FORBIDDEN, {"error": "origin not allowed"})
            return
        if not self.request_is_json():
            json_response(self, HTTPStatus.UNSUPPORTED_MEDIA_TYPE, {"error": "content type must be application/json"})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length < 0:
                json_response(self, HTTPStatus.BAD_REQUEST, {"error": "invalid content length"})
                return
            if length > MAX_BODY_BYTES:
                json_response(self, HTTPStatus.REQUEST_ENTITY_TOO_LARGE, {"error": "request body too large"})
                return
            payload = json.loads(self.rfile.read(length) or b"{}")
            if endpoint == "stats":
                items = payload.get("items") or []
                if not isinstance(items, list):
                    raise ValueError("items must be a list")
                result = self.app.store.stats([str(item) for item in items])
            elif endpoint == "comments":
                result = self.app.store.add_comment(payload, self.headers, self.client_address[0])
            else:
                result = self.app.store.track(payload, self.headers, self.client_address[0])
            json_response(self, HTTPStatus.OK, result)
        except RateLimitError as error:
            json_response(self, HTTPStatus.TOO_MANY_REQUESTS, {"error": str(error)})
        except (json.JSONDecodeError, ValueError) as error:
            json_response(self, HTTPStatus.BAD_REQUEST, {"error": str(error)})
        except sqlite3.Error as error:
            json_response(self, HTTPStatus.INTERNAL_SERVER_ERROR, {"error": f"database error: {error}"})

    def request_origin_allowed(self) -> bool:
        return origin_is_allowed(
            self.headers.get("Origin", ""),
            self.headers.get("Host", ""),
            self.app.allowed_origins,
        )

    def request_is_json(self) -> bool:
        content_type = self.headers.get("Content-Type", "").split(";", 1)[0].strip().lower()
        return content_type == "application/json"

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
        if endpoint == "comments":
            query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            page = (query.get("page") or ["overview"])[0]
            try:
                limit = int((query.get("limit") or [str(COMMENT_PAGE_SIZE)])[0])
            except ValueError:
                limit = COMMENT_PAGE_SIZE
            try:
                json_response(self, HTTPStatus.OK, self.app.store.list_comments(page, limit))
            except ValueError as error:
                json_response(self, HTTPStatus.BAD_REQUEST, {"error": str(error)})
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
        allowed_origins: List[str],
        quiet: bool,
    ) -> None:
        super().__init__(server_address, handler_class)
        self.store = store
        self.static_root = static_root
        self.mount = mount.rstrip("/") if mount != "/" else ""
        self.allowed_origins = {origin.strip().rstrip("/") for origin in allowed_origins if origin.strip()}
        self.quiet = quiet


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default=os.environ.get("KANGAROO_METRICS_HOST", "127.0.0.1"))
    parser.add_argument("--port", type=int, default=int(os.environ.get("KANGAROO_METRICS_PORT", "18080")))
    parser.add_argument("--db", default=os.environ.get("KANGAROO_DB_PATH", "data/metrics.sqlite3"))
    parser.add_argument("--static-root", default=os.environ.get("KANGAROO_STATIC_ROOT", "."))
    parser.add_argument("--mount", default=os.environ.get("KANGAROO_MOUNT", "/kangaroo-review"))
    parser.add_argument("--salt", default=os.environ.get("KANGAROO_METRICS_SALT", "kangaroo-review-local"))
    parser.add_argument("--comment-block-words", default=os.environ.get("KANGAROO_COMMENT_BLOCK_WORDS", ""))
    parser.add_argument("--allowed-origin", action="append", default=None)
    parser.add_argument("--quiet", action="store_true", default=os.environ.get("KANGAROO_QUIET", "") == "1")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    block_words = [word for word in args.comment_block_words.split(",") if word.strip()] if args.comment_block_words else None
    env_allowed_origins = [origin for origin in os.environ.get("KANGAROO_ALLOWED_ORIGINS", "").split(",") if origin.strip()]
    allowed_origins = list(args.allowed_origin or []) + env_allowed_origins
    store = MetricsStore(Path(args.db), args.salt, block_words=block_words)
    static_root = Path(args.static_root)
    httpd = MetricsHTTPServer(
        (args.host, args.port),
        MetricsHandler,
        store=store,
        static_root=static_root,
        mount=args.mount,
        allowed_origins=allowed_origins,
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
