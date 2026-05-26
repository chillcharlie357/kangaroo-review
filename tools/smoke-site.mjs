import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const baseUrl = process.env.KANGAROO_BASE_URL || "http://127.0.0.1:18180/site/index.html";
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

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const title = await page.locator(".hero-panel h1").innerText();
  await page.click('button[data-lang="en"]');
  const englishNav = await page.locator(".nav-link").evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()).join("|"));
  await page.click('button[data-lang="mix"]');

  await page.click('a[data-page="knowledge"]');
  await page.waitForSelector(".knowledge-layout");
  await page.click('button[data-topic-group="modern"]');
  await page.waitForTimeout(100);
  const detail = await page.locator(".topic-detail").innerText();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-knowledge.png`, fullPage: true });

  await page.click('button[data-lang="zh"]');
  await page.click('a[data-page="papers"]');
  await page.waitForSelector(".question-item");
  const question = await page.locator(".question-item summary strong").first().innerText();

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
  await page.waitForTimeout(900);
  const previewSample = await page.locator(".source-preview").innerText();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-source-modal.png`, fullPage: true });
  await page.locator('button[data-action="close-modal"]').last().click();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-sources.png`, fullPage: true });
  await page.close();

  return {
    name,
    title,
    englishNavHasOverview: englishNav.includes("Overview") && englishNav.includes("Sources"),
    detailHasModernTopic: /DDD|领域驱动|微服务|Enterprise|企业架构/.test(detail),
    questionHasChinese: /软件|架构|需求|列出|解释/.test(question),
    whiteboardNaturalWidth,
    sourcePreviewLoaded: !/预览失败|Preview failed/.test(previewSample),
    previewSample: previewSample.slice(0, 120)
  };
}

const desktop = await checkViewport("desktop", { width: 1440, height: 1000 });
const mobile = await checkViewport("mobile", { width: 390, height: 844 });
await browser.close();

console.log(JSON.stringify({ desktop, mobile, errors }, null, 2));
