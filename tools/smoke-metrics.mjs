import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const baseUrl = process.env.KANGAROO_METRICS_URL || "http://127.0.0.1:18080/site/metrics.html";
const executablePath = process.env.PLAYWRIGHT_CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await chromium.launch({ headless: true, executablePath });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];

page.on("pageerror", (error) => errors.push(`pageerror ${error.message}`));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(`console ${message.text()}`);
});

await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
await page.waitForSelector(".metrics-dashboard");
await page.waitForFunction(() => {
  const summary = document.querySelector("#metric-summary");
  return summary && !summary.textContent.includes("读取中");
});

const result = await page.evaluate(() => ({
  title: document.title,
  summaryText: document.querySelector("#metric-summary")?.textContent || "",
  eventRows: document.querySelectorAll("#event-chart .bar-row").length,
  topRows: document.querySelectorAll("#top-items tbody tr").length,
  hasError: /统计服务不可用|不可用/.test(document.body.textContent || ""),
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth
}));

await browser.close();

if (!result.title.includes("Metrics")) errors.push("metrics title missing");
if (result.hasError) errors.push("metrics dashboard reports unavailable service");
if (!/总事件/.test(result.summaryText)) errors.push("summary cards missing");
if (result.eventRows < 1) errors.push("event chart rows missing");
if (result.scrollWidth > result.clientWidth + 2) errors.push("dashboard has horizontal overflow");

console.log(JSON.stringify({ ...result, errors }, null, 2));
if (errors.length) process.exitCode = 1;
