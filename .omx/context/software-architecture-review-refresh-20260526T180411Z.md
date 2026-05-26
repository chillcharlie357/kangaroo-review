# Software Architecture Review Refresh - 2026-05-26T18:04:11Z

## Task statement

Refresh the existing Software Architecture course review site after the user found the first version too condensed and visually cluttered. Validate whether the current review material omits important content, fill gaps from the slide/OCR/Feishu/raw corpus and a newly provided senior-student blog source, and refactor the frontend into a clearer, page/tab-based study tool.

## Desired outcome

- A desktop/mobile friendly static frontend for reviewing Software Architecture.
- Clear separation between overview, study plan, knowledge base, past papers, glossary, whiteboards, and source library.
- More complete coverage of exam-relevant topics, with priority labels for must-know, common, and lower-yield content.
- Past-paper questions and answers available in Chinese as well as English, because exam paper text is English but Chinese answers are allowed.
- Source library entries that can be clicked to inspect extracted source previews and trace where claims came from.
- Feishu whiteboards that are readable through zoom/modal viewing, plus redrawn textual summaries where possible.
- Senior-student blog material integrated after excluding undergraduate design-pattern-only content unrelated to this exam.

## Known facts/evidence

- Existing site lives under `site/` and is a static HTML/CSS/JS app.
- Existing data includes OCR/extracted source artifacts under ignored local folders such as `data/ocr/`, `data/extracted/`, and `data/feishu/`.
- Current app has 9 topic cards, 33 past-paper question clusters, 42 glossary entries, and 30 source rows; the user observed it may be too sparse and too card-heavy.
- Authoritative baseline remains the review-session content and original slides/PDF/OCR, with raw predecessor notes used only as auxiliary evidence.
- New external source category: `https://eaglebear2002.github.io/categories/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2%E7%A0%94%E7%A9%B6%E7%94%9F%E8%AF%BE%E7%A8%8B/2025Spring-%E8%BD%AF%E4%BB%B6%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/`.

## Constraints

- Keep raw course PDFs and student materials out of git if already ignored, but persist derived/intermediate data where useful and safe.
- Do not publish private course/raw material to GitHub without explicit confirmation; previous public repo upload was blocked by invalid auth and disclosure risk.
- Use the existing project style where practical, but refactor the information architecture if needed.
- Use Chinese-first study flow with English retained for exam recognition.
- Verify before claiming completion, including code checks and browser/visual checks on desktop and mobile.

## Unknowns/open questions

- Which exact topics from the senior-student blog are new versus overlapping with current extracted materials.
- Whether the three Feishu whiteboards can be represented as readable images from current local artifacts, or whether textual redraws are the more reliable delivery.
- Whether all current source previews have enough extracted/OCR text to make a useful click-through source library.

## Likely codebase touchpoints

- `site/index.html`
- `site/styles.css`
- `site/app.js`
- `site/content.js`
- `site/data/questions.json`
- `site/data/questions.js`
- `site/data/sources.json`
- `site/data/sources.js`
- new or regenerated source preview data under `site/data/`
- supporting research artifacts under `.omx/research/`
