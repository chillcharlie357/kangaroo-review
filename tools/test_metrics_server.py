#!/usr/bin/env python3
import tempfile
import unittest
from pathlib import Path

from server.metrics_server import MetricsStore


class MetricsStoreTest(unittest.TestCase):
    def test_track_stats_and_summary(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            headers = {"User-Agent": "unit-test", "Referer": "http://localhost/site/"}

            def track(event_type, key, label, page, target, session_id):
                store.track({
                    "event_type": event_type,
                    "key": key,
                    "label": label,
                    "page": page,
                    "target": target,
                    "session_id": session_id,
                }, headers, "127.0.0.1")

            track("page_view", "page:overview", "Overview", "overview", "#overview", "s1")
            track("page_view", "page:overview", "Overview", "overview", "#overview", "s2")
            track("source_open", "source:slides-lecture-1", "Lecture 1", "sources", "slides/Lecture 1.pdf", "s1")

            stats = store.stats(["page_view::page:overview", "source_open::source:slides-lecture-1"])
            self.assertEqual(stats["counts"]["page_view::page:overview"], 2)
            self.assertEqual(stats["counts"]["source_open::source:slides-lecture-1"], 1)

            summary = store.summary(days=7)
            totals = {row["event_type"]: row["total"] for row in summary["totals"]}
            self.assertEqual(totals["page_view"], 2)
            self.assertEqual(totals["source_open"], 1)
            self.assertEqual(summary["recent"][0]["event_type"], "source_open")

    def test_rejects_unknown_event_type(self):
        with tempfile.TemporaryDirectory() as tmp:
            store = MetricsStore(Path(tmp) / "metrics.sqlite3", "unit-test-salt")
            with self.assertRaises(ValueError):
                store.track({
                    "event_type": "not_allowed",
                    "key": "x",
                    "label": "X",
                }, {}, "127.0.0.1")


if __name__ == "__main__":
    unittest.main()
