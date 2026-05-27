#!/usr/bin/env python3
import io
import json
import tempfile
import sqlite3
import unittest
from datetime import datetime, timedelta, timezone
from http import HTTPStatus
from pathlib import Path

from server.metrics_server import (
    CHINA_TZ,
    COMMENT_VISITOR_RATE_LIMIT,
    MAX_BODY_BYTES,
    MetricsHandler,
    MetricsStore,
    RateLimitError,
)


class FakeSocket:
    def __init__(self, request: bytes, fail_on_body_read: bool = False):
        self._request = GuardedRequestStream(request, fail_on_body_read)
        self._response = io.BytesIO()

    def makefile(self, mode, buffering=None):
        if "r" in mode:
            return self._request
        return self._response

    def sendall(self, data):
        self._response.write(data)

    def close(self):
        pass

    @property
    def response(self) -> bytes:
        return self._response.getvalue()


class GuardedRequestStream(io.BytesIO):
    def __init__(self, request: bytes, fail_on_body_read: bool):
        super().__init__(request)
        self.fail_on_body_read = fail_on_body_read

    def read(self, size=-1):
        if self.fail_on_body_read:
            raise AssertionError("request body should not be read")
        return super().read(size)


class FakeServer:
    def __init__(self, store, allowed_origins=None):
        self.store = store
        self.mount = ""
        self.static_root = Path(".")
        self.allowed_origins = set(allowed_origins or [])
        self.quiet = True


def run_handler(store, method, path, body=b"", headers=None, allowed_origins=None, fail_on_body_read=False):
    headers = dict(headers or {})
    headers.setdefault("Host", "localhost")
    headers.setdefault("User-Agent", "handler-test")
    body_bytes = body if isinstance(body, bytes) else body.encode("utf-8")
    if "Content-Length" not in headers:
        headers["Content-Length"] = str(len(body_bytes))
    raw_headers = "".join(f"{key}: {value}\r\n" for key, value in headers.items())
    request = f"{method} {path} HTTP/1.1\r\n{raw_headers}\r\n".encode("utf-8") + body_bytes
    fake_socket = FakeSocket(request, fail_on_body_read=fail_on_body_read)
    MetricsHandler(fake_socket, ("127.0.0.1", 12345), FakeServer(store, allowed_origins))
    raw = fake_socket.response
    head, _, response_body = raw.partition(b"\r\n\r\n")
    status = int(head.splitlines()[0].split()[1])
    response_headers = {}
    for line in head.splitlines()[1:]:
        key, _, value = line.decode("iso-8859-1").partition(":")
        response_headers[key.lower()] = value.strip()
    payload = json.loads(response_body.decode("utf-8") or "{}")
    return status, response_headers, payload


