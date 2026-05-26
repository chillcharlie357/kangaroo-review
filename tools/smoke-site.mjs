import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const baseUrl = process.env.KANGAROO_BASE_URL || "http://127.0.0.1:18080/site/index.html";
const executablePath = process.env.PLAYWRIGHT_CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const screenshots = process.env.KANGAROO_SCREENSHOT_DIR || "/private/tmp";

const browser = await chromium.launch({ headless: true, executablePath });
const errors = [];

async function checkViewport(name, viewport) {
  const page = await browser.newPage({ viewport });
  page.on("pageerror", (error) => errors.push(`${name}: pageerror ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`${name}: console ${message.text()}`);
  });

  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".hero-panel");
  const title = await page.locator(".hero-panel h1").innerText();
  const overviewMetricBadges = await page.locator(".page-metrics .metric-badge").count();
  await page.click('button[data-lang="en"]');
  const englishNav = await page.locator(".nav-link").evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()).join("|"));
  await page.click('button[data-lang="mix"]');

  await page.click('a[data-page="knowledge"]');
  await page.waitForSelector(".knowledge-layout");
  await page.click('button[data-topic-group="modern"]');
  const detail = await page.locator(".topic-detail").innerText();
  const detailHasDeepDive = await page.locator(".deep-dive-row").count();
  await page.waitForFunction(() => {
    const image = document.querySelector(".diagram-card img");
    return image && image.complete && image.naturalWidth > 0;
  });
  const diagramBox = await page.locator(".diagram-card img").first().evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return {
      complete: element.complete,
      naturalWidth: element.naturalWidth,
      width: rect.width,
      height: rect.height
    };
  });
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-knowledge.png`, fullPage: true });

  await page.click('button[data-lang="zh"]');
  await page.click('a[data-page="papers"]');
  await page.waitForSelector(".question-item");
  const question = await page.locator(".question-item summary strong").first().innerText();
  const sampleAnswer = await page.locator(".sample-answer").first().innerText();

  await page.click('a[data-page="whiteboards"]');
  await page.waitForSelector(".whiteboard-thumb");
  await page.click(".whiteboard-thumb");
  await page.waitForSelector(".modal-image");
  const whiteboardNaturalWidth = await page.locator(".modal-image").evaluate((element) => element.naturalWidth);
  await page.locator('button[data-action="close-modal"]').last().click();

  await page.click('a[data-page="sources"]');
  await page.waitForSelector(".source-row");
  await page.click(".source-actions button");
  await page.waitForSelector(".source-preview");
  await page.waitForFunction(() => {
    const preview = document.querySelector(".source-preview");
    if (!preview) return false;
    return !preview.textContent.includes("正在读取本机抽取内容")
      && !preview.textContent.includes("Loading local preview");
  });
  const previewSample = await page.locator(".source-preview").innerText();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-source-modal.png`, fullPage: true });
  await page.locator('button[data-action="close-modal"]').last().click();
  const [sourcePopup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click(".source-actions a")
  ]);
  await sourcePopup.close();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-sources.png`, fullPage: true });
  const pageWidth = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  await page.close();

  return {
    name,
    title,
    overviewMetricBadges,
    englishNavHasOverview: englishNav.includes("Overview") && englishNav.includes("Sources"),
    detailHasModernTopic: /DDD|领域驱动|微服务|Enterprise|企业架构/.test(detail),
    detailHasDeepDive: detailHasDeepDive > 0,
    diagramRendered: diagramBox.complete && diagramBox.width > 120 && diagramBox.height > 60,
    diagramBox,
    questionHasChinese: /软件|架构|需求|列出|解释/.test(question),
    sampleAnswerHasChinese: /架构|需求|系统|质量|服务/.test(sampleAnswer),
    whiteboardNaturalWidth,
    sourcePreviewLoaded: !/预览失败|Preview failed/.test(previewSample),
    noHorizontalOverflow: pageWidth.scrollWidth <= pageWidth.clientWidth + 2,
    pageWidth,
    previewSample: previewSample.slice(0, 120)
  };
}

const desktop = await checkViewport("desktop", { width: 1440, height: 1000 });
const mobile = await checkViewport("mobile", { width: 390, height: 844 });
await browser.close();

for (const result of [desktop, mobile]) {
  for (const key of [
    "englishNavHasOverview",
    "detailHasModernTopic",
    "detailHasDeepDive",
    "diagramRendered",
    "questionHasChinese",
    "sampleAnswerHasChinese",
    "sourcePreviewLoaded",
    "noHorizontalOverflow"
  ]) {
    if (!result[key]) errors.push(`${result.name}: ${key} failed`);
  }
  if (result.overviewMetricBadges < 3) errors.push(`${result.name}: metric badges missing`);
  if (result.whiteboardNaturalWidth < 1000) errors.push(`${result.name}: whiteboard image did not load`);
}

console.log(JSON.stringify({ desktop, mobile, errors }, null, 2));
if (errors.length) process.exitCode = 1;
