import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const qPath = path.join(cwd, "site/data/questions.json");
const jsPath = path.join(cwd, "site/data/questions.js");
const questions = JSON.parse(fs.readFileSync(qPath, "utf8"));
const checkMode = process.argv.includes("--check");

const requiredPrimaryEvidence = new Set([
  "data/review-class/complete-review-minutes.md",
  "data/复习课完整录音-张贺吕骏李杉杉.txt"
]);

const reviewClassSlideEvidence = [
  "data/extracted/slides/slides__Lecture 14: Course Review - softarch2026-review-1.txt",
  "data/extracted/slides/slides__Lecture 14: Course Review - 3 - 课程复习.txt",
  "data/extracted/slides/slides__Lecture 3: Architectural Patterns - 软件架构模式.txt"
];

const allowedDiagramIds = new Set([
  "quality-scenario-table",
  "architecture-design-process",
  "add-roadmap",
  "utility-tree",
  "review-4-plus-1-views",
  "review-architecture-evolution",
  "review-architecture-units",
  "microservice-style-comparison",
  "review-microservice-decomposition",
  "ddd-core-model",
  "enterprise-4a",
  "three-tier-reference",
  "cache-invalidation-reference",
  "mvc-cnc-reference",
  "soa-cnc-reference",
  "pipe-filter-text-pipeline",
  "broker-pattern-topology",
  "atam-phase-outputs"
]);

const oldDiagramIds = [
  "quality-scenario",
  "atam-utility-tree",
  "microservice-migration",
  "ddd-context-map",
  "three-tier",
  "cache-invalidation",
  "patterns-taxonomy",
  "enterprise-architecture",
  "reuse-variability",
  "views-and-beyond"
];
const oldDiagramEvidence = oldDiagramIds.map((id) => `site/assets/diagrams/${id}.svg`);

const expectedPriorities = {
  q_arch_design_structure: "P0",
  q_req_quality_asr: "P0",
  q_requirement_kinds: "P0",
  q_quality_scenarios: "P0",
  q_asr_sources: "P0",
  q_arch_process: "P0",
  q_add_process: "P0",
  q_style_view_mapping: "P0",
  q_different_views: "P0",
  q_doc_package: "P0",
  q_4_plus_1: "P0",
  q_patterns_tactics: "P0",
  q_microservices_vs_soa: "P0",
  q_microservices_characteristics: "P0",
  q_design_decisions_importance: "P0",
  q_layered_style: "P1",
  q_layered_vs_multitier: "P1",
  q_soa_quality: "P1",
  q_operability_performance_scenarios: "P1",
  q_microservice_food_delivery_design: "P1",
  q_enterprise_architecture_methods: "P1",
  q_arch_sources: "P1",
  q_stakeholder_concerns: "P1",
  q_cnc_mvc: "P1"
};

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function writeAtomic(filePath, contents) {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(tempPath, contents);
  fs.renameSync(tempPath, filePath);
}

function validateQuestions(items) {
  const ids = new Set();
  const errors = [];
  for (const question of items) {
    const id = question.id || question.canonical_question;
    if (!id) errors.push("Question without id");
    if (ids.has(id)) errors.push(`Duplicate question id: ${id}`);
    ids.add(id);

    for (const source of question.source_paths || []) {
      if (String(source).startsWith("data/feishu/")) {
        errors.push(`${id} still uses archived Feishu notes as evidence`);
      }
      if (oldDiagramEvidence.includes(source)) {
        errors.push(`${id} still references old untrusted diagram evidence: ${source}`);
      }
    }

    for (const source of question.source_audit_sources || []) {
      if (String(source).startsWith("data/feishu/")) {
        errors.push(`${id} still audits against archived Feishu notes`);
      }
      if (oldDiagramEvidence.includes(source)) {
        errors.push(`${id} still audits against old untrusted diagram evidence: ${source}`);
      }
    }

    for (const evidence of requiredPrimaryEvidence) {
      if (!(question.source_paths || []).includes(evidence)) {
        errors.push(`${id} is missing primary evidence ${evidence}`);
      }
    }

    const combinedSources = [...(question.source_paths || []), ...(question.source_audit_sources || [])];
    if (["P0", "P1"].includes(question.priority) && !combinedSources.some((source) => reviewClassSlideEvidence.includes(source))) {
      errors.push(`${id} is missing a review-class slide evidence baseline`);
    }

    if (question.diagram_id && !allowedDiagramIds.has(question.diagram_id)) {
      errors.push(`${id} uses unregistered or untrusted diagram id: ${question.diagram_id}`);
    }

    if (!question.source_audit_zh || !question.source_audit_en || !question.source_audit_sources?.length) {
      errors.push(`${id} lacks grounded audit fields`);
    }

    if (expectedPriorities[id] && question.priority !== expectedPriorities[id]) {
      errors.push(`${id} priority should be ${expectedPriorities[id]}, got ${question.priority}`);
    }
  }

  if (items.length !== 40) errors.push(`Expected 40 question clusters, found ${items.length}`);
  return errors;
}

const errors = validateQuestions(questions);
if (errors.length) {
  throw new Error(errors.join("\n"));
}

const normalized = questions.map((question) => ({
  ...question,
  source_paths: unique(question.source_paths || []),
  source_audit_sources: unique(question.source_audit_sources || [])
}));

const jsonOutput = `${JSON.stringify(normalized, null, 2)}\n`;
const jsOutput = `window.reviewQuestions = ${JSON.stringify(normalized, null, 2)};\n`;

if (checkMode) {
  if (fs.readFileSync(qPath, "utf8") !== jsonOutput) {
    throw new Error(`${path.relative(cwd, qPath)} is not normalized`);
  }
  if (fs.readFileSync(jsPath, "utf8") !== jsOutput) {
    throw new Error(`${path.relative(cwd, jsPath)} is not normalized`);
  }
} else {
  writeAtomic(qPath, jsonOutput);
  writeAtomic(jsPath, jsOutput);
}

console.log(JSON.stringify({ groundedQuestions: normalized.length, check: checkMode }, null, 2));
