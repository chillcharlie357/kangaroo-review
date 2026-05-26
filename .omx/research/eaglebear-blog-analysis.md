# EagleBear Blog Integration Notes

## 2025Spring category

Source category: <https://eaglebear2002.github.io/categories/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2%E7%A0%94%E7%A9%B6%E7%94%9F%E8%AF%BE%E7%A8%8B/2025Spring-%E8%BD%AF%E4%BB%B6%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/>

The category contains two current-course posts:

- <https://eaglebear2002.github.io/45083/> `软件体系结构-复习`
- <https://eaglebear2002.github.io/46472/> `软件体系结构-Domain-Driven Design`

Local fetched HTML copies are persisted under `data/blog/*.html` and ignored from git to avoid publishing a full mirror of someone else's blog.

## Included material

- `软件体系结构-复习`: exam format, current review outline, software architecture basics, quality attributes, ASRs, architecture patterns, ADD, microservices, AI-native background, enterprise architecture, DDD.
- `软件体系结构-Domain-Driven Design`: DDD value, applicability, development process, core patterns, bounded context, modules vs bounded contexts, DDD four-layer architecture, domain modeling vs data modeling, event storming, AI + DDD.
- Linked undergraduate architecture sources included as auxiliary references:
  - `软件架构设计-01-Introduction`
  - `软件架构设计-02-Quality Attributes`
  - `软件架构设计-03-Architectural Pattern`
  - `软件架构设计-04-Designing Architecture`
  - `软件架构设计-05-Document`
  - `软件架构设计-07-Microservice Architecture`
  - `软件系统设计-复习`, architecture sections only.

Note: the current-course review post links an older `/2039/` DDD page, but the fetched local copy is a 404 page. Treat that link as stale and use the current 2025Spring DDD post, <https://eaglebear2002.github.io/46472/>, as the DDD blog source.

## Excluded or downgraded material

- Undergraduate `软件详细设计` and detailed design-pattern sections are excluded from the main study plan because the current exam is `软件体系结构`, not the detailed-design half of `软件系统设计`.
- OO design-pattern-only questions such as adapter/composite/facade/proxy/strategy-class-diagram exercises are not promoted as current-course priorities. Strategy and MVC are retained only when they appear as architecture-pattern/design-example context.
- AI-native/AI-enabled architecture is kept as low-priority background because the review-session notes say post-exam AI lectures are not exam requirements; the current blog has useful context but not a primary exam burden.

## Additions triggered by blog audit

- Past-paper i18n: all 33 current clusters now need Chinese question/answer fields.
- Knowledge base should explicitly add or strengthen:
  - security, testability, usability, and quality-attribute tactics;
  - seven design-decision categories;
  - ATAM, risk, sensitivity point, trade-off point as historical high-frequency but current-year lower confidence;
  - SPL/MDA/SOA reuse and variability as auxiliary historical topic;
  - design-answer templates for three-tier, cache invalidation, DDD correction, and microservice migration.
- Source library should include external blog URLs and the local extracted/preview path, while marking them as auxiliary rather than teacher-authoritative.
