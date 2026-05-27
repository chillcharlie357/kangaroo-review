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
  metricCounts: {},
  metricsAvailable: true,
  metricsSessionId: "",
  lastTrackedPage: "",
  lastTrackedTopic: "",
  rewardProvider: "wechat",
  checklist: {},
  checklistMessage: "",
  commentsByPage: {},
  commentsStatusByPage: {},
  questions: [],
  sources: []
};

const content = window.reviewContent;
const pages = new Set(["overview", "plan", "knowledge", "papers", "glossary", "whiteboards", "sources"]);
const metricLabels = {
  site_visit: { zh: "站点访问", en: "site visits" },
  page_view: { zh: "本页查看", en: "page views" },
  page_click: { zh: "导航点击", en: "nav clicks" },
  topic_view: { zh: "知识点查看", en: "topic views" },
  glossary_view: { zh: "词条查看", en: "term views" },
  question_view: { zh: "真题展开", en: "question opens" },
  source_preview: { zh: "预览", en: "previews" },
  source_open: { zh: "打开/下载", en: "opens/downloads" },
  diagram_open: { zh: "图解放大", en: "diagram zooms" },
  whiteboard_open: { zh: "画板放大", en: "whiteboard zooms" },
  reward_open: { zh: "打赏弹窗", en: "reward opens" }
};
const metricSessionKey = "kangaroo-review-session";
const browserIdentityKey = "kangaroo-review-browser-id";
const checklistStorageKey = "kangaroo-review-checklist-v1";
const commentNicknameKey = "kangaroo-review-comment-nickname";
const checklistExportMarker = "KANGAROO_REVIEW_CHECKLIST_JSON:";
const rewardOptions = {
  wechat: {
    label: { zh: "微信", en: "WeChat" },
    src: "assets/reward/wechat.png"
  },
  alipay: {
    label: { zh: "支付宝", en: "Alipay" },
    src: "assets/reward/alipay.jpg"
  }
};

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

function localizedPair(item, zhKey, enKey) {
  if (!item) return "";
  if (state.lang === "en") return item[enKey] || item[zhKey] || "";
  if (state.lang === "zh") return item[zhKey] || item[enKey] || "";
  const zh = item[zhKey] || "";
  const en = item[enKey] || "";
  if (!zh) return en;
  if (!en || zh === en) return zh;
  return `${zh}\n${en}`;
}

function textForLanguage(zh, en, mixedSeparator = "\n") {
  if (state.lang === "en") return en;
  if (state.lang === "zh") return zh;
  return `${zh}${mixedSeparator}${en}`;
}

function reviewDisclaimerText() {
  return textForLanguage(
    "本复习资料由 Codex（GPT-5.5）辅助整理生成，专门针对 2026 南京大学软件学院研究生《软件体系结构》期末复习；未经任课老师确认，不保证适用于未来年份或本科《软件系统设计》，请以课程原始 slides、复习课纪要和老师说明为准。",
    "This review material was organized with Codex (GPT-5.5) assistance for the 2026 NJU Software Institute graduate Software Architecture final review. It has not been endorsed by the instructors and is not guaranteed for future offerings or the undergraduate Software System Design course; prefer the original slides, review notes, and instructor guidance."
  );
}

function diagramById(id) {
  return (content.diagrams || []).find((diagram) => diagram.id === id);
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

async function loadJson(path, fallback, validate = () => true) {
  if (window.location.protocol === "file:") return fallback;
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    const data = await res.json();
    return validate(data) ? data : fallback;
  } catch {
    return fallback;
  }
}

function metricApiBase() {
  if (window.location.protocol === "file:") return "";
  if (window.location.pathname.startsWith("/kangaroo-review/")) return "/kangaroo-review/api";
  return "/api";
}

function metricItemId(eventType, key) {
  return `${eventType}::${key}`;
}

function metricLabel(eventType) {
  return metricLabels[eventType] || { zh: "统计", en: "metrics" };
}

function stableMetricKey(prefix, value) {
  const raw = String(value || "unknown")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w:/.\-\u4e00-\u9fa5]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 180)
    .replace(/^-|-$/g, "");
  return `${prefix}:${raw || "unknown"}`;
}

function pageMetricKey(page = state.page) {
  return stableMetricKey("page", page);
}

function topicMetricKey(topicId) {
  return stableMetricKey("topic", topicId);
}

function glossaryMetricKey(term) {
  return stableMetricKey("glossary", `${term.category}:${term.en || term.zh}`);
}

function questionMetricKey(question) {
  return stableMetricKey("question", question.id || question.canonical_question);
}

function sourceMetricKey(source) {
  return stableMetricKey("source", source.path || source.title || source.url);
}

function metricCount(eventType, key) {
  const value = state.metricCounts[metricItemId(eventType, key)];
  if (Number.isFinite(value)) return String(value);
  return state.metricsAvailable ? "…" : (state.lang === "en" ? "off" : "离线");
}

function renderMetricBadge(eventType, key, label = metricLabel(eventType)) {
  return `
    <span class="metric-badge" data-metric-type="${escapeHtml(eventType)}" data-metric-key="${escapeHtml(key)}">
      <b>${escapeHtml(metricCount(eventType, key))}</b>
      <em>${escapeHtml(localize(label))}</em>
    </span>
  `;
}

function pageMetricFooter() {
  const key = pageMetricKey();
  return `
    ${renderChecklistTools()}
    <footer class="page-metrics" aria-label="${state.lang === "en" ? "Page metrics" : "页面统计"}">
      ${renderMetricBadge("site_visit", "site")}
      ${renderMetricBadge("page_view", key)}
      ${renderMetricBadge("page_click", key)}
      <span>${state.lang === "en" ? "Metrics update after the lightweight SQLite service receives events." : "统计由轻量 SQLite 服务实时累加，服务离线时页面仍可正常复习。"}</span>
      <button class="reward-trigger" type="button" data-action="open-reward">${state.lang === "en" ? "Help reimburse a little Codex?" : "你想帮我报销一点Codex吗？"}</button>
    </footer>
  `;
}

