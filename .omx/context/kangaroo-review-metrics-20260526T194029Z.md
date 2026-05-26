# Kangaroo Review Metrics Iteration

## Task Statement

Add a lightweight monitoring system for the kangaroo-review website: site visits, page clicks/views, topic and glossary views, source previews, and source file opens/download-counts. Add a hidden chart dashboard reachable only by direct URL, and show per-page/per-item counters in the existing UI. The implementation should live in the current repository and be suitable for the public GitHub repo.

## Desired Outcome

- Existing review site keeps working as a static site when the metrics backend is absent.
- Deployed server can run a lightweight backend with SQLite for event tracking.
- Existing pages show visit/view/open counts near relevant items.
- Hidden visualization page is available by direct URL only and is not linked from the visible navigation.
- Server deployment can preserve raw/slides/data source-file serving while adding metrics API routes.

## Known Facts / Evidence

- Main app files: `site/index.html`, `site/app.js`, `site/content.js`, `site/styles.css`, `site/data/*.json`, `site/data/*.js`.
- Existing deployment URL: `https://docs.cpl.icu/kangaroo-review/`.
- Existing local browse command uses port `18080`.
- Source material dirs `raw/`, `slides/`, and private extraction files are ignored by Git and should stay out of the public repo.
- Current public repo is clean on `master` at `origin/master`.

## Constraints

- Keep the monitoring implementation lightweight and public-repo-safe.
- Do not expose a visible dashboard entry in existing navigation.
- Counts should degrade gracefully when opened via `file://` or static-only GitHub checkout.
- Avoid changing the private-source Git boundary; deployment can include source dirs, GitHub should not.
- Preserve mobile readability and existing i18n behavior.

## Unknowns / Open Questions

- Whether the server should run a Python service via systemd or a container. Prefer standard-library Python + SQLite unless deployment evidence contradicts availability.
- Whether Grafana is worth the operational overhead. A built-in hidden dashboard is the conservative first implementation; optional Grafana can consume the same SQLite-derived API later.

## Likely Touchpoints

- `site/app.js`: event tracking hooks, counter fetching/rendering, source-open tracking.
- `site/styles.css`: small metric badges and hidden dashboard styles.
- `site/metrics.html` and `site/metrics.js`: hidden visualization page.
- `server/metrics_server.py`: SQLite-backed API and optional local static serving.
- `README.md`: local run/deploy notes.
- `tools/smoke-site.mjs`: smoke checks for counters and dashboard.
- Deployment: nginx proxy for `/kangaroo-review/api/` to local metrics service, static source files remain served by nginx alias.
