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
  reward_open: "打赏弹窗",
  filter_change: "筛选变更",
  search: "搜索"
};

const dashboardState = {
  days: 14,
  grain: "day"
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
  const visitors = data.visitors || {};
  document.getElementById("metric-summary").innerHTML = [
    ["总事件", total],
    [`访问人数/${data.days || dashboardState.days}天`, visitors.unique_visitors],
    ["页面查看", totals.page_view],
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

function trendLabel(bucket, grain) {
  if (!bucket) return "";
  if (grain === "hour") return bucket.slice(5, 16).replace("T", " ");
  return bucket.slice(5);
}

function formatChinaTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

function renderTrend(element, rows, grain) {
  const byBucket = new Map();
  rows.forEach((row) => {
    const bucket = row.bucket || row.event_date;
    const current = byBucket.get(bucket) || { bucket, total: 0, uniqueVisitors: 0 };
    current.total += Number(row.total || 0);
    current.uniqueVisitors = Math.max(current.uniqueVisitors, Number(row.unique_visitors || 0));
    byBucket.set(bucket, current);
  });
  const points = Array.from(byBucket.values()).sort((a, b) => a.bucket.localeCompare(b.bucket));
  const max = Math.max(1, ...points.map((point) => point.total));
  const plotted = points.map((point, index) => dailyPoint(point, index, points.length, max));
  const labelStep = grain === "hour" ? Math.max(1, Math.ceil(points.length / 24)) : 1;
  const visibleLabels = points.filter((_, index) => index % labelStep === 0 || index === points.length - 1);
  element.innerHTML = points.length ? `
    <svg viewBox="0 0 640 240" role="img" aria-label="Metrics trend by ${escapeHtml(grain)}">
      <polyline
        fill="none"
        stroke="#14756f"
        stroke-width="5"
        points="${plotted.map((point) => `${point.x},${point.y}`).join(" ")}"
      />
      ${plotted.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="6"><title>${escapeHtml(point.bucket)}: ${point.total} events, ${point.uniqueVisitors} visitors</title></circle>`).join("")}
    </svg>
    <div class="daily-labels">
      ${visibleLabels.map((point) => `<span>${escapeHtml(trendLabel(point.bucket, grain))}<b>${formatMetricNumber(point.total)}</b><em>${formatMetricNumber(point.uniqueVisitors)}人</em></span>`).join("")}
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
  const params = new URLSearchParams({
    days: String(dashboardState.days),
    grain: dashboardState.grain
  });
  const res = await fetch(`${base}/summary?${params}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`统计服务不可用：HTTP ${res.status}`);
  return res.json();
}

async function render() {
  const summary = document.getElementById("metric-summary");
  summary.innerHTML = `<article><span>状态</span><strong>读取中…</strong></article>`;
  document.querySelectorAll("[data-grain]").forEach((button) => {
    button.classList.toggle("active", button.dataset.grain === dashboardState.grain);
  });
  const trendTitle = document.getElementById("trend-title");
  if (trendTitle) trendTitle.textContent = dashboardState.grain === "hour" ? "最近趋势（按小时，中国时区）" : "最近趋势（按天，中国时区）";
  try {
    const data = await loadMetrics();
    renderSummary(data);
    renderBars(document.getElementById("event-chart"), data.totals || [], (row) => eventName(row.event_type));
    renderTrend(document.getElementById("daily-chart"), data.trend || data.daily || [], data.grain || dashboardState.grain);
    renderTable(document.getElementById("top-items"), data.top_items || [], [
      { label: "类型", value: (row) => eventName(row.event_type) },
      { label: "对象", value: (row) => row.label || row.metric_key },
      { label: "Key", value: (row) => row.metric_key },
      { label: "次数", value: (row) => row.total }
    ]);
    renderTable(document.getElementById("recent-events"), data.recent || [], [
      { label: "时间", value: (row) => formatChinaTime(row.created_at) },
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
document.querySelectorAll("[data-grain]").forEach((button) => {
  button.addEventListener("click", () => {
    dashboardState.grain = button.dataset.grain === "hour" ? "hour" : "day";
    render();
  });
});
render();
