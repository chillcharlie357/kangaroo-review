const state = {
  lang: "mix",
  page: "overview",
  priority: "all",
  query: "",
  topicGroup: "core",
  selectedTopicId: "",
  cluster: "all",
  glossary: "all",
  sourceGroup: "all",
  questions: [],
  sources: []
};

const content = window.reviewContent;
const pages = new Set(["overview", "plan", "knowledge", "papers", "glossary", "whiteboards", "sources"]);

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function localize(value, mode = state.lang) {
  if (!value || typeof value === "string") return value || "";
  if (mode === "zh") return value.zh || value.en || "";
  if (mode === "en") return value.en || value.zh || "";
  const zh = value.zh || "";
  const en = value.en || "";
  if (!zh) return en;
  if (!en || zh === en) return zh;
  return `${zh}\n${en}`;
}

function htmlText(value) {
  return localize(value)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<span>${escapeHtml(line)}</span>`)
    .join("");
}

function labelText(value) {
  return localize(value).replace(/\n/g, " / ");
}

function flattenValues(value) {
  if (value == null) return [];
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return [String(value)];
  if (Array.isArray(value)) return value.flatMap(flattenValues);
  if (typeof value === "object") return Object.values(value).flatMap(flattenValues);
  return [];
}

function includesQuery(...values) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return values.flatMap(flattenValues).join(" ").toLowerCase().includes(q);
}

async function loadJson(path, fallback) {
  if (window.location.protocol === "file:") return fallback;
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

function setPage(page) {
  state.page = pages.has(page) ? page : "overview";
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === state.page);
  });
}

function sourceLabel(source) {
  return source.title || source.path || source.url || "source";
}

function sourceGroupName(group) {
  return ({
    review_class_notes: state.lang === "en" ? "Review notes" : "复习课纪要",
    teacher_slides: state.lang === "en" ? "Teacher slides" : "教师课件",
    senior_blog_reference: state.lang === "en" ? "Senior blog" : "学长博客",
    raw_predecessor_notes: state.lang === "en" ? "Past notes" : "前人资料"
  })[group] || group || "Other";
}

function priorityName(priority) {
  return ({
    P0: state.lang === "en" ? "Must know" : "必考/必会",
    P1: state.lang === "en" ? "High frequency" : "高频",
    P2: state.lang === "en" ? "Support" : "补充"
  })[priority] || priority;
}

function currentTopics() {
  return content.topics
    .filter((topic) => state.priority === "all" || topic.priority === state.priority)
    .filter((topic) => state.topicGroup === "all" || topic.group === state.topicGroup)
    .filter((topic) => includesQuery(topic.id, topic.priority, topic.title, topic.takeaway, topic.answerFrame, topic.bullets, topic.sources, topic.sourceConfidence));
}

function renderOverview() {
  const stats = [
    { label: { zh: "知识点", en: "Topics" }, value: content.topics.length },
    { label: { zh: "真题簇", en: "Question clusters" }, value: state.questions.length },
    { label: { zh: "术语", en: "Glossary terms" }, value: content.glossary.length },
    { label: { zh: "资料源", en: "Sources" }, value: state.sources.length }
  ];
  const p0 = content.topics.filter((topic) => topic.priority === "P0");
  return `
    <section class="hero-panel">
      <div class="hero-copy">
        <p class="section-kicker">Review Dashboard</p>
        <h1>${htmlText(content.meta.title)}</h1>
        <p>${state.lang === "en"
          ? "Chinese-first review with English prompts kept close enough for exam recognition. Start from P0, then use past-paper clusters to practice answer shapes."
          : "中文优先复习，英文题干保留作考试识别。先啃 P0，再用真题簇练答题结构。"}</p>
      </div>
      <dl class="stats-strip">
        ${stats.map((item) => `
          <div>
            <dt>${htmlText(item.label)}</dt>
            <dd>${item.value}</dd>
          </div>
        `).join("")}
      </dl>
    </section>

    <section class="panel-grid two">
      <article class="panel">
        <div class="section-head">
          <p class="section-kicker">Exam Facts</p>
          <h2>${state.lang === "en" ? "Read this first" : "先确认考试信息"}</h2>
        </div>
        <ol class="fact-list">
          ${content.meta.exam.map((item) => `<li>${htmlText(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="panel">
        <div class="section-head">
          <p class="section-kicker">P0 Focus</p>
          <h2>${state.lang === "en" ? "High-value targets" : "最值得先背的东西"}</h2>
        </div>
        <div class="focus-list">
          ${p0.map((topic) => `
            <a href="#knowledge" class="focus-row" data-action="jump-topic" data-topic-id="${escapeHtml(topic.id)}">
              <span>${escapeHtml(topic.priority)}</span>
              <strong>${htmlText(topic.title)}</strong>
              <em>${htmlText(topic.examWeight || topic.takeaway)}</em>
            </a>
          `).join("")}
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Coverage Audit</p>
        <h2>${state.lang === "en" ? "What is covered, what is deliberately lower priority" : "覆盖校对与降权说明"}</h2>
      </div>
      <div class="coverage-table">
        ${content.coverage.map((row) => `
          <div class="coverage-row">
            <strong>${htmlText(row.area)}</strong>
            <span>${htmlText(row.status)}</span>
            <em>${escapeHtml(row.evidence)}</em>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="evidence-band">
      ${content.meta.evidence.map((item) => `<p>${htmlText(item)}</p>`).join("")}
    </section>
  `;
}

function renderPlan() {
  return `
    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Priority Path</p>
        <h1>${state.lang === "en" ? "Review Route" : "复习路线"}</h1>
      </div>
      <div class="route-board">
        ${content.studyPlan.map((step) => `
          <section class="route-step">
            <b>${htmlText(step.day)}</b>
            <h2>${htmlText(step.title)}</h2>
            <ul>
              ${step.items.map((item) => `<li>${htmlText(item)}</li>`).join("")}
            </ul>
          </section>
        `).join("")}
      </div>
    </section>

    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Priority Matrix</p>
        <h2>${state.lang === "en" ? "Importance by exam yield" : "按得分收益分层"}</h2>
      </div>
      <div class="priority-lanes">
        ${content.priorities
          .filter((group) => state.priority === "all" || group.level === state.priority)
          .map((group) => `
            <article class="priority-lane ${group.level.toLowerCase()}">
              <header>
                <span>${escapeHtml(group.level)}</span>
                <strong>${htmlText(group.title)}</strong>
                <em>${escapeHtml(group.weight)}</em>
              </header>
              <p>${htmlText(group.summary)}</p>
              <ul>
                ${group.items.map((item) => `<li><a href="#knowledge" data-action="jump-topic" data-topic-id="${escapeHtml(item.topicId)}">${htmlText(item)}</a></li>`).join("")}
              </ul>
            </article>
          `).join("")}
      </div>
    </section>
  `;
}

function renderKnowledge() {
  const groups = [{ id: "all", title: { zh: "全部", en: "All" }, note: { zh: "所有知识点", en: "All topics" } }, ...(content.topicGroups || [])];
  const topics = currentTopics();
  if (!topics.some((topic) => topic.id === state.selectedTopicId)) {
    state.selectedTopicId = topics[0]?.id || "";
  }
  const selected = topics.find((topic) => topic.id === state.selectedTopicId);
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Knowledge Base</p>
          <h1>${state.lang === "en" ? "Chapter Tabs, Not a Card Wall" : "按章节分页浏览知识点"}</h1>
        </div>
        <span class="count-pill">${topics.length} ${state.lang === "en" ? "topics" : "条"}</span>
      </div>
      <div class="tab-strip" role="tablist" aria-label="Topic groups">
        ${groups.map((group) => `
          <button class="tab ${state.topicGroup === group.id ? "active" : ""}" type="button" data-action="topic-group" data-topic-group="${escapeHtml(group.id)}">
            ${escapeHtml(labelText(group.title))}
          </button>
        `).join("")}
      </div>
      <div class="knowledge-layout">
        <nav class="topic-index" aria-label="Topics">
          ${topics.map((topic) => `
            <button class="${topic.id === state.selectedTopicId ? "active" : ""}" type="button" data-action="select-topic" data-topic-id="${escapeHtml(topic.id)}">
              <span>${escapeHtml(topic.priority)} · ${priorityName(topic.priority)}</span>
              <strong>${htmlText(topic.title)}</strong>
            </button>
          `).join("") || `<p class="empty">${state.lang === "en" ? "No topic matches current filters." : "当前筛选下没有知识点。"}</p>`}
        </nav>
        <article class="topic-detail">
          ${selected ? renderTopicDetail(selected) : ""}
        </article>
      </div>
    </section>
  `;
}

function renderTopicDetail(topic) {
  const related = state.questions.filter((question) => includesQuery(question.cluster, question.canonical_question, question.question_zh, question.likely_answer_pattern, question.answer_zh, question.recurring_terms) && topic.sources.join(" ").toLowerCase().includes(question.cluster.split("_")[0])).length;
  return `
    <header class="detail-head">
      <div>
        <p class="section-kicker">${escapeHtml(topic.id)}</p>
        <h2>${htmlText(topic.title)}</h2>
      </div>
      <div class="detail-badges">
        <span>${escapeHtml(topic.priority)}</span>
        <span>${escapeHtml(topic.examWeight || priorityName(topic.priority))}</span>
      </div>
    </header>
    <p class="takeaway">${htmlText(topic.takeaway)}</p>
    <section class="answer-box">
      <b>${state.lang === "en" ? "Answer frame" : "答题框架"}</b>
      <p>${htmlText(topic.answerFrame)}</p>
    </section>
    <section class="detail-columns">
      <div>
        <h3>${state.lang === "en" ? "Key points" : "关键点"}</h3>
        <ul class="dense-list">
          ${(topic.bullets || []).map((item) => `<li>${htmlText(item)}</li>`).join("")}
        </ul>
      </div>
      <aside>
        <h3>${state.lang === "en" ? "Evidence" : "证据链"}</h3>
        <p>${escapeHtml(topic.sourceConfidence || "")}</p>
        <div class="tag-stack">
          ${(topic.sources || []).map((source) => `<span>${escapeHtml(source)}</span>`).join("")}
        </div>
        <small>${related ? `${related} related question clusters` : ""}</small>
      </aside>
    </section>
  `;
}

function renderPapers() {
  const clusters = ["all", ...new Set(state.questions.map((q) => q.cluster).sort())];
  const questions = state.questions
    .filter((question) => state.cluster === "all" || question.cluster === state.cluster)
    .filter((question) => includesQuery(question.cluster, question.canonical_question, question.question_zh, question.likely_answer_pattern, question.answer_zh, question.recurring_terms, question.appearances));
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Past Papers</p>
          <h1>${state.lang === "en" ? "Question Clusters With Chinese Answers" : "往年真题：中文答案 + 英文对照"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Cluster" : "题簇"}</span>
          <select id="cluster-select">
            ${clusters.map((cluster) => `<option value="${escapeHtml(cluster)}" ${state.cluster === cluster ? "selected" : ""}>${escapeHtml(cluster)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="question-list">
        ${questions.map((question, index) => renderQuestion(question, index === 0)).join("") || `<p class="empty">${state.lang === "en" ? "No question matches current filters." : "当前筛选下没有真题。"}</p>`}
      </div>
    </section>
  `;
}

function renderQuestion(question, open) {
  const zhQuestion = question.question_zh || question.canonical_question;
  const zhAnswer = question.answer_zh || question.likely_answer_pattern;
  const title = state.lang === "en"
    ? question.canonical_question
    : state.lang === "zh"
      ? zhQuestion
      : `${zhQuestion}\n${question.canonical_question}`;
  const answer = state.lang === "en"
    ? question.likely_answer_pattern
    : state.lang === "zh"
      ? zhAnswer
      : `${zhAnswer}\n${question.likely_answer_pattern}`;
  return `
    <details class="question-item" ${open ? "open" : ""}>
      <summary>
        <span>${escapeHtml(question.cluster)} · ${(question.appearances || []).length} hits</span>
        <strong>${htmlText(title)}</strong>
      </summary>
      <div class="question-body">
        <section>
          <h3>${state.lang === "en" ? "Likely answer pattern" : "建议答题框架"}</h3>
          <p>${htmlText(answer)}</p>
        </section>
        <div class="question-meta">
          <div class="tag-stack">
            ${(question.recurring_terms || []).map((term) => `<span>${escapeHtml(term)}</span>`).join("")}
          </div>
          <small>${escapeHtml((question.appearances || []).join(" · "))}</small>
        </div>
      </div>
    </details>
  `;
}

function renderGlossary() {
  const categories = ["all", ...new Set(content.glossary.map((item) => item.category).sort())];
  const items = content.glossary
    .filter((item) => state.glossary === "all" || item.category === state.glossary)
    .filter((item) => includesQuery(item.category, item.zh, item.en, item.noteZh, item.noteEn));
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Glossary</p>
          <h1>${state.lang === "en" ? "Bilingual Terminology" : "中英文术语表"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Category" : "分类"}</span>
          <select id="glossary-select">
            ${categories.map((category) => `<option value="${escapeHtml(category)}" ${state.glossary === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="glossary-table">
        ${items.map((item) => `
          <div class="term-row">
            <span>${escapeHtml(item.category)}</span>
            <strong>${state.lang === "en" ? escapeHtml(item.en) : escapeHtml(item.zh)}</strong>
            <b>${state.lang === "en" ? escapeHtml(item.zh) : escapeHtml(item.en)}</b>
            <p>${state.lang === "en" ? escapeHtml(item.noteEn) : state.lang === "zh" ? escapeHtml(item.noteZh) : `${escapeHtml(item.noteZh)} / ${escapeHtml(item.noteEn)}`}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWhiteboards() {
  return `
    <section class="panel">
      <div class="section-head">
        <p class="section-kicker">Whiteboards</p>
        <h1>${state.lang === "en" ? "Readable Redraws + Zoomable Originals" : "画板重绘摘要 + 原图放大"}</h1>
      </div>
      <div class="whiteboard-list">
        ${content.whiteboards.map((board) => `
          <article class="whiteboard-row">
            <button class="whiteboard-thumb" type="button" data-action="open-whiteboard" data-board-id="${escapeHtml(board.id)}">
              <img src="${escapeHtml(board.src)}" alt="${escapeHtml(labelText(board.title))}" loading="lazy" />
              <span>${state.lang === "en" ? "Zoom" : "点击放大"}</span>
            </button>
            <div>
              <h2>${htmlText(board.title)}</h2>
              <p>${htmlText(board.note)}</p>
              <ol>
                ${board.points.map((point) => `<li>${htmlText(point)}</li>`).join("")}
              </ol>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSources() {
  const groups = ["all", ...new Set(state.sources.map((source) => source.source_group || "other").sort())];
  const rows = state.sources
    .filter((source) => state.sourceGroup === "all" || (source.source_group || "other") === state.sourceGroup)
    .filter((source) => includesQuery(source.title, source.path, source.url, source.kind, source.source_group, source.trust, source.summary, source.extraction));
  return `
    <section class="panel">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Source Library</p>
          <h1>${state.lang === "en" ? "Clickable Source Library" : "可点击资料库"}</h1>
        </div>
        <label class="select-label">
          <span>${state.lang === "en" ? "Source type" : "资料类型"}</span>
          <select id="source-select">
            ${groups.map((group) => `<option value="${escapeHtml(group)}" ${state.sourceGroup === group ? "selected" : ""}>${escapeHtml(group === "all" ? "all" : sourceGroupName(group))}</option>`).join("")}
          </select>
        </label>
      </div>
      <p class="source-note">${state.lang === "en"
        ? "Preview reads local extracted/OCR/blog files when the site is served from the repository root. Local raw PDFs remain on your machine and are not published."
        : "“预览抽取”会读取本机 data/ 下的抽取、OCR 或博客 HTML；原始 raw/slides 仍只在本机，不会被公开仓库提交。"}</p>
      <div class="source-table">
        ${rows.map((source, index) => `
          <article class="source-row">
            <div>
              <span>${escapeHtml(source.kind || "source")} · ${escapeHtml(sourceGroupName(source.source_group))}</span>
              <strong>${escapeHtml(sourceLabel(source))}</strong>
              <p>${escapeHtml(source.summary || source.path || "")}</p>
            </div>
            <em>${escapeHtml(source.trust || "auxiliary")} ${source.needs_ocr ? "· OCR" : ""}</em>
            <small>${source.page_count ? `${source.page_count} pages` : ""}${source.text_chars ? ` · ${source.text_chars} chars` : ""}</small>
            <div class="source-actions">
              <button type="button" data-action="preview-source" data-source-index="${index}">${state.lang === "en" ? "Preview" : "预览抽取"}</button>
              ${renderSourceLink(source)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSourceLink(source) {
  const href = source.url || source.open_path || "";
  if (!href) return "";
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${source.url ? (state.lang === "en" ? "Open URL" : "打开外链") : (state.lang === "en" ? "Open file" : "打开源文件")}</a>`;
}

function renderCurrentPage() {
  const view = document.getElementById("app-view");
  const renderers = {
    overview: renderOverview,
    plan: renderPlan,
    knowledge: renderKnowledge,
    papers: renderPapers,
    glossary: renderGlossary,
    whiteboards: renderWhiteboards,
    sources: renderSources
  };
  view.innerHTML = renderers[state.page]();
}

function renderMeta() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.getElementById("page-title").innerHTML = htmlText(content.meta.title);
  const navLabels = {
    overview: { zh: "总览", en: "Overview" },
    plan: { zh: "路线", en: "Plan" },
    knowledge: { zh: "知识库", en: "Knowledge" },
    papers: { zh: "真题", en: "Papers" },
    glossary: { zh: "术语", en: "Glossary" },
    whiteboards: { zh: "画板", en: "Whiteboards" },
    sources: { zh: "资料库", en: "Sources" }
  };
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.textContent = localize(navLabels[link.dataset.page]);
  });
  const searchLabel = document.querySelector(".search span");
  if (searchLabel) searchLabel.textContent = state.lang === "en" ? "Search" : "搜索";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.placeholder = state.lang === "en" ? "ASR / DDD / quality attribute" : "ASR / DDD / 质量属性";
  const railLabel = document.querySelector(".rail-filter > span");
  if (railLabel) railLabel.textContent = state.lang === "en" ? "Priority" : "优先级";
}

function renderAll() {
  setPage(state.page);
  renderMeta();
  renderCurrentPage();
}

function setPageFromHash() {
  const next = window.location.hash.replace("#", "") || "overview";
  setPage(next);
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupEvents() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-lang]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.lang = button.dataset.lang;
      renderAll();
    });
  });

  document.querySelectorAll("[data-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-priority]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.priority = button.dataset.priority;
      renderAll();
    });
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  window.addEventListener("hashchange", setPageFromHash);

  document.addEventListener("change", (event) => {
    if (event.target.id === "cluster-select") {
      state.cluster = event.target.value;
      renderAll();
    }
    if (event.target.id === "glossary-select") {
      state.glossary = event.target.value;
      renderAll();
    }
    if (event.target.id === "source-select") {
      state.sourceGroup = event.target.value;
      renderAll();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    if (action === "topic-group") {
      state.topicGroup = target.dataset.topicGroup;
      state.selectedTopicId = "";
      renderAll();
    }
    if (action === "select-topic") {
      state.selectedTopicId = target.dataset.topicId;
      renderAll();
    }
    if (action === "jump-topic") {
      state.selectedTopicId = target.dataset.topicId;
      const topic = content.topics.find((item) => item.id === state.selectedTopicId);
      state.topicGroup = topic?.group || "all";
    }
    if (action === "open-whiteboard") {
      event.preventDefault();
      openWhiteboard(target.dataset.boardId);
    }
    if (action === "preview-source") {
      event.preventDefault();
      const visibleSources = state.sources
        .filter((source) => state.sourceGroup === "all" || (source.source_group || "other") === state.sourceGroup)
        .filter((source) => includesQuery(source.title, source.path, source.url, source.kind, source.source_group, source.trust, source.summary, source.extraction));
      previewSource(visibleSources[Number(target.dataset.sourceIndex)]);
    }
    if (action === "close-modal") closeModal();
    if (action === "zoom-board") {
      const image = document.querySelector(".modal-image");
      const current = Number(image?.dataset.zoom || "1");
      const next = Math.min(3, Math.max(0.75, current + Number(target.dataset.delta)));
      if (image) {
        image.dataset.zoom = String(next);
        image.style.width = `${Math.round(next * 100)}%`;
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function openModal(markup) {
  const root = document.getElementById("modal-root");
  root.innerHTML = markup;
  root.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  const root = document.getElementById("modal-root");
  root.hidden = true;
  root.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openWhiteboard(id) {
  const board = content.whiteboards.find((item) => item.id === id);
  if (!board) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel wide" role="dialog" aria-modal="true" aria-label="${escapeHtml(labelText(board.title))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">Whiteboard</p>
          <h2>${htmlText(board.title)}</h2>
        </div>
        <div class="modal-actions">
          <button type="button" data-action="zoom-board" data-delta="-0.25">−</button>
          <button type="button" data-action="zoom-board" data-delta="0.25">+</button>
          <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
        </div>
      </header>
      <div class="modal-scroll">
        <img class="modal-image" data-zoom="1" src="${escapeHtml(board.src)}" alt="${escapeHtml(labelText(board.title))}" />
      </div>
    </section>
  `);
}

function normalizePreviewPath(source) {
  const path = source?.preview_path || (source?.extracted_path ? `../${source.extracted_path}` : "");
  if (!path) return "";
  if (path.startsWith("../") || path.startsWith("http")) return path;
  if (path.startsWith("data/")) return `../${path}`;
  return path;
}

async function previewSource(source) {
  if (!source) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(sourceLabel(source))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">Source Preview</p>
          <h2>${escapeHtml(sourceLabel(source))}</h2>
        </div>
        <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
      </header>
      <pre class="source-preview">${state.lang === "en" ? "Loading local preview..." : "正在读取本机抽取内容..."}</pre>
    </section>
  `);
  const pre = document.querySelector(".source-preview");
  const path = normalizePreviewPath(source);
  if (!path) {
    pre.textContent = state.lang === "en" ? "No extracted preview path is available for this source." : "这条资料没有可预览的抽取路径。";
    return;
  }
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await sourceTextFromResponse(res, path);
    pre.textContent = text.slice(0, 18000) || (state.lang === "en" ? "Preview is empty." : "预览内容为空。");
  } catch (error) {
    pre.textContent = `${state.lang === "en" ? "Preview failed" : "预览失败"}: ${error.message}\n\n${state.lang === "en"
      ? "Serve the site from the repository root, or use the source link to open the local file/external URL."
      : "请从仓库根目录启动静态服务，或用“打开源文件/外链”查看原始资料。"}`;
  }
}

async function sourceTextFromResponse(res, path) {
  if (path.endsWith(".json")) {
    const data = await res.json();
    if (Array.isArray(data.pages)) {
      return data.pages.map((page) => `# Page ${page.page}\n${page.text || ""}`).join("\n\n");
    }
    return JSON.stringify(data, null, 2);
  }
  const raw = await res.text();
  if (path.endsWith(".html")) {
    const doc = new DOMParser().parseFromString(raw, "text/html");
    doc.querySelectorAll("script, style, nav, footer").forEach((node) => node.remove());
    const body = doc.querySelector(".post-body") || doc.body;
    return body.textContent.replace(/\n{3,}/g, "\n\n").trim();
  }
  return raw;
}

async function boot() {
  state.questions = await loadJson("data/questions.json", window.reviewQuestions || []);
  state.sources = await loadJson("data/sources.json", window.reviewSources || []);
  state.page = pages.has(window.location.hash.replace("#", "")) ? window.location.hash.replace("#", "") : "overview";
  setupEvents();
  renderAll();
}

boot();
