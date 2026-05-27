# Kangaroo Review Checklist and Comments Iteration

## Task Statement

Use `$ralph` to implement three student-requested improvements for the Kangaroo Review website:

- Add browser-local review checklists for every review content item, with readable export/import for manual cross-device sync and cross-version compatibility.
- Add lightweight per-page comments backed by SQLite, with anonymous/default nicknames, browser/session identity, and simple content-risk mitigation via block words.
- Fix route-page priority labels such as `P0` wrapping into two lines on wide desktop.

## Desired Outcome

- Students can mark review items as done locally, export progress to a readable file, and import it on another device.
- Old exported checklist files can be imported after later site updates; existing item states are restored and newly added content remains unread by default.
- Each main page can show a small comments area; comments persist through the existing Python/SQLite service, reject obvious spam/blocked words, and do not require login.
- The P0/P1/P2 visual labels remain tidy on desktop and mobile.
- Existing metrics, source previews, reward modal, and study navigation keep working.

## Known Facts/Evidence

- The current frontend is static JavaScript in `site/app.js`, content in `site/content.js`, datasets in `site/data/*.json` plus JS fallbacks.
- Existing SQLite/Python server is `server/metrics_server.py`; it already handles `/api/track` and `/api/stats`.
- Existing tests include `tools/test_metrics_server.py`; smoke tests include `tools/smoke-site.mjs` and `tools/smoke-metrics.mjs`.
- The deployed service is mounted at `/kangaroo-review`, and `metricApiBase()` already switches API base by path.
- Previous local and online smoke tests confirmed 39 question clusters, 52 sources, 4 whiteboards, no horizontal overflow.

## Constraints

- Keep the solution lightweight; avoid accounts or heavy dependencies.
- Store checklist in browser storage, not the server.
- Comments should use SQLite and be safe enough for a public student-facing page: rate limits, length limits, HTML escaping, block words, and no arbitrary HTML.
- Do not break source/raw deployment permissions.
- Preserve current visual style and avoid turning the app into a cluttered card wall.

## Unknowns/Open Questions

- Exact definition of “every content item” needs a conservative implementation across topics, questions, glossary terms, whiteboards, and sources.
- Whether comments should be nested or editable; default to flat, append-only, per-page comments for this iteration.
- Which block words should be included; start with a small configurable local list aimed at spam/abuse and updateable later.

## Likely Touchpoints

- `site/app.js`: checklist state, import/export UI, per-item checkbox rendering, comments fetch/post UI.
- `site/styles.css`: checklist and comments styling, route priority badge no-wrap fix.
- `server/metrics_server.py`: comments endpoints, SQLite schema, moderation, rate limiting.
- `tools/test_metrics_server.py`: comments API tests.
- `tools/smoke-site.mjs`: checklist import/export and comments smoke coverage.
- `README.md`: document checklist sync and comments behavior.
- `.omx/state`: Ralph progress/completion state.
