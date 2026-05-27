#!/usr/bin/env python3
import tempfile
import sqlite3
import unittest
from pathlib import Path

from server.metrics_server import MetricsStore


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


if __name__ == "__main__":
    unittest.main()
