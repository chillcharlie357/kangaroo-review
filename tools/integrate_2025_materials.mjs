import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const qPath = path.join(cwd, "site/data/questions.json");
const sPath = path.join(cwd, "site/data/sources.json");
const questions = JSON.parse(fs.readFileSync(qPath, "utf8"));
const sources = JSON.parse(fs.readFileSync(sPath, "utf8"));

const reason = {
  P0: {
    zh: "今年复习课主纲与 2025 最新相邻课程资料同时命中，优先练到能直接成段作答。",
    en: "Hit by the current review-class outline and the latest 2025 adjacent-course evidence; practice until you can write a full answer."
  },
  P1: {
    zh: "复习课或最新前人资料覆盖，且历史题高频；适合作为简答题保底。",
    en: "Covered by review-class or latest senior notes and recurring in past papers; good short-answer baseline."
  },
  P2: {
    zh: "历史高频或补充背景，但今年复习课未放在最高优先级；保留骨架即可。",
    en: "Historically useful or supporting background, but not highest priority in this review class; keep the skeleton."
  }
};

const p0 = new Set([
  "q_requirement_kinds",
  "q_quality_scenarios",
  "q_add_process",
  "q_microservices_vs_soa"
]);

const p1 = new Set([
  "q_arch_sources",
  "q_arch_design_structure",
  "q_req_quality_asr",
  "q_asr_sources",
  "q_arch_process",
  "q_style_view_mapping",
  "q_different_views",
  "q_doc_package",
  "q_4_plus_1",
  "q_patterns_tactics",
  "q_generic_design_strategies",
  "q_cnc_mvc",
  "q_broker_pattern",
  "q_layered_style",
  "q_layered_vs_multitier",
  "q_soa_quality",
  "q_soa_ws_esb",
  "q_stakeholder_concerns",
  "q_design_decisions_importance",
  "q_enterprise_architecture_methods"
]);

for (const question of questions) {
  const level = p0.has(question.id) ? "P0" : p1.has(question.id) ? "P1" : "P2";
  question.priority = level;
  question.priority_reason_zh = reason[level].zh;
  question.priority_reason_en = reason[level].en;
}

const customPriorityReasons = {
  q_requirement_kinds: {
    zh: "今年复习课明确回到功能需求、质量需求和约束作为架构输入，且 2025 最新相邻课程资料命中；优先练到能直接成段作答。",
    en: "The current review class explicitly revisits functional requirements, quality requirements, and constraints as architecture inputs, and the latest 2025 adjacent-course evidence hits the same topic; practice until you can write a full answer."
  },
  q_cnc_soa: {
    zh: "具体 C&C + SOA 问法来自相邻课程和 Mubu；今年复习课保留 SOA 演进/模式理解，不把该题置于主线。保留为辅助辨析题。",
    en: "This exact C&C + SOA wording comes from adjacent-course/Mubu material. The current review class keeps SOA as architectural evolution/pattern understanding, so keep this as a supporting distinction question."
  },
  q_availability_mtbf_mttr: {
    zh: "可用性是质量属性例子，但 MTBF/MTTR 计算题源主要是 2022 相邻课程；今年复习只需作为可用性场景的辅助记忆。",
    en: "Availability is a useful quality-attribute example, but the MTBF/MTTR calculation prompt mainly comes from the 2022 adjacent course; keep it as supporting memory for availability scenarios."
  },
  q_pipe_filter_text_design: {
    zh: "Pipe-and-Filter 设计题来自 2021 相邻课程；只保留架构组件/连接器/质量取舍，排除 Java 代码实现和详细设计部分。",
    en: "This Pipe-and-Filter design prompt comes from the 2021 adjacent course. Keep architecture components/connectors/tradeoffs only, excluding Java implementation and detailed-design parts."
  },
  q_pattern_architecture_boundary: {
    zh: "该题用于防止把 GoF 模式和架构模式混淆；今年复习课更强调架构演进、时代矛盾和适用场景，因此作为辅助辨析题。",
    en: "This helps avoid confusing GoF patterns with architectural patterns. The current review class emphasizes evolution, historical tensions, and applicability, so keep it as a supporting distinction question."
  }
};

