import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const url = process.argv[2] || "https://mubu.com/doc/Klk_SUrzZB";
const outMd = process.argv[3] || "data/extracted/raw/mubu-softsys-architecture-outline.md";
const outJson = process.argv[4] || "data/extracted/raw/mubu-softsys-architecture.raw.json";
const chrome = process.env.PLAYWRIGHT_CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function decodeHtml(value) {
  return String(value || "")
    .replace(/<span class=" formula"[^>]*>.*?<\/span>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function colorsFrom(html) {
  const colors = new Set();
  for (const match of String(html || "").matchAll(/text-color-([a-z]+)/g)) {
    colors.add(match[1]);
  }
  return [...colors];
}

const colorName = {
  yellow: "orange/must-memorize",
  red: "red/must-know",
  blue: "blue/concept",
  green: "green/emphasis"
};

function walk(nodes, depth = 0, rows = []) {
  for (const node of nodes || []) {
    const text = decodeHtml(node.text);
    const note = decodeHtml(node.note);
    const colors = [...new Set([...colorsFrom(node.text), ...colorsFrom(node.note)])];
    const suffix = [];
    if (colors.length) suffix.push(`color: ${colors.map((color) => colorName[color] || color).join(", ")}`);
    if (note) suffix.push(`note: ${note}`);
    if (text || note) {
      rows.push(`${"  ".repeat(depth)}- ${text || "(empty)"}${suffix.length ? ` (${suffix.join("; ")})` : ""}`);
    }
    walk(node.children, depth + 1, rows);
  }
  return rows;
}

function tally(nodes, counts = { nodes: 0, colors: {} }) {
  for (const node of nodes || []) {
    counts.nodes += 1;
    for (const color of [...colorsFrom(node.text), ...colorsFrom(node.note)]) {
      counts.colors[color] = (counts.colors[color] || 0) + 1;
    }
    tally(node.children, counts);
  }
  return counts;
}

let sharePayload = null;
const browser = await chromium.launch({ headless: true, executablePath: chrome });
const page = await browser.newPage({ viewport: { width: 1600, height: 1200 } });
page.on("response", async (response) => {
  if (response.url().includes("/v3/api/document/share/get")) {
    sharePayload = await response.json();
  }
});
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await browser.close();

if (!sharePayload || sharePayload.code !== 0) {
  throw new Error("Mubu share payload missing or invalid");
}

const definition = JSON.parse(sharePayload.data.content.definition);
const counts = tally(definition.nodes);
const rows = walk(definition.nodes);
const markdown = [
  "# Mubu: Software System Design - Software Architecture Design",
  "",
  `URL: ${url}`,
  "",
  "Extracted on: 2026-05-27",
  `Document id: ${sharePayload.data.doc.id}`,
  `Definition version: ${sharePayload.data.doc.definitionVersion}`,
  `Total nodes extracted: ${counts.nodes}`,
  `Color counts: ${JSON.stringify(counts.colors)}`,
  "",
  "Color guidance from the user: orange = must memorize, red = must know, blue = know concept, green = 2025-only emphasis. Mubu class names expose yellow/red/blue/green; yellow is treated as the orange/must-memorize bucket.",
  "",
  "## Full Outline",
  "",
  ...rows,
  ""
].join("\n");

fs.writeFileSync(outMd, markdown);
fs.writeFileSync(outJson, JSON.stringify(sharePayload.data, null, 2));
console.log(`wrote ${outMd} with ${counts.nodes} nodes and ${rows.length} rendered lines`);