function createMetricSessionId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function ensureMetricSession() {
  if (state.metricsSessionId) return state.metricsSessionId;
  try {
    let value = window.sessionStorage.getItem(metricSessionKey);
    if (!value) {
      value = createMetricSessionId();
      window.sessionStorage.setItem(metricSessionKey, value);
    }
    state.metricsSessionId = value;
  } catch {
    state.metricsSessionId = createMetricSessionId();
  }
  return state.metricsSessionId;
}

function ensureBrowserIdentity() {
  try {
    let value = window.localStorage.getItem(browserIdentityKey);
    if (!value) {
      value = createMetricSessionId();
      window.localStorage.setItem(browserIdentityKey, value);
    }
    return value;
  } catch {
    return ensureMetricSession();
  }
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Browser privacy modes may disable localStorage; the UI remains usable for reading.
  }
}

function checklistKey(kind, id) {
  return `${kind}:${String(id || "unknown")}`;
}

function routeStepId(step, index) {
  if (step?.id) return step.id;
  const zhTitle = localize(step?.title, "zh") || localize(step?.title, "en") || `step-${index + 1}`;
  return stableMetricKey("route-step", zhTitle);
}

function checklistCurrentItems() {
  const items = [];
  content.topics.forEach((topic) => {
    items.push({
      key: checklistKey("topic", topic.id),
      kind: "topic",
      label: labelText(topic.title),
      priority: topic.priority || "",
      page: "knowledge"
    });
  });
  state.questions.forEach((question) => {
    items.push({
      key: checklistKey("question", question.id || question.canonical_question),
      kind: "question",
      label: state.lang === "en" ? question.canonical_question : (question.question_zh || question.canonical_question),
      priority: question.priority || "",
      page: "papers"
    });
  });
  content.glossary.forEach((term) => {
    items.push({
      key: checklistKey("glossary", glossaryMetricKey(term)),
      kind: "glossary",
      label: `${term.zh || ""} / ${term.en || ""}`.trim(),
      priority: "",
      page: "glossary"
    });
  });
  content.whiteboards.forEach((board) => {
    items.push({
      key: checklistKey("whiteboard", board.id),
      kind: "whiteboard",
      label: labelText(board.title),
      priority: "",
      page: "whiteboards"
    });
  });
  state.sources.forEach((source) => {
    items.push({
      key: checklistKey("source", sourceMetricKey(source)),
      kind: "source",
      label: sourceLabel(source),
      priority: source.trust || "",
      page: "sources"
    });
  });
  content.studyPlan.forEach((step, index) => {
    items.push({
      key: checklistKey("route", routeStepId(step, index)),
      kind: "route",
      label: labelText(step.title),
      priority: "",
      page: "plan"
    });
  });
  return items;
}

function checklistImportAliases() {
  const aliases = {};
  content.studyPlan.forEach((step, index) => {
    const stableKey = checklistKey("route", routeStepId(step, index));
    const oldKey = checklistKey("route", `step-${index + 1}`);
    if (oldKey !== stableKey) aliases[oldKey] = stableKey;
  });
  return aliases;
}

function migrateChecklistKeys(items) {
  const aliases = checklistImportAliases();
  const currentItems = new Map(checklistCurrentItems().map((item) => [item.key, item]));
  const migrated = {};
  Object.entries(items || {}).forEach(([key, value]) => {
    const targetKey = aliases[key] || key;
    const current = currentItems.get(targetKey);
    migrated[targetKey] = {
      ...value,
      label: current?.label || value.label || targetKey
    };
  });
  return migrated;
}

function checklistStats() {
  const items = checklistCurrentItems();
  const done = items.filter((item) => state.checklist[item.key]?.done).length;
  return { done, total: items.length };
}

function loadChecklist() {
  const raw = safeStorageGet(checklistStorageKey);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    state.checklist = migrateChecklistKeys(normalizeChecklistPayload(data));
    saveChecklist();
  } catch {
    state.checklist = {};
  }
}

function normalizeChecklistPayload(data) {
  const sourceItems = data?.items || data?.checklist || {};
  const normalized = {};
  if (Array.isArray(sourceItems)) {
    sourceItems.forEach((item) => {
      if (!item?.key) return;
      normalized[item.key] = {
        done: Boolean(item.done),
        label: String(item.label || item.key),
        updatedAt: item.updatedAt || data.exportedAt || ""
      };
    });
  } else if (sourceItems && typeof sourceItems === "object") {
    Object.entries(sourceItems).forEach(([key, value]) => {
      if (typeof value === "boolean") {
        normalized[key] = { done: value, label: key, updatedAt: "" };
      } else if (value && typeof value === "object") {
        normalized[key] = {
          done: Boolean(value.done),
          label: String(value.label || key),
          updatedAt: value.updatedAt || data?.exportedAt || ""
        };
      }
    });
  }
  return normalized;
}

function saveChecklist() {
  safeStorageSet(checklistStorageKey, JSON.stringify({
    app: "kangaroo-review",
    schema: 1,
    savedAt: new Date().toISOString(),
    items: state.checklist
  }));
}

function setChecklistDone(key, done, label = key) {
  state.checklist[key] = {
    done,
    label,
    updatedAt: new Date().toISOString()
  };
  saveChecklist();
  updateChecklistSummary();
}

function renderChecklistControl(kind, id, label, extraClass = "") {
  const key = checklistKey(kind, id);
  const checked = Boolean(state.checklist[key]?.done);
  const doneLabel = state.lang === "en" ? "Reviewed" : "已复习";
  const todoLabel = state.lang === "en" ? "Mark reviewed" : "标记已复习";
  return `
    <label class="check-control ${extraClass}" title="${escapeHtml(checked ? doneLabel : todoLabel)}">
      <input type="checkbox" data-check-key="${escapeHtml(key)}" data-check-label="${escapeHtml(label)}" ${checked ? "checked" : ""} />
      <span>${checked ? (state.lang === "en" ? "Done" : "已读") : (state.lang === "en" ? "Todo" : "未读")}</span>
    </label>
  `;
}

