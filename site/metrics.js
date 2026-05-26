const eventNames = {
  site_visit: "站点访问",
  page_view: "页面查看",
  page_click: "导航点击",
  topic_view: "知识点查看",
  glossary_view: "词条查看",
  question_view: "真题展开",
  source_preview: "资料预览",
  source_open: "源文件打开/下载",
  diagram_open: "图解放大",
  whiteboard_open: "画板放大",
  filter_change: "筛选变更",
  search: "搜索"
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

function apiBase() {
  if (window.location.protocol === "file:") return "";
  if (window.location.pathname.startsWith("/kangaroo-review/")) return "/kangaroo-review/api";
  return "/api";
}

function eventName(type) {
  return eventNames[type] || type;
}

function formatMetricNumber(value) {
  return Number(value || 0).toLocaleString("zh-CN");
}

function totalsByEvent(rows) {
  return Object.fromEntries(rows.map((row) => [row.event_type, Number(row.total || 0)]));
}

function renderSummary(data) {
  const totals = totalsByEvent(data.totals || []);
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0);
  document.getElementById("metric-summary").innerHTML = [
    ["总事件", total],
    ["页面查看", totals.page_view],
    ["知识点查看", totals.topic_view],
    ["源文件打开/下载", totals.source_open]
  ].map(([label, value]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${formatMetricNumber(value)}</strong>
    </article>
  `).join("");
}

function renderBars(element, rows, labelFor = (row) => row.event_type) {
  const max = Math.max(1, ...rows.map((row) => Number(row.total || 0)));
  element.innerHTML = rows.length ? rows.map((row) => {
    const total = Number(row.total || 0);
    const width = Math.max(2, Math.round((total / max) * 100));
    return `
      <div class="bar-row">
        <span>${escapeHtml(labelFor(row))}</span>
        <div><i style="width:${width}%"></i></div>
        <b>${formatMetricNumber(total)}</b>
      </div>
    `;
  }).join("") : `<p class="empty">还没有统计数据。</p>`;
}

function dailyPoint(point, index, count, max) {
  const x = count === 1 ? 320 : 28 + index * (584 / (count - 1));
  const y = 210 - (point.total / max) * 170;
  return { ...point, x, y };
}

function renderDaily(element, rows) {
  const byDate = new Map();
  rows.forEach((row) => {
    byDate.set(row.event_date, (byDate.get(row.event_date) || 0) + Number(row.total || 0));
  });
  const points = Array.from(byDate.entries()).map(([date, total]) => ({ date, total }));
  const max = Math.max(1, ...points.map((point) => point.total));
  const plotted = points.map((point, index) => dailyPoint(point, index, points.length, max));
  element.innerHTML = points.length ? `
    <svg viewBox="0 0 640 240" role="img" aria-label="Daily metrics trend">
      <polyline
        fill="none"
        stroke="#14756f"
        stroke-width="5"
        points="${plotted.map((point) => `${point.x},${point.y}`).join(" ")}"
      />
      ${plotted.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="6"><title>${escapeHtml(point.date)}: ${point.total}</title></circle>`).join("")}
    </svg>
    <div class="daily-labels">
      ${points.map((point) => `<span>${escapeHtml(point.date.slice(5))}<b>${point.total}</b></span>`).join("")}
    </div>
  ` : `<p class="empty">还没有最近趋势。</p>`;
}

function renderTable(element, rows, columns) {
  element.innerHTML = rows.length ? `
    <table>
      <thead>
        <tr>${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            ${columns.map((column) => `<td>${escapeHtml(column.value(row))}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  ` : `<p class="empty">暂无数据。</p>`;
}

async function loadMetrics() {
  const base = apiBase();
  if (!base) throw new Error("请通过本地服务或线上部署访问统计页。");
  const res = await fetch(`${base}/summary?days=14`, { cache: "no-store" });
  if (!res.ok) throw new Error(`统计服务不可用：HTTP ${res.status}`);
  return res.json();
}

async function render() {
  const summary = document.getElementById("metric-summary");
  summary.innerHTML = `<article><span>状态</span><strong>读取中…</strong></article>`;
  try {
    const data = await loadMetrics();
    renderSummary(data);
    renderBars(document.getElementById("event-chart"), data.totals || [], (row) => eventName(row.event_type));
    renderDaily(document.getElementById("daily-chart"), data.daily || []);
    renderTable(document.getElementById("top-items"), data.top_items || [], [
      { label: "类型", value: (row) => eventName(row.event_type) },
      { label: "对象", value: (row) => row.label || row.metric_key },
      { label: "Key", value: (row) => row.metric_key },
      { label: "次数", value: (row) => row.total }
    ]);
    renderTable(document.getElementById("recent-events"), data.recent || [], [
      { label: "时间", value: (row) => row.created_at },
      { label: "类型", value: (row) => eventName(row.event_type) },
      { label: "对象", value: (row) => row.label || row.metric_key },
      { label: "页面", value: (row) => row.page }
    ]);
  } catch (error) {
    summary.innerHTML = `<article class="metric-error"><span>状态</span><strong>${escapeHtml(error.message)}</strong></article>`;
    ["event-chart", "daily-chart", "top-items", "recent-events"].forEach((id) => {
      document.getElementById(id).innerHTML = `<p class="empty">统计服务不可用。</p>`;
    });
  }
}

document.getElementById("refresh-metrics").addEventListener("click", render);
render();