for (const question of questions) {
  const customReason = customPriorityReasons[question.id];
  if (!customReason) continue;
  question.priority_reason_zh = customReason.zh;
  question.priority_reason_en = customReason.en;
}

function addEvidence(id, appearances, sourcePaths) {
  const question = questions.find((item) => item.id === id);
  if (!question) return;
  question.appearances = [...new Set([...(question.appearances || []), ...appearances])];
  question.source_paths = [...new Set([...(question.source_paths || []), ...sourcePaths])];
}

const broad2025Sources = [
  "raw/25软件系统设计回忆版.jpg",
  "data/extracted/raw/softsys-2025-architecture-filter.md",
  "raw/考前关键词提示版本.pdf",
  "raw/老师复习大纲（答案方式）.docx",
  "https://mubu.com/doc/Klk_SUrzZB",
  "data/extracted/raw/mubu-softsys-architecture-outline.md"
];

addEvidence("q_requirement_kinds", ["2025 softsys recall", "2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], broad2025Sources);
addEvidence("q_quality_scenarios", ["2025 softsys recall", "2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], broad2025Sources);
addEvidence("q_cnc_soa", ["2025 softsys recall", "Mubu softsys architecture notes"], ["raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);
addEvidence("q_add_process", ["2025 softsys recall", "2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], broad2025Sources);
addEvidence("q_microservices_vs_soa", ["2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], ["raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);
addEvidence("q_generic_design_strategies", ["2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], ["raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);
addEvidence("q_design_decisions_importance", ["2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], ["raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);
addEvidence("q_patterns_tactics", ["2025 keyword hints", "Mubu softsys architecture notes"], ["raw/考前关键词提示版本.pdf", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);
addEvidence("q_4_plus_1", ["2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes"], ["raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"]);

const newQuestions = [
  {
    id: "q_operability_performance_scenarios",
    cluster: "quality_attributes_asr",
    priority: "P1",
    priority_reason_zh: "质量属性六要素是今年复习课明确主线；可操作性/性能这一组合来自 2025 相邻课程和前人资料，作为六要素模板的高频练习例。",
    priority_reason_en: "The six-part quality scenario template is current review-class mainline; the operability/performance pairing comes from 2025 adjacent/senior material, so use it as a high-frequency practice example.",
    canonical_question: "Describe operability and performance quality attribute scenarios.",
    question_zh: "如何描述可操作性和性能的质量属性场景？",
    appearances: ["2025 softsys recall", "2025 keyword hints", "2025 review outline"],
    source_paths: ["raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md", "raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx"],
    recurring_terms: ["operability", "performance", "quality attribute scenario", "response measure"],
    likely_answer_pattern: "Use the same six-part scenario template. For operability, focus on operator actions, diagnosis, configuration, rollback, or monitoring. For performance, focus on workload, latency/throughput, and measurable response time.",
    question_en: "Describe operability and performance quality attribute scenarios.",
    answer_zh: "仍用六要素模板。可操作性写操作者在某环境下执行诊断、配置、回滚或监控操作，系统给出可理解、可执行的响应，并用完成时间/错误率/恢复时间度量。性能写用户或外部系统在峰值/正常负载下发起请求，目标制品在限定延迟、吞吐或资源占用内响应。",
    topicIds: ["quality", "quality-tactics"],
    english_keywords: ["source of stimulus", "stimulus", "environment", "artifact", "response", "response measure", "operability", "performance"],
    diagram_id: "quality-scenario-table",
    sample_answer_zh: "可操作性场景：在系统正常运行且订单服务告警时，运维人员通过监控控制台查看异常订单链路，系统应展示相关日志、指标和依赖服务状态，并允许一键回滚到上一个稳定版本；响应度量是 2 分钟内定位故障服务，5 分钟内完成回滚，且回滚过程不影响已支付订单。性能场景：在晚高峰每秒 1000 个下单请求下，用户向订单服务提交订单，系统应完成校验、创建订单并返回结果；响应度量是 95% 请求在 2 秒内返回，错误率低于 0.1%。",
    sample_answer_en: "Operability scenario: during normal operation, an operator receives an order-service alarm and uses the console to inspect traces, logs, metrics, and dependencies, then rolls back to a stable version. The measure is diagnosis within 2 minutes and rollback within 5 minutes without affecting paid orders. Performance scenario: under 1000 order requests per second at peak time, 95% of order submissions return within 2 seconds and error rate stays below 0.1%.",
    visual_hint_zh: "两个场景都画同一张六要素图，只是 stimulus、artifact、response measure 换成“运维操作”和“高并发请求”。",
    visual_hint_en: "Use the same six-part diagram for both; change the stimulus/artifact/measure for operator action vs high-load request."
  },
  {
    id: "q_microservices_characteristics",
    cluster: "microservices_design",
    priority: "P0",
    priority_reason_zh: reason.P0.zh,
    priority_reason_en: reason.P0.en,
    canonical_question: "Describe the main characteristics of microservice architecture.",
    question_zh: "说明微服务架构的主要特征。",
    appearances: ["2025 softsys recall", "2025 keyword hints", "2025 review outline", "Mubu softsys architecture notes", "Li review class"],
    source_paths: ["raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md", "raw/考前关键词提示版本.pdf", "raw/老师复习大纲（答案方式）.docx", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md", "data/review-class/complete-review-minutes.md"],
    recurring_terms: ["microservices", "business capability", "independent deployment", "decentralized governance", "service-owned data", "infrastructure automation"],
    likely_answer_pattern: "State microservices as small independently deployable services organized around business capabilities, with service autonomy, decentralized governance/data, lightweight communication, and automated infrastructure; finish with distributed-system tradeoffs.",
    question_en: "Describe the main characteristics of microservice architecture.",
    answer_zh: "微服务把单体应用拆成围绕业务能力组织的小服务。每个服务可独立开发、测试、部署和扩展，服务之间通过轻量通信协作；团队和技术治理更去中心化，服务通常拥有自己的数据边界，并依赖 CI/CD、容器、服务发现、监控和链路追踪等自动化基础设施。代价是网络失败、分布式事务、一致性和运维复杂度上升。",
    topicIds: ["microservices", "patterns", "design-playbook"],
    english_keywords: ["small services", "business capability", "independent deployment", "service autonomy", "decentralized data", "infrastructure automation"],
    diagram_id: "microservice-style-comparison",
    sample_answer_zh: "微服务架构的主要特征可以背六点：第一，通过服务组件化，把业务能力封装为可独立替换和升级的服务；第二，围绕业务能力组织团队和系统边界；第三，高内聚低耦合，服务内部保有自己的领域逻辑，服务间减少直接依赖；第四，去中心化治理和数据管理，不同服务可选不同技术栈并拥有自己的数据库；第五，基础设施自动化，通过 CI/CD、容器、服务发现、监控等支撑频繁交付；第六，服务设计与演进，允许服务独立演进并通过高可用设计容忍失败。",
    sample_answer_en: "Six characteristics: componentization via services, organization around business capabilities, high cohesion and loose coupling, decentralized governance/data ownership, infrastructure automation such as CI/CD and containers, and evolutionary service design with resilience.",
    visual_hint_zh: "可画成“业务能力 -> 服务边界 -> 独立部署/自有数据库/自动化平台”的三层图。",
    visual_hint_en: "Draw business capabilities mapped to service boundaries, each with independent deployment, owned data, and automation support."
  },
  {
    id: "q_microservice_food_delivery_design",
    cluster: "design_diagrams",
    priority: "P1",
    priority_reason_zh: "微服务拆分与设计是今年主线，但外卖平台具体场景来自 2025 相邻课程；作为设计题练习模板保留，不高于微服务特性/对比本体。",
    priority_reason_en: "Microservice decomposition/design is current mainline, but the food-delivery scenario is from the 2025 adjacent course. Keep it as a design-practice template below core microservice characteristics/comparisons.",
    canonical_question: "Design a food-delivery platform using microservices and explain the service decomposition.",
    question_zh: "用微服务设计一个外卖平台，并说明操作、微服务和对应关系。",
    appearances: ["2025 softsys recall design"],
    source_paths: ["raw/25软件系统设计回忆版.jpg", "data/extracted/raw/softsys-2025-architecture-filter.md", "https://mubu.com/doc/Klk_SUrzZB", "data/extracted/raw/mubu-softsys-architecture-outline.md"],
    recurring_terms: ["microservice decomposition", "business capability", "bounded context", "API Gateway", "domain event", "Saga"],
    likely_answer_pattern: "Explain why the scenario fits microservices, identify operations from verbs, map business capabilities/subdomains to services, then describe APIs/events, data ownership, and quality tradeoffs.",
    question_en: "Design a food-delivery platform using microservices and explain the service decomposition.",
    answer_zh: "先说明外卖平台业务域多、流量峰值明显、团队可按业务能力并行演进，因此适合微服务。再从动词识别系统操作：浏览菜单、下单、支付、接单、配送、通知、结算。服务可拆为用户、商家/菜单、订单、支付、配送调度、通知、结算/评价等。每个服务拥有自己的数据，跨服务用 API Gateway、同步查询和异步领域事件协作，并用 Saga/补偿保证最终一致性。",
    topicIds: ["microservices", "ddd", "design-playbook"],
    english_keywords: ["food delivery", "business capability", "service boundary", "domain event", "eventual consistency", "Saga"],
    diagram_id: "microservice-style-comparison",
    sample_answer_zh: "示例答案：外卖平台适合微服务，因为用户、商家、订单、支付、骑手调度和通知属于不同业务能力，访问压力和变化频率不同，可以独立扩展和迭代。系统操作包括浏览餐厅和菜单、创建订单、支付订单、商家接单、分配骑手、更新配送状态、发送通知和结算。对应服务可以设计为 User Service、Restaurant/Menu Service、Order Service、Payment Service、Delivery/Dispatch Service、Notification Service、Settlement Service。用户请求先进入 API Gateway；Order Service 创建订单后发布 OrderCreated 事件，Payment Service 支付成功后发布 PaymentSucceeded，Delivery Service 订阅后分配骑手并更新状态。订单、支付、配送分别拥有自己的数据库，跨服务一致性用 Saga 和补偿操作处理。",
    sample_answer_en: "A food-delivery platform fits microservices because user, restaurant/menu, order, payment, delivery, notification, and settlement capabilities evolve and scale differently. Map operations to services: browse menus, create order, pay, accept order, dispatch rider, update delivery, notify, and settle. Use API Gateway, service-owned databases, domain events such as OrderCreated and PaymentSucceeded, and Saga/compensation for eventual consistency.",
    visual_hint_zh: "画图时把 API Gateway 放在前面，后面按业务能力画 6-7 个服务，服务间用事件箭头标出 OrderCreated/PaymentSucceeded/DeliveryAssigned。",
    visual_hint_en: "Draw API Gateway in front, 6-7 capability services behind it, and event arrows for OrderCreated, PaymentSucceeded, and DeliveryAssigned."
  }
];

for (const item of newQuestions) {
  const index = questions.findIndex((question) => question.id === item.id);
  if (index >= 0) questions[index] = item;
  else questions.push(item);
}

const newSources = [
  {
    path: "raw/25软件系统设计回忆版.jpg",
    bytes: 201029,
    kind: "jpg",
    extraction: "manual-vision-ocr",
    text_chars: 678,
    image: { width: 665, height: 1920, mode: "RGB" },
    needs_ocr: true,
    title: "软件系统设计 2025 春回忆版（筛选架构部分）",
    source_group: "adjacent_recent_past_papers",
    trust: "auxiliary_recent_adjacent_architecture_only",
    preview_path: "../data/extracted/raw/softsys-2025-architecture-filter.md",
    open_path: "../raw/25软件系统设计回忆版.jpg",
    summary: "相邻课程 2025 回忆卷照片。仅作为近期辅助练习吸收需求/ASR、质量属性场景、C&C/SOA、ADD、微服务特性与微服务拆分设计；GoF/OOP 设计模式题已排除。"
  },
  {
    path: "raw/考前关键词提示版本.pdf",
    bytes: 2321028,
    kind: "pdf",
    extraction: "pypdf",
    text_chars: 11489,
    page_count: 17,
    extracted_path: "data/extracted/raw/source-f1c00c82.json",
    needs_ocr: false,
    title: "2025 软件体系结构考前关键词提示版本",
    source_group: "current_course_2025_review",
    trust: "auxiliary_2025_current_course",
    preview_path: "../data/extracted/raw/source-f1c00c82.json",
    open_path: "../raw/考前关键词提示版本.pdf",
    summary: "学长考前关键词与答题提示，覆盖基础概念、质量属性、模式/战术、ADD、微服务、企业架构等；用于补充记忆口径，优先级服从今年复习课。"
  },
  {
    path: "raw/老师复习大纲（答案方式）.docx",
    bytes: 5997389,
    kind: "docx",
    extraction: "python-docx",
    text_chars: 7956,
    extracted_path: "data/extracted/raw/source-0157f2b0.md",
    needs_ocr: false,
    title: "2025 老师复习大纲（答案方式）",
    source_group: "current_course_2025_review",
    trust: "auxiliary_2025_current_course",
    preview_path: "../data/extracted/raw/source-0157f2b0.md",
    open_path: "../raw/老师复习大纲（答案方式）.docx",
    summary: "前人按老师复习口径整理的答案方式，重点覆盖 ADD、微服务六特性、AI-native、企业架构与 DDD；作为今年复习课的辅助校对材料。"
  },
  {
    path: "mubu/Klk_SUrzZB",
    url: "https://mubu.com/doc/Klk_SUrzZB",
    kind: "mubu",
    extraction: "playwright-share-api",
    text_chars: 18475,
    node_count: 287,
    title: "Mubu：Software System Design - Software Architecture Design",
    source_group: "adjacent_2025_notes",
    trust: "auxiliary_recent_adjacent_architecture_only",
    preview_path: "../data/extracted/raw/mubu-softsys-architecture-outline.md",
    open_path: "https://mubu.com/doc/Klk_SUrzZB",
    summary: "相邻课程架构部分思维导图，已从 Mubu share 接口递归抽取 287 个节点，并保留颜色标签。剔除设计模式外延后，只作今年复习主纲的辅助证据。"
  }
];

for (const item of newSources) {
  const key = item.path || item.url;
  const index = sources.findIndex((source) => (source.path || source.url) === key);
  if (index >= 0) sources[index] = item;
  else sources.push(item);
}

fs.writeFileSync(qPath, `${JSON.stringify(questions, null, 2)}\n`);
fs.writeFileSync(sPath, `${JSON.stringify(sources, null, 2)}\n`);
fs.writeFileSync(path.join(cwd, "site/data/questions.js"), `window.reviewQuestions = ${JSON.stringify(questions, null, 2)};\n`);
fs.writeFileSync(path.join(cwd, "site/data/sources.js"), `window.reviewSources = ${JSON.stringify(sources, null, 2)};\n`);

console.log(JSON.stringify({ questions: questions.length, sources: sources.length }, null, 2));
