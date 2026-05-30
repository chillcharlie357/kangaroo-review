# Review Site Ground Truth Refactor

## Task Statement

Continue the Ralph process after an interrupted session. Refactor the Kangaroo review website so the complete review-class recording, cleaned transcript, complete review minutes, and corresponding review slides become the highest ground truth. Add the review-class mindmap into the site with checklist and metrics support. Replace untrusted diagrams with slide/OCR-grounded redraws and reclassify sources and past-paper answers by the user-specified priority hierarchy.

## Desired Outcome

- Site content prioritizes 2026 graduate Software Architecture review-class scope.
- P0/P1/P2/P3 priorities reflect complete recording + review slides first.
- Old Feishu notes remain in source library but are archived, not evidence.
- Past-paper answers and evidence paths no longer rely on Feishu smart notes.
- New mindmap page/section supports checklist and click metrics.
- Untrusted diagrams are removed or replaced with grounded redraws.
- New diagrams are visually verified via rendered images before completion.

## Known Facts And Evidence

- Complete review package was committed in `d954b2d Add complete review class outline`.
- Trusted existing site diagrams: `add-roadmap.svg`, `architecture-design-process.svg`.
- Trusted new review diagrams already copied into `site/assets/diagrams`: 4+1 views, architecture evolution, architecture units, microservice decomposition.
- Subagent audits found current site overuses old Feishu evidence, old diagrams, and older question priority.
- User allows modifying checklist/metrics and adding backend event types for mindmap interactions.

## Constraints

- Do not add `/Users/bytedance/Codes/Self/kangaroo-2` to the source library.
- Avoid hallucinated answer frameworks; mark old-paper wording as old-paper-only when not current review ground truth.
- Keep public repo source-file restrictions in mind, but deployed source library may mirror local raw/data/slides.
- Use existing localStorage checklist semantics and SQLite metrics service where possible.

## Unknowns / Open Questions

- Whether to deploy after this refactor is not freshly confirmed in the latest user message.
- Diagram visuals must be checked after rendering; visual issues should be fixed before final.

## Likely Touchpoints

- `site/content.js`
- `site/app.js`
- `site/index.html`
- `site/styles.css`
- `site/data/questions.json`
- `site/data/questions.js`
- `site/data/sources.json`
- `site/data/sources.js`
- `server/metrics_server.py`
- `site/assets/diagrams/*.svg`
- `tools/ground_question_answers.mjs`
- `tools/integrate_2025_materials.mjs`
- `README.md`