function renderChecklistTools() {
  const stats = checklistStats();
  const percent = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  return `
    <section class="checklist-tools" aria-label="${state.lang === "en" ? "Review checklist" : "复习进度清单"}">
      <div>
        <strong>${state.lang === "en" ? "Review checklist" : "复习清单"}</strong>
        <span data-checklist-summary>${stats.done}/${stats.total} · ${percent}%</span>
      </div>
      <p>${state.lang === "en"
        ? "Saved in this browser. Export a readable TXT and import it on another device."
        : "保存在当前浏览器。可导出可读 TXT，再到另一台设备导入。跨版本导入时，新内容默认未读。"}</p>
      <div class="checklist-actions">
        <button type="button" data-action="export-checklist">${state.lang === "en" ? "Export" : "导出"}</button>
        <button type="button" data-action="import-checklist">${state.lang === "en" ? "Import" : "导入"}</button>
        <input id="checklist-import-input" type="file" accept=".txt,.json,text/plain,application/json" hidden />
      </div>
      ${state.checklistMessage ? `<small class="checklist-message">${escapeHtml(state.checklistMessage)}</small>` : ""}
    </section>
  `;
}

function updateChecklistSummary() {
  const stats = checklistStats();
  const percent = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  const node = document.querySelector("[data-checklist-summary]");
  if (node) node.textContent = `${stats.done}/${stats.total} · ${percent}%`;
}

function exportChecklist() {
  const currentItems = checklistCurrentItems();
  const currentKeys = new Set(currentItems.map((item) => item.key));
  const unknownItems = Object.entries(state.checklist)
    .filter(([key]) => !currentKeys.has(key))
    .map(([key, value]) => ({
      key,
      kind: "legacy",
      label: value.label || key,
      page: "legacy",
      priority: "",
      legacy: true
    }));
  const readableItems = [...currentItems, ...unknownItems];
  const exportedItems = {};
  Object.entries(state.checklist).forEach(([key, value]) => {
    exportedItems[key] = {
      done: Boolean(value.done),
      label: value.label || key,
      kind: "legacy",
      page: "legacy",
      priority: "",
      updatedAt: value.updatedAt || ""
    };
  });
  currentItems.forEach((item) => {
    const existing = state.checklist[item.key] || {};
    exportedItems[item.key] = {
      done: Boolean(existing.done),
      label: item.label,
      kind: item.kind,
      page: item.page,
      priority: item.priority || "",
      updatedAt: existing.updatedAt || ""
    };
  });
  const payload = {
    app: "kangaroo-review",
    schema: 1,
    exportedAt: new Date().toISOString(),
    course: localize(content.meta.title, "zh"),
    items: exportedItems
  };
  const stats = checklistStats();
  const lines = [
    "Kangaroo Review Checklist v1",
    `Course: ${payload.course}`,
    `Exported: ${payload.exportedAt}`,
    `Progress: ${stats.done}/${stats.total}`,
    "",
    "Human readable list:",
    ...readableItems.map((item) => {
      const done = Boolean(exportedItems[item.key]?.done);
      return `[${done ? "done" : "todo"}] ${item.key} | ${item.label}`;
    }),
    "",
    "Machine readable payload:",
    `${checklistExportMarker}${JSON.stringify(payload)}`
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kangaroo-review-checklist-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  state.checklistMessage = state.lang === "en" ? "Checklist exported." : "清单已导出。";
  renderAll();
}

function parseChecklistImport(text) {
  const markerIndex = text.indexOf(checklistExportMarker);
  if (markerIndex >= 0) {
    const jsonText = text.slice(markerIndex + checklistExportMarker.length).trim();
    return normalizeChecklistPayload(JSON.parse(jsonText));
  }
  const normalized = {};
  text.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\[(done|todo|x| |已读|未读)\]\s+([^|]+?)(?:\s+\|\s*(.*))?$/i);
    if (!match) return;
    const done = /^(done|x|已读)$/i.test(match[1].trim());
    const key = match[2].trim();
    normalized[key] = {
      done,
      label: (match[3] || key).trim(),
      updatedAt: new Date().toISOString()
    };
  });
  if (!Object.keys(normalized).length) throw new Error("No checklist entries found");
  return normalized;
}

async function importChecklistFile(file) {
  if (!file) return;
  try {
    state.checklist = migrateChecklistKeys(parseChecklistImport(await file.text()));
    saveChecklist();
    state.checklistMessage = state.lang === "en"
      ? "Checklist imported. New items stay unread."
      : "清单已导入；新版本新增内容保持未读。";
  } catch (error) {
    state.checklistMessage = state.lang === "en"
      ? `Import failed: ${error.message}`
      : `导入失败：${error.message}`;
  }
  renderAll();
}

function commentApiAvailable() {
  return Boolean(metricApiBase());
}

function commentNickname() {
  return safeStorageGet(commentNicknameKey) || (state.lang === "en" ? "Anonymous classmate" : "匿名同学");
}

function commentPageState(page = state.page) {
  return state.commentsByPage[page] || [];
}

function commentStatus(page = state.page) {
  return state.commentsStatusByPage[page] || "";
}

