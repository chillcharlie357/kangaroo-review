import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const baseUrl = process.env.KANGAROO_BASE_URL || "http://127.0.0.1:18080/site/index.html";
const executablePath = process.env.PLAYWRIGHT_CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const screenshots = process.env.KANGAROO_SCREENSHOT_DIR || "/private/tmp";

const browser = await chromium.launch({ headless: true, executablePath });
const errors = [];

async function checkViewport(name, viewport) {
  const page = await browser.newPage({
    viewport,
    acceptDownloads: true,
    extraHTTPHeaders: process.env.KANGAROO_SMOKE_COMMENTS === "1"
      ? { "Accept-Language": `smoke-${name}-${Date.now()}-${Math.random()}` }
      : {}
  });
  page.on("pageerror", (error) => errors.push(`${name}: pageerror ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`${name}: console ${message.text()}`);
  });

  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".hero-panel");
  const title = await page.locator(".hero-panel h1").innerText();
  const disclaimer = await page.locator(".disclaimer-band").innerText();
  const overviewMetricBadges = await page.locator(".page-metrics .metric-badge").count();
  const commentsPanelVisible = await page.locator(".comments-panel").count();
  const checklistToolsVisible = await page.locator(".checklist-tools").count();
  await page.waitForFunction(() => /\d+/.test(document.querySelector("[data-online-page]")?.textContent || ""), null, { timeout: 5000 });
  const onlineBadgeText = await page.locator("[data-online-indicator]").innerText();
  const onlineBadgeUpdated = /\d+/.test(onlineBadgeText) && /当前页在线|online here/.test(onlineBadgeText);
  await page.click('button[data-lang="en"]');
  const englishNav = await page.locator(".nav-link").evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()).join("|"));
  await page.click('button[data-lang="mix"]');

  await page.click('a[data-page="plan"]');
  await page.waitForSelector(".route-step .check-control input");
  await page.evaluate(() => {
    localStorage.setItem("kangaroo-review-checklist-v1", JSON.stringify({
      app: "kangaroo-review",
      schema: 1,
      items: {
        "route:step-1": {
          done: true,
          label: "legacy route key",
          updatedAt: "2026-05-27T00:00:00Z"
        }
      }
    }));
  });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector(".route-step .check-control input");
  const checklistLegacyMigrated = await page.evaluate(() => {
    const data = JSON.parse(localStorage.getItem("kangaroo-review-checklist-v1") || "{}");
    return data.items?.["route:baseline-points"]?.done === true;
  });
  const checklistRestored = await page.locator(".route-step .check-control input").first().isChecked();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click('[data-action="export-checklist"]')
  ]);
  const exportedChecklistPath = `${screenshots}/kangaroo-review-${name}-checklist.txt`;
  await download.saveAs(exportedChecklistPath);
  await page.evaluate(() => localStorage.removeItem("kangaroo-review-checklist-v1"));
  await page.setInputFiles("#checklist-import-input", exportedChecklistPath);
  await page.waitForFunction(() => {
    const data = JSON.parse(localStorage.getItem("kangaroo-review-checklist-v1") || "{}");
    return data.items?.["route:baseline-points"]?.done === true;
  });
  const checklistRoundTripped = await page.locator(".route-step .check-control input").first().isChecked();
  const priorityBadgesSingleLine = await page.locator(".priority-lane header > span").evaluateAll((nodes) => nodes.every((node) => {
    const rectCount = node.getClientRects().length;
    return rectCount === 1 && getComputedStyle(node).whiteSpace === "nowrap";
  }));
  let commentPosted = true;
  if (process.env.KANGAROO_SMOKE_COMMENTS === "1") {
    const body = `smoke comment ${Date.now()}`;
    await page.evaluate(() => {
      localStorage.setItem("kangaroo-review-browser-id", `smoke-${Date.now()}-${Math.random()}`);
    });
    await page.fill(".comment-form textarea", body);
    await page.click(".comment-form button");
    await page.waitForFunction((expected) => {
      return document.querySelector(".comment-list")?.textContent.includes(expected);
    }, body, { timeout: 5000 });
    const commentsText = await page.locator(".comment-list").innerText();
    commentPosted = commentsText.includes(body);
  }

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
  await page.click('button[data-lang="zh"]');
  await page.waitForFunction(() => document.querySelector(".diagram-card img")?.getAttribute("src")?.includes(".zh.svg"));
  const zhDiagramSrc = await page.locator(".diagram-card img").first().getAttribute("src");
  await page.click('button[data-lang="en"]');
  await page.waitForFunction(() => {
    const src = document.querySelector(".diagram-card img")?.getAttribute("src") || "";
    return src && !src.includes(".zh.svg");
  });
  const enDiagramSrc = await page.locator(".diagram-card img").first().getAttribute("src");
  await page.click('button[data-lang="mix"]');
  const diagramLanguageSwitches = zhDiagramSrc.includes(".zh.svg") && !enDiagramSrc.includes(".zh.svg");
  const diagramAssetChecks = await page.evaluate(async () => {
    const diagrams = window.reviewContent?.diagrams || [];
    const pickSource = (diagram, lang) => {
      if (lang === "zh") return diagram.srcZh || diagram.src || diagram.srcEn;
      if (lang === "en") return diagram.srcEn || diagram.src || diagram.srcZh;
      return diagram.src || diagram.srcZh || diagram.srcEn;
    };
    const loadImage = (src) => new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve({ src, loaded: true, naturalWidth: image.naturalWidth });
      image.onerror = () => resolve({ src, loaded: false, naturalWidth: 0 });
      image.src = src;
    });
    const checks = [];
    for (const diagram of diagrams) {
      for (const lang of ["zh", "en"]) {
        const src = pickSource(diagram, lang);
        const result = await loadImage(src);
        checks.push({
          id: diagram.id,
          lang,
          src,
          loaded: result.loaded,
          naturalWidth: result.naturalWidth
        });
      }
    }
    return checks;
  });
  const allDiagramAssetsLoaded = diagramAssetChecks.every((item) => item.loaded && item.naturalWidth > 100);
  const checkedDiagramAssetCount = diagramAssetChecks.length;
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-knowledge.png`, fullPage: true });
  await page.evaluate(() => {
    window.__kangarooTrackPayloads = [];
    if (window.__kangarooFetchWrapped) return;
    const originalFetch = window.fetch.bind(window);
    window.fetch = (input, init = {}) => {
      const url = typeof input === "string" ? input : input?.url || "";
      if (url.includes("/track") && init?.body) {
        try {
          window.__kangarooTrackPayloads.push(JSON.parse(init.body));
        } catch {
          window.__kangarooTrackPayloads.push({ parseError: true });
        }
      }
      return originalFetch(input, init);
    };
    window.__kangarooFetchWrapped = true;
  });
  const relatedQuestionLink = page.locator('.mini-question-list button[data-action="toggle-inline-question"]').first();
  const relatedQuestionId = await relatedQuestionLink.getAttribute("data-question-id");
  await relatedQuestionLink.click();
  await page.waitForFunction((id) => {
    const body = document.querySelector(`.mini-question-body[data-question-id="${id}"]`);
    if (!body || body.hidden) return false;
    const rect = body.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    const trackCount = window.__kangarooTrackPayloads?.filter((payload) => payload.event_type === "question_view" && String(payload.key || "").includes(id)).length || 0;
    const tracked = trackCount === 1;
    return inView && tracked;
  }, relatedQuestionId, { timeout: 5000 });
  const relatedQuestionJumped = await page.evaluate((id) => {
    const body = document.querySelector(`.mini-question-body[data-question-id="${id}"]`);
    if (!body || body.hidden) return { opened: false, inView: false, tracked: false, hash: window.location.hash };
    const rect = body.getBoundingClientRect();
    return {
      opened: true,
      inView: rect.bottom > 0 && rect.top < window.innerHeight,
      trackCount: window.__kangarooTrackPayloads?.filter((payload) => payload.event_type === "question_view" && String(payload.key || "").includes(id)).length || 0,
      tracked: (window.__kangarooTrackPayloads?.filter((payload) => payload.event_type === "question_view" && String(payload.key || "").includes(id)).length || 0) === 1,
      hash: window.location.hash
    };
  }, relatedQuestionId);
  const relatedChecklistKey = await page
    .locator(`.mini-question-body[data-question-id="${relatedQuestionId}"] input[data-check-key]`)
    .first()
    .getAttribute("data-check-key");
  await page
    .locator(`.mini-question-body[data-question-id="${relatedQuestionId}"] input[data-check-key]`)
    .first()
    .check();

  await page.click('button[data-lang="zh"]');
  await page.click('a[data-page="papers"]');
  await page.waitForSelector(".question-item");
  await page.selectOption("#cluster-select", "all");
  const drawingGuideCount = await page.locator(".drawing-guide").count();
  const drawingGuideText = drawingGuideCount
    ? await page.locator(".drawing-guide").first().textContent()
    : "";
  const relatedQuestionChecklistSynced = await page.evaluate((key) => {
    return [...document.querySelectorAll("input[data-check-key]")]
      .some((input) => input.dataset.checkKey === key && input.checked);
  }, relatedChecklistKey);
  const questionCount = await page.locator(".question-item").count();
  const question = await page.locator(".question-item summary strong").first().innerText();
  const sampleAnswer = await page.locator(".sample-answer").evaluateAll((nodes) => {
    const texts = nodes.map((node) => node.innerText || "");
    return texts.find((text) => /架构|需求|系统|质量|服务/.test(text)) || texts[0] || "";
  });

  await page.click('a[data-page="whiteboards"]');
  await page.waitForSelector(".whiteboard-thumb");
  const whiteboardCount = await page.locator(".whiteboard-row").count();
  const aiWhiteboard = page.locator('.whiteboard-row:has-text("AI Wiki") .whiteboard-thumb').first();
  const hasAiWhiteboard = await aiWhiteboard.count();
  await (hasAiWhiteboard ? aiWhiteboard : page.locator(".whiteboard-thumb").first()).click();
  await page.waitForSelector(".modal-image");
  const whiteboardNaturalWidth = await page.locator(".modal-image").evaluate((element) => element.naturalWidth);
  await page.locator('button[data-action="close-modal"]').last().click();

  await page.click('a[data-page="sources"]');
  await page.waitForSelector(".source-row");
  const sourceGroups = await page.locator("#source-select option").evaluateAll((nodes) => nodes.map((node) => node.value));
  await page.selectOption("#source-select", "peer_ai_notes");
  await page.waitForSelector(".source-row");
  const aiSourceText = await page.locator(".source-row").first().innerText();
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
  await page.click(".reward-trigger");
  await page.waitForSelector(".reward-modal .reward-qr");
  await page.waitForFunction(() => {
    const image = document.querySelector(".reward-qr");
    return image && image.complete && image.naturalWidth > 100;
  });
  const rewardText = await page.locator(".reward-modal").innerText();
  const rewardImageLoaded = await page.locator(".reward-qr").evaluate((element) => element.complete && element.naturalWidth > 100);
  await page.click('button[data-reward-provider="alipay"]');
  await page.waitForFunction(() => {
    const image = document.querySelector(".reward-qr");
    return image && image.complete && image.naturalWidth > 100 && image.getAttribute("src").includes("alipay");
  });
  const rewardAlipayLoaded = await page.locator(".reward-qr").evaluate((element) => element.getAttribute("src").includes("alipay") && element.naturalWidth > 100);
  await page.locator('button[data-action="close-modal"]').last().click();
  await page.screenshot({ path: `${screenshots}/kangaroo-review-${name}-sources.png`, fullPage: true });
  const pageWidth = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  await page.close();

  return {
    name,
    title,
    disclaimerHasCodex: /Codex|GPT-5\.5/.test(disclaimer),
    overviewMetricBadges,
    onlineBadgeUpdated,
    onlineBadgeText,
    checklistToolsVisible: checklistToolsVisible > 0,
    commentsPanelVisible: commentsPanelVisible > 0,
    checklistLegacyMigrated,
    checklistRestored,
    checklistRoundTripped,
    priorityBadgesSingleLine,
    commentPosted,
    englishNavHasOverview: englishNav.includes("Overview") && englishNav.includes("Sources"),
    detailHasModernTopic: /DDD|领域驱动|微服务|Enterprise|企业架构/.test(detail),
    detailHasDeepDive: detailHasDeepDive > 0,
    diagramRendered: diagramBox.complete && diagramBox.width > 120 && diagramBox.height > 60,
    diagramLanguageSwitches,
    allDiagramAssetsLoaded,
    checkedDiagramAssetCount,
    zhDiagramSrc,
    enDiagramSrc,
    diagramBox,
    relatedQuestionJumped,
    relatedQuestionChecklistSynced,
    questionCount,
    questionHasChinese: /软件|架构|需求|列出|解释/.test(question),
    sampleAnswerHasChinese: /架构|需求|系统|质量|服务/.test(sampleAnswer),
    drawingGuideVisible: drawingGuideCount > 0 && /画|Draw|How to draw|考场/.test(drawingGuideText),
    drawingGuideCount,
    whiteboardCount,
    hasAiWhiteboard: hasAiWhiteboard > 0,
    whiteboardNaturalWidth,
    sourceGroups,
    hasNewSourceGroups: sourceGroups.includes("primary_review_recording")
      && sourceGroups.includes("primary_review_outline")
      && sourceGroups.includes("review_class_slides")
      && sourceGroups.includes("peer_ai_notes")
      && sourceGroups.includes("archived_feishu_notes"),
    aiSourceVisible: /AI 整理|Wiki|画板|期末复习/.test(aiSourceText),
    sourcePreviewLoaded: !/预览失败|Preview failed/.test(previewSample),
    rewardHasCopy: /报销一点Codex|Codex bill|谢谢|Thank you/.test(rewardText),
    rewardImageLoaded,
    rewardAlipayLoaded,
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
    "diagramLanguageSwitches",
    "allDiagramAssetsLoaded",
    "relatedQuestionJumped",
    "relatedQuestionChecklistSynced",
    "hasNewSourceGroups",
    "hasAiWhiteboard",
    "aiSourceVisible",
    "questionHasChinese",
    "sampleAnswerHasChinese",
    "drawingGuideVisible",
    "sourcePreviewLoaded",
    "disclaimerHasCodex",
    "rewardHasCopy",
    "rewardImageLoaded",
    "rewardAlipayLoaded",
    "checklistToolsVisible",
    "commentsPanelVisible",
    "onlineBadgeUpdated",
    "checklistLegacyMigrated",
    "checklistRestored",
    "checklistRoundTripped",
    "priorityBadgesSingleLine",
    "commentPosted",
    "noHorizontalOverflow"
  ]) {
    if (key === "relatedQuestionJumped") {
      const jump = result[key] || {};
      if (!(jump.opened && jump.inView && jump.tracked && jump.hash === "#knowledge")) {
        errors.push(`${result.name}: relatedQuestionJumped failed ${JSON.stringify(jump)}`);
      }
      continue;
    }
    if (!result[key]) errors.push(`${result.name}: ${key} failed`);
  }
  if (result.overviewMetricBadges < 3) errors.push(`${result.name}: metric badges missing`);
  if (result.questionCount < 39) errors.push(`${result.name}: expected at least 39 question clusters`);
  if (result.whiteboardCount < 4) errors.push(`${result.name}: expected at least 4 whiteboards`);
  if (result.whiteboardNaturalWidth < 1000) errors.push(`${result.name}: whiteboard image did not load`);
}

console.log(JSON.stringify({ desktop, mobile, errors }, null, 2));
if (errors.length) process.exitCode = 1;
