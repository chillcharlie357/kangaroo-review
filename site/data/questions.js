window.reviewQuestions = [
  {
    "id": "q_arch_sources",
    "cluster": "architecture_basics",
    "canonical_question": "Where does software architecture come from? List five possible sources.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "requirements",
      "stakeholders",
      "development organization",
      "architects",
      "technical environment"
    ],
    "likely_answer_pattern": "List five sources: requirements, system stakeholders, development organization, architects, and technical/operational environment.",
    "question_zh": "软件架构从哪里来？列出五个可能来源。",
    "answer_zh": "列出五类来源：需求、系统利益相关者、开发组织、架构师经验，以及技术/运行环境。可补充业务目标和组织约束。"
  },
  {
    "id": "q_arch_design_structure",
    "cluster": "architecture_basics",
    "canonical_question": "Explain the difference between architecture and design, and between architecture and structure.",
    "appearances": [
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "architecture",
      "design",
      "structure",
      "externally visible properties"
    ],
    "likely_answer_pattern": "Architecture is high-level design and a set of structures; all architecture is design but not all design is architecture; structure is elements, relations, and externally visible properties.",
    "question_zh": "解释 architecture 与 design、architecture 与 structure 的区别。",
    "answer_zh": "所有架构都是设计，但并非所有设计都是架构；架构是高层设计和一组重要设计决策。structure 强调元素、关系和外部可见属性，architecture 在结构之上还包含设计原则、动态行为和演化约束。"
  },
  {
    "id": "q_req_quality_asr",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Describe the difference and relationship between software requirements, quality attributes, and ASRs.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "requirements",
      "quality attributes",
      "ASR",
      "constraints",
      "non-functional requirements"
    ],
    "likely_answer_pattern": "Requirements describe what the system must do and constraints; quality attributes are non-functional qualities; ASRs are requirements that significantly affect architectural decisions.",
    "question_zh": "说明软件需求、质量属性和 ASR 的区别与关系。",
    "answer_zh": "需求包含功能需求、质量需求和约束；质量属性描述系统“做得好不好”；ASR 是会显著影响架构设计决定的需求，常来自困难且重要的质量需求或关键约束。"
  },
  {
    "id": "q_requirement_kinds",
    "cluster": "quality_attributes_asr",
    "canonical_question": "What kinds of requirements influence architecture design decisions and how are they specified?",
    "appearances": [
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "functional requirements",
      "quality requirements",
      "constraints"
    ],
    "likely_answer_pattern": "Name functional requirements, quality requirements, and constraints; explain that functional requirements state behavior/value, quality requirements state desired system characteristics, and constraints are pre-made design decisions.",
    "question_zh": "哪些需求会影响架构设计决定？它们如何被规约？",
    "answer_zh": "说明功能需求、质量需求和约束。功能需求给出行为和价值；质量需求给出系统特性，最好用场景化模板规约；约束是预先指定且必须接受的设计决定。"
  },
  {
    "id": "q_quality_scenarios",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Model quality attribute scenarios in stimulus-response format.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2017 recall",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "source of stimulus",
      "stimulus",
      "environment",
      "artifact",
      "response",
      "response measure",
      "availability",
      "performance",
      "modifiability",
      "interoperability"
    ],
    "likely_answer_pattern": "Draw or describe the six-part quality attribute scenario: source, stimulus, environment, artifact, response, response measure; provide requested attributes such as availability, performance, modifiability, or interoperability.",
    "question_zh": "用 stimulus-response 形式建模质量属性场景。",
    "answer_zh": "画出或描述六要素：刺激源、刺激、环境、制品、响应、响应度量。按题目要求套入可用性、性能、可修改性、互操作性等质量属性。"
  },
  {
    "id": "q_asr_sources",
    "cluster": "quality_attributes_asr",
    "canonical_question": "What are ASRs? List sources and methods for extracting and identifying ASRs.",
    "appearances": [
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ASR",
      "requirements documents",
      "stakeholders",
      "scenario analysis",
      "constraints",
      "business goals"
    ],
    "likely_answer_pattern": "Define ASR as architecturally significant requirement; list requirement document analysis, stakeholder workshops/interviews, scenario/use-case analysis, business goals, and technical/organizational constraints.",
    "question_zh": "什么是 ASR？列出收集与识别 ASR 的来源和方法。",
    "answer_zh": "ASR 是对架构产生深远影响的需求。来源包括需求文档分析、stakeholder workshop/interview、场景/用例分析、业务目标、技术与组织约束，并可用效用树组织和排序。"
  },
  {
    "id": "q_risk_sensitivity_tradeoff",
    "cluster": "quality_attributes_asr",
    "canonical_question": "Define risks, sensitivity points, and trade-off points, with examples.",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "risks",
      "sensitivity points",
      "trade-off points",
      "quality attributes"
    ],
    "likely_answer_pattern": "Risk is a potential negative outcome; sensitivity point is a decision or parameter where small change affects a quality attribute; trade-off point affects multiple quality attributes in opposite directions.",
    "question_zh": "定义 risk、sensitivity point 和 trade-off point，并举例。",
    "answer_zh": "Risk 是潜在负面结果；sensitivity point 是某个设计决定或参数的小变化会显著影响某个质量属性；trade-off point 会同时影响多个质量属性且方向可能相反，例如分层提高可修改性但损失性能。"
  },
  {
    "id": "q_arch_process",
    "cluster": "process_methods",
    "canonical_question": "Briefly describe general activities in a software architecture process, including inputs and outputs.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ASR",
      "architecture design",
      "documentation",
      "evaluation",
      "inputs",
      "outputs"
    ],
    "likely_answer_pattern": "Use the process chain: identify/specify ASRs, design architecture, document views and rationale, evaluate architecture, and evolve/manage it; include inputs/outputs when requested.",
    "question_zh": "简述软件架构过程的一般活动，包括输入和输出。",
    "answer_zh": "按链条回答：识别/规约 ASR，设计架构，文档化视图和理由，评估架构，演化/管理架构。可说明输入是需求、约束、业务目标，输出是架构视图、接口、决策和评估结果。"
  },
  {
    "id": "q_add_process",
    "cluster": "process_methods",
    "canonical_question": "Describe the Attribute-Driven Design (ADD) process.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ADD",
      "ASR",
      "decompose",
      "design concept",
      "patterns",
      "tactics",
      "interfaces"
    ],
    "likely_answer_pattern": "Confirm requirements, choose an element, identify ASRs, choose design concepts/patterns/tactics, capture preliminary views, instantiate elements, assign responsibilities, define interfaces, refine requirements, repeat.",
    "question_zh": "描述 Attribute-Driven Design (ADD) 过程。",
    "answer_zh": "按步骤答：确认需求，选择要分解的元素，识别 ASR，选择设计概念/模式/战术，捕获初步视图，实例化元素，分配职责，定义接口，验证并细化需求，然后重复迭代。"
  },
  {
    "id": "q_atam_outputs",
    "cluster": "process_methods",
    "canonical_question": "Describe outputs generated from each phase of ATAM.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ATAM",
      "evaluation plan",
      "utility tree",
      "risks",
      "non-risks",
      "sensitivity points",
      "tradeoff points",
      "final report"
    ],
    "likely_answer_pattern": "Phase 0 evaluation plan; Phase 1 business goals, architecture presentation, utility tree, scenarios, risks/non-risks, sensitivity/tradeoff points; Phase 2 stakeholder scenarios and risk themes; Phase 3 final report.",
    "question_zh": "描述 ATAM 每个阶段会产生哪些输出。",
    "answer_zh": "Phase 0 产生评估计划；Phase 1 产生业务目标、架构陈述、效用树、场景、风险/非风险、敏感点/权衡点；Phase 2 产生 stakeholder 场景和风险主题；Phase 3 产生最终报告。"
  },
  {
    "id": "q_atam_stakeholders",
    "cluster": "process_methods",
    "canonical_question": "Describe stakeholders involved in ATAM and their roles in each phase/step.",
    "appearances": [
      "2015 B",
      "2016 A",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "ATAM",
      "evaluation team",
      "project decision makers",
      "stakeholders",
      "architect",
      "scenarios"
    ],
    "likely_answer_pattern": "Explain roles for evaluation team leadership, project decision makers, project manager/customer, lead architect, and broader stakeholders; tie each role to scenario generation, prioritization, architecture presentation, and risk analysis.",
    "question_zh": "描述 ATAM 过程中有哪些 stakeholder 及其职责。",
    "answer_zh": "说明评估团队、项目决策者、项目经理/客户、首席架构师和更广泛 stakeholder 的角色：介绍业务驱动、陈述架构、提出场景、排序优先级、分析风险并确认结果。"
  },
  {
    "id": "q_style_view_mapping",
    "cluster": "views_documentation",
    "canonical_question": "Map architecture questions to style/view categories and list four views for each category.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2017 recall",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "module styles",
      "component-connector styles",
      "allocation styles",
      "views"
    ],
    "likely_answer_pattern": "Map implementation units to module styles, runtime behavior/interactions to C&C styles, and non-software environment relation to allocation styles; list examples for each category.",
    "question_zh": "把架构问题映射到 style/view 类别，并为每类列出四个视图。",
    "answer_zh": "实现单元相关问题映射到 module style；运行时交互映射到 C&C style；软件与非软件环境关系映射到 allocation style。分别列举分解/使用/分层、管道过滤器/MVC/发布订阅、部署/安装/工作分配等例子。"
  },
  {
    "id": "q_different_views",
    "cluster": "views_documentation",
    "canonical_question": "Why should software architecture be documented using different views? Give four example views and purposes.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "views",
      "stakeholders",
      "quality attributes",
      "module",
      "C&C",
      "allocation",
      "quality views"
    ],
    "likely_answer_pattern": "Different views serve different stakeholders/goals, highlight different elements/relations, and expose different quality attributes; name module, C&C, allocation, and quality or 4+1 views with purposes.",
    "question_zh": "为什么软件架构要用不同视图文档化？给出四个示例视图及其目的。",
    "answer_zh": "不同视图服务不同 stakeholder 和关注点，突出不同元素/关系，也暴露不同质量属性。可列 module、C&C、allocation、quality view 或 4+1 中的逻辑/过程/物理/开发视图。"
  },
  {
    "id": "q_doc_package",
    "cluster": "views_documentation",
    "canonical_question": "What should be included in a typical software architecture documentation package?",
    "appearances": [
      "2015 B",
      "2016 B",
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "architecture documentation",
      "views",
      "documentation roadmap",
      "rationale",
      "interfaces",
      "quality attributes"
    ],
    "likely_answer_pattern": "Include architecture overview, views and view descriptions, beyond-view documentation, mapping between views, rationale/decisions, interface definitions, quality attributes, deployment/configuration notes.",
    "question_zh": "典型软件架构文档包应包含哪些内容？",
    "answer_zh": "包括架构概览、视图及视图说明、视图之外信息、视图映射、理由和设计决策、接口定义、质量属性、部署/配置说明、词汇表等。"
  },
  {
    "id": "q_4_plus_1",
    "cluster": "views_documentation",
    "canonical_question": "Describe Philippe Kruchten's 4+1 views.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2017 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md"
    ],
    "recurring_terms": [
      "4+1",
      "logical view",
      "process view",
      "physical view",
      "development view",
      "use cases"
    ],
    "likely_answer_pattern": "List logical, process, physical/deployment, development/implementation, plus scenarios/use cases; explain the purpose of each.",
    "question_zh": "描述 Philippe Kruchten 的 4+1 views。",
    "answer_zh": "列出 logical、process、physical/deployment、development/implementation，加上 scenarios/use cases；分别说明结构、并发运行、部署映射、开发组织和场景验证用途。"
  },
  {
    "id": "q_patterns_tactics",
    "cluster": "patterns_styles",
    "canonical_question": "Describe relationships between architectural patterns and tactics; list tactics and their usage.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "patterns",
      "tactics",
      "building blocks",
      "architectural force"
    ],
    "likely_answer_pattern": "Tactics are smaller mechanisms addressing one force; patterns package multiple decisions and often combine tactics; list tactics such as timestamp, sanity checking, orchestrate, control resource demand, caching, load balancing.",
    "question_zh": "说明 architectural patterns 与 tactics 的关系，并列举 tactic 及用途。",
    "answer_zh": "Tactic 是解决单个质量驱动力的较小机制；pattern 会打包多个设计决定并常组合多个 tactic。可举 timestamp、sanity checking、orchestrate、control resource demand、caching、load balancing 等。"
  },
  {
    "id": "q_generic_design_strategies",
    "cluster": "patterns_styles",
    "canonical_question": "What generic design strategies are applied in software design? Give architecture examples.",
    "appearances": [
      "2017 recall",
      "2019 recall",
      "2025 blog"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "layering",
      "componentization",
      "SOA",
      "plug-in"
    ],
    "likely_answer_pattern": "Name strategies such as layering, componentization, SOA, plug-in; for each, provide a small architecture example and why it supports change/reuse.",
    "question_zh": "软件设计中有哪些通用设计策略？给出架构例子。",
    "answer_zh": "列举抽象、分解、分治、生成-测试、迭代、复用、分层、组件化、SOA、插件化等，并说明如何支持变化、复用或降低复杂度。"
  },
  {
    "id": "q_cnc_mvc",
    "cluster": "patterns_styles",
    "canonical_question": "What is the nature of component-connector style? Use MVC as an example.",
    "appearances": [
      "2015 B",
      "2016 B",
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "component-connector",
      "MVC",
      "model",
      "view",
      "controller",
      "notifies"
    ],
    "likely_answer_pattern": "Explain C&C as runtime components and connectors; MVC has model data/state, view UI, controller mediating user input and model/view updates, connected through calls/events/notifications.",
    "question_zh": "Component-Connector style 的本质是什么？用 MVC 举例。",
    "answer_zh": "C&C 描述运行时组件与连接器。MVC 中 Model 保存数据/状态，View 展示 UI，Controller 处理用户输入并协调 Model/View，连接方式可为调用、事件或通知。"
  },
  {
    "id": "q_broker_pattern",
    "cluster": "patterns_styles",
    "canonical_question": "Explain the context, benefits, and limitations of Broker Architecture Pattern.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "broker",
      "clients",
      "servers",
      "indirection",
      "latency",
      "single point of failure"
    ],
    "likely_answer_pattern": "Broker mediates communication between clients and servers; benefits are extensibility/reuse/dynamic server changes; limits are latency, bottleneck, single point of failure, complexity, security target, test difficulty.",
    "question_zh": "解释 Broker Architecture Pattern 的上下文、好处和局限。",
    "answer_zh": "Broker 在 client 与 server 之间中介通信。优点是可扩展、复用、动态替换 server；局限是延迟、瓶颈、单点故障、复杂度、安全攻击面和测试困难。"
  },
  {
    "id": "q_layered_style",
    "cluster": "patterns_styles",
    "canonical_question": "Explain the context, benefits, and limitations of Layered Architecture Style.",
    "appearances": [
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "layered",
      "allowed-to-use",
      "reuse",
      "performance penalty",
      "portability",
      "modifiability"
    ],
    "likely_answer_pattern": "Layered style groups modules into layers with an allowed-to-use relation; benefits are separation and reuse; limitations are complexity, performance penalty, poor abstractions, and layer bridging.",
    "question_zh": "解释 Layered Architecture Style 的上下文、好处和局限。",
    "answer_zh": "分层把模块按抽象级别组织，并限制 allowed-to-use 关系。优点是关注点分离、复用和可修改；局限是复杂性、性能损耗、不良抽象和跨层调用。"
  },
  {
    "id": "q_layered_vs_multitier",
    "cluster": "patterns_styles",
    "canonical_question": "Describe the difference between Layered pattern and Multi-tier pattern.",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Layered",
      "Multi-tier",
      "logical layers",
      "physical deployment"
    ],
    "likely_answer_pattern": "Layered emphasizes logical separation and allowed-to-use dependencies; multi-tier emphasizes deployment/distribution of tiers across processes or machines.",
    "question_zh": "说明 Layered pattern 与 Multi-tier pattern 的区别。",
    "answer_zh": "Layered 强调逻辑分离和层间依赖规则，是 module style；Multi-tier 强调把 tier 部署到不同进程/机器/环境，是 allocation/deployment 视角。"
  },
  {
    "id": "q_soa_quality",
    "cluster": "patterns_styles",
    "canonical_question": "Describe SOA principles and their impact on quality attributes.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "SOA",
      "boundaries",
      "autonomous services",
      "contracts",
      "interoperability",
      "scalability",
      "security"
    ],
    "likely_answer_pattern": "State explicit boundaries, autonomous services, shared schemas/contracts not implementations, policy-based compatibility; discuss interoperability, scalability/performance, and security tradeoffs.",
    "question_zh": "描述 SOA 原则及其对质量属性的影响。",
    "answer_zh": "说明显式边界、服务自治、共享 schema/contract 而非实现、策略兼容。再讨论对互操作性、可伸缩性/性能、安全性的正负影响。"
  },
  {
    "id": "q_soa_ws_esb",
    "cluster": "patterns_styles",
    "canonical_question": "Describe purposes of SOA, Web Service, and ESB; discuss differences and relations.",
    "appearances": [
      "2015 B",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "SOA",
      "Web Service",
      "ESB",
      "interoperability",
      "middleware",
      "SOAP",
      "WSDL"
    ],
    "likely_answer_pattern": "SOA is architectural principle/style; Web Service is integration/implementation technology; ESB is middleware infrastructure that can support SOA, often using Web Services but not equivalent to SOA.",
    "question_zh": "说明 SOA、Web Service 和 ESB 的目的、区别与关系。",
    "answer_zh": "SOA 是架构原则/风格；Web Service 是集成实现技术；ESB 是支持 SOA 的中间件基础设施，常使用 Web Service，但三者不能等同。"
  },
  {
    "id": "q_microservices_vs_soa",
    "cluster": "patterns_styles",
    "canonical_question": "Compare microservices and SOA.",
    "appearances": [
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "microservices",
      "SOA",
      "service granularity",
      "autonomy",
      "data ownership",
      "communication"
    ],
    "likely_answer_pattern": "Both are service-oriented, modular, distributed, and loosely coupled; microservices are smaller, independently deployed/owned, often lightweight protocol and service-owned data; SOA may use larger enterprise services and ESB governance.",
    "question_zh": "比较微服务与 SOA。",
    "answer_zh": "相同点：服务化、模块化、分布式、松耦合。不同点：微服务粒度更小、独立部署/团队拥有、轻量协议、服务自有数据；SOA 往往服务更大、治理更集中、可能依赖 ESB 和全局数据模型。"
  },
  {
    "id": "q_spl_vs_single",
    "cluster": "reuse_variability",
    "canonical_question": "What distinguishes architecture for a software product line from architecture for a single/simple product?",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2016 B",
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "SPL",
      "software product line",
      "variants",
      "core assets",
      "systematic variation"
    ],
    "likely_answer_pattern": "SPL architecture supports multiple simultaneous variants from managed shared core assets; it manages commonality/variability and is not merely releases or reconfiguration of one product.",
    "question_zh": "软件产品线架构和单个/简单产品架构有什么区别？",
    "answer_zh": "SPL 架构支持多个变体同时生成，管理共性和可变性，并依赖核心资产和显式 variation points；不是单个产品的版本发布或简单重配置。"
  },
  {
    "id": "q_reuse_spl_mda_soa",
    "cluster": "reuse_variability",
    "canonical_question": "Why do SPL, MDA, and/or SOA have high reusability? Compare commonalities and differences.",
    "appearances": [
      "2015 recall",
      "2015 A",
      "2015 B",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "SPL",
      "MDA",
      "SOA",
      "reuse",
      "variation",
      "PIM",
      "PSM",
      "models",
      "services"
    ],
    "likely_answer_pattern": "SPL reuses core assets with variation; MDA reuses platform-independent models and transformations; SOA reuses services/contracts and compositions; compare code/core-asset reuse, model reuse, and service reuse.",
    "question_zh": "为什么 SPL、MDA、SOA 具有高复用性？比较共同点和差异。",
    "answer_zh": "SPL 复用核心资产并管理变体；MDA 复用平台无关模型和模型转换；SOA 复用服务/契约/组合。共同点是通过抽象和变化机制扩大复用范围。"
  },
  {
    "id": "q_spl_variability",
    "cluster": "reuse_variability",
    "canonical_question": "How does SPL architecture implement variability? Describe variation mechanisms and variation points.",
    "appearances": [
      "2015 B",
      "2016 A",
      "2016 B",
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx",
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md"
    ],
    "recurring_terms": [
      "SPL",
      "variability",
      "variation points",
      "PLA",
      "feature model",
      "configuration management",
      "binding time"
    ],
    "likely_answer_pattern": "Core assets provide variation points; PLA provides the architectural basis; mechanisms include configurable components, feature models, variant management, configuration management, and binding at workspace/build/startup/runtime.",
    "question_zh": "SPL 架构如何实现可变性？描述 variation mechanisms 与 variation points。",
    "answer_zh": "核心资产提供 variation points，PLA 给出变化的架构基础；机制包括可配置组件、feature model、变体管理、配置管理，以及在工作区/构建/启动/运行时绑定。"
  },
  {
    "id": "q_binding_time",
    "cluster": "reuse_variability",
    "canonical_question": "Describe three change dimensions in software design and how differing binding time affects modifiability and testability.",
    "appearances": [
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "binding time",
      "modifiability",
      "testability",
      "change dimensions"
    ],
    "likely_answer_pattern": "Explain dimensions of time, space/structure, and abstraction; later binding improves modifiability but can reduce testability, while earlier/static binding can improve testability.",
    "question_zh": "描述软件设计中的三个变化维度，以及不同 binding time 对可修改性和可测试性的影响。",
    "answer_zh": "说明时间、空间/结构、抽象三个维度。较晚绑定提升可修改性和配置灵活性，但可能降低可测试性和可预测性；较早静态绑定更易测试但变化成本更高。"
  },
  {
    "id": "q_oo_principles_strategy",
    "cluster": "design_diagrams",
    "canonical_question": "Name object-oriented principles and explain how they apply in Strategy pattern.",
    "appearances": [
      "2017 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Strategy pattern",
      "SRP",
      "OCP",
      "DIP",
      "polymorphism"
    ],
    "likely_answer_pattern": "Use SRP for each concrete strategy, OCP for adding strategies without changing context, and DIP for depending on strategy abstraction rather than concrete algorithms.",
    "question_zh": "列出面向对象原则，并说明它们如何应用于 Strategy pattern。",
    "answer_zh": "SRP 让每个具体策略只负责一种算法；OCP 允许新增策略而不改 Context；DIP 让 Context 依赖策略抽象而非具体算法。"
  },
  {
    "id": "q_strategy_design",
    "cluster": "design_diagrams",
    "canonical_question": "Design a system using Strategy pattern, such as flight simulation or ticket discounts.",
    "appearances": [
      "2018 recall",
      "2019 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "Strategy pattern",
      "class diagram",
      "architecture diagram",
      "context",
      "strategy interface",
      "concrete strategies"
    ],
    "likely_answer_pattern": "Draw context class holding a strategy interface, concrete strategies for aircraft/discount types, and runtime selection; explain extensibility and when Strategy applies.",
    "question_zh": "使用 Strategy pattern 设计系统，例如飞行模拟或票价折扣。",
    "answer_zh": "画出 Context 持有 Strategy 接口，具体策略实现不同飞机/折扣算法，运行时选择策略；说明它提升扩展性，适合多算法可互换场景。"
  },
  {
    "id": "q_three_tier_design",
    "cluster": "design_diagrams",
    "canonical_question": "Design a simple ATM or booking system in three-tier style and document it with Views and Beyond.",
    "appearances": [
      "2015 B supplemental",
      "2016 B"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班B卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班B卷.docx"
    ],
    "recurring_terms": [
      "three-tier",
      "presentation layer",
      "business logic layer",
      "data access layer",
      "Views and Beyond"
    ],
    "likely_answer_pattern": "Draw presentation, business logic, and data access layers; assign responsibilities; document relevant views, mappings, rationale, and interfaces.",
    "question_zh": "用三层风格设计简单 ATM 或订票系统，并用 Views and Beyond 文档化。",
    "answer_zh": "画 presentation、business logic、data access 三层，分配职责；补充相关视图、视图映射、接口、设计理由和质量属性。"
  },
  {
    "id": "q_distributed_cache_design",
    "cluster": "design_diagrams",
    "canonical_question": "Analyze distributed cache updates and add components/patterns/tactics to invalidate other caches after state changes.",
    "appearances": [
      "2015 A",
      "2016 A"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2015年春季2班A卷.docx",
      "raw/zqx考试复习资料/【批量下载】18年等/体系结构2016年春季2班A卷.docx"
    ],
    "recurring_terms": [
      "distributed cache",
      "invalidation",
      "broker",
      "publish-subscribe",
      "connector",
      "web services",
      "sequence diagram"
    ],
    "likely_answer_pattern": "Add cache invalidation/update coordinator or broker/pub-sub component; commit to DB then notify other caches to invalidate/reload; for heterogeneous protocols, use connectors/adapters or web services for generic invocation.",
    "question_zh": "分析分布式缓存更新，并添加组件/模式/战术使状态变更后其他缓存失效。",
    "answer_zh": "增加缓存失效/更新协调器或 broker/pub-sub 组件；先提交 DB，再通知其他缓存 invalidate/reload；异构协议下用 connector/adapter 或 Web Service 提供统一调用。"
  },
  {
    "id": "q_stakeholder_concerns",
    "cluster": "architecture_basics",
    "canonical_question": "What are software architecture concerns and who are stakeholders?",
    "appearances": [
      "2018 recall"
    ],
    "source_paths": [
      "raw/zqx考试复习资料/张贺老师 体系结构 往年考题.md",
      "data/extracted/raw/zqx考试复习资料/往年资料以及答案.txt"
    ],
    "recurring_terms": [
      "concerns",
      "stakeholders",
      "functional requirements",
      "quality attributes",
      "risk management"
    ],
    "likely_answer_pattern": "List concerns such as functionality, quality attributes, design/technology choices, risk management; list stakeholders such as users/customers, business owners, developers, project managers, testers, operators, regulators.",
    "question_zh": "什么是软件架构 concern？谁是 stakeholders？",
    "answer_zh": "Concern 包括功能、质量属性、技术/设计选择、风险管理等关注点；stakeholder 包括用户/客户、业务方、开发者、项目经理、测试、运维、监管者等。"
  }
];