function renderCommentsPanel() {
  const comments = commentPageState();
  const status = commentStatus();
  const disabled = commentApiAvailable() ? "" : "disabled";
  return `
    <section class="panel comments-panel" aria-label="${state.lang === "en" ? "Page comments" : "本页评论"}" data-comments-page="${escapeHtml(state.page)}">
      <div class="section-head split">
        <div>
          <p class="section-kicker">Comments</p>
          <h2>${state.lang === "en" ? "Page Comments" : "本页评论"}</h2>
        </div>
        <span class="count-pill">${comments.length} ${state.lang === "en" ? "comments" : "条"}</span>
      </div>
      <p class="source-note">${state.lang === "en"
        ? "Anonymous, flat comments stored in SQLite. Obvious spam words and rapid bursts are rejected."
        : "轻量匿名评论，按页面落到 SQLite。明显垃圾词和短时间刷屏会被拒绝。"}</p>
      <form class="comment-form" data-action="submit-comment">
        <input name="nickname" maxlength="32" value="${escapeHtml(commentNickname())}" placeholder="${state.lang === "en" ? "Nickname" : "昵称"}" ${disabled} />
        <textarea name="body" maxlength="1000" rows="3" placeholder="${state.lang === "en" ? "Leave a review note or correction..." : "留下复习提醒、纠错或补充..."}" ${disabled}></textarea>
        <button type="submit" ${disabled}>${state.lang === "en" ? "Post" : "发布"}</button>
      </form>
      ${status ? `<p class="comment-status">${escapeHtml(status)}</p>` : ""}
      <div class="comment-list">
        ${comments.length ? comments.map((comment) => `
          <article class="comment-item">
            <header>
              <strong>${escapeHtml(comment.nickname || (state.lang === "en" ? "Anonymous" : "匿名同学"))}</strong>
              <time datetime="${escapeHtml(comment.created_at || "")}">${escapeHtml(formatCommentTime(comment.created_at))}</time>
            </header>
            <p>${escapeHtml(comment.body || "")}</p>
          </article>
        `).join("") : `<p class="empty">${commentApiAvailable()
          ? (state.lang === "en" ? "No comments yet." : "还没有评论。")
          : (state.lang === "en" ? "Comments require the local/online SQLite service." : "评论区需要通过本地或线上 SQLite 服务访问。")}</p>`}
      </div>
    </section>
  `;
}

function formatCommentTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(state.lang === "en" ? "en-US" : "zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

async function loadComments(page = state.page, force = false) {
  const apiBase = metricApiBase();
  if (!apiBase) return;
  if (!force && state.commentsByPage[page]) return;
  state.commentsStatusByPage[page] = state.lang === "en" ? "Loading comments..." : "正在加载评论...";
  refreshCommentsPanel(page);
  try {
    const res = await fetch(`${apiBase}/comments?page=${encodeURIComponent(page)}&limit=50`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    state.commentsByPage[page] = Array.isArray(data.comments) ? data.comments : [];
    state.commentsStatusByPage[page] = "";
  } catch (error) {
    state.commentsStatusByPage[page] = state.lang === "en"
      ? `Comments unavailable: ${error.message}`
      : `评论暂不可用：${error.message}`;
  }
  refreshCommentsPanel(page);
}

function refreshCommentsPanel(page = state.page) {
  const node = [...document.querySelectorAll("[data-comments-page]")]
    .find((item) => item.dataset.commentsPage === page);
  if (!node) return;
  node.outerHTML = renderCommentsPanel();
}

async function submitComment(form) {
  const apiBase = metricApiBase();
  if (!apiBase) return;
  const nickname = form.elements.nickname.value.trim() || commentNickname();
  const body = form.elements.body.value.trim();
  const page = state.page;
  safeStorageSet(commentNicknameKey, nickname);
  if (body.length < 2) {
    state.commentsStatusByPage[page] = state.lang === "en" ? "Please write at least two characters." : "至少写两个字再发布。";
    refreshCommentsPanel(page);
    return;
  }
  state.commentsStatusByPage[page] = state.lang === "en" ? "Posting..." : "正在发布...";
  refreshCommentsPanel(page);
  try {
    const response = await fetch(`${apiBase}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        nickname,
        body,
        client_id: ensureBrowserIdentity(),
        session_id: ensureMetricSession()
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || `HTTP ${response.status}`);
    state.commentsStatusByPage[page] = state.lang === "en" ? "Posted." : "已发布。";
    await loadComments(page, true);
  } catch (error) {
    state.commentsStatusByPage[page] = state.lang === "en"
      ? `Post failed: ${error.message}`
      : `发布失败：${error.message}`;
    refreshCommentsPanel(page);
  }
}

async function trackMetric(eventType, key, label, meta = {}) {
  const apiBase = metricApiBase();
  if (!apiBase || !key) return;
  const payload = {
    event_type: eventType,
    key,
    label,
    page: state.page,
    target: window.location.hash || window.location.pathname,
    session_id: ensureMetricSession(),
    meta
  };
  try {
    const response = await fetch(`${apiBase}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
    state.metricsAvailable = response.ok;
    window.setTimeout(refreshVisibleMetrics, 160);
  } catch {
    state.metricsAvailable = false;
    updateMetricBadges();
  }
}

async function refreshVisibleMetrics() {
  const apiBase = metricApiBase();
  const items = visibleMetricItems();
  if (!apiBase || !items.length) return;
  try {
    const res = await fetch(`${apiBase}/stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
      cache: "no-store"
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    state.metricCounts = { ...state.metricCounts, ...(data.counts || {}) };
    state.metricsAvailable = true;
  } catch {
    state.metricsAvailable = false;
  }
  updateMetricBadges();
}

function visibleMetricItems() {
  const items = new Set();
  document.querySelectorAll("[data-metric-type][data-metric-key]").forEach((node) => {
    items.add(metricItemId(node.dataset.metricType, node.dataset.metricKey));
  });
  return [...items];
}

function updateMetricBadges() {
  document.querySelectorAll("[data-metric-type][data-metric-key]").forEach((node) => {
    const value = metricCount(node.dataset.metricType, node.dataset.metricKey);
    const number = node.querySelector("b");
    if (number) number.textContent = value;
    node.classList.toggle("offline", !state.metricsAvailable);
  });
}

function trackPageView(page) {
  const key = pageMetricKey(page);
  if (state.lastTrackedPage === `${page}:${window.location.hash}`) return;
  state.lastTrackedPage = `${page}:${window.location.hash}`;
  trackMetric("page_view", key, page);
}

function trackCurrentDetailView() {
  if (state.page !== "knowledge" || !state.selectedTopicId) return;
  if (state.lastTrackedTopic === state.selectedTopicId) return;
  state.lastTrackedTopic = state.selectedTopicId;
  const topic = content.topics.find((item) => item.id === state.selectedTopicId);
  trackMetric("topic_view", topicMetricKey(state.selectedTopicId), topic ? labelText(topic.title) : state.selectedTopicId);
}

function setPage(page) {
  const nextPage = pages.has(page) ? page : "overview";
  if (state.page !== nextPage) state.lastTrackedTopic = "";
  state.page = nextPage;
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
    raw_predecessor_notes: state.lang === "en" ? "Past notes" : "前人资料",
    adjacent_past_papers: state.lang === "en" ? "Adjacent papers" : "相邻课程真题",
    current_senior_review: state.lang === "en" ? "2025 senior review" : "2025 前人冲刺",
    adjacent_course_notes: state.lang === "en" ? "Adjacent course notes" : "相邻课程笔记",
    ai_generated_notes: state.lang === "en" ? "AI notes" : "AI 整理资料"
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
    .filter((topic) => includesQuery(topic.id, topic.priority, topic.title, topic.takeaway, topic.answerFrame, topic.bullets, topic.deepDive, topic.sources, topic.sourceConfidence));
}

function currentSources() {
  return state.sources
    .filter((source) => state.sourceGroup === "all" || (source.source_group || "other") === state.sourceGroup)
    .filter((source) => includesQuery(source.title, source.path, source.url, source.kind, source.source_group, source.trust, source.summary, source.extraction));
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

    <section class="disclaimer-band" aria-label="${state.lang === "en" ? "Accuracy disclaimer" : "准确性提示"}">
      <strong>${state.lang === "en" ? "Accuracy note" : "准确性提示"}</strong>
      <p>${htmlText(reviewDisclaimerText())}</p>
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

    <section class="panel evidence-panel" aria-label="${state.lang === "en" ? "Source and scope evidence" : "来源与范围依据"}">
      <div class="section-head">
        <p class="section-kicker">Evidence Boundary</p>
        <h2>${state.lang === "en" ? "Source basis and scope boundary" : "来源依据与适用边界"}</h2>
      </div>
      <div class="evidence-band">
        ${content.meta.evidence.map((item) => {
          const label = item.label || { zh: "依据", en: "Evidence" };
          const body = item.body || item;
          return `
            <article class="evidence-card">
              <b>${htmlText(label)}</b>
              <p>${htmlText(body)}</p>
            </article>
          `;
        }).join("")}
      </div>
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
        ${content.studyPlan.map((step, index) => `
          <section class="route-step">
            <div class="route-step-head">
              <b>${htmlText(step.day)}</b>
              ${renderChecklistControl("route", routeStepId(step, index), labelText(step.title), "compact-check")}
            </div>
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
                ${group.items.map((item) => `
                  <li>
                    ${renderChecklistControl("topic", item.topicId, labelText(item), "inline-check")}
                    <a href="#knowledge" data-action="jump-topic" data-topic-id="${escapeHtml(item.topicId)}">${htmlText(item)}</a>
                  </li>
                `).join("")}
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
  const relatedQuestions = state.questions.filter((question) => (question.topicIds || []).includes(topic.id));
  const related = relatedQuestions.length;
  const diagrams = (topic.diagramIds || []).map(diagramById).filter(Boolean);
  return `
    <header class="detail-head">
      <div>
        <p class="section-kicker">${escapeHtml(topic.id)}</p>
        <h2>${htmlText(topic.title)}</h2>
      </div>
      <div class="detail-badges">
        ${renderChecklistControl("topic", topic.id, labelText(topic.title), "compact-check")}
        <span>${escapeHtml(topic.priority)}</span>
        <span>${escapeHtml(topic.examWeight || priorityName(topic.priority))}</span>
        ${renderMetricBadge("topic_view", topicMetricKey(topic.id))}
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
    ${renderDeepDive(topic)}
    ${diagrams.length ? `
      <section class="diagram-section">
        <h3>${state.lang === "en" ? "Diagrams to memorize" : "建议背下来的图解"}</h3>
        <div class="diagram-grid">
          ${diagrams.map((diagram) => renderDiagramCard(diagram)).join("")}
        </div>
      </section>
    ` : ""}
    ${relatedQuestions.length ? `
      <section class="related-questions">
        <h3>${state.lang === "en" ? "Related past-paper practice" : "关联真题练习"}</h3>
        <div class="mini-question-list">
          ${relatedQuestions.slice(0, 5).map((question) => `
            <a href="#papers" data-action="jump-question" data-question-id="${escapeHtml(question.id)}">
              <span>${escapeHtml(question.cluster)}</span>
              <strong>${escapeHtml(state.lang === "en" ? question.canonical_question : question.question_zh || question.canonical_question)}</strong>
            </a>
          `).join("")}
        </div>
      </section>
    ` : ""}
  `;
}

function renderDeepDive(topic) {
  const sections = topic.deepDive || [];
  if (!sections.length) return "";
  return `
    <section class="deep-dive">
      <h3>${state.lang === "en" ? "Expanded notes" : "展开讲解：背什么，怎么写，哪里易错"}</h3>
      <div class="deep-dive-list">
        ${sections.map((section) => `
          <article class="deep-dive-row">
            <header>
              <b>${htmlText(section.title)}</b>
              <p>${htmlText(section.summary || "")}</p>
            </header>
            <div>
              <span>${state.lang === "en" ? "Must memorize" : "必须背"}</span>
              <p>${htmlText(section.must)}</p>
            </div>
            <div>
              <span>${state.lang === "en" ? "How to answer" : "怎么答"}</span>
              <p>${htmlText(section.answer)}</p>
            </div>
            <div>
              <span>${state.lang === "en" ? "Common trap" : "易错点"}</span>
              <p>${htmlText(section.trap)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDiagramCard(diagram, compact = false) {
  return `
    <article class="diagram-card ${compact ? "compact" : ""}">
      <button type="button" data-action="open-diagram" data-diagram-id="${escapeHtml(diagram.id)}">
        <img src="${escapeHtml(diagram.src)}" alt="${escapeHtml(labelText(diagram.title))}" />
        <span>${state.lang === "en" ? "Zoom" : "放大"}</span>
      </button>
      <div>
        <strong>${htmlText(diagram.title)}</strong>
        <p>${htmlText(diagram.note)}</p>
        ${diagram.use ? `<small>${htmlText(diagram.use)}</small>` : ""}
      </div>
    </article>
  `;
}

function renderPapers() {
  const priorityQuestions = state.questions
    .filter((question) => state.priority === "all" || question.priority === state.priority);
  const clusters = ["all", ...new Set(priorityQuestions.map((q) => q.cluster).sort())];
  const questions = priorityQuestions
    .filter((question) => state.cluster === "all" || question.cluster === state.cluster)
    .filter((question) => includesQuery(question.cluster, question.priority, question.priority_reason_zh, question.priority_reason_en, question.canonical_question, question.question_zh, question.likely_answer_pattern, question.answer_zh, question.sample_answer_zh, question.sample_answer_en, question.recurring_terms, question.english_keywords, question.appearances));
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
      <p class="source-note">${state.lang === "en"
        ? "Cluster priority follows the current review class first, then recent adjacent-course papers, then older historical papers."
        : "题簇优先级先按今年复习课主纲排序，再参考 2025/2022/2021 相邻课程真题，最后才看更早旧题。"}</p>
      <div class="question-list">
        ${questions.map((question, index) => renderQuestion(question, index === 0)).join("") || `<p class="empty">${state.lang === "en" ? "No question matches current filters." : "当前筛选下没有真题。"}</p>`}
      </div>
    </section>
  `;
}

function renderQuestion(question, open) {
  const zhQuestion = question.question_zh || question.canonical_question;
  const zhAnswer = question.answer_zh || question.likely_answer_pattern;
  const sample = localizedPair(question, "sample_answer_zh", "sample_answer_en");
  const visualHint = localizedPair(question, "visual_hint_zh", "visual_hint_en");
  const diagram = question.diagram_id ? diagramById(question.diagram_id) : null;
  const title = textForLanguage(zhQuestion, question.canonical_question);
  const answer = textForLanguage(zhAnswer, question.likely_answer_pattern);
  const priority = question.priority || "P2";
  const priorityReason = localizedPair(question, "priority_reason_zh", "priority_reason_en");
  return `
    <details class="question-item" data-question-id="${escapeHtml(question.id || "")}" ${open ? "open" : ""}>
      <summary>
        <span class="question-kicker">
          <em class="question-priority ${escapeHtml(priority.toLowerCase())}">${escapeHtml(priority)} · ${escapeHtml(priorityName(priority))}</em>
          ${escapeHtml(question.cluster)} · ${(question.appearances || []).length} hits
        </span>
        <strong>${htmlText(title)}</strong>
        ${renderMetricBadge("question_view", questionMetricKey(question))}
      </summary>
      <div class="question-actions">
        ${renderChecklistControl("question", question.id || question.canonical_question, labelText(title), "compact-check")}
      </div>
      <div class="question-body">
        <section>
          <h3>${state.lang === "en" ? "Likely answer pattern" : "建议答题框架"}</h3>
          <p>${htmlText(answer)}</p>
        </section>
        ${sample ? `
          <section class="sample-answer">
            <h3>${state.lang === "en" ? "Exam-ready sample answer" : "可直接背的示例答案"}</h3>
            <p>${htmlText(sample)}</p>
          </section>
        ` : ""}
        ${diagram ? `
          <section class="question-diagram">
            <h3>${state.lang === "en" ? "Useful diagram" : "配套图解"}</h3>
            ${renderDiagramCard(diagram, true)}
            ${visualHint ? `<p>${htmlText(visualHint)}</p>` : ""}
          </section>
        ` : visualHint ? `
          <section class="question-diagram">
            <h3>${state.lang === "en" ? "Diagram hint" : "画图提示"}</h3>
            <p>${htmlText(visualHint)}</p>
          </section>
        ` : ""}
        <div class="question-meta">
          <div class="tag-stack">
            ${[...(question.english_keywords || question.recurring_terms || [])].map((term) => `<span>${escapeHtml(term)}</span>`).join("")}
          </div>
          ${priorityReason ? `<small class="priority-reason">${htmlText(priorityReason)}</small>` : ""}
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
        ${items.map((item) => {
          const key = glossaryMetricKey(item);
          return `
          <div class="term-row" data-action="glossary-term" data-term-key="${escapeHtml(key)}">
            <span>${escapeHtml(item.category)}</span>
            <strong>${state.lang === "en" ? escapeHtml(item.en) : escapeHtml(item.zh)}</strong>
            <b>${state.lang === "en" ? escapeHtml(item.zh) : escapeHtml(item.en)}</b>
            <p>${textForLanguage(escapeHtml(item.noteZh), escapeHtml(item.noteEn), " / ")}</p>
            <div class="term-actions">
              ${renderMetricBadge("glossary_view", key)}
              ${renderChecklistControl("glossary", key, `${item.zh || ""} / ${item.en || ""}`, "compact-check")}
            </div>
          </div>
        `;
        }).join("")}
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
              ${renderChecklistControl("whiteboard", board.id, labelText(board.title), "compact-check")}
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
  const rows = currentSources();
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
        ? "On the docs.cpl.icu deployment, previews and source links read the mirrored data/raw/slides files under /kangaroo-review/. The public GitHub repo still excludes private source files."
        : "服务器部署版会在 /kangaroo-review/ 下镜像 data/raw/slides，因此“预览抽取”和“打开源文件”都可直接阅读；public GitHub 仓库仍不提交这些源文件。"}</p>
      <div class="source-table">
        ${rows.map((source, index) => {
          const key = sourceMetricKey(source);
          const label = sourceLabel(source);
          return `
          <article class="source-row">
            <div>
              <span>${escapeHtml(source.kind || "source")} · ${escapeHtml(sourceGroupName(source.source_group))}</span>
              <strong>${escapeHtml(label)}</strong>
              <p>${escapeHtml(source.summary || source.path || "")}</p>
            </div>
            <em>${escapeHtml(source.trust || "auxiliary")} ${source.needs_ocr ? "· OCR" : ""}</em>
            <small>${source.page_count ? `${source.page_count} pages` : ""}${source.text_chars ? ` · ${source.text_chars} chars` : ""}</small>
            <div class="source-metrics">
              ${renderMetricBadge("source_preview", key)}
              ${renderMetricBadge("source_open", key)}
              ${renderChecklistControl("source", key, label, "compact-check")}
            </div>
            <div class="source-actions">
              <button type="button" data-action="preview-source" data-source-index="${index}">${state.lang === "en" ? "Preview" : "预览抽取"}</button>
              ${renderSourceLink(source, key, label)}
            </div>
          </article>
        `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderSourceLink(source, key = sourceMetricKey(source), sourceName = sourceLabel(source)) {
  const href = source.url || normalizeDeployPath(source.open_path || "");
  if (!href) return "";
  const label = source.url
    ? (state.lang === "en" ? "Open URL" : "打开外链")
    : (state.lang === "en" ? "Open file" : "打开源文件");
  return `
    <a href="${escapeHtml(href)}" target="_blank" rel="noopener" data-action="open-source" data-source-key="${escapeHtml(key)}" data-source-label="${escapeHtml(sourceName)}">
      ${label}
    </a>
  `;
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
  view.innerHTML = `${renderers[state.page]()}${renderCommentsPanel()}${pageMetricFooter()}`;
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
  trackCurrentDetailView();
  refreshVisibleMetrics();
  loadComments(state.page);
}

function setPageFromHash() {
  const next = window.location.hash.replace("#", "") || "overview";
  setPage(next);
  renderAll();
  trackPageView(state.page);
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
      state.cluster = "all";
      renderAll();
    });
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  window.addEventListener("hashchange", setPageFromHash);

  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.addEventListener("click", () => {
      const page = link.dataset.page || "overview";
      trackMetric("page_click", pageMetricKey(page), page);
    });
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-check-key]")) {
      setChecklistDone(event.target.dataset.checkKey, event.target.checked, event.target.dataset.checkLabel || event.target.dataset.checkKey);
      const label = event.target.closest(".check-control")?.querySelector("span");
      if (label) label.textContent = event.target.checked
        ? (state.lang === "en" ? "Done" : "已读")
        : (state.lang === "en" ? "Todo" : "未读");
      return;
    }
    if (event.target.id === "checklist-import-input") {
      importChecklistFile(event.target.files?.[0]);
      event.target.value = "";
      return;
    }
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

  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.('[data-action="submit-comment"]');
    if (!form) return;
    event.preventDefault();
    submitComment(form);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".check-control")) {
      event.stopPropagation();
      return;
    }
    const target = event.target.closest("[data-action]");
    if (!target) return;
    switch (target.dataset.action) {
      case "topic-group":
        state.topicGroup = target.dataset.topicGroup;
        state.selectedTopicId = "";
        state.lastTrackedTopic = "";
        trackMetric("filter_change", stableMetricKey("topic-group", state.topicGroup), state.topicGroup);
        renderAll();
        break;
      case "select-topic":
        state.selectedTopicId = target.dataset.topicId;
        state.lastTrackedTopic = "";
        renderAll();
        break;
      case "jump-topic": {
        state.selectedTopicId = target.dataset.topicId;
        const topic = content.topics.find((item) => item.id === state.selectedTopicId);
        state.topicGroup = topic?.group || "all";
        break;
      }
      case "jump-question":
        state.cluster = "all";
        break;
      case "open-whiteboard":
        event.preventDefault();
        trackMetric("whiteboard_open", stableMetricKey("whiteboard", target.dataset.boardId), target.dataset.boardId);
        openWhiteboard(target.dataset.boardId);
        break;
      case "open-diagram":
        event.preventDefault();
        trackMetric("diagram_open", stableMetricKey("diagram", target.dataset.diagramId), target.dataset.diagramId);
        openDiagram(target.dataset.diagramId);
        break;
      case "preview-source": {
        event.preventDefault();
        const source = currentSources()[Number(target.dataset.sourceIndex)];
        if (source) trackMetric("source_preview", sourceMetricKey(source), sourceLabel(source));
        previewSource(source);
        break;
      }
      case "open-source":
        trackMetric("source_open", target.dataset.sourceKey, target.dataset.sourceLabel || target.href, {
          href: target.href
        });
        break;
      case "open-reward":
        event.preventDefault();
        trackMetric("reward_open", "reward", "Reward modal");
        openReward();
        break;
      case "export-checklist":
        event.preventDefault();
        exportChecklist();
        break;
      case "import-checklist":
        event.preventDefault();
        document.getElementById("checklist-import-input")?.click();
        break;
      case "reward-provider":
        event.preventDefault();
        state.rewardProvider = rewardOptions[target.dataset.rewardProvider] ? target.dataset.rewardProvider : "wechat";
        openReward();
        break;
      case "glossary-term":
        trackMetric("glossary_view", target.dataset.termKey, target.textContent.replace(/\s+/g, " ").trim().slice(0, 120));
        break;
      case "close-modal":
        closeModal();
        break;
      case "zoom-board": {
        const image = document.querySelector(".modal-image");
        const current = Number(image?.dataset.zoom || "1");
        const next = Math.min(3, Math.max(0.75, current + Number(target.dataset.delta)));
        if (image) {
          image.dataset.zoom = String(next);
          image.style.width = `${Math.round(next * 100)}%`;
        }
        break;
      }
    }
  });

  document.addEventListener("toggle", (event) => {
    const item = event.target.closest?.(".question-item");
    if (!item || !item.open) return;
    const question = state.questions.find((entry) => (entry.id || "") === item.dataset.questionId);
    if (question) trackMetric("question_view", questionMetricKey(question), question.question_zh || question.canonical_question);
  }, true);

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

function openDiagram(id) {
  const diagram = diagramById(id);
  if (!diagram) return;
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel wide" role="dialog" aria-modal="true" aria-label="${escapeHtml(labelText(diagram.title))}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">Exam Diagram</p>
          <h2>${htmlText(diagram.title)}</h2>
          <p>${htmlText(diagram.note)}</p>
        </div>
        <div class="modal-actions">
          <button type="button" data-action="zoom-board" data-delta="-0.25">−</button>
          <button type="button" data-action="zoom-board" data-delta="0.25">+</button>
          <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
        </div>
      </header>
      <div class="modal-scroll">
        <img class="modal-image" data-zoom="1" src="${escapeHtml(diagram.src)}" alt="${escapeHtml(labelText(diagram.title))}" />
      </div>
    </section>
  `);
}

function openReward() {
  const providerKey = rewardOptions[state.rewardProvider] ? state.rewardProvider : "wechat";
  const provider = rewardOptions[providerKey];
  openModal(`
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel reward-modal" role="dialog" aria-modal="true" aria-label="${state.lang === "en" ? "Reward QR code" : "打赏收款码"}">
      <header class="modal-head">
        <div>
          <p class="section-kicker">${state.lang === "en" ? "Tiny Support" : "一点点支持"}</p>
          <h2>${state.lang === "en" ? "Help reimburse a little Codex?" : "你想帮我报销一点Codex吗？"}</h2>
        </div>
        <button type="button" data-action="close-modal">${state.lang === "en" ? "Close" : "关闭"}</button>
      </header>
      <div class="reward-body">
        <div class="reward-copy">
          <p>${state.lang === "en"
            ? "Thank you for even opening this. A tiny tip helps offset the Codex bill and buys future review notes a little more runway. ✨"
            : "谢谢你点开这个小角落！一点点投喂都会变成 Codex 账单里的回血，也会变成下一次更认真整理资料的动力。✨"}</p>
          <p>${state.lang === "en"
            ? "No pressure at all. If this site saved you time before the exam, that is already a very good ending. 🙌"
            : "完全不强求，真的。只要这份资料帮你少熬一点夜、多拿一点分，就已经很值得了。🙌"}</p>
        </div>
        <div class="reward-card">
          <div class="reward-tabs" role="tablist" aria-label="${state.lang === "en" ? "Payment method" : "收款方式"}">
            ${Object.entries(rewardOptions).map(([key, item]) => `
              <button class="${key === providerKey ? "active" : ""}" type="button" data-action="reward-provider" data-reward-provider="${escapeHtml(key)}">
                ${escapeHtml(localize(item.label))}
              </button>
            `).join("")}
          </div>
          <figure>
            <img class="reward-qr" src="${escapeHtml(provider.src)}" alt="${escapeHtml(localize(provider.label))}" />
            <figcaption>${state.lang === "en"
              ? `Scan with ${escapeHtml(localize(provider.label))}. Thank you, genuinely. ☕️`
              : `使用${escapeHtml(localize(provider.label))}扫码。谢谢你，真的会很开心。☕️`}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `);
}

function normalizeDeployPath(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  if (window.location.protocol !== "file:" && !window.location.pathname.includes("/site/")) {
    return path.replace(/^(\.\.\/)+/, "");
  }
  return path;
}

function normalizePreviewPath(source) {
  const path = source?.preview_path || (source?.extracted_path ? `../${source.extracted_path}` : "");
  if (!path) return "";
  if (path.startsWith("../") || path.startsWith("http")) return normalizeDeployPath(path);
  if (path.startsWith("data/")) return normalizeDeployPath(`../${path}`);
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
    pre.textContent = sourceFallbackText(source, error);
  }
}

function sourceFallbackText(source, error) {
  const lines = state.lang === "en"
    ? [
      `Local extracted preview is unavailable here (${error.message}).`,
      "If this is the public GitHub-only checkout, raw source files may be absent. The docs.cpl.icu deployment mirrors the source library for direct reading.",
      source.summary ? `Summary: ${source.summary}` : "",
      source.path ? `Local path: ${source.path}` : "",
      source.url ? `Source URL: ${source.url}` : "",
      source.trust ? `Trust level: ${source.trust}` : ""
    ]
    : [
      `这里无法读取本机抽取预览（${error.message}）。`,
      "如果你打开的是 public GitHub 版本，原始资料可能不在仓库里；docs.cpl.icu 部署版会镜像完整资料库，支持直接阅读源文件。",
      source.summary ? `摘要：${source.summary}` : "",
      source.path ? `本机路径：${source.path}` : "",
      source.url ? `外链：${source.url}` : "",
      source.trust ? `可信度：${source.trust}` : ""
    ];
  return lines.filter(Boolean).join("\n\n");
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
  state.questions = await loadJson("data/questions.json", window.reviewQuestions || [], Array.isArray);
  state.sources = await loadJson("data/sources.json", window.reviewSources || [], Array.isArray);
  loadChecklist();
  state.page = pages.has(window.location.hash.replace("#", "")) ? window.location.hash.replace("#", "") : "overview";
  setupEvents();
  renderAll();
  trackMetric("site_visit", "site", "Software Architecture Review", {
    path: window.location.pathname
  });
  trackPageView(state.page);
}

boot();