class MetricsStoreTest(unittest.TestCase):
    def test_track_stats_and_summary(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            headers = {
                "User-Agent": "unit-test",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Referer": "http://localhost/site/",
                "X-Forwarded-For": "203.0.113.10, 127.0.0.1",
            }
            other_headers = {
                "User-Agent": "unit-test-mobile",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Referer": "http://localhost/site/",
                "X-Real-IP": "203.0.113.11",
            }

            def track(event_type, key, label, page, target, session_id, request_headers=None, client_ip="127.0.0.1"):
                store.track({
                    "event_type": event_type,
                    "key": key,
                    "label": label,
                    "page": page,
                    "target": target,
                    "session_id": session_id,
                }, request_headers or headers, client_ip)

            track("page_view", "page:overview", "Overview", "overview", "#overview", "s1")
            track("page_view", "page:overview", "Overview", "overview", "#overview", "s2")
            track("source_open", "source:slides-lecture-1", "Lecture 1", "sources", "slides/Lecture 1.pdf", "s1")
            track("reward_open", "reward", "Reward modal", "overview", "#overview", "s3", other_headers)

            stats = store.stats(["page_view::page:overview", "source_open::source:slides-lecture-1"])
            self.assertEqual(stats["counts"]["page_view::page:overview"], 2)
            self.assertEqual(stats["counts"]["source_open::source:slides-lecture-1"], 1)

            summary = store.summary(days=7, grain="hour")
            totals = {row["event_type"]: row["total"] for row in summary["totals"]}
            self.assertEqual(totals["page_view"], 2)
            self.assertEqual(totals["source_open"], 1)
            self.assertEqual(totals["reward_open"], 1)
            self.assertEqual(summary["grain"], "hour")
            self.assertEqual(summary["visitors"]["unique_visitors"], 2)
            self.assertGreaterEqual(summary["visitors"]["sessions"], 3)
            self.assertTrue(summary["trend"])
            self.assertIn("unique_visitors", summary["trend"][0])
            self.assertEqual(summary["recent"][0]["event_type"], "reward_open")

    def test_summary_trend_uses_china_timezone(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            base_local = (datetime.now(CHINA_TZ) - timedelta(days=1)).replace(
                hour=0,
                minute=30,
                second=0,
                microsecond=0,
            )
            local_times = [base_local, base_local.replace(hour=1)]
            expected_day = base_local.strftime("%Y-%m-%d")

            with store.connect() as conn:
                for index, local_time in enumerate(local_times):
                    created_at = local_time.astimezone(timezone.utc).isoformat()
                    conn.execute(
                        """
                        INSERT INTO events (
                          event_type, metric_key, label, page, target, session_id,
                          ip_hash, visitor_hash, user_agent, accept_language, referrer, meta_json, created_at
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        """,
                        (
                            "page_view",
                            "page:overview",
                            "Overview",
                            "overview",
                            "#overview",
                            f"s{index}",
                            "ip-a",
                            "visitor-a",
                            "ua-a",
                            "zh-CN",
                            "",
                            "{}",
                            created_at,
                        ),
                    )

            day_summary = store.summary(days=7, grain="day")
            day_trend = {row["bucket"]: row for row in day_summary["trend"]}
            self.assertEqual(day_summary["timezone"], "Asia/Shanghai")
            self.assertEqual(day_trend[expected_day]["total"], 2)
            self.assertEqual(day_trend[expected_day]["unique_visitors"], 1)

            hour_summary = store.summary(days=7, grain="hour")
            hour_trend = {row["bucket"]: row["total"] for row in hour_summary["trend"]}
            self.assertEqual(hour_trend[f"{expected_day}T00:00"], 1)
            self.assertEqual(hour_trend[f"{expected_day}T01:00"], 1)

            daily = {(row["event_date"], row["event_type"]): row["total"] for row in day_summary["daily"]}
            self.assertEqual(daily[(expected_day, "page_view")], 2)

    def test_rejects_unknown_event_type(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            with self.assertRaises(ValueError):
                store.track({
                    "event_type": "not_allowed",
                    "key": "x",
                    "label": "X",
                }, {}, "127.0.0.1")

    def test_migrates_existing_events_table(self):
        with tempfile.TemporaryDirectory() as tmp:
            db_path = Path(tmp) / "metrics.sqlite3"
            conn = sqlite3.connect(str(db_path))
            conn.executescript("""
                CREATE TABLE events (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  event_type TEXT NOT NULL,
                  metric_key TEXT NOT NULL,
                  label TEXT NOT NULL,
                  page TEXT NOT NULL,
                  target TEXT NOT NULL,
                  session_id TEXT NOT NULL,
                  ip_hash TEXT NOT NULL,
                  user_agent TEXT NOT NULL,
                  referrer TEXT NOT NULL,
                  meta_json TEXT NOT NULL,
                  created_at TEXT NOT NULL
                );
            """)
            conn.close()

            store = MetricsStore(db_path, "unit-test-salt")
            with store.connect() as conn:
                columns = {row["name"] for row in conn.execute("PRAGMA table_info(events)").fetchall()}
            self.assertIn("visitor_hash", columns)
            self.assertIn("accept_language", columns)

            store.track({
                "event_type": "page_view",
                "key": "page:overview",
                "label": "Overview",
                "page": "overview",
                "target": "#overview",
                "session_id": "s1",
            }, {"User-Agent": "migration-test", "X-Real-IP": "203.0.113.30"}, "127.0.0.1")
            summary = store.summary(days=1)
            self.assertEqual(summary["visitors"]["unique_visitors"], 1)

    def test_comments_list_filter_and_rate_limit(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt", block_words=["blocked"])
            headers = {
                "User-Agent": "comment-test",
                "Accept-Language": "zh-CN",
                "X-Forwarded-For": "203.0.113.50",
            }

            result = store.add_comment({
                "page": "overview",
                "nickname": "同学 A",
                "body": "这页路线很有用",
                "client_id": "browser-a",
            }, headers, "127.0.0.1")
            self.assertTrue(result["ok"])
            self.assertEqual(result["comment"]["nickname"], "同学 A")

            comments = store.list_comments("overview")
            self.assertEqual(len(comments["comments"]), 1)
            self.assertEqual(comments["comments"][0]["body"], "这页路线很有用")

            with self.assertRaises(ValueError):
                store.add_comment({
                    "page": "overview",
                    "nickname": "spam",
                    "body": "contains b.l.o.c.k.e.d token",
                    "client_id": "browser-a",
                }, headers, "127.0.0.1")

            for index in range(4):
                store.add_comment({
                    "page": "overview",
                    "nickname": "同学 A",
                    "body": f"补充评论 {index}",
                    "client_id": "browser-a",
                }, headers, "127.0.0.1")
            with self.assertRaises(ValueError):
                store.add_comment({
                    "page": "overview",
                    "nickname": "同学 A",
                    "body": "第六条会触发限流",
                    "client_id": "browser-a",
                }, headers, "127.0.0.1")

    def test_comment_rate_limit_uses_visitor_not_only_client_id(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            headers = {
                "User-Agent": "same-browser",
                "Accept-Language": "zh-CN",
                "X-Forwarded-For": "203.0.113.60",
            }

            for index in range(COMMENT_VISITOR_RATE_LIMIT):
                store.add_comment({
                    "page": "overview",
                    "nickname": "同学 B",
                    "body": f"不同 client_id 评论 {index}",
                    "client_id": f"browser-{index}",
                }, headers, "127.0.0.1")

            with self.assertRaises(RateLimitError):
                store.add_comment({
                    "page": "overview",
                    "nickname": "同学 B",
                    "body": "换 client_id 也会被限流",
                    "client_id": "browser-new",
                }, headers, "127.0.0.1")

    def test_migrates_existing_comments_table(self):
        with tempfile.TemporaryDirectory() as tmp:
            db_path = Path(tmp) / "metrics.sqlite3"
            conn = sqlite3.connect(str(db_path))
            conn.executescript("""
                CREATE TABLE comments (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  page TEXT NOT NULL,
                  nickname TEXT NOT NULL,
                  body TEXT NOT NULL,
                  identity_hash TEXT NOT NULL,
                  ip_hash TEXT NOT NULL,
                  user_agent TEXT NOT NULL,
                  created_at TEXT NOT NULL
                );
            """)
            conn.close()

            store = MetricsStore(db_path, "unit-test-salt")
            with store.connect() as conn:
                columns = {row["name"] for row in conn.execute("PRAGMA table_info(comments)").fetchall()}
            self.assertIn("visitor_hash", columns)
            self.assertIn("accept_language", columns)
            self.assertIn("status", columns)

            result = store.add_comment({
                "page": "overview",
                "nickname": "迁移验证",
                "body": "旧表结构迁移后仍可写入",
                "client_id": "browser-migration",
            }, {"User-Agent": "migration-test"}, "127.0.0.1")
            self.assertTrue(result["ok"])
            self.assertEqual(len(store.list_comments("overview")["comments"]), 1)

    def test_comment_http_guards_and_status_codes(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            body = json.dumps({
                "page": "overview",
                "nickname": "同学 C",
                "body": "HTTP 层验证",
                "client_id": "browser-http",
            }, ensure_ascii=False)

            status, _, payload = run_handler(store, "POST", "/api/comments", body, {
                "Content-Type": "text/plain",
                "Origin": "http://localhost",
            }, fail_on_body_read=True)
            self.assertEqual(status, HTTPStatus.UNSUPPORTED_MEDIA_TYPE)
            self.assertIn("content type", payload["error"])

            status, _, payload = run_handler(store, "POST", "/api/comments", body, {
                "Content-Type": "application/json",
                "Origin": "https://evil.example",
            }, fail_on_body_read=True)
            self.assertEqual(status, HTTPStatus.FORBIDDEN)
            self.assertIn("origin", payload["error"])

            status, headers, payload = run_handler(store, "POST", "/api/comments", body, {
                "Content-Type": "application/json",
                "Origin": "http://localhost",
            })
            self.assertEqual(status, HTTPStatus.OK)
            self.assertEqual(headers.get("access-control-allow-origin"), "http://localhost")
            self.assertTrue(payload["ok"])

            status, _, payload = run_handler(store, "POST", "/api/comments", b"", {
                "Content-Type": "application/json",
                "Origin": "http://localhost",
                "Content-Length": "-1",
            })
            self.assertEqual(status, HTTPStatus.BAD_REQUEST)
            self.assertIn("content length", payload["error"])

            oversized = b"{" + b'"x":"' + (b"a" * MAX_BODY_BYTES) + b'"}'
            status, _, payload = run_handler(store, "POST", "/api/comments", oversized, {
                "Content-Type": "application/json",
                "Origin": "http://localhost",
            })
            self.assertEqual(status, HTTPStatus.REQUEST_ENTITY_TOO_LARGE)
            self.assertIn("too large", payload["error"])

    def test_comment_http_rate_limit_returns_429(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            for index in range(COMMENT_VISITOR_RATE_LIMIT):
                body = json.dumps({
                    "page": "overview",
                    "nickname": "同学 D",
                    "body": f"HTTP 限流验证 {index}",
                    "client_id": f"browser-http-{index}",
                }, ensure_ascii=False)
                status, _, payload = run_handler(store, "POST", "/api/comments", body, {
                    "Content-Type": "application/json",
                    "Origin": "http://localhost",
                    "User-Agent": "same-http-browser",
                    "X-Forwarded-For": "203.0.113.70",
                })
                self.assertEqual(status, HTTPStatus.OK)
                self.assertTrue(payload["ok"])

            body = json.dumps({
                "page": "overview",
                "nickname": "同学 D",
                "body": "第九条应返回 429",
                "client_id": "browser-http-new",
            }, ensure_ascii=False)
            status, _, payload = run_handler(store, "POST", "/api/comments", body, {
                "Content-Type": "application/json",
                "Origin": "http://localhost",
                "User-Agent": "same-http-browser",
                "X-Forwarded-For": "203.0.113.70",
            })
            self.assertEqual(status, HTTPStatus.TOO_MANY_REQUESTS)
            self.assertIn("rate limit", payload["error"])


if __name__ == "__main__":
    unittest.main()
