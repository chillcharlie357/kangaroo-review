window.reviewContent = {
  "meta": {
    "title": {
      "zh": "《软件体系结构》复习资料 2026 南大软院研究生",
      "en": "Software Architecture Review 2026 NJU Software Institute Graduate"
    },
    "exam": [
      {
        "zh": "期末 60%，平时 40%",
        "en": "Final exam 60%, coursework 40%"
      },
      {
        "zh": "英文出题，可中文或英文作答，但不要中英混用",
        "en": "Questions are in English; answer in Chinese or English, but do not mix languages"
      },
      {
        "zh": "题型：简答题、论述/问答题、设计分析题",
        "en": "Question types: short answers, essay/Q&A, design analysis"
      },
      {
        "zh": "个别题目可能需要画图，带铅笔等画图工具",
        "en": "Some questions may require diagrams; bring drawing tools"
      }
    ],
    "evidence": [
      {
        "label": {
          "zh": "最高纲领",
          "en": "Top Ground Truth"
        },
        "body": {
          "zh": "以复习课完整录音、术语清洗稿、完整纪要和三份复习课 slides 为最高依据；旧飞书智能纪要仅归档保留，不再作为答案佐证。",
          "en": "The complete review-class recording, cleaned transcript, complete minutes, and three review-class slide decks are the highest evidence. Old Feishu smart notes are archived only."
        }
      },
      {
        "label": {
          "zh": "适用边界",
          "en": "Scope Boundary"
        },
        "body": {
          "zh": "专门面向 2026 南京大学软件学院研究生《软件体系结构》期末复习；不保证适用于未来年份或本科《软件系统设计》。",
          "en": "Built specifically for the 2026 NJU Software Institute graduate Software Architecture final review; not guaranteed for future offerings or undergraduate Software System Design."
        }
      },
      {
        "label": {
          "zh": "材料优先级",
          "en": "Evidence Priority"
        },
        "body": {
          "zh": "排序为：完整录音+复习课 slides > 课程 slides > 近年本课/相邻课程真题 > 2025 前人资料与学长博客 > 其他旧资料。",
          "en": "Priority: complete recording + review slides > course slides > recent current/adjacent past papers > 2025 senior materials and blogs > older auxiliary notes."
        }
      },
      {
        "label": {
          "zh": "纳入规则",
          "en": "Inclusion Rule"
        },
        "body": {
          "zh": "相邻课程只吸收体系结构重合内容；GoF/OOP/代码实现题排除。复习课明确“不考”的 AI 增强/AI 原生降到 P3 背景。",
          "en": "Adjacent-course material contributes only overlapping architecture content; GoF/OOP/coding questions are excluded. Review-class non-exam AI-enabled/native content is P3 background."
        }
      }
    ]
  },
  "priorities": [
    {
      "level": "P0",
      "weight": "必会 / Must know",
      "title": {
        "zh": "完整录音明确点名的主线",
        "en": "Mainline From Complete Review Recording"
      },
      "summary": {
        "zh": "优先啃这些：基础概念、4+1、质量属性/ASR、tactics/patterns/styles、架构演进、七类设计决定、ADD 3.0、微服务和 DDD。它们来自完整录音与复习 slides，是答题语言和设计题骨架。",
        "en": "Start here: foundations, 4+1, quality/ASR, tactics/patterns/styles, architecture evolution, seven design decisions, ADD 3.0, microservices, and DDD. These come from the complete recording and review slides."
      },
      "items": [
        {
          "topicId": "foundation",
          "zh": "软件架构基本概念、架构师职责、架构来源",
          "en": "Architecture foundations, architect roles, sources of architecture"
        },
        {
          "topicId": "views",
          "zh": "4+1 views 与架构文档化",
          "en": "4+1 views and architecture documentation"
        },
        {
          "topicId": "quality",
          "zh": "质量属性场景：六要素表必须会写",
          "en": "Quality attribute scenarios: six-part template"
        },
        {
          "topicId": "asr",
          "zh": "ASR、Utility tree 与优先级排序",
          "en": "ASRs, utility tree, and prioritization"
        },
        {
          "topicId": "patterns",
          "zh": "架构演进、风格/模式/战术的差异与取舍",
          "en": "Architecture evolution and style/pattern/tactic tradeoffs"
        },
        {
          "topicId": "design-decisions",
          "zh": "七类设计决定与 rationale",
          "en": "Seven design-decision categories and rationale"
        },
        {
          "topicId": "add",
          "zh": "ADD 3.0 七步、driver、iteration、documentation",
          "en": "ADD 3.0 steps, drivers, iteration, documentation"
        },
        {
          "topicId": "microservices",
          "zh": "微服务特性、对比、拆分/通信/部署/可观测性",
          "en": "Microservice characteristics, comparison, decomposition, communication, deployment, observability"
        },
        {
          "topicId": "ddd",
          "zh": "DDD 适用范围、战略/战术设计、事件风暴",
          "en": "DDD scope, strategic/tactical design, event storming"
        }
      ]
    },
    {
      "level": "P1",
      "weight": "应会 / Should know",
      "title": {
        "zh": "今年会用到的展开材料",
        "en": "Useful Expansion Topics"
      },
      "summary": {
        "zh": "用于把 P0 写成完整论述或设计题：企业架构 4A/TOGAF/CBM、HPS ADD case、微服务+DDD 设计题模板。",
        "en": "Use these to expand P0 answers: EA 4A/TOGAF/CBM, the HPS ADD case, and microservice + DDD design templates."
      },
      "items": [
        {
          "topicId": "enterprise",
          "zh": "企业架构：4A、TOGAF ADM、CBM，案例细节不死背",
          "en": "Enterprise architecture: 4A, TOGAF ADM, CBM; do not memorize case details"
        },
        {
          "topicId": "add",
          "zh": "HPS ADD case：用作流程支撑，不当唯一答案",
          "en": "HPS ADD case: support the process, not the only answer"
        },
        {
          "topicId": "microservices",
          "zh": "微服务设计题：从操作/业务能力/子域推服务边界",
          "en": "Microservice design: derive service boundaries from operations/capabilities/subdomains"
        },
        {
          "topicId": "ddd",
          "zh": "DDD 设计题：子域、限界上下文、聚合、领域事件",
          "en": "DDD design: subdomains, bounded contexts, aggregates, domain events"
        }
      ]
    },
    {
      "level": "P2",
      "weight": "保底 / Backup",
      "title": {
        "zh": "历史高频但今年未抬高",
        "en": "Historical But Lower Priority"
      },
      "summary": {
        "zh": "ATAM、SPL/MDA/复用、Broker/缓存/三层等旧题保留为保底；遇到能写，但不抢 P0 时间。",
        "en": "ATAM, SPL/MDA/reuse, Broker/cache/three-tier old questions remain as backup; answer if asked, but do not steal P0 time."
      },
      "items": [
        {
          "topicId": "evaluation-atam",
          "zh": "ATAM：输出、角色、risk/sensitivity/tradeoff 只背骨架",
          "en": "ATAM: outputs, roles, risk/sensitivity/tradeoff skeleton"
        },
        {
          "topicId": "reuse-variability",
          "zh": "SPL/MDA/复用与可变性：旧题保底",
          "en": "SPL/MDA/reuse and variability: old-paper backup"
        }
      ]
    },
    {
      "level": "P3",
      "weight": "只读 / Background",
      "title": {
        "zh": "明确不考或极低优先级",
        "en": "Non-Exam Or Very Low Priority"
      },
      "summary": {
        "zh": "吕骏明确说 AI 增强、AI 原生不会考；GoF 设计模式和代码实现题不属于本课程主线。只保留为资料库背景。",
        "en": "Lu Jun explicitly said AI-enabled and AI-native architecture will not be tested; GoF design-pattern and coding questions are outside this course mainline."
      },
      "items": [
        {
          "topicId": "ai",
          "zh": "AI 增强 / AI 原生：了解概念，不背诵",
          "en": "AI-enabled/native architecture: understand only, do not memorize"
        }
      ]
    }
  ],
  "topics": [
    {
      "id": "foundation",
      "priority": "P0",
      "title": {
        "zh": "软件架构基础",
        "en": "Software Architecture Foundations"
      },
      "takeaway": {
        "zh": "架构是高抽象层次的设计，关注元素、关系、属性及其演化；不仅是静态结构，也包含运行时依赖、通信和动态关系。",
        "en": "Architecture is high-level design about elements, relations, properties, and evolution; it is not only static structure, but also runtime dependencies, communication, and dynamics."
      },
      "answerFrame": {
        "zh": "答题先说定义，再区分 design/structure，最后落到“解决用户与开发者的矛盾”：用户要更多功能和快速变化，开发者要易开发、低成本、易维护。",
        "en": "Answer by defining architecture, distinguishing it from design/structure, then connecting it to the core tension: users want more features and fast change; developers need ease of development, lower cost, and maintainability."
      },
      "bullets": [
        {
          "zh": "复习 PPT 的稳定来源：NFRs / Quality Requirements、ASRs、Stakeholders、Organisations、Technical Environments；业务目标和既有系统可作为补充约束。旧卷“五类来源”只在对应旧题中使用。",
          "en": "Stable review-slide sources: NFRs / Quality Requirements, ASRs, Stakeholders, Organisations, and Technical Environments. Business goals and existing systems are supplementary constraints. The old-paper five-source wording is old-question-specific."
        },
        {
          "zh": "架构师四类工作：协调利益相关者、软件工程经验/最佳实践、技术知识、风险管理。",
          "en": "Architect work: stakeholder liaison, software engineering practices, technical knowledge, risk management."
        },
        {
          "zh": "架构活动按过程图背四步：规约 ASR、架构设计、文档化、架构评估；演化维护是生命周期补充，不作为该图第五步。",
          "en": "Use the process figure's four activities: specify ASRs, design the architecture, document it, and evaluate it; evolution/maintenance is lifecycle context, not a fifth step in this figure."
        },
        {
          "zh": "“Architecture is not only box-and-line”：只画框线不够，还要说明元素的行为、外部可见属性、关系约束和设计理由。",
          "en": "“Architecture is not only box-and-line”: boxes and lines are insufficient; explain behavior, externally visible properties, relationship constraints, and rationale."
        },
        {
          "zh": "架构本质是先处理用户与开发者之间的矛盾：价值/变化速度 vs 开发成本/可维护性/风险。",
          "en": "Architecture first handles the tension between users and developers: value/change speed vs development cost/maintainability/risk."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "稳拿基础分",
      "deepDive": [
        {
          "title": {
            "zh": "定义边界",
            "en": "Definition boundary"
          },
          "summary": {
            "zh": "先把 architecture / design / structure 三者说清。",
            "en": "Clarify architecture, design, and structure first."
          },
          "must": {
            "zh": "架构是高层设计和重要设计决定；结构是元素、关系和外部可见属性；所有架构都是设计，但不是所有设计都是架构。",
            "en": "Architecture is high-level design and significant decisions; structure is elements, relations, and visible properties; all architecture is design, but not all design is architecture."
          },
          "answer": {
            "zh": "先定义 architecture，再比较 design/structure，最后落到架构为什么重要：它约束后续设计、影响质量属性、协调 stakeholder。",
            "en": "Define architecture, compare with design/structure, then explain why it matters: constrains later design, shapes quality attributes, coordinates stakeholders."
          },
          "trap": {
            "zh": "不要只写 “box-and-line”。如果只画框线，没有职责、关系、约束和设计理由，不能算完整架构答案。",
            "en": "Do not stop at box-and-line; responsibilities, relations, constraints, and rationale are required."
          }
        },
        {
          "title": {
            "zh": "架构来源",
            "en": "Architecture sources"
          },
          "summary": {
            "zh": "按复习 PPT 的稳定术语答；旧卷“五类来源”只在旧题语境中使用。",
            "en": "Use the stable review-slide wording; the old-paper five-source list is only for the old-question wording."
          },
          "must": {
            "zh": "NFRs / Quality Requirements、ASRs、Stakeholders、Organisations、Technical Environments。可补充业务目标、组织约束、既有系统，但不要扩成无据固定清单。",
            "en": "NFRs / Quality Requirements, ASRs, Stakeholders, Organisations, Technical Environments. Business goals, organizational constraints, and existing systems may be supplementary, not an unsupported fixed list."
          },
          "answer": {
            "zh": "先按 PPT 五组词说明来源，再解释它们如何变成架构 driver：质量需求和 ASR 决定结构，stakeholder/organisation/environment 决定约束与取舍。",
            "en": "List the five review-slide source groups, then explain how they become architectural drivers: quality requirements and ASRs shape structure; stakeholders, organisations, and environments shape constraints and tradeoffs."
          },
          "trap": {
            "zh": "不要把“业务目标”写成旧卷五源之一；也不要把旧卷五项当今年所有题的唯一标准。",
            "en": "Do not make business goals one of the old-paper five sources; do not treat the old five-source list as the universal 2026 answer."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process"
      ]
    },
    {
      "id": "quality",
      "priority": "P0",
      "title": {
        "zh": "质量属性与场景建模",
        "en": "Quality Attributes and Scenario Modeling"
      },
      "takeaway": {
        "zh": "质量属性是架构设计的主要依据。只有被场景化描述的质量需求，才适合作为架构设计输入。",
        "en": "Quality attributes are primary drivers of architecture. Only scenario-based quality requirements are suitable architectural inputs."
      },
      "answerFrame": {
        "zh": "固定六要素按 ground-truth 表格顺序背：source of stimulus、stimulus、artifact、environment、response、response measure。可用性原表响应是“通知操作者继续操作”，响应度量是“没有停机时间”。",
        "en": "Memorize the six-part ground-truth table order: source of stimulus, stimulus, artifact, environment, response, response measure. In the original Availability row, the response is notifying the operator to continue operation and the measure is no downtime."
      },
      "bullets": [
        {
          "zh": "外部质量属性：可用性、性能、易用性等，用户能感知。",
          "en": "External attributes: availability, performance, usability, etc.; visible to users."
        },
        {
          "zh": "内部质量属性：可修改性、可维护性、可测试性、可移植性等，开发者更关注。",
          "en": "Internal attributes: modifiability, maintainability, testability, portability, etc.; mostly developer concerns."
        },
        {
          "zh": "tactic 是解决质量属性问题的原子设计决定，多个 tactic 可组合成 pattern。",
          "en": "A tactic is an atomic design decision for a quality concern; multiple tactics can combine into a pattern."
        },
        {
          "zh": "常考属性要至少能各举一例：availability、interoperability、modifiability、performance、security、testability、usability。",
          "en": "For common attributes, be able to give at least one example each: availability, interoperability, modifiability, performance, security, testability, usability."
        },
        {
          "zh": "如果题目给一个模糊 NFR，要先重写成可测量场景，再谈 tactic/pattern。",
          "en": "If the question gives a vague NFR, rewrite it as a measurable scenario before discussing tactics/patterns."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "质量场景必背",
      "deepDive": [
        {
          "title": {
            "zh": "六要素场景",
            "en": "Six-part scenario"
          },
          "summary": {
            "zh": "这是质量属性题最稳的模板。",
            "en": "This is the safest template for quality questions."
          },
          "must": {
            "zh": "source of stimulus、stimulus、artifact、environment、response、response measure。中文可背：刺激源、刺激、制品、环境、响应、响应度量。",
            "en": "Source of stimulus, stimulus, artifact, environment, response, response measure."
          },
          "answer": {
            "zh": "先把题目中的模糊词改写成场景，再用六要素逐项填表。最后补一两条 tactic，例如冗余、缓存、认证、隔离、监控。",
            "en": "Rewrite vague quality into a scenario, fill six elements, then add tactics such as redundancy, caching, authentication, isolation, monitoring."
          },
          "trap": {
            "zh": "最容易漏 environment 和 response measure；“系统要快”不是答案，“95% 请求 2s 内完成”才是度量。",
            "en": "Environment and response measure are often omitted; “fast” is not enough, “95% under 2s” is measurable."
          }
        },
        {
          "title": {
            "zh": "属性到战术",
            "en": "Attribute to tactics"
          },
          "summary": {
            "zh": "质量属性不是孤立概念，要能落到设计。",
            "en": "A quality attribute must map to design actions."
          },
          "must": {
            "zh": "性能常见 caching/load balancing/control resource demand；可用性常见 heartbeat/redundancy/failover；安全常见 authentication/authorization/audit。",
            "en": "Performance: caching/load balancing/control resource demand; availability: heartbeat/redundancy/failover; security: authentication/authorization/audit."
          },
          "answer": {
            "zh": "按“质量属性 -> 场景 -> tactic -> tradeoff”写。例如缓存提高性能但增加一致性复杂度。",
            "en": "Use “attribute -> scenario -> tactic -> tradeoff”. For example, caching improves performance but complicates consistency."
          },
          "trap": {
            "zh": "不要把 tactic 写成万能药。每个 tactic 都会牺牲其他质量属性或增加复杂度。",
            "en": "No tactic is free; each may hurt another quality or add complexity."
          }
        }
      ],
      "diagramIds": [
        "quality-scenario-table"
      ]
    },
    {
      "id": "asr",
      "priority": "P0",
      "title": {
        "zh": "ASR 与效用树",
        "en": "ASRs and Utility Tree"
      },
      "takeaway": {
        "zh": "ASR 是会显著影响架构设计决定的需求，不等于所有需求。复习课强调要从需求文档、访谈/workshop 和业务目标中补齐。",
        "en": "An ASR is a requirement that significantly affects architectural decisions. It is not every requirement. The complete review recording/minutes emphasize documents, interviews/workshops, and business goals."
      },
      "answerFrame": {
        "zh": "先定义 ASR，再说来源，最后说效用树：系统效用分解为质量属性、场景、度量；叶子节点从用户价值与开发难度/利益两维评估。",
        "en": "Define ASR, list sources, then explain the utility tree: system utility breaks down into quality attributes, scenarios, and measures; leaves are prioritized by user value and development impact/difficulty."
      },
      "bullets": [
        {
          "zh": "需求文档里的 NFR 常不够场景化，需要 stakeholder workshop 或 interview。",
          "en": "NFRs in requirement documents are often not scenario-based enough; use stakeholder workshops or interviews."
        },
        {
          "zh": "高用户价值且高开发影响的叶节点应优先进入架构设计。",
          "en": "Leaves with high user value and high development impact should be handled first."
        },
        {
          "zh": "约束是预先给定的设计决定，也会影响架构空间。",
          "en": "Constraints are pre-made design decisions that shape the architecture space."
        },
        {
          "zh": "QAW/访谈的价值在于把“希望系统快/稳定/安全”这类口头需求转成可度量 ASR。",
          "en": "QAW/interviews turn verbal needs such as “fast/stable/secure” into measurable ASRs."
        },
        {
          "zh": "效用树叶节点常用二维优先级：对用户/业务重要程度，以及对开发者/架构影响程度。",
          "en": "Utility tree leaves are often prioritized by two dimensions: user/business importance and developer/architectural impact."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "core",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "高频简答",
      "deepDive": [
        {
          "title": {
            "zh": "ASR 定义",
            "en": "ASR definition"
          },
          "summary": {
            "zh": "ASR 是会影响架构决策的需求，不是全部需求。",
            "en": "ASRs are requirements that shape architecture, not all requirements."
          },
          "must": {
            "zh": "功能、质量属性和约束都可能成为 ASR；重要且困难的质量需求最常见。",
            "en": "Functions, quality attributes, and constraints can become ASRs; important and hard quality needs are common."
          },
          "answer": {
            "zh": "先定义，再说来源/方法：需求文档、stakeholder workshop/interview 或 QAW、业务目标、约束，以及质量属性场景化表达。",
            "en": "Define ASR, then list sources/methods: requirement documents, stakeholder workshops/interviews or QAW, business goals, constraints, and scenario-based quality expression."
          },
          "trap": {
            "zh": "不要把 ASR 等同 NFR。某些关键功能和强约束也会成为 ASR。",
            "en": "Do not equate ASR with NFR; key functions and constraints can also be ASRs."
          }
        },
        {
          "title": {
            "zh": "效用树排序",
            "en": "Utility tree priority"
          },
          "summary": {
            "zh": "效用树把质量属性落到可分析的叶子场景。",
            "en": "A utility tree turns qualities into analyzable leaf scenarios."
          },
          "must": {
            "zh": "树根是 utility，中间是质量属性，叶子是具体场景和度量；叶子常按业务价值与架构影响/难度排序。",
            "en": "Root is utility, branches are qualities, leaves are scenarios and measures, prioritized by business value and architectural impact/difficulty."
          },
          "answer": {
            "zh": "画树后圈出 H/H 或 high/high 叶子，说这些最先进入架构设计和评估。",
            "en": "Draw the tree, mark H/H leaves, and state that they drive design and evaluation first."
          },
          "trap": {
            "zh": "不要只列属性名。没有场景和度量，架构师没法判断设计是否满足需求。",
            "en": "Attribute names alone are insufficient; scenarios and measures are needed."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "utility-tree",
        "quality-scenario-table"
      ]
    },
    {
      "id": "add",
      "priority": "P0",
      "title": {
        "zh": "ADD 3.0 属性驱动设计",
        "en": "ADD 3.0 Attribute-Driven Design"
      },
      "takeaway": {
        "zh": "ADD 是结构化、迭代式架构设计方法。复习重点不是背定义，而是会用驱动因素组织设计轮次。",
        "en": "ADD is a structured, iterative architecture design method. The key is not the definition, but using drivers to organize design iterations."
      },
      "answerFrame": {
        "zh": "按 Lecture 12 的 7 步答：1 Review inputs；2 Establish iteration goal by selecting drivers；3 Choose elements to refine；4 Choose design concepts；5 Instantiate architectural elements / allocate responsibilities / define interfaces；6 Sketch views and record design decisions；7 Perform analysis of current design and review iteration goal and achievement of design purpose，然后必要时继续迭代。",
        "en": "Use the Lecture 12 seven-step process: 1 Review inputs; 2 Establish the iteration goal by selecting drivers; 3 Choose elements to refine; 4 Choose design concepts; 5 Instantiate architectural elements, allocate responsibilities, and define interfaces; 6 Sketch views and record design decisions; 7 Perform analysis of the current design and review the iteration goal and achievement of the design purpose, then iterate if necessary."
      },
      "bullets": [
        {
          "zh": "图中红色 driver 是 Design Purpose、Primary Functionality、Quality Attributes、Architectural Concerns、Constraints；上一轮设计或 brownfield 既有系统通过 artifact flow 进入 Step 1。",
          "en": "The red drivers in the slide are Design Purpose, Primary Functionality, Quality Attributes, Architectural Concerns, and Constraints; previous-iteration or brownfield designs enter Step 1 through the artifact-flow path."
        },
        {
          "zh": "Step 1 是 Review inputs，不是建立目标；Step 2 才是在驱动因素中选择本轮 iteration goal。",
          "en": "Step 1 is Review inputs, not goal establishment; Step 2 selects the iteration goal from the drivers."
        },
        {
          "zh": "复习课案例里的 iteration goal 可参考：整体结构、核心功能、质量属性、开发/部署/运营需求；但这不是 ADD 3.0 固定步骤，固定步骤仍以上面的 Step 1-7 为准。",
          "en": "Review-class cases may choose iteration goals such as overall structure, core functionality, quality attributes, and development/deployment/operations concerns; these are not fixed ADD 3.0 steps, whose fixed process remains Step 1-7 above."
        },
        {
          "zh": "终止条件：所有 driving architectural requirements 已有设计决策、重要技术风险已缓解，或架构设计时间耗尽；不要把 ADD 画成一次性瀑布。",
          "en": "Termination criteria: design decisions have covered the driving architectural requirements, key technical risks have been mitigated, or the architecture-design timebox is consumed; do not draw ADD as one-shot waterfall."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Lecture 12 ADD 3.0 slide OCR"
      ],
      "group": "process",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 12 ADD 原图 + 复习课 slides",
      "examWeight": "设计题核心",
      "deepDive": [
        {
          "title": {
            "zh": "ADD 3.0 课程原图口径",
            "en": "ADD 3.0 slide-faithful process"
          },
          "summary": {
            "zh": "复习课明确说 ADD 是今年主线之一；图解必须以 Lecture 12 的 ADD 3.0 method 图为准。",
            "en": "The review class made ADD a major focus; the diagram should follow the Lecture 12 ADD 3.0 method figure."
          },
          "must": {
            "zh": "五类 driver + 七步：Review inputs；Establish iteration goal by selecting drivers；Choose elements to refine；Choose design concepts；Instantiate/allocate/define interfaces；Sketch views and record decisions；Perform analysis of current design and review goal/purpose。",
            "en": "Five driver classes plus seven steps: Review inputs; Establish iteration goal by selecting drivers; Choose elements to refine; Choose design concepts; Instantiate/allocate/define interfaces; Sketch views and record decisions; Perform analysis of current design and review goal/purpose."
          },
          "answer": {
            "zh": "手画时先画上方五个红色 driver，再画 Step 1-7 的纵向流程；Step 7 后写 Iterate if necessary，并输出 (Refined) Software Architecture Design。",
            "en": "When drawing by hand, put the five red drivers on top, then draw the vertical Step 1-7 flow; after Step 7 write Iterate if necessary and output (Refined) Software Architecture Design."
          },
          "trap": {
            "zh": "不要用自创简化图替代课程图；不要漏 Architectural Concerns，也不要把 Step 1 写成建立目标。",
            "en": "Do not replace the course figure with an unsupported simplification; do not omit Architectural Concerns or turn Step 1 into goal establishment."
          }
        },
        {
          "title": {
            "zh": "ADD 设计概念",
            "en": "ADD design concepts"
          },
          "summary": {
            "zh": "ADD 中间步骤要写出可选的设计概念。",
            "en": "ADD needs concrete design concepts in the middle."
          },
          "must": {
            "zh": "设计概念包括 reference architecture、pattern、style、tactic、externally developed component。",
            "en": "Design concepts include reference architectures, patterns, styles, tactics, and externally developed components."
          },
          "answer": {
            "zh": "举例：性能 driver 可选缓存和负载均衡；可修改性 driver 可选分层和信息隐藏；领域复杂可选 DDD 和 bounded context。",
            "en": "Examples: performance uses caching/load balancing; modifiability uses layering/information hiding; domain complexity uses DDD/bounded contexts."
          },
          "trap": {
            "zh": "只写“根据需求设计架构”太空，必须写出可选择的 pattern/tactic。",
            "en": "“Design according to requirements” is too empty; name patterns/tactics."
          }
        }
      ],
      "diagramIds": [
        "add-roadmap"
      ]
    },
    {
      "id": "microservices",
      "priority": "P0",
      "title": {
        "zh": "微服务架构",
        "en": "Microservices Architecture"
      },
      "takeaway": {
        "zh": "考试不重定义，重特性、对比、模式和设计取舍。要能解释它解决分层/SOA 的哪些痛点，又带来哪些部署、通信和运维复杂性。",
        "en": "The exam is less about definition and more about characteristics, comparisons, patterns, and tradeoffs. Explain what pain points microservices solve and what communication, deployment, and operations complexity they add."
      },
      "answerFrame": {
        "zh": "先说演进动因，再分四组模式：拆分、通信、部署、可观测性。最后点出权衡：自治/独立部署 vs 分布式复杂性。",
        "en": "Start with evolution motivation, then organize patterns into decomposition, communication, deployment, and observability. Finish with the tradeoff: autonomy/independent deployment vs distributed complexity."
      },
      "bullets": [
        {
          "zh": "拆分：按业务能力、按子域；目标是高内聚、低耦合、SRP、CCP、团队自治。",
          "en": "Decomposition: by business capability or subdomain; goals are high cohesion, loose coupling, SRP, CCP, team autonomy."
        },
        {
          "zh": "通信：Circuit Breaker、服务发现、API Gateway，处理局部故障和外部访问。",
          "en": "Communication: Circuit Breaker, service discovery, API Gateway; handle partial failure and external access."
        },
        {
          "zh": "部署：容器、服务部署平台、serverless，解决隔离、扩展、成本与异构技术。",
          "en": "Deployment: containers, service deployment platform, serverless; handle isolation, scaling, cost, and technology heterogeneity."
        },
        {
          "zh": "可观测性：日志聚合、审计日志、指标、分布式追踪、异常跟踪、健康检查 API。",
          "en": "Observability: log aggregation, audit logging, metrics, distributed tracing, exception tracking, health check API."
        },
        {
          "zh": "和 SOA 对比时抓住四点：服务粒度、治理方式、通信/中间件、数据所有权。",
          "en": "When comparing with SOA, focus on service granularity, governance, communication/middleware, and data ownership."
        },
        {
          "zh": "迁移设计题可按“拆分边界 -> 数据迁移/一致性 -> 通信改造 -> 部署自动化 -> 可观测性 -> 分阶段迁移与验证”组织。",
          "en": "For migration design, use: decomposition boundary -> data migration/consistency -> communication changes -> deployment automation -> observability -> staged migration and verification."
        },
        {
          "zh": "博客补充微服务六大特性：服务粒度小、围绕业务能力组织、服务自治、独立部署、去中心化治理/数据、基础设施自动化。",
          "en": "Blog addition: six traits of microservices: small service granularity, organized around business capability, service autonomy, independent deployment, decentralized governance/data, infrastructure automation."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Lecture 6-7 Microservices slide OCR"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 6-7 OCR + 复习课 slides",
      "examWeight": "今年高阶重点",
      "deepDive": [
        {
          "title": {
            "zh": "微服务特性",
            "en": "Microservice characteristics"
          },
          "summary": {
            "zh": "微服务题要从“组织和交付方式”写起。",
            "en": "Microservices should be explained as organization and delivery style."
          },
          "must": {
            "zh": "围绕业务能力拆分、小服务、独立部署、服务自治、自有数据、轻量通信、自动化基础设施。",
            "en": "Business-capability decomposition, small services, independent deployment, autonomy, service-owned data, lightweight communication, automated infrastructure."
          },
          "answer": {
            "zh": "对比 SOA 时写共同点和差异：都服务化，微服务粒度更小、治理更去中心化、数据归属更清晰。",
            "en": "When comparing with SOA, state similarities and differences: both service-oriented; microservices are smaller, decentralized, and own data."
          },
          "trap": {
            "zh": "不要写“越小越好”。边界应按业务能力/限界上下文，不按表或类机械切。",
            "en": "Do not say smaller is always better; boundaries should follow capabilities or bounded contexts."
          }
        },
        {
          "title": {
            "zh": "分布式代价",
            "en": "Distributed cost"
          },
          "summary": {
            "zh": "微服务高分答案必须写代价。",
            "en": "High-scoring microservice answers must include costs."
          },
          "must": {
            "zh": "服务发现、网络失败、分布式事务、一致性、链路追踪、监控、分阶段发布/回滚、配置治理。",
            "en": "Service discovery, network failures, distributed transactions, consistency, tracing, monitoring, staged release/rollback, configuration governance."
          },
          "answer": {
            "zh": "结构图画完后补一句 tradeoff：局部自治提高可修改性和交付速度，但系统级调试和一致性更难。",
            "en": "After the diagram, add the tradeoff: local autonomy improves modifiability/delivery, but debugging and consistency are harder."
          },
          "trap": {
            "zh": "只写优点会显得像宣传稿。考试更看重你能说清设计取舍。",
            "en": "Only listing benefits sounds like marketing; exams reward tradeoff reasoning."
          }
        }
      ],
      "diagramIds": [
        "microservice-style-comparison",
        "review-microservice-decomposition"
      ]
    },
    {
      "id": "ddd",
      "priority": "P0",
      "title": {
        "zh": "领域驱动设计 DDD",
        "en": "Domain-Driven Design"
      },
      "takeaway": {
        "zh": "DDD 适合业务复杂、耦合变化关系复杂的系统，不是万能方法。复习要抓从问题空间到解空间的流程。",
        "en": "DDD fits systems with high business complexity and complex coupling/change relationships. It is not universal. Focus on the process from problem space to solution space."
      },
      "answerFrame": {
        "zh": "用“适用范围 -> 战略设计 -> 战术设计 -> 事件风暴/建模”作答。设计题要能划子域、限界上下文、上下文映射，并给出聚合/领域事件。",
        "en": "Answer with: applicability -> strategic design -> tactical design -> event storming/modeling. For design questions, identify subdomains, bounded contexts, context maps, aggregates, and domain events."
      },
      "bullets": [
        {
          "zh": "战略模式：核心/通用/支撑子域、限界上下文、上下文映射、防腐层、共享内核。",
          "en": "Strategic patterns: core/generic/supporting subdomain, bounded context, context mapping, anti-corruption layer, shared kernel."
        },
        {
          "zh": "战术模式：统一语言、实体、值对象、聚合、领域服务、工厂、资源库。",
          "en": "Tactical patterns: ubiquitous language, entity, value object, aggregate, domain service, factory, repository."
        },
        {
          "zh": "事件风暴：领域事件是过去发生的业务事实，命名常用名词 + 过去式动词，例如 OrderCreated。",
          "en": "Event storming: a domain event is a past business fact, often named as noun + past-tense verb, e.g. OrderCreated."
        },
        {
          "zh": "从博客补充：DDD 的价值是用子领域/限界上下文降低业务复杂度，用领域模型/统一语言沉淀可复用业务资产。",
          "en": "Blog addition: DDD reduces business complexity through subdomains/bounded contexts and captures reusable business assets through domain models/ubiquitous language."
        },
        {
          "zh": "领域建模不要等同于数据建模：数据模型偏存储结构，领域模型偏业务概念、行为和规则。",
          "en": "Domain modeling is not data modeling: data models emphasize storage structures; domain models emphasize business concepts, behavior, and rules."
        },
        {
          "zh": "DDD 四层架构常写：用户接口层、应用层、领域层、基础设施层；领域层应承载核心业务规则。",
          "en": "DDD four-layer architecture: user interface, application, domain, infrastructure; core business rules belong in the domain layer."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Lecture 8-9 DDD slide OCR"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 8-9 OCR + 2025 DDD 学长博客辅助",
      "examWeight": "设计分析题高概率",
      "deepDive": [
        {
          "title": {
            "zh": "战略设计",
            "en": "Strategic design"
          },
          "summary": {
            "zh": "DDD 先解决问题空间，不是先画类图。",
            "en": "DDD starts with the problem space, not class diagrams."
          },
          "must": {
            "zh": "子域、核心域、通用语言、限界上下文、上下文映射、防腐层。",
            "en": "Subdomain, core domain, ubiquitous language, bounded context, context map, anti-corruption layer."
          },
          "answer": {
            "zh": "以订单系统举例：订单、支付、库存是不同 bounded contexts，通过事件和契约协同。",
            "en": "Example: ordering, payment, and inventory are bounded contexts cooperating through events/contracts."
          },
          "trap": {
            "zh": "不要把 bounded context 等同微服务或数据库表。它首先是模型边界。",
            "en": "Do not equate bounded context with a microservice or database table; it is primarily a model boundary."
          }
        },
        {
          "title": {
            "zh": "战术设计",
            "en": "Tactical design"
          },
          "summary": {
            "zh": "战略边界确定后，再落到模型内部。",
            "en": "After strategic boundaries, design the internal model."
          },
          "must": {
            "zh": "Entity、Value Object、Aggregate、Domain Service、Repository、Domain Event。",
            "en": "Entity, Value Object, Aggregate, Domain Service, Repository, Domain Event."
          },
          "answer": {
            "zh": "写聚合时说清不变量和事务边界，例如 Order 聚合维护订单项、金额和状态流转。",
            "en": "For aggregates, state invariants and transaction boundaries, e.g. Order maintains items, total, and state transitions."
          },
          "trap": {
            "zh": "不要把所有对象都放进一个大聚合；聚合过大破坏性能和并发。",
            "en": "Do not put all objects into one giant aggregate; it hurts performance and concurrency."
          }
        }
      ],
      "diagramIds": [
        "ddd-core-model",
        "review-microservice-decomposition"
      ]
    },
    {
      "id": "enterprise",
      "priority": "P1",
      "title": {
        "zh": "企业架构",
        "en": "Enterprise Architecture"
      },
      "takeaway": {
        "zh": "企业架构按 P1 复习：会 4A、TOGAF/ADM、CBM 和“战略 -> 能力 -> 4A -> 治理 -> 路线图”的实施链；案例细节只作背景。",
        "en": "Review enterprise architecture as P1: know 4A, TOGAF/ADM, CBM, and the implementation chain of strategy -> capabilities -> 4A -> governance -> roadmap; case details are background."
      },
      "answerFrame": {
        "zh": "回答时围绕“找结构、找关系、定原则”。先说战略目标和业务能力，再分业务/数据/应用/技术架构，最后用 TOGAF ADM、CBM、治理和迁移路线图说明怎么落地。",
        "en": "Answer around structure, relationships, and principles. Start with strategic goals and business capabilities, split business/data/application/technology architecture, then use TOGAF ADM, CBM, governance, and a migration roadmap to explain implementation."
      },
      "bullets": [
        {
          "zh": "4A：业务架构、数据架构、应用架构、技术架构。复习课与 Lecture 10-11 的稳定口径是 4A；不要把 5A 当主线。",
          "en": "4A: business, data, application, and technology architecture. The stable review-class and Lecture 10-11 wording is 4A; do not treat 5A as the mainline."
        },
        {
          "zh": "TOGAF ADM：预备、愿景、业务架构、信息系统架构、技术架构、机会与解决方案、迁移规划、实施治理、变更管理。",
          "en": "TOGAF ADM: preliminary, vision, business architecture, information systems architecture, technology architecture, opportunities and solutions, migration planning, implementation governance, change management."
        },
        {
          "zh": "CBM：以业务能力为核心，组件高内聚、低耦合、可复用、可组装。",
          "en": "CBM: business capability as the core; components are cohesive, loosely coupled, reusable, and composable."
        },
        {
          "zh": "TOGAF、ADM、CBM 不是同一层级：TOGAF 管企业架构整体框架，ADM 管架构开发流程，CBM 管业务能力/组件拆分。",
          "en": "TOGAF, ADM, and CBM are not the same level: TOGAF is the overall EA framework, ADM is the architecture development process, and CBM decomposes business capabilities/components."
        },
        {
          "zh": "企业架构可按“现状架构 -> 目标架构 -> 差距 -> 路线图 -> 治理”组织答案。",
          "en": "Enterprise architecture answers can use “baseline architecture -> target architecture -> gaps -> roadmap -> governance”."
        },
        {
          "zh": "数字化转型题要落到价值链、业务流程、主题域、应用组合、API/服务、平台和基础设施，不要停在口号。",
          "en": "For digital transformation questions, land the answer on value chain, business processes, subject areas, application portfolio, APIs/services, platforms, and infrastructure instead of slogans."
        },
        {
          "zh": "CBM 不是技术组件图，而是用业务能力拆分企业，帮助识别共用能力、中台和治理边界。",
          "en": "CBM is not a technical component diagram; it decomposes an enterprise by business capabilities to find shared capabilities, middle platforms, and governance boundaries."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Lecture 10-11 Enterprise Architecture slide OCR",
        "Feishu AI Wiki: 05 DDD、事件风暴与企业架构"
      ],
      "group": "modern",
      "sourceConfidence": "完整录音李杉杉段 + Lecture 10-11 OCR + 同学 AI Wiki 企业架构章节补充",
      "examWeight": "概念理解题",
      "deepDive": [
        {
          "title": {
            "zh": "4A 主线",
            "en": "4A line"
          },
          "summary": {
            "zh": "企业架构把业务目标落到多层架构治理。",
            "en": "EA maps business goals to multi-layer architecture governance."
          },
          "must": {
            "zh": "业务架构回答企业要做什么和能力怎样组织；数据架构回答核心业务对象、主题域和数据标准；应用架构回答哪些应用/API/服务支撑能力；技术架构回答平台、基础设施和标准组件怎样承载交付。",
            "en": "Business architecture answers what the enterprise does and how capabilities are organized; data architecture covers core business objects, subject areas, and standards; application architecture maps applications/APIs/services to capabilities; technology architecture covers platforms, infrastructure, and standard components."
          },
          "answer": {
            "zh": "按“战略目标 -> 业务能力 -> 4A -> 治理/标准 -> 迁移路线图”写。最后补一句：企业架构的价值是统一目标、标准化建设、降低复杂度并支持持续治理。",
            "en": "Use “strategic goals -> business capabilities -> 4A -> governance/standards -> migration roadmap”. Close with EA's value: aligning goals, standardizing construction, reducing complexity, and supporting continuous governance."
          },
          "trap": {
            "zh": "不要把企业架构写成“系统架构图”。它关注企业级能力和治理。",
            "en": "Do not reduce EA to a system architecture diagram; it concerns enterprise capabilities and governance."
          }
        },
        {
          "title": {
            "zh": "TOGAF/CBM",
            "en": "TOGAF/CBM"
          },
          "summary": {
            "zh": "TOGAF 给方法，CBM 给业务能力地图。",
            "en": "TOGAF gives the method; CBM gives the capability map."
          },
          "must": {
            "zh": "ADM 是迭代方法；CBM 把企业拆成能力组件，用于识别价值、重复建设和改进优先级。",
            "en": "ADM is an iterative method; CBM decomposes the enterprise into capability components to identify value, duplication, and priorities."
          },
          "answer": {
            "zh": "答题可写“战略 -> 能力 -> 架构 -> 路线图 -> 治理闭环”。",
            "en": "Use “strategy -> capability -> architecture -> roadmap -> governance loop”."
          },
          "trap": {
            "zh": "CBM 不是技术组件图，别把服务/数据库直接画成 capability。",
            "en": "CBM is not a technical component diagram; do not draw services/databases as capabilities."
          }
        },
        {
          "title": {
            "zh": "实施路径",
            "en": "Implementation path"
          },
          "summary": {
            "zh": "Wiki 补充强调企业架构题要写成从战略到实施的连续链条。",
            "en": "The Wiki supplement emphasizes writing EA as a continuous chain from strategy to implementation."
          },
          "must": {
            "zh": "自顶向下：战略规划 -> 战略能力 -> 流程能力/指标/改善机会；自底向上：沉淀通用能力、中台和平台能力。",
            "en": "Top down: strategic planning -> strategic capabilities -> process capabilities/metrics/improvement opportunities; bottom up: accumulate common capabilities, middle-platform capabilities, and platform capabilities."
          },
          "answer": {
            "zh": "实施步骤可写：1 识别战略与价值驱动；2 建能力地图/价值链/流程模型；3 设计数据责任、应用组合、服务边界和集成关系；4 选择平台、中间件、部署与网络标准；5 用原则、评审、路线图和变更管理持续治理。",
            "en": "Implementation steps: 1 identify strategy and value drivers; 2 build capability map/value chain/process models; 3 design data responsibility, application portfolio, service boundaries, and integration; 4 select platform, middleware, deployment, and network standards; 5 govern continuously with principles, reviews, roadmap, and change management."
          },
          "trap": {
            "zh": "不要只背 4A 名词。题目问数字化转型作用时，要说明 4A 如何把目标落到能力、数据、应用服务和技术平台。",
            "en": "Do not only memorize the four A names. If asked about digital transformation, explain how 4A maps goals to capabilities, data, application services, and technology platforms."
          }
        }
      ],
      "diagramIds": [
        "enterprise-4a"
      ]
    },
    {
      "id": "patterns",
      "priority": "P0",
      "title": {
        "zh": "架构模式、风格与演进",
        "en": "Architectural Patterns, Styles, and Evolution"
      },
      "takeaway": {
        "zh": "吕骏复习强调：可能考每一代架构的结构骨架与演进理由。不要死背模式名，要理解旧矛盾如何推出现代架构。",
        "en": "Lu Jun emphasized that each architecture generation may be tested by skeleton and evolution rationale. Do not memorize names only; explain how old tensions lead to newer architectures."
      },
      "answerFrame": {
        "zh": "按“时代矛盾 -> 架构骨架 -> 解决的痛点 -> 新问题/取舍 -> 适用场景”作答。画图时先画最简单骨架。",
        "en": "Answer by: historical tension -> structural skeleton -> pain point solved -> new problems/tradeoffs -> suitable context. When drawing, start with the simplest skeleton."
      },
      "bullets": [
        {
          "zh": "主线：算力稀缺 -> 多用户共享 -> 富交互 -> 系统分层 -> 企业协同 -> 团队自治发布 -> 平台化韧性。",
          "en": "Main line: scarce computation -> multi-user sharing -> rich interaction -> system layering -> enterprise collaboration -> autonomous team releases -> platform resilience."
        },
        {
          "zh": "CS 解决主机终端交互弱的问题，但胖客户端带来维护困难。",
          "en": "C/S solves weak interaction in mainframe/terminal systems, but fat clients create maintenance difficulty."
        },
        {
          "zh": "分层解决耦合问题，但分层不够细时缺乏独立部署和局部迭代能力。",
          "en": "Layering reduces coupling, but coarse layers lack independent deployment and local iteration."
        },
        {
          "zh": "事件驱动把同步调用链变异步，提升韧性，但引入时序与排障复杂性。",
          "en": "Event-driven design turns synchronous call chains asynchronous, improving resilience while adding ordering and debugging complexity."
        },
        {
          "zh": "博客补充分类型记忆：Module patterns（Layered）、C&C patterns（Broker/MVC/Pipe-filter/Client-server/P2P/SOA/Pub-sub/Shared-data）、Allocation patterns（Map-reduce/Multi-tier）。",
          "en": "Blog classification: Module patterns (Layered), C&C patterns (Broker/MVC/Pipe-filter/Client-server/P2P/SOA/Pub-sub/Shared-data), Allocation patterns (Map-reduce/Multi-tier)."
        },
        {
          "zh": "模式题不要写成设计模式题：这里问的是系统级组织方式、连接件、部署/分配和质量属性取舍。",
          "en": "Do not answer architecture-pattern questions as GoF design-pattern questions: focus on system-level organization, connectors, allocation/deployment, and quality tradeoffs."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lu Jun review-class slides",
        "Lecture 3 OCR"
      ],
      "group": "patterns",
      "sourceConfidence": "完整录音吕骏段 + Lecture 3 OCR",
      "examWeight": "今年理解题",
      "deepDive": [
        {
          "title": {
            "zh": "风格/模式/战术粒度",
            "en": "Style/pattern/tactic granularity"
          },
          "summary": {
            "zh": "先分清粒度，再举例。",
            "en": "Clarify granularity before examples."
          },
          "must": {
            "zh": "Style 是结构家族，pattern 是命名复用方案，tactic 是针对质量属性的小设计动作。",
            "en": "Style is a family of structures, pattern is a named reusable solution, tactic is a small quality-driven design move."
          },
          "answer": {
            "zh": "答 pattern 按“上下文 -> 结构 -> 优点 -> 局限”写；答 tactic 按“质量属性 -> 机制 -> 取舍”写。",
            "en": "For patterns use context, structure, benefits, limits; for tactics use quality, mechanism, tradeoff."
          },
          "trap": {
            "zh": "不要答成 GoF 设计模式大集合。这里重点是架构级模式/风格/战术。",
            "en": "Do not dump GoF design patterns; this is about architectural patterns/styles/tactics."
          }
        },
        {
          "title": {
            "zh": "演进矛盾",
            "en": "Evolution tension"
          },
          "summary": {
            "zh": "吕骏复习强调按时代矛盾理解架构模式。",
            "en": "Lu Jun emphasized historical tensions behind patterns."
          },
          "must": {
            "zh": "主机终端解决机器昂贵，C/S 改善交互，分层/SOA 解耦和分工，微服务/云原生追求自治和弹性。",
            "en": "Mainframe shared expensive machines, C/S improved interaction, layered/SOA decoupled work, microservices/cloud-native pursue autonomy and resilience."
          },
          "answer": {
            "zh": "说明一种模式时说它解决了什么矛盾、又带来什么新问题。",
            "en": "When explaining a pattern, state the tension it solves and the new problem it creates."
          },
          "trap": {
            "zh": "不要把架构演进写成线性优劣排序；每种模式都是时代约束下的取舍。",
            "en": "Do not rank evolution linearly; each pattern is a tradeoff under constraints."
          }
        }
      ],
      "diagramIds": [
        "review-architecture-evolution",
        "review-architecture-units",
        "microservice-style-comparison"
      ]
    },
    {
      "id": "views",
      "priority": "P0",
      "title": {
        "zh": "视图与架构文档化",
        "en": "Views and Architecture Documentation"
      },
      "takeaway": {
        "zh": "4+1 views 是张贺复习课明确主线；Views and Beyond 用于补充文档化，不要把一堆 UML 图名当答案。",
        "en": "4+1 views are explicit review-class mainline. Views and Beyond supports documentation; do not answer by listing random UML diagram names."
      },
      "answerFrame": {
        "zh": "4+1：逻辑、过程、物理、开发 + 用例场景。Views and Beyond：先文档化视图，再补充跨视图信息、接口、映射、理由、质量属性。",
        "en": "4+1: logical, process, physical, development + use-case scenarios. Views and Beyond: document views first, then beyond-view information, interfaces, mappings, rationale, and quality attributes."
      },
      "bullets": [
        {
          "zh": "Module viewtype：分解、使用、泛化、分层、数据模型等。",
          "en": "Module viewtype: decomposition, uses, generalization, layered, data model, etc."
        },
        {
          "zh": "Component-and-connector viewtype：运行时组件、连接器、交互。",
          "en": "Component-and-connector viewtype: runtime components, connectors, interactions."
        },
        {
          "zh": "Allocation viewtype：软件到环境、硬件、团队、文件系统等的映射。",
          "en": "Allocation viewtype: mapping software to environment, hardware, teams, filesystems, etc."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "group": "process",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "examWeight": "历史高频，今年降权",
      "deepDive": [
        {
          "title": {
            "zh": "多视图动机",
            "en": "Why multiple views"
          },
          "summary": {
            "zh": "不同 stakeholder 需要不同视角。",
            "en": "Different stakeholders need different perspectives."
          },
          "must": {
            "zh": "Module 看实现单元，C&C 看运行时交互，Allocation 看软件到硬件/团队/文件的映射。",
            "en": "Module concerns implementation units, C&C runtime interaction, Allocation software-to-environment mapping."
          },
          "answer": {
            "zh": "先说为什么不能只用一个图，再列 3 类 viewtype 或 4+1 并说明目的。",
            "en": "Explain why one diagram is insufficient, then list three viewtypes or 4+1 and their purposes."
          },
          "trap": {
            "zh": "不要把“视图”写成随机 UML 图名。视图要对应 stakeholder concern。",
            "en": "Do not list random UML diagrams; views must match stakeholder concerns."
          }
        },
        {
          "title": {
            "zh": "文档包",
            "en": "Documentation package"
          },
          "summary": {
            "zh": "Views and Beyond 要写 view 内和 view 外。",
            "en": "Views and Beyond includes view and beyond-view information."
          },
          "must": {
            "zh": "每个 view 要有主表示、元素目录、关系、接口、行为、上下文、理由；beyond-view 有路线图、概览、术语、约束、映射。",
            "en": "Each view needs primary presentation, element catalog, relations, interfaces, behavior, context, rationale; beyond-view includes roadmap, overview, glossary, constraints, mappings."
          },
          "answer": {
            "zh": "架构文档题按“overview -> views -> beyond-view -> mappings/rationale”答。",
            "en": "Answer architecture documentation as overview, views, beyond-view, mappings/rationale."
          },
          "trap": {
            "zh": "只写“画类图、部署图、时序图”不够。要说每个视图服务谁、解决什么 concern。",
            "en": "Class/deployment/sequence diagrams alone are insufficient; state audience and concern."
          }
        }
      ],
      "diagramIds": [
        "review-4-plus-1-views",
        "architecture-design-process"
      ]
    },
    {
      "id": "quality-tactics",
      "group": "core",
      "priority": "P0",
      "examWeight": "质量属性扩展题",
      "sourceConfidence": "完整录音张贺段 + Lecture 2-4 OCR",
      "title": {
        "zh": "质量属性战术",
        "en": "Quality Attribute Tactics"
      },
      "takeaway": {
        "zh": "tactic 是把质量属性落到架构设计决定的最小工具，答题要从“属性 -> 场景 -> tactic -> tradeoff”走。",
        "en": "A tactic is the smallest tool that turns a quality attribute into architectural decisions; answer through “attribute -> scenario -> tactic -> tradeoff”."
      },
      "answerFrame": {
        "zh": "先写六要素场景，再选 tactic：可用性用故障检测/恢复/预防，性能用资源需求控制/资源管理，安全用认证授权/检测/恢复，可测试性用控制与观察。",
        "en": "Start with the six-part scenario, then choose tactics: availability uses fault detection/recovery/prevention; performance uses resource demand/control and resource management; security uses authenticate/authorize/detect/recover; testability uses control and observe."
      },
      "bullets": [
        {
          "zh": "Availability：ping/echo、heartbeat、exception detection、rollback、active/passive redundancy。",
          "en": "Availability: ping/echo, heartbeat, exception detection, rollback, active/passive redundancy."
        },
        {
          "zh": "Performance：limit event response、prioritize events、resource pooling、concurrency、caching、load balancing。",
          "en": "Performance: limit event response, prioritize events, resource pooling, concurrency, caching, load balancing."
        },
        {
          "zh": "Modifiability：encapsulate、use an intermediary、restrict dependencies、defer binding time。",
          "en": "Modifiability: encapsulate, use an intermediary, restrict dependencies, defer binding time."
        },
        {
          "zh": "Security：authenticate users、authorize users、limit access、detect attacks、recover。",
          "en": "Security: authenticate users, authorize users, limit access, detect attacks, recover."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lecture 2-4 Quality Attributes OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "战术速记",
            "en": "Tactic memory"
          },
          "summary": {
            "zh": "tactic 是质量属性到设计的桥。",
            "en": "A tactic bridges quality attributes and design."
          },
          "must": {
            "zh": "可用性：detect/recover/prevent；性能：resource demand/management/arbitration；安全：抵抗、检测、恢复；可测试：控制和观察。",
            "en": "Availability: detect/recover/prevent; performance: resource demand/management/arbitration; security: resist/detect/recover; testability: control and observe."
          },
          "answer": {
            "zh": "看到属性题，先写场景，再选 tactic，并说明它改变了哪一段响应。",
            "en": "For an attribute question, write scenario, choose tactic, and say which response it changes."
          },
          "trap": {
            "zh": "不要把 tactic 当完整 pattern。多个 tactic 组合后才可能形成 broker、microservices、layered 等模式。",
            "en": "Do not treat tactic as a complete pattern; patterns combine multiple tactics."
          }
        },
        {
          "title": {
            "zh": "取舍表达",
            "en": "Tradeoff wording"
          },
          "summary": {
            "zh": "战术题要用 tradeoff 把答案收住。",
            "en": "Tactic answers need tradeoff closure."
          },
          "must": {
            "zh": "缓存提升性能但带来一致性；冗余提升可用性但增加成本；认证提升安全但影响易用性。",
            "en": "Caching improves performance but complicates consistency; redundancy improves availability but costs more; authentication improves security but may hurt usability."
          },
          "answer": {
            "zh": "最后一句写“因此该 tactic 适用于……但需要……配套”。",
            "en": "End with “therefore this tactic suits ..., but needs ... support”."
          },
          "trap": {
            "zh": "只列 tactic 名字不得分高，要解释用途和代价。",
            "en": "Listing tactic names alone is weak; explain purpose and cost."
          }
        }
      ],
      "diagramIds": [
        "quality-scenario-table",
        "utility-tree"
      ]
    },
    {
      "id": "design-decisions",
      "group": "process",
      "priority": "P0",
      "examWeight": "复习课点名概念",
      "sourceConfidence": "完整录音 + 复习课整理稿 + 对应 review slides/OCR",
      "title": {
        "zh": "设计决定七分类",
        "en": "Seven Categories of Design Decisions"
      },
      "takeaway": {
        "zh": "架构设计不是只选 pattern，而是系统性做一组设计决定；复习课明确点到七类决定。",
        "en": "Architecture design is not merely choosing a pattern; it is a systematic set of design decisions. The review class explicitly named seven categories."
      },
      "answerFrame": {
        "zh": "按七类展开：责任分配、协调/配置模型、数据模型、资源管理、架构元素映射、绑定时间、技术选择。每类给一个例子即可。",
        "en": "Use seven categories: responsibility allocation, coordination/configuration model, data model, resource management, mapping among architectural elements, binding time, technology choice. Give one example each."
      },
      "bullets": [
        {
          "zh": "责任分配：把功能、质量属性责任分配给元素，例如认证服务负责身份校验。",
          "en": "Responsibility allocation: assign function/quality responsibilities to elements, e.g. an auth service handles identity checks."
        },
        {
          "zh": "协调/配置：定义元素如何交互，选择同步调用、异步事件、broker 或 pub-sub。",
          "en": "Coordination/configuration: define element interaction, such as synchronous calls, events, broker, or pub-sub."
        },
        {
          "zh": "数据：定义数据生命周期、所有权、一致性边界和持久化策略。",
          "en": "Data: define data lifecycle, ownership, consistency boundary, and persistence strategy."
        },
        {
          "zh": "绑定时间：决定变化在编译、部署、启动还是运行时绑定，直接影响可修改性与可测试性。",
          "en": "Binding time: decide whether variation binds at compile, deployment, startup, or runtime; this affects modifiability and testability."
        }
      ],
      "sources": [
        "Complete review recording transcript",
        "Complete review minutes",
        "Review-class slides OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "七类决定",
            "en": "Seven decision categories"
          },
          "summary": {
            "zh": "设计决定是架构的实质。",
            "en": "Design decisions are the substance of architecture."
          },
          "must": {
            "zh": "责任分配、协调模型、数据模型、资源管理、元素映射、绑定时间、技术选择。",
            "en": "Responsibility assignment, coordination model, data model, resource management, element mapping, binding time, technology choice."
          },
          "answer": {
            "zh": "每类给一个例子：如把支付职责放入 Payment Service，通信选事件，数据归服务所有，运行时绑定策略。",
            "en": "Give examples: payment responsibility in Payment Service, events for coordination, service-owned data, runtime binding."
          },
          "trap": {
            "zh": "不要把“技术选型”当作唯一设计决定。架构主要是职责、交互、约束和变化点。",
            "en": "Technology choice is not the only design decision; architecture is responsibilities, interactions, constraints, variation points."
          }
        },
        {
          "title": {
            "zh": "绑定时间",
            "en": "Binding time"
          },
          "summary": {
            "zh": "binding time 常与可修改性/可测试性一起考。",
            "en": "Binding time often appears with modifiability/testability."
          },
          "must": {
            "zh": "越晚绑定越灵活但测试组合和运行时不确定性更高；越早绑定更稳定但变化成本高。",
            "en": "Later binding is more flexible but increases test combinations and runtime uncertainty; earlier binding is stable but harder to change."
          },
          "answer": {
            "zh": "用插件、配置、编译期选择、运行时策略切换举例。",
            "en": "Use plug-ins, configuration, compile-time choice, runtime strategy selection as examples."
          },
          "trap": {
            "zh": "不要单向吹 late binding。考试更喜欢双向 tradeoff。",
            "en": "Do not praise late binding one-sidedly; exams prefer two-way tradeoffs."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "add-roadmap"
      ]
    },
    {
      "id": "evaluation-atam",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年高频，今年复习课降权",
      "sourceConfidence": "历史题 + 质量属性/Utility tree 课程资料；今年未抬到主线",
      "title": {
        "zh": "ATAM 架构评估",
        "en": "ATAM Architecture Evaluation"
      },
      "takeaway": {
        "zh": "ATAM 今年未被复习课强调，但往年反复考输出、参与者和风险/敏感点/权衡点，建议作为历史高频保留。",
        "en": "ATAM was not emphasized this year, but past papers repeatedly ask outputs, stakeholders, and risks/sensitivity/tradeoff points; keep it as historical high-frequency material."
      },
      "answerFrame": {
        "zh": "按阶段背输出，再用三概念收尾：risk 是潜在问题，sensitivity point 影响单一质量属性，tradeoff point 同时影响多个质量属性。",
        "en": "Memorize outputs by phase, then close with three concepts: risk is a potential problem, sensitivity point affects one quality attribute, tradeoff point affects multiple attributes."
      },
      "bullets": [
        {
          "zh": "Phase 1 核心输出：业务驱动、架构方法、效用树、场景、风险/非风险、敏感点/权衡点。",
          "en": "Phase 1 outputs: business drivers, architectural approaches, utility tree, scenarios, risks/non-risks, sensitivity/tradeoff points."
        },
        {
          "zh": "Phase 2 加入更广泛 stakeholder 生成和排序场景，并归纳风险主题。",
          "en": "Phase 2 involves broader stakeholders to generate/prioritize scenarios and summarize risk themes."
        },
        {
          "zh": "Phase 3 输出最终报告，包含风险主题、敏感点、权衡点和推荐行动。",
          "en": "Phase 3 produces the final report with risk themes, sensitivity points, tradeoff points, and recommended actions."
        }
      ],
      "sources": [
        "Historical past papers",
        "Lecture 2-4 Quality Attributes OCR"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "阶段输出",
            "en": "Phase outputs"
          },
          "summary": {
            "zh": "ATAM 历史高频，按阶段表背。",
            "en": "ATAM is historically frequent; memorize phase-output table."
          },
          "must": {
            "zh": "Phase 0 计划；Phase 1 业务目标、架构、效用树、风险/非风险、敏感点/权衡点；Phase 2 stakeholder 场景和风险主题；Phase 3 报告。",
            "en": "Phase 0 plan; Phase 1 business drivers, architecture, utility tree, risks/non-risks, sensitivity/tradeoff points; Phase 2 stakeholder scenarios/risk themes; Phase 3 report."
          },
          "answer": {
            "zh": "用“阶段 -> 参与者 -> 输出物”三列表回答最稳。",
            "en": "A phase-participant-output table is safest."
          },
          "trap": {
            "zh": "不要把 ATAM 写成测试。它评估架构决策对质量属性的影响。",
            "en": "ATAM is not testing; it evaluates architecture decisions against qualities."
          }
        },
        {
          "title": {
            "zh": "三个概念",
            "en": "Three concepts"
          },
          "summary": {
            "zh": "risk / sensitivity / tradeoff 要有例子。",
            "en": "Risk, sensitivity, and tradeoff need examples."
          },
          "must": {
            "zh": "risk 是潜在负面结果；sensitivity point 是某参数影响一个质量；tradeoff point 是一个决定影响多个质量且方向可能冲突。",
            "en": "Risk is a potential negative outcome; sensitivity point affects one quality; tradeoff point affects multiple qualities in potentially conflicting directions."
          },
          "answer": {
            "zh": "例子：单 DB 是可用性风险；缓存大小是性能敏感点；分层是可修改性和性能的权衡点。",
            "en": "Examples: single DB is availability risk; cache size is performance sensitivity; layering trades modifiability and performance."
          },
          "trap": {
            "zh": "概念定义没有例子很容易显空。",
            "en": "Definitions without examples feel empty."
          }
        }
      ],
      "diagramIds": [
        "utility-tree"
      ]
    },
    {
      "id": "reuse-variability",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年题补充",
      "sourceConfidence": "历史题保底；完整录音未作为今年重点",
      "title": {
        "zh": "复用、SPL、MDA 与可变性",
        "en": "Reuse, SPL, MDA, and Variability"
      },
      "takeaway": {
        "zh": "这部分不是今年复习课主线，但往年题出现过，适合作为“遇到就能写”的补充模块。",
        "en": "This is not the current review-class mainline, but it appears in past papers; keep it as a backup module."
      },
      "answerFrame": {
        "zh": "SPL 复用核心资产和产品线架构，MDA 复用平台无关模型和转换，SOA 复用服务契约与组合；共同点是用抽象和变化机制管理多个产品/平台/场景。",
        "en": "SPL reuses core assets and product-line architecture; MDA reuses platform-independent models and transformations; SOA reuses service contracts/compositions; all use abstraction and variation mechanisms across products/platforms/scenarios."
      },
      "bullets": [
        {
          "zh": "SPL 的关键是 commonality/variability，不是一个产品的版本发布。",
          "en": "SPL centers on commonality/variability, not releases of one product."
        },
        {
          "zh": "Variation point 是允许变化的位置，binding time 决定变化何时被绑定。",
          "en": "A variation point is where variation is allowed; binding time decides when the variation is bound."
        },
        {
          "zh": "MDA 中 PIM 到 PSM 的转换体现模型复用和平台迁移。",
          "en": "In MDA, PIM-to-PSM transformations express model reuse and platform migration."
        }
      ],
      "sources": [
        "Historical past papers",
        "Raw predecessor notes"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "SPL 核心",
            "en": "SPL core"
          },
          "summary": {
            "zh": "产品线不是复制产品。",
            "en": "A product line is not copy-paste products."
          },
          "must": {
            "zh": "core assets、product line architecture、commonality、variability、variation points、feature model。",
            "en": "Core assets, product line architecture, commonality, variability, variation points, feature model."
          },
          "answer": {
            "zh": "按“多个相关产品 -> 共性/可变性 -> 核心资产 -> 变体生成”答。",
            "en": "Answer as related products, commonality/variability, core assets, variant derivation."
          },
          "trap": {
            "zh": "不要把 SPL 当单产品版本发布或配置文件。",
            "en": "Do not treat SPL as versioning or a config file only."
          }
        },
        {
          "title": {
            "zh": "复用三件套",
            "en": "Reuse trio"
          },
          "summary": {
            "zh": "SPL/MDA/SOA 复用对象不同。",
            "en": "SPL, MDA, and SOA reuse different things."
          },
          "must": {
            "zh": "SPL 复用核心资产，MDA 复用模型和转换，SOA 复用服务契约和组合。",
            "en": "SPL reuses core assets; MDA reuses models/transformations; SOA reuses service contracts/compositions."
          },
          "answer": {
            "zh": "比较题按 reuse object / mechanism / suitable context 三列写。",
            "en": "For comparison, use reuse object, mechanism, suitable context."
          },
          "trap": {
            "zh": "共同点是抽象和变化管理，差异是复用粒度。",
            "en": "Commonality is abstraction and variation management; difference is reuse granularity."
          }
        }
      ],
      "diagramIds": []
    },
    {
      "id": "design-playbook",
      "group": "exam",
      "priority": "P0",
      "examWeight": "设计分析题模板",
      "sourceConfidence": "完整录音 + 微服务/DDD 设计题主线 + 往年题练习",
      "title": {
        "zh": "设计分析题答题模板",
        "en": "Design-Analysis Answer Playbooks"
      },
      "takeaway": {
        "zh": "设计题要让老师看到你在用架构方法。2026 主模板应围绕 ASR/ADD、微服务、DDD，而不是旧三层/缓存题。",
        "en": "Design answers should show architectural method. The 2026 main template should center ASR/ADD, microservices, and DDD, not old three-tier/cache questions."
      },
      "answerFrame": {
        "zh": "通用结构：识别 stakeholders/ASRs/constraints -> 用 ADD 或 DDD/微服务推导边界 -> 画核心结构 -> 分配职责/API/数据归属 -> 补质量属性 tradeoff 与验证。",
        "en": "General structure: identify stakeholders/ASRs/constraints -> use ADD or DDD/microservices to derive boundaries -> draw the core structure -> assign responsibilities/APIs/data ownership -> add quality tradeoffs and validation."
      },
      "bullets": [
        {
          "zh": "ADD/ASR 题：从 stakeholder concerns、质量属性场景和约束选择 driver，再按 ADD 七步组织迭代和文档化。",
          "en": "ADD/ASR questions: select drivers from stakeholder concerns, quality scenarios, and constraints, then organize iterations and documentation with ADD seven steps."
        },
        {
          "zh": "微服务设计题：从系统操作、业务能力或 DDD 子域推服务边界，说明 API、数据归属、部署和可观测性。",
          "en": "Microservice design: derive boundaries from operations, business capabilities, or DDD subdomains; explain APIs, data ownership, deployment, and observability."
        },
        {
          "zh": "DDD 设计题：先划子域/限界上下文，再补聚合、领域事件、上下文映射和与服务边界的关系。",
          "en": "DDD design: identify subdomains/bounded contexts, then add aggregates, domain events, context mapping, and service-boundary mapping."
        },
        {
          "zh": "旧三层/缓存题只作为 P2 历史题练习，遇到再写，不放进 2026 主模板。",
          "en": "Old three-tier/cache prompts are P2 historical practice only; answer if asked, but keep them out of the 2026 main template."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Li Shanshan review-class slides",
        "Recent past-paper clusters"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "设计题总链条",
            "en": "Design answer chain"
          },
          "summary": {
            "zh": "设计题必须有结构、有职责、有取舍。",
            "en": "Design questions need structure, responsibilities, and tradeoffs."
          },
          "must": {
            "zh": "识别 ASR -> 选模式/战术 -> 画核心结构 -> 分配职责/接口 -> 说明质量属性取舍 -> 文档化/验证。",
            "en": "Identify ASRs, choose patterns/tactics, draw core structure, assign responsibilities/interfaces, discuss quality tradeoffs, document/verify."
          },
          "answer": {
            "zh": "哪怕题目只说“design”，也要把图转成文字说明，避免阅卷看不懂。",
            "en": "Even if the prompt only says “design”, translate the diagram into written responsibilities."
          },
          "trap": {
            "zh": "不要只堆术语。图里出现的每个组件都要有存在理由。",
            "en": "Do not dump terms; each component in the diagram needs a reason."
          }
        },
        {
          "title": {
            "zh": "今年主设计模板",
            "en": "Current design template"
          },
          "summary": {
            "zh": "围绕微服务 + DDD + ADD 文档化，不再让三层/缓存旧题抢主线。",
            "en": "Center microservices + DDD + ADD documentation; old three-tier/cache prompts should not dominate."
          },
          "must": {
            "zh": "服务边界、数据边界、API/事件协作、部署与可观测性、质量属性 tradeoff。",
            "en": "Service boundaries, data boundaries, API/event collaboration, deployment/observability, and quality tradeoffs."
          },
          "answer": {
            "zh": "图上画业务能力/限界上下文到服务的映射，文字说明每个服务职责、数据归属和跨服务协作。",
            "en": "Draw the mapping from business capabilities/bounded contexts to services, then describe responsibilities, data ownership, and cross-service collaboration."
          },
          "trap": {
            "zh": "不要把 Saga、API Gateway、某个服务名写成唯一标准答案；它们是可用的示例设计手段。",
            "en": "Do not treat Saga, API Gateway, or a specific service name as the only standard answer; they are illustrative design choices."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "add-roadmap",
        "ddd-core-model",
        "review-microservice-decomposition"
      ]
    },
    {
      "id": "ai",
      "group": "modern",
      "priority": "P3",
      "examWeight": "背景了解，不当主线",
      "sourceConfidence": "吕骏完整录音明确 AI 增强/AI 原生不考；仅作背景",
      "title": {
        "zh": "AI 增强 / AI 原生架构",
        "en": "AI-Enabled / AI-Native Architecture"
      },
      "takeaway": {
        "zh": "完整录音中吕骏明确说 AI 增强、AI 原生不会考；这里只保留背景概念，P3 只读。",
        "en": "In the complete recording, Lu Jun explicitly says AI-enabled and AI-native architecture will not be tested. Keep this as P3 background only."
      },
      "answerFrame": {
        "zh": "不用背。若阅读资料库时看到相关内容，只理解它是架构演进趋势，不写进常规真题答案模板。",
        "en": "Do not memorize. If encountered in sources, understand it only as an architecture-evolution trend; do not put it into normal answer templates."
      },
      "bullets": [
        {
          "zh": "AI for DDD：辅助领域模型、代码骨架和测试用例生成。",
          "en": "AI for DDD: assist domain models, code skeletons, and test cases."
        },
        {
          "zh": "DDD for AI：明确逻辑输入和业务边界，降低模型/智能体系统复杂度。",
          "en": "DDD for AI: clarify logical inputs and business boundaries to reduce model/agent-system complexity."
        },
        {
          "zh": "考试优先级低于 ADD、DDD、微服务、企业架构。",
          "en": "Exam priority is lower than ADD, DDD, microservices, and enterprise architecture."
        }
      ],
      "sources": [
        "Complete review minutes",
        "Lu Jun recording segment",
        "EagleBear 2025Spring review blog"
      ],
      "deepDive": [
        {
          "title": {
            "zh": "考试定位",
            "en": "Exam position"
          },
          "summary": {
            "zh": "复习课说 AI 不是主考试重点。",
            "en": "Review notes say AI is not the main exam focus."
          },
          "must": {
            "zh": "了解 AI-enabled architecture、AI-native architecture、AI for DDD、DDD for AI 即可。",
            "en": "Know AI-enabled architecture, AI-native architecture, AI for DDD, and DDD for AI as background."
          },
          "answer": {
            "zh": "论述题可用一句话补充：AI 引入模型、数据、反馈闭环和治理，架构仍要处理质量属性和边界。",
            "en": "In essays, add one line: AI introduces models, data, feedback loops, and governance, while architecture still handles qualities and boundaries."
          },
          "trap": {
            "zh": "不要把时间花在 AI 细节背诵上，优先 ADD/微服务/DDD/EA。",
            "en": "Do not spend core memorization time on AI details; prioritize ADD/microservices/DDD/EA."
          }
        }
      ],
      "diagramIds": []
    }
  ],
  "glossary": [
    {
      "category": "foundation",
      "zh": "软件架构",
      "en": "Software Architecture",
      "noteZh": "系统元素、关系、属性及演化原则的高层设计。",
      "noteEn": "High-level design of system elements, relations, properties, and evolution principles."
    },
    {
      "category": "foundation",
      "zh": "架构师",
      "en": "Software Architect",
      "noteZh": "协调利益相关者、做技术/工程决策并管理架构风险的人。",
      "noteEn": "A role coordinating stakeholders, making technical/engineering decisions, and managing architectural risks."
    },
    {
      "category": "requirements",
      "zh": "架构相关需求",
      "en": "Architecturally Significant Requirement (ASR)",
      "noteZh": "会显著影响架构设计决定的需求。",
      "noteEn": "A requirement with significant impact on architectural decisions."
    },
    {
      "category": "requirements",
      "zh": "质量属性",
      "en": "Quality Attribute",
      "noteZh": "系统“做得好不好”的性质，如可用性、性能、可修改性。",
      "noteEn": "A property describing how well a system behaves, such as availability, performance, or modifiability."
    },
    {
      "category": "requirements",
      "zh": "约束",
      "en": "Constraint",
      "noteZh": "设计前已经确定且必须满足的设计决定。",
      "noteEn": "A pre-made design decision that must be satisfied."
    },
    {
      "category": "scenario",
      "zh": "刺激源",
      "en": "Source of Stimulus",
      "noteZh": "触发质量场景的人、系统或事件来源。",
      "noteEn": "The person, system, or event source that triggers a quality scenario."
    },
    {
      "category": "scenario",
      "zh": "刺激",
      "en": "Stimulus",
      "noteZh": "触发系统响应的事件。",
      "noteEn": "The event that triggers a system response."
    },
    {
      "category": "scenario",
      "zh": "环境",
      "en": "Environment",
      "noteZh": "场景发生时系统所处状态，如正常运行、高峰期、故障中。",
      "noteEn": "The condition under which the scenario occurs, such as normal operation, peak load, or failure."
    },
    {
      "category": "scenario",
      "zh": "制品",
      "en": "Artifact",
      "noteZh": "被刺激影响的系统部分。",
      "noteEn": "The part of the system affected by the stimulus."
    },
    {
      "category": "scenario",
      "zh": "响应",
      "en": "Response",
      "noteZh": "系统应如何反应。",
      "noteEn": "How the system should react."
    },
    {
      "category": "scenario",
      "zh": "响应度量",
      "en": "Response Measure",
      "noteZh": "衡量响应是否达标的指标。",
      "noteEn": "The metric used to judge whether the response is acceptable."
    },
    {
      "category": "quality",
      "zh": "可用性",
      "en": "Availability",
      "noteZh": "系统在需要时可提供服务的能力。",
      "noteEn": "The ability of a system to provide service when needed."
    },
    {
      "category": "quality",
      "zh": "可修改性",
      "en": "Modifiability",
      "noteZh": "系统被低成本、安全修改的能力。",
      "noteEn": "The ability to change a system safely and cheaply."
    },
    {
      "category": "quality",
      "zh": "互操作性",
      "en": "Interoperability",
      "noteZh": "系统与外部系统正确交换并理解数据的能力。",
      "noteEn": "The ability to exchange and correctly interpret data with external systems."
    },
    {
      "category": "quality",
      "zh": "性能",
      "en": "Performance",
      "noteZh": "响应时间、吞吐量、资源使用等表现。",
      "noteEn": "Behavior measured by latency, throughput, resource usage, etc."
    },
    {
      "category": "decision",
      "zh": "策略",
      "en": "Strategy",
      "noteZh": "解决质量问题的较高层方向。",
      "noteEn": "A higher-level direction for solving a quality problem."
    },
    {
      "category": "decision",
      "zh": "战术",
      "en": "Tactic",
      "noteZh": "解决质量属性问题的原子设计决定。",
      "noteEn": "An atomic design decision addressing a quality attribute."
    },
    {
      "category": "decision",
      "zh": "模式",
      "en": "Pattern",
      "noteZh": "对反复出现问题的可复用解决方案，常由多个战术组合。",
      "noteEn": "A reusable solution to a recurring problem, often combining tactics."
    },
    {
      "category": "decision",
      "zh": "风格",
      "en": "Style",
      "noteZh": "一类架构组织方式及其约束。",
      "noteEn": "A way of organizing architecture with characteristic constraints."
    },
    {
      "category": "views",
      "zh": "逻辑视图",
      "en": "Logical View",
      "noteZh": "描述重要元素及其关系。",
      "noteEn": "Describes significant elements and their relationships."
    },
    {
      "category": "views",
      "zh": "过程视图",
      "en": "Process View",
      "noteZh": "描述并发、通信和运行时行为。",
      "noteEn": "Describes concurrency, communication, and runtime behavior."
    },
    {
      "category": "views",
      "zh": "物理视图",
      "en": "Physical View",
      "noteZh": "描述进程/软件到硬件或部署环境的映射。",
      "noteEn": "Describes mapping of processes/software to hardware or deployment environments."
    },
    {
      "category": "views",
      "zh": "开发视图",
      "en": "Development View",
      "noteZh": "描述软件内部组织及开发结构。",
      "noteEn": "Describes internal software organization and development structure."
    },
    {
      "category": "views",
      "zh": "用例场景",
      "en": "Use-Case Scenarios",
      "noteZh": "4+1 中贯穿多个视图的核心场景。",
      "noteEn": "The '+1' scenarios that connect multiple views in 4+1."
    },
    {
      "category": "methods",
      "zh": "属性驱动设计",
      "en": "Attribute-Driven Design (ADD)",
      "noteZh": "按驱动因素迭代推导架构设计的方法。",
      "noteEn": "An iterative method deriving architecture from design drivers."
    },
    {
      "category": "methods",
      "zh": "架构权衡分析方法",
      "en": "Architecture Tradeoff Analysis Method (ATAM)",
      "noteZh": "围绕质量属性、风险、敏感点、权衡点评估架构的方法。",
      "noteEn": "A method evaluating architecture through quality attributes, risks, sensitivity points, and tradeoff points."
    },
    {
      "category": "methods",
      "zh": "效用树",
      "en": "Utility Tree",
      "noteZh": "把质量目标分解成场景与度量，并排序优先级。",
      "noteEn": "A tree decomposing quality goals into scenarios and measures for prioritization."
    },
    {
      "category": "ddd",
      "zh": "限界上下文",
      "en": "Bounded Context",
      "noteZh": "模型和语言保持一致的业务/知识边界。",
      "noteEn": "A boundary within which a model and language stay consistent."
    },
    {
      "category": "ddd",
      "zh": "上下文映射",
      "en": "Context Mapping",
      "noteZh": "描述多个限界上下文之间的关系。",
      "noteEn": "Describes relationships among bounded contexts."
    },
    {
      "category": "ddd",
      "zh": "防腐层",
      "en": "Anti-Corruption Layer",
      "noteZh": "隔离外部模型污染本领域模型的适配层。",
      "noteEn": "An adapter layer that prevents external models from polluting the domain model."
    },
    {
      "category": "ddd",
      "zh": "聚合",
      "en": "Aggregate",
      "noteZh": "由聚合根控制一致性边界的一组领域对象。",
      "noteEn": "A consistency boundary of domain objects controlled by an aggregate root."
    },
    {
      "category": "ddd",
      "zh": "领域事件",
      "en": "Domain Event",
      "noteZh": "过去发生且对业务有意义的事实。",
      "noteEn": "A meaningful business fact that has already happened."
    },
    {
      "category": "microservices",
      "zh": "断路器",
      "en": "Circuit Breaker",
      "noteZh": "阻止局部故障在服务调用链中扩散的模式。",
      "noteEn": "A pattern preventing local failures from cascading across service calls."
    },
    {
      "category": "microservices",
      "zh": "服务发现",
      "en": "Service Discovery",
      "noteZh": "让客户端或平台找到服务实例地址的机制。",
      "noteEn": "A mechanism for finding service instance locations."
    },
    {
      "category": "microservices",
      "zh": "API 网关",
      "en": "API Gateway",
      "noteZh": "外部客户端访问后端服务的统一入口。",
      "noteEn": "A unified entry point for external clients to access backend services."
    },
    {
      "category": "microservices",
      "zh": "可观测性",
      "en": "Observability",
      "noteZh": "通过日志、指标、链路等理解系统行为和定位问题的能力。",
      "noteEn": "The ability to understand behavior and diagnose issues through logs, metrics, and traces."
    },
    {
      "category": "enterprise",
      "zh": "业务架构",
      "en": "Business Architecture",
      "noteZh": "描述业务能力、流程、组织和价值链。",
      "noteEn": "Describes capabilities, processes, organization, and value chains."
    },
    {
      "category": "enterprise",
      "zh": "数据架构",
      "en": "Data Architecture",
      "noteZh": "描述数据资产、标准、责任与模型。",
      "noteEn": "Describes data assets, standards, responsibilities, and models."
    },
    {
      "category": "enterprise",
      "zh": "应用架构",
      "en": "Application Architecture",
      "noteZh": "描述应用蓝图、组件与服务共享关系。",
      "noteEn": "Describes application blueprint, components, and shared services."
    },
    {
      "category": "enterprise",
      "zh": "技术架构",
      "en": "Technology Architecture",
      "noteZh": "描述技术组件、基础设施和标准。",
      "noteEn": "Describes technology components, infrastructure, and standards."
    },
    {
      "category": "enterprise",
      "zh": "TOGAF ADM",
      "en": "TOGAF ADM",
      "noteZh": "企业架构开发方法的迭代周期。",
      "noteEn": "The iterative development cycle in TOGAF."
    },
    {
      "category": "enterprise",
      "zh": "业务组件模型",
      "en": "Component Business Model (CBM)",
      "noteZh": "按业务能力划分可复用、可组装组件的方法。",
      "noteEn": "A method organizing reusable and composable components by business capability."
    },
    {
      "category": "enterprise",
      "zh": "能力地图",
      "en": "Capability Map",
      "noteZh": "把战略目标拆成可建设、可复用、可治理业务能力的企业级地图。",
      "noteEn": "An enterprise-level map that decomposes strategic goals into buildable, reusable, and governable business capabilities."
    },
    {
      "category": "enterprise",
      "zh": "迁移路线图",
      "en": "Migration Roadmap",
      "noteZh": "从现状架构走向目标架构的阶段、优先级和治理计划。",
      "noteEn": "The phases, priorities, and governance plan for moving from baseline architecture to target architecture."
    },
    {
      "category": "enterprise",
      "zh": "实施治理",
      "en": "Implementation Governance",
      "noteZh": "通过原则、标准、评审和变更管理约束企业架构落地。",
      "noteEn": "Controls EA implementation through principles, standards, reviews, and change management."
    },
    {
      "category": "quality",
      "zh": "安全性",
      "en": "Security",
      "noteZh": "抵抗攻击、保护数据和服务的能力。",
      "noteEn": "Ability to resist attacks and protect data/services."
    },
    {
      "category": "quality",
      "zh": "可测试性",
      "en": "Testability",
      "noteZh": "系统能被控制、观察和自动验证的能力。",
      "noteEn": "Ability to control, observe, and verify the system."
    },
    {
      "category": "quality",
      "zh": "易用性",
      "en": "Usability",
      "noteZh": "用户有效、满意地完成任务的能力。",
      "noteEn": "Ability for users to complete tasks effectively and satisfactorily."
    },
    {
      "category": "requirements",
      "zh": "质量属性工作坊",
      "en": "Quality Attribute Workshop (QAW)",
      "noteZh": "通过 stakeholder 讨论把质量目标场景化的方法。",
      "noteEn": "A workshop method that turns quality goals into scenarios."
    },
    {
      "category": "decision",
      "zh": "设计决定",
      "en": "Design Decision",
      "noteZh": "影响结构、行为、质量或演化的架构选择。",
      "noteEn": "An architectural choice affecting structure, behavior, qualities, or evolution."
    },
    {
      "category": "decision",
      "zh": "绑定时间",
      "en": "Binding Time",
      "noteZh": "变化点在编译、部署、启动或运行时被确定的时刻。",
      "noteEn": "The time when a variation is bound: compile, deployment, startup, or runtime."
    },
    {
      "category": "methods",
      "zh": "风险",
      "en": "Risk",
      "noteZh": "某个架构决定可能导致质量目标失败的潜在问题。",
      "noteEn": "A potential problem where an architectural decision may fail a quality goal."
    },
    {
      "category": "methods",
      "zh": "敏感点",
      "en": "Sensitivity Point",
      "noteZh": "某个决定或参数会显著影响一个质量属性的点。",
      "noteEn": "A decision or parameter that strongly affects a quality attribute."
    },
    {
      "category": "methods",
      "zh": "权衡点",
      "en": "Tradeoff Point",
      "noteZh": "同时影响多个质量属性且可能方向相反的决定点。",
      "noteEn": "A decision point affecting multiple quality attributes, often in opposite directions."
    },
    {
      "category": "patterns",
      "zh": "分层架构",
      "en": "Layered Architecture",
      "noteZh": "按抽象级别组织模块并限制层间依赖的风格。",
      "noteEn": "A style organizing modules by abstraction level with restricted dependencies."
    },
    {
      "category": "patterns",
      "zh": "代理模式",
      "en": "Broker Pattern",
      "noteZh": "用 broker 中介客户端与服务端通信的 C&C 模式。",
      "noteEn": "A C&C pattern where a broker mediates client-server communication."
    },
    {
      "category": "patterns",
      "zh": "管道-过滤器",
      "en": "Pipe-and-Filter",
      "noteZh": "由过滤器处理数据流、管道传递数据的 C&C 模式。",
      "noteEn": "A C&C pattern where filters process data streams and pipes transfer data."
    },
    {
      "category": "patterns",
      "zh": "发布-订阅",
      "en": "Publish-Subscribe",
      "noteZh": "生产者发布事件、订阅者异步接收的模式。",
      "noteEn": "A pattern where producers publish events and subscribers receive them asynchronously."
    },
    {
      "category": "patterns",
      "zh": "多层部署",
      "en": "Multi-tier",
      "noteZh": "把系统逻辑分配到不同部署层或机器上的 allocation 模式。",
      "noteEn": "An allocation pattern distributing system logic across deployment tiers or machines."
    },
    {
      "category": "microservices",
      "zh": "服务注册表",
      "en": "Service Registry",
      "noteZh": "保存服务实例地址并支持服务发现的组件。",
      "noteEn": "A component storing service instance locations for discovery."
    },
    {
      "category": "microservices",
      "zh": "分布式追踪",
      "en": "Distributed Tracing",
      "noteZh": "跨服务记录请求路径以定位延迟和错误的可观测性机制。",
      "noteEn": "An observability mechanism recording request paths across services."
    },
    {
      "category": "microservices",
      "zh": "服务自有数据",
      "en": "Database per Service",
      "noteZh": "每个微服务拥有自己的数据模型和数据库边界。",
      "noteEn": "Each microservice owns its own data model and database boundary."
    },
    {
      "category": "ddd",
      "zh": "子域",
      "en": "Subdomain",
      "noteZh": "业务领域中可独立分析的部分，可分核心/支撑/通用。",
      "noteEn": "A part of the business domain, often core/supporting/generic."
    },
    {
      "category": "ddd",
      "zh": "统一语言",
      "en": "Ubiquitous Language",
      "noteZh": "团队和代码共享的一套领域词汇。",
      "noteEn": "A shared domain language used by team and code."
    },
    {
      "category": "ddd",
      "zh": "实体",
      "en": "Entity",
      "noteZh": "由身份标识而非属性值区分的领域对象。",
      "noteEn": "A domain object identified by identity rather than value."
    },
    {
      "category": "ddd",
      "zh": "值对象",
      "en": "Value Object",
      "noteZh": "由属性值定义、通常不可变的领域对象。",
      "noteEn": "A domain object defined by values, usually immutable."
    },
    {
      "category": "ddd",
      "zh": "资源库",
      "en": "Repository",
      "noteZh": "封装聚合持久化和检索的对象。",
      "noteEn": "An object encapsulating persistence and retrieval of aggregates."
    },
    {
      "category": "ddd",
      "zh": "事件风暴",
      "en": "Event Storming",
      "noteZh": "围绕领域事件协作建模业务流程的方法。",
      "noteEn": "A collaborative modeling method centered on domain events."
    },
    {
      "category": "enterprise",
      "zh": "安全架构",
      "en": "Security Architecture",
      "noteZh": "有些材料在 4A 外加入的第五类架构关注点。",
      "noteEn": "A fifth architecture concern added to 4A in some materials."
    },
    {
      "category": "enterprise",
      "zh": "架构开发方法",
      "en": "Architecture Development Method (ADM)",
      "noteZh": "TOGAF 中用于开发和治理企业架构的迭代方法。",
      "noteEn": "TOGAF iterative method for developing and governing enterprise architecture."
    },
    {
      "category": "reuse",
      "zh": "软件产品线",
      "en": "Software Product Line (SPL)",
      "noteZh": "通过核心资产和可变性机制复用一族相关产品。",
      "noteEn": "Reuse of a family of related products through core assets and variability mechanisms."
    },
    {
      "category": "reuse",
      "zh": "产品线架构",
      "en": "Product Line Architecture (PLA)",
      "noteZh": "支撑产品族共同性和可变性的架构基础。",
      "noteEn": "Architecture basis supporting product-family commonality and variability."
    },
    {
      "category": "reuse",
      "zh": "变化点",
      "en": "Variation Point",
      "noteZh": "产品线中允许变化并由机制绑定的位置。",
      "noteEn": "A place in a product line where variation is allowed and bound by mechanisms."
    },
    {
      "category": "reuse",
      "zh": "模型驱动架构",
      "en": "Model-Driven Architecture (MDA)",
      "noteZh": "通过平台无关模型和模型转换实现复用与迁移。",
      "noteEn": "Reuse and migration through platform-independent models and transformations."
    },
    {
      "category": "quality",
      "zh": "平均无故障时间",
      "en": "Mean Time Between Failures (MTBF)",
      "noteZh": "两次故障之间的平均时间，可用于可用性/可靠性度量。",
      "noteEn": "Average time between failures; used for availability/reliability measurement."
    },
    {
      "category": "quality",
      "zh": "平均修复时间",
      "en": "Mean Time To Repair (MTTR)",
      "noteZh": "故障发生后恢复服务的平均时间。",
      "noteEn": "Average time to restore service after a failure."
    },
    {
      "category": "quality",
      "zh": "服务等级协议",
      "en": "Service Level Agreement (SLA)",
      "noteZh": "用可测指标承诺服务质量的协议，例如可用性百分比或响应时间。",
      "noteEn": "Agreement committing measurable service quality, such as availability percentage or latency."
    },
    {
      "category": "quality",
      "zh": "服务中断",
      "en": "Outage",
      "noteZh": "系统无法提供预期服务的一段时间。",
      "noteEn": "A period when the system cannot provide expected service."
    },
    {
      "category": "quality",
      "zh": "故障",
      "en": "Failure",
      "noteZh": "系统对外表现偏离规格或无法完成服务。",
      "noteEn": "Externally visible deviation from specification or inability to provide service."
    },
    {
      "category": "quality",
      "zh": "错误",
      "en": "Error",
      "noteZh": "系统内部状态不正确，可能导致 failure。",
      "noteEn": "An incorrect internal state that may lead to a failure."
    },
    {
      "category": "quality",
      "zh": "缺陷/故障源",
      "en": "Fault",
      "noteZh": "导致 error 的潜在缺陷、bug 或硬件问题。",
      "noteEn": "A latent defect, bug, or hardware problem that can cause an error."
    },
    {
      "category": "microservices",
      "zh": "微服务六特性",
      "en": "Six Microservice Traits",
      "noteZh": "粒度小、围绕业务能力、自治、独立部署、去中心化治理/数据、基础设施自动化。",
      "noteEn": "Small services, business capability orientation, autonomy, independent deployment, decentralized governance/data, infrastructure automation."
    }
  ],
  "assets": [
    {
      "title": {
        "zh": "张贺复习课画板",
        "en": "Zhang He review whiteboard"
      },
      "src": "assets/feishu-whiteboards/zhang-he.jpg",
      "note": {
        "zh": "对应课程总复习大纲，含基础内容与题型信息。",
        "en": "Course-review outline with fundamentals and exam type information."
      }
    },
    {
      "title": {
        "zh": "李杉杉复习课画板",
        "en": "Li Shanshan review whiteboard"
      },
      "src": "assets/feishu-whiteboards/li-shanshan.jpg",
      "note": {
        "zh": "对应 ADD、微服务、DDD、企业架构等复习重点。",
        "en": "Review focus for ADD, microservices, DDD, and enterprise architecture."
      }
    },
    {
      "title": {
        "zh": "吕骏架构模式画板",
        "en": "Lu Jun architecture-patterns whiteboard"
      },
      "src": "assets/feishu-whiteboards/lu-jun.jpg",
      "note": {
        "zh": "对应架构演进与时代矛盾主线。",
        "en": "Architecture evolution and historical-tension storyline."
      }
    }
  ],
  "topicGroups": [
    {
      "id": "core",
      "title": {
        "zh": "基础主线",
        "en": "Core Foundations"
      },
      "note": {
        "zh": "概念、质量属性、ASR 是简答题保底。",
        "en": "Definitions, quality attributes, and ASRs stabilize short-answer points."
      }
    },
    {
      "id": "process",
      "title": {
        "zh": "过程方法",
        "en": "Process and Methods"
      },
      "note": {
        "zh": "ADD/文档化/评估/设计决定。",
        "en": "ADD, documentation, evaluation, and design decisions."
      }
    },
    {
      "id": "patterns",
      "title": {
        "zh": "模式与演进",
        "en": "Patterns and Evolution"
      },
      "note": {
        "zh": "按时代矛盾理解架构模式。",
        "en": "Understand patterns through historical tensions."
      }
    },
    {
      "id": "modern",
      "title": {
        "zh": "现代架构",
        "en": "Modern Architecture"
      },
      "note": {
        "zh": "微服务、DDD、企业架构是今年高阶重点。",
        "en": "Microservices, DDD, and EA are the advanced focus this year."
      }
    },
    {
      "id": "historical",
      "title": {
        "zh": "历史高频",
        "en": "Historical High-Frequency"
      },
      "note": {
        "zh": "今年未必重，但往年反复出现。",
        "en": "Maybe lower priority this year, but frequent in past papers."
      }
    },
    {
      "id": "exam",
      "title": {
        "zh": "答题模板",
        "en": "Answer Playbooks"
      },
      "note": {
        "zh": "把知识点转成考试可写答案。",
        "en": "Turn concepts into exam-ready answers."
      }
    }
  ],
  "studyPlan": [
    {
      "id": "baseline-points",
      "day": {
        "zh": "第 1 轮",
        "en": "Round 1"
      },
      "title": {
        "zh": "先拿保底分",
        "en": "Secure baseline points"
      },
      "items": [
        {
          "zh": "架构定义、架构/设计/结构、架构师职责",
          "en": "Architecture definitions, architecture/design/structure, architect roles"
        },
        {
          "zh": "质量属性六要素场景、ASR、效用树",
          "en": "Six-part quality scenarios, ASRs, utility tree"
        },
        {
          "zh": "4+1 和 Views and Beyond 只背骨架",
          "en": "Memorize only the skeleton of 4+1 and Views and Beyond"
        }
      ]
    },
    {
      "id": "advanced-focus",
      "day": {
        "zh": "第 2 轮",
        "en": "Round 2"
      },
      "title": {
        "zh": "冲今年高阶重点",
        "en": "Attack current advanced focus"
      },
      "items": [
        {
          "zh": "ADD 3.0 七步流程 + driver/iteration 口径",
          "en": "ADD 3.0 seven-step process + driver/iteration wording"
        },
        {
          "zh": "微服务拆分/通信/部署/可观测性模式",
          "en": "Microservice decomposition/communication/deployment/observability patterns"
        },
        {
          "zh": "DDD 战略/战术设计、事件风暴、四层架构",
          "en": "DDD strategic/tactical design, event storming, four-layer architecture"
        },
        {
          "zh": "企业架构 4A、TOGAF ADM、CBM（P1，应会不死背案例）",
          "en": "EA 4A, TOGAF ADM, CBM (P1; know the skeleton, not case details)"
        }
      ]
    },
    {
      "id": "past-paper-practice",
      "day": {
        "zh": "第 3 轮",
        "en": "Round 3"
      },
      "title": {
        "zh": "把真题写成答案",
        "en": "Convert past papers into answers"
      },
      "items": [
        {
          "zh": "按 40 个真题簇逐条看中文答案，再对照英文题干；2025/2022/2021 相邻课程真题只看架构筛选部分，GoF/OOP 题跳过",
          "en": "Read Chinese answer frames for all 40 clusters, then compare English prompts; use only the architecture-filtered parts of 2025/2022/2021 adjacent-course papers and skip GoF/OOP-only questions"
        },
        {
          "zh": "主练微服务 + DDD + ADD/ASR 文档化；三层、缓存只作为 P2 历史题过一遍",
          "en": "Main practice: microservices + DDD + ADD/ASR documentation; skim three-tier/cache as P2 historical prompts only"
        },
        {
          "zh": "ATAM/SPL/MDA/SOA 只保留历史高频简答骨架",
          "en": "Keep only short-answer skeletons for historical ATAM/SPL/MDA/SOA topics"
        }
      ]
    }
  ],
  "coverage": [
    {
      "area": {
        "zh": "考试形式与答题要求",
        "en": "Exam format and answer rules"
      },
      "status": {
        "zh": "以完整录音确认",
        "en": "Confirmed by complete recording"
      },
      "evidence": "data/review-class/complete-review-minutes.md; data/复习课完整录音-张贺吕骏李杉杉.txt"
    },
    {
      "area": {
        "zh": "P0 基础、质量、ASR、4+1、设计决定",
        "en": "P0 foundations, quality, ASR, 4+1, design decisions"
      },
      "status": {
        "zh": "重排为主线",
        "en": "Promoted to mainline"
      },
      "evidence": "Complete recording + Lecture 14 softarch2026-review-1 + Lecture 1/2-4 OCR"
    },
    {
      "area": {
        "zh": "P0 架构演进、ADD、微服务、DDD",
        "en": "P0 evolution, ADD, microservices, DDD"
      },
      "status": {
        "zh": "按复习课强化",
        "en": "Strengthened from review class"
      },
      "evidence": "Lu Jun Lecture 3 review; Li Shanshan review slides; Lecture 6-9/12 OCR"
    },
    {
      "area": {
        "zh": "企业架构",
        "en": "Enterprise architecture"
      },
      "status": {
        "zh": "P1，已补充实施链",
        "en": "P1, implementation chain added"
      },
      "evidence": "Complete minutes P1; Lecture 10-11 4A/TOGAF/CBM OCR; Feishu AI Wiki 05 DDD、事件风暴与企业架构"
    },
    {
      "area": {
        "zh": "ATAM、SPL/MDA、旧三层/缓存题",
        "en": "ATAM, SPL/MDA, old three-tier/cache questions"
      },
      "status": {
        "zh": "历史保底",
        "en": "Historical backup"
      },
      "evidence": "Past papers retained but not allowed to override current review-class scope"
    },
    {
      "area": {
        "zh": "AI 增强/AI 原生、GoF 设计模式",
        "en": "AI-enabled/native and GoF design patterns"
      },
      "status": {
        "zh": "明确不考/排除",
        "en": "Non-exam/excluded"
      },
      "evidence": "Complete recording Lu Jun segment; adjacent-course filtering rule"
    }
  ],
  "whiteboards": [
    {
      "id": "zhang-he",
      "title": {
        "zh": "张贺复习课画板",
        "en": "Zhang He Review Whiteboard"
      },
      "src": "assets/feishu-whiteboards/zhang-he.jpg",
      "note": {
        "zh": "课程总复习：考试形式、基础概念、质量属性、ASR、设计决定。",
        "en": "Course review: exam format, foundations, quality attributes, ASRs, design decisions."
      },
      "points": [
        {
          "zh": "成绩：平时 40%，期末 60%；英文题目，可中文或英文作答但不要混用。",
          "en": "Grading: coursework 40%, final 60%; English questions, answer in Chinese or English but do not mix."
        },
        {
          "zh": "题型：简答题、论述/问答题、设计分析题；个别题需画图。",
          "en": "Types: short answer, essay/Q&A, design analysis; some require diagrams."
        },
        {
          "zh": "基础主线：架构定义、架构/设计/结构关系、架构师职责、用户与开发者矛盾。",
          "en": "Foundation line: architecture definition, architecture/design/structure, architect role, user-developer tension."
        },
        {
          "zh": "质量主线：质量属性六要素场景、ASR 来源、效用树、设计决定/策略/tactic/pattern。",
          "en": "Quality line: six-part scenarios, ASR sources, utility tree, design decisions/strategy/tactic/pattern."
        }
      ]
    },
    {
      "id": "li-shanshan",
      "title": {
        "zh": "李杉杉复习课画板",
        "en": "Li Shanshan Review Whiteboard"
      },
      "src": "assets/feishu-whiteboards/li-shanshan.jpg",
      "note": {
        "zh": "ADD、微服务、DDD、企业架构是今年复习高阶重点。",
        "en": "ADD, microservices, DDD, and EA are the advanced focus this year."
      },
      "points": [
        {
          "zh": "ADD 3.0：Review inputs；按 driver 建立本轮 iteration goal；选择要细化的元素；选择 design concepts；实例化元素、分配职责、定义接口；画视图并记录决策；分析当前设计并评审本轮目标与 design purpose，必要时继续迭代。",
          "en": "ADD 3.0: review inputs; establish the iteration goal by selecting drivers; choose elements to refine; choose design concepts; instantiate elements, allocate responsibilities, and define interfaces; sketch views and record decisions; analyze the current design and review the iteration goal/design purpose, then iterate if necessary."
        },
        {
          "zh": "微服务：不重定义，重特性、与 SOA/分层对比、拆分/通信/部署/可观测性模式。",
          "en": "Microservices: less definition, more characteristics, comparison with SOA/layers, decomposition/communication/deployment/observability patterns."
        },
        {
          "zh": "DDD：复杂耦合系统适用；从问题空间到解空间，战略设计 + 战术设计 + 事件风暴。",
          "en": "DDD: suitable for complex coupled domains; problem space to solution space, strategic + tactical design + event storming."
        },
        {
          "zh": "企业架构：4A、TOGAF/ADM、CBM、战略业务建模和能力沉淀。",
          "en": "EA: 4A, TOGAF/ADM, CBM, strategic business modeling, capability accumulation."
        }
      ]
    },
    {
      "id": "lu-jun",
      "title": {
        "zh": "吕骏架构模式画板",
        "en": "Lu Jun Architecture-Patterns Whiteboard"
      },
      "src": "assets/feishu-whiteboards/lu-jun.jpg",
      "note": {
        "zh": "用“时代矛盾”和“管理对象变化”理解架构演进。",
        "en": "Understand architectural evolution through historical tensions and managed-object changes."
      },
      "points": [
        {
          "zh": "主机终端：机器昂贵，优先共享、一致性、安全性、可靠性；弱终端牺牲交互体验。",
          "en": "Mainframe-terminal: expensive machines, prioritize sharing/consistency/security/reliability; weak terminals sacrifice interaction."
        },
        {
          "zh": "C/S：提升交互体验，但胖客户端版本维护困难。",
          "en": "C/S: improves interaction, but fat-client versions are hard to maintain."
        },
        {
          "zh": "分层/SOA：解决耦合和分工问题，但牺牲性能和局部快速发布。",
          "en": "Layered/SOA: solves coupling/division of labor, but sacrifices performance and local fast release."
        },
        {
          "zh": "微服务到云原生/事件驱动：追求自治、长期稳定和韧性，但引入异步时序与排障复杂性。",
          "en": "Microservices to cloud-native/event-driven: autonomy, long-running stability, resilience; adds async ordering and debugging complexity."
        }
      ]
    },
    {
      "id": "ai-wiki-mainline",
      "title": {
        "zh": "AI Wiki 期末主线画板",
        "en": "AI Wiki Exam Mainline Whiteboard"
      },
      "src": "assets/feishu-whiteboards/ai-wiki-mainline.png",
      "note": {
        "zh": "把 AI 整理资料中的主线压缩成一条可作答链路：业务目标、驱动因素、架构选择、边界落地、考场输出。",
        "en": "Condenses the AI-organized source into an answerable chain: business goals, drivers, architectural choices, boundaries, and exam output."
      },
      "points": [
        {
          "zh": "起点：业务目标与 stakeholders，先说明系统要解决什么，以及最关心哪些风险与价值。",
          "en": "Start with business goals and stakeholders: what problem the system solves, and which risks/value matter most."
        },
        {
          "zh": "识别驱动：质量属性场景、ASR 与约束，把需求转成可设计、可评估的驱动因素。",
          "en": "Identify drivers: quality-attribute scenarios, ASRs, and constraints turn requirements into designable and evaluable drivers."
        },
        {
          "zh": "做出选择：用 ADD 3.0、tactics、patterns 或微服务权衡，说明选择改善了哪些质量属性。",
          "en": "Make choices: use ADD 3.0, tactics, patterns, or microservice tradeoffs to explain which qualities are improved."
        },
        {
          "zh": "落到边界：用 DDD 聚合/限界上下文和企业架构 4A/治理，把高层选择映射到组织、数据、应用和技术边界。",
          "en": "Land boundaries: use DDD aggregates/bounded contexts and EA 4A/governance to map choices to organization, data, application, and technology boundaries."
        },
        {
          "zh": "考场句式：问题与驱动因素 → 结构/决策 → 改善的质量属性 → 代价与验证。",
          "en": "Exam sentence: problem and drivers -> structure/decision -> improved quality attributes -> cost and validation."
        }
      ]
    }
  ],
  "diagrams": [
    {
      "id": "quality-scenario-table",
      "src": "assets/diagrams/quality-scenario-table.svg",
      "srcZh": "assets/diagrams/quality-scenario-table.zh.svg",
      "srcEn": "assets/diagrams/quality-scenario-table.svg",
      "title": {
        "zh": "质量属性场景 Ground Truth 表",
        "en": "Quality Attribute Scenario Ground-Truth Table"
      },
      "note": {
        "zh": "按原始课程表格重绘：七列对应质量属性、刺激源、刺激、工件、环境、响应、响应度量。",
        "en": "Redrawn from the original course table: quality attribute, source, stimulus, artifact, environment, response, response measure."
      },
      "use": {
        "zh": "质量场景题直接按此表背；Availability 行不要改成自拟切备用实例。",
        "en": "Use this table directly for quality-scenario questions; do not replace the Availability row with a self-made failover example."
      }
    },
    {
      "id": "architecture-design-process",
      "src": "assets/diagrams/architecture-design-process.svg",
      "srcZh": "assets/diagrams/architecture-design-process.zh.svg",
      "srcEn": "assets/diagrams/architecture-design-process.svg",
      "title": {
        "zh": "架构设计、文档化与评估过程图",
        "en": "Architecture Design, Documentation, and Evaluation Process"
      },
      "note": {
        "zh": "可信旧图：ASR、需求/约束、patterns/tactics、文档化和评估反馈的过程。",
        "en": "Trusted existing redraw: process from ASRs, requirements/constraints, patterns/tactics to documentation and evaluation feedback."
      },
      "use": {
        "zh": "回答架构过程题时按四活动作答。",
        "en": "Use four activities for architecture-process answers."
      }
    },
    {
      "id": "add-roadmap",
      "src": "assets/diagrams/add-roadmap.svg",
      "srcZh": "assets/diagrams/add-roadmap.zh.svg",
      "srcEn": "assets/diagrams/add-roadmap.svg",
      "title": {
        "zh": "ADD 3.0 方法流程图",
        "en": "ADD 3.0 Roadmap"
      },
      "note": {
        "zh": "可信旧图：五类 driver 输入 Step 1，Step 1-7 串行推进，必要时迭代。",
        "en": "Trusted existing redraw: five driver categories feed Step 1; Steps 1-7 proceed and iterate if necessary."
      },
      "use": {
        "zh": "ADD 真题按七步背。",
        "en": "Memorize seven steps for ADD questions."
      }
    },
    {
      "id": "utility-tree",
      "src": "assets/diagrams/utility-tree.svg",
      "srcZh": "assets/diagrams/utility-tree.zh.svg",
      "srcEn": "assets/diagrams/utility-tree.svg",
      "title": {
        "zh": "ASR 效用树 Utility Tree",
        "en": "ASR Utility Tree"
      },
      "note": {
        "zh": "把质量属性具体化为场景，再按用户/业务重要性和架构影响排序。",
        "en": "Turn quality attributes into scenarios, then rank by user/business importance and architectural impact."
      },
      "use": {
        "zh": "ASR 来源、识别、优先级题使用。",
        "en": "Use for ASR source, identification, and prioritization questions."
      }
    },
    {
      "id": "review-4-plus-1-views",
      "src": "assets/diagrams/review-4-plus-1-views.svg",
      "srcZh": "assets/diagrams/review-4-plus-1-views.zh.svg",
      "srcEn": "assets/diagrams/review-4-plus-1-views.svg",
      "title": {
        "zh": "4+1 视图模型",
        "en": "4+1 Views"
      },
      "note": {
        "zh": "来自完整录音纪要配套重绘：logical、process、physical、development 与 use-case scenarios。",
        "en": "Redrawn with the complete review minutes: logical, process, physical, development, and use-case scenarios."
      },
      "use": {
        "zh": "4+1 题和文档化题使用。",
        "en": "Use for 4+1 and documentation questions."
      }
    },
    {
      "id": "review-architecture-evolution",
      "src": "assets/diagrams/review-architecture-evolution.svg",
      "srcZh": "assets/diagrams/review-architecture-evolution.svg",
      "srcEn": "assets/diagrams/review-architecture-evolution.en.svg",
      "title": {
        "zh": "软件架构演进主线",
        "en": "Software Architecture Evolution"
      },
      "note": {
        "zh": "吕骏复习段重绘：从主机/终端、C/S、三层、SOA 到微服务、事件驱动/云原生。",
        "en": "Redrawn from Lu Jun review: from mainframe/terminal, C/S, three-tier, SOA to microservices and event-driven/cloud-native."
      },
      "use": {
        "zh": "解释“为什么演进”时按矛盾、结构、质量取舍作答。",
        "en": "Explain evolution through tension, structure, and quality tradeoffs."
      }
    },
    {
      "id": "review-architecture-units",
      "src": "assets/diagrams/review-architecture-units.svg",
      "srcZh": "assets/diagrams/review-architecture-units.svg",
      "srcEn": "assets/diagrams/review-architecture-units.en.svg",
      "title": {
        "zh": "架构演进中的基本单元变化",
        "en": "Changing Units in Architecture Evolution"
      },
      "note": {
        "zh": "展示不同阶段管理对象从程序/数据到服务、事件和云原生平台的变化。",
        "en": "Shows the managed unit shifting from programs/data to services, events, and cloud-native platforms."
      },
      "use": {
        "zh": "模式/风格演进题辅助。",
        "en": "Support for pattern/style evolution answers."
      }
    },
    {
      "id": "microservice-style-comparison",
      "src": "assets/diagrams/microservice-style-comparison.svg",
      "srcZh": "assets/diagrams/microservice-style-comparison.zh.svg",
      "srcEn": "assets/diagrams/microservice-style-comparison.svg",
      "title": {
        "zh": "单体/分层/SOA/微服务对比",
        "en": "Monolith, Layered, SOA, and Microservice Comparison"
      },
      "note": {
        "zh": "按 Lecture 6-7 表格口径重绘，突出微服务与 SOA 的通信、数据、粒度差异。",
        "en": "Redrawn from Lecture 6-7 comparison tables, highlighting communication, data, and granularity differences."
      },
      "use": {
        "zh": "微服务特性与对比题使用。",
        "en": "Use for microservice characteristics and comparison questions."
      }
    },
    {
      "id": "review-microservice-decomposition",
      "src": "assets/diagrams/review-microservice-decomposition.svg",
      "srcZh": "assets/diagrams/review-microservice-decomposition.zh.svg",
      "srcEn": "assets/diagrams/review-microservice-decomposition.svg",
      "title": {
        "zh": "微服务拆分与 DDD 边界",
        "en": "Microservice Decomposition and DDD Boundaries"
      },
      "note": {
        "zh": "来自完整录音纪要配套重绘：业务能力、子域、限界上下文与服务边界的关系。",
        "en": "Redrawn with complete review minutes: business capabilities, subdomains, bounded contexts, and service boundaries."
      },
      "use": {
        "zh": "微服务/DDD 设计题使用。",
        "en": "Use for microservice/DDD design questions."
      }
    },
    {
      "id": "ddd-core-model",
      "src": "assets/diagrams/ddd-core-model.svg",
      "srcZh": "assets/diagrams/ddd-core-model.zh.svg",
      "srcEn": "assets/diagrams/ddd-core-model.svg",
      "title": {
        "zh": "DDD 战略/战术设计图",
        "en": "DDD Strategic and Tactical Design Map"
      },
      "note": {
        "zh": "按 Lecture 8-9 OCR 重绘：子域、限界上下文、上下文映射、聚合和事件风暴。",
        "en": "Redrawn from Lecture 8-9 OCR: subdomains, bounded contexts, context mapping, aggregates, and event storming."
      },
      "use": {
        "zh": "DDD 设计题按此组织答案。",
        "en": "Use this to structure DDD design answers."
      }
    },
    {
      "id": "enterprise-4a",
      "src": "assets/diagrams/enterprise-4a.svg",
      "srcZh": "assets/diagrams/enterprise-4a.zh.svg",
      "srcEn": "assets/diagrams/enterprise-4a.svg",
      "title": {
        "zh": "企业架构 4A / TOGAF / CBM",
        "en": "Enterprise Architecture 4A / TOGAF / CBM"
      },
      "note": {
        "zh": "按 Lecture 10-11 与复习课口径重绘，强调 4A 而不是把 5A 放大成主线。",
        "en": "Redrawn from Lecture 10-11 and review-class wording; emphasizes 4A rather than over-promoting 5A."
      },
      "use": {
        "zh": "企业架构 P1 题使用。",
        "en": "Use for P1 enterprise-architecture questions."
      }
    },
    {
      "id": "three-tier-reference",
      "src": "assets/diagrams/three-tier-reference.svg",
      "srcZh": "assets/diagrams/three-tier-reference.zh.svg",
      "srcEn": "assets/diagrams/three-tier-reference.svg",
      "title": {
        "zh": "三层架构旧题参考答案图",
        "en": "Three-Tier Old-Paper Reference Diagram"
      },
      "note": {
        "zh": "说明性答题图：订票/ATM 三层职责 + Views and Beyond 文档项，不是今年主线 PPT 原图。",
        "en": "Illustrative answer diagram: booking/ATM three-tier responsibilities plus Views and Beyond documentation; not a current mainline slide."
      },
      "use": {
        "zh": "旧题设计题需要画三层时使用，优先级 P2。",
        "en": "Use for historical three-tier design questions, priority P2."
      }
    },
    {
      "id": "cache-invalidation-reference",
      "src": "assets/diagrams/cache-invalidation-reference.svg",
      "srcZh": "assets/diagrams/cache-invalidation-reference.zh.svg",
      "srcEn": "assets/diagrams/cache-invalidation-reference.svg",
      "title": {
        "zh": "分布式缓存失效旧题参考图",
        "en": "Distributed Cache Invalidation Reference"
      },
      "note": {
        "zh": "说明性答题图：先提交 DB，再由协调器/Broker 广播失效事件到缓存适配器。",
        "en": "Illustrative answer diagram: commit DB first, then coordinator/broker broadcasts invalidation events to cache adapters."
      },
      "use": {
        "zh": "缓存一致性旧题使用，优先级 P2。",
        "en": "Use for historical cache-consistency design questions, priority P2."
      }
    },
    {
      "id": "mvc-cnc-reference",
      "src": "assets/diagrams/mvc-cnc-reference.svg",
      "srcZh": "assets/diagrams/mvc-cnc-reference.zh.svg",
      "srcEn": "assets/diagrams/mvc-cnc-reference.svg",
      "title": {
        "zh": "MVC 作为 C&C 样式参考图",
        "en": "MVC as C&C Style Reference"
      },
      "note": {
        "zh": "用 MVC 说明 Component-and-Connector：运行时组件、连接件和交互约束。",
        "en": "Uses MVC to explain Component-and-Connector: runtime components, connectors, and interaction constraints."
      },
      "use": {
        "zh": "C&C/MVC 例题使用。",
        "en": "Use for C&C/MVC example questions."
      }
    },
    {
      "id": "soa-cnc-reference",
      "src": "assets/diagrams/soa-cnc-reference.svg",
      "srcZh": "assets/diagrams/soa-cnc-reference.zh.svg",
      "srcEn": "assets/diagrams/soa-cnc-reference.svg",
      "title": {
        "zh": "SOA 作为 C&C 样式参考图",
        "en": "SOA as C&C Style Reference"
      },
      "note": {
        "zh": "说明性答题图：服务是组件，契约/协议/ESB/消息总线是连接件。",
        "en": "Illustrative answer diagram: services are components; contracts, protocols, ESB, and messaging are connectors."
      },
      "use": {
        "zh": "SOA/C&C、Web Service/ESB 旧题使用。",
        "en": "Use for SOA/C&C and Web Service/ESB historical questions."
      }
    },
    {
      "id": "pipe-filter-text-pipeline",
      "src": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "srcZh": "assets/diagrams/pipe-filter-text-pipeline.zh.svg",
      "srcEn": "assets/diagrams/pipe-filter-text-pipeline.svg",
      "title": {
        "zh": "Pipe-and-Filter 文本处理参考图",
        "en": "Pipe-and-Filter Text Pipeline Reference"
      },
      "note": {
        "zh": "说明性答题图：每个 Filter 做单步转换，每条 Pipe 标明数据格式。",
        "en": "Illustrative answer diagram: each filter performs one transformation and each pipe labels the data format."
      },
      "use": {
        "zh": "Pipe-and-Filter 旧设计题使用，优先级 P2。",
        "en": "Use for historical Pipe-and-Filter design questions, priority P2."
      }
    },
    {
      "id": "broker-pattern-topology",
      "src": "assets/diagrams/broker-pattern-topology.svg",
      "srcZh": "assets/diagrams/broker-pattern-topology.zh.svg",
      "srcEn": "assets/diagrams/broker-pattern-topology.svg",
      "title": {
        "zh": "Broker 架构模式拓扑参考图",
        "en": "Broker Pattern Topology Reference"
      },
      "note": {
        "zh": "说明性答题图：Client Proxy、Broker、Server Proxy、Server 与可选注册目录。",
        "en": "Illustrative answer diagram: client proxy, broker, server proxy, server, and optional registry."
      },
      "use": {
        "zh": "Broker 旧题使用，优先级 P2。",
        "en": "Use for historical Broker questions, priority P2."
      }
    },
    {
      "id": "atam-phase-outputs",
      "src": "assets/diagrams/atam-phase-outputs.svg",
      "srcZh": "assets/diagrams/atam-phase-outputs.zh.svg",
      "srcEn": "assets/diagrams/atam-phase-outputs.svg",
      "title": {
        "zh": "ATAM 阶段输出参考表",
        "en": "ATAM Phase Outputs Reference"
      },
      "note": {
        "zh": "旧题说明性表格：只保留 Phase 0-3 输出骨架，不把 ATAM 放成 2026 主线。",
        "en": "Historical reference table: keep only the Phase 0-3 output skeleton and do not promote ATAM to the 2026 mainline."
      },
      "use": {
        "zh": "ATAM 旧题快速回忆用，优先级 P2。",
        "en": "Use as a quick recall aid for historical ATAM questions, priority P2."
      }
    }
  ],
  "examMindmap": {
    "title": {
      "zh": "复习课完整录音思维导图",
      "en": "Complete Review-Class Scope Mind Map"
    },
    "note": {
      "zh": "以完整录音和复习课 slides 为最高纲领；节点点击会统计，勾选会进入本地 checklist。",
      "en": "Highest-level outline from the complete recording and review slides; node clicks are counted and checklist state is local."
    },
    "groups": [
      {
        "id": "shape",
        "priority": "",
        "title": {
          "zh": "考试形态",
          "en": "Exam Shape"
        },
        "nodes": [
          {
            "id": "exam-short-answer",
            "title": {
              "zh": "简答题 / 论述问答 / 设计分析",
              "en": "Short answers / essays / design analysis"
            },
            "note": {
              "zh": "英文题面；中文或英文作答，但同一题不要混用。",
              "en": "English questions; answer in Chinese or English, but do not mix languages in one answer."
            }
          },
          {
            "id": "exam-diagram",
            "title": {
              "zh": "个别题可能画图",
              "en": "Some questions may require diagrams"
            },
            "note": {
              "zh": "ADD、4+1、质量场景、微服务/DDD 设计题要能手画骨架。",
              "en": "Be ready to sketch ADD, 4+1, quality scenarios, and microservice/DDD design skeletons."
            }
          }
        ]
      },
      {
        "id": "p0",
        "priority": "P0",
        "title": {
          "zh": "P0 必须会",
          "en": "P0 Must Know"
        },
        "nodes": [
          {
            "id": "mind-foundation",
            "topicId": "foundation",
            "title": {
              "zh": "软件架构基本概念",
              "en": "Architecture foundations"
            },
            "note": {
              "zh": "Structure / Elements / Relationships / Design decisions。",
              "en": "Structure / Elements / Relationships / Design decisions."
            }
          },
          {
            "id": "mind-views",
            "topicId": "views",
            "title": {
              "zh": "4+1 Views",
              "en": "4+1 Views"
            },
            "note": {
              "zh": "Logical、Process、Physical、Development + Use case scenarios。",
              "en": "Logical, Process, Physical, Development + Use case scenarios."
            }
          },
          {
            "id": "mind-quality",
            "topicId": "quality",
            "title": {
              "zh": "质量属性六要素",
              "en": "Six-part quality scenarios"
            },
            "note": {
              "zh": "刺激源、刺激、工件、环境、响应、响应度量。",
              "en": "Source, stimulus, artifact, environment, response, response measure."
            }
          },
          {
            "id": "mind-asr",
            "topicId": "asr",
            "title": {
              "zh": "ASR 与 Utility Tree",
              "en": "ASRs and Utility Tree"
            },
            "note": {
              "zh": "需求文档、访谈/workshop、业务目标，按重要性和架构影响排序。",
              "en": "Documents, interviews/workshops, business goals; rank by value and architectural impact."
            }
          },
          {
            "id": "mind-evolution",
            "topicId": "patterns",
            "title": {
              "zh": "架构演进与模式/风格/战术",
              "en": "Architecture evolution and patterns/styles/tactics"
            },
            "note": {
              "zh": "按时代矛盾、结构抓手、质量属性取舍来答。",
              "en": "Answer by historical tension, structural mechanism, and quality tradeoffs."
            }
          },
          {
            "id": "mind-add",
            "topicId": "add",
            "title": {
              "zh": "ADD 3.0 七步",
              "en": "ADD 3.0 seven steps"
            },
            "note": {
              "zh": "driver 输入、iteration goal、refine element、design concept、instantiate、sketch/document、analyze。",
              "en": "Drivers, iteration goal, refine element, design concept, instantiate, sketch/document, analyze."
            }
          },
          {
            "id": "mind-ms",
            "topicId": "microservices",
            "title": {
              "zh": "微服务：特性/对比/模式",
              "en": "Microservices: characteristics/comparison/patterns"
            },
            "note": {
              "zh": "不背定义，重点拆分、通信、部署、可观测性。",
              "en": "Do not memorize definition; focus on decomposition, communication, deployment, observability."
            }
          },
          {
            "id": "mind-ddd",
            "topicId": "ddd",
            "title": {
              "zh": "DDD：战略/战术/事件风暴",
              "en": "DDD: strategic/tactical/event storming"
            },
            "note": {
              "zh": "子域、限界上下文、上下文映射、聚合、领域事件。",
              "en": "Subdomains, bounded contexts, context maps, aggregates, domain events."
            }
          }
        ]
      },
      {
        "id": "p1",
        "priority": "P1",
        "title": {
          "zh": "P1 应会展开",
          "en": "P1 Expansion"
        },
        "nodes": [
          {
            "id": "mind-ea",
            "topicId": "enterprise",
            "title": {
              "zh": "企业架构 4A/TOGAF/CBM",
              "en": "EA 4A/TOGAF/CBM"
            },
            "note": {
              "zh": "P1：按战略、能力、4A、治理、路线图组织答案，不死背案例。",
              "en": "P1: organize answers by strategy, capabilities, 4A, governance, and roadmap; do not memorize case details."
            }
          },
          {
            "id": "mind-hps",
            "topicId": "add",
            "title": {
              "zh": "HPS ADD case",
              "en": "HPS ADD case"
            },
            "note": {
              "zh": "理解 CQRS、Kafka、command/query/export side 如何支持 ADD 流程。",
              "en": "Understand CQRS, Kafka, command/query/export side as ADD process support."
            }
          }
        ]
      },
      {
        "id": "p2",
        "priority": "P2",
        "title": {
          "zh": "P2 历史保底",
          "en": "P2 Historical Backup"
        },
        "nodes": [
          {
            "id": "mind-atam",
            "topicId": "evaluation-atam",
            "title": {
              "zh": "ATAM 骨架",
              "en": "ATAM skeleton"
            },
            "note": {
              "zh": "输出、参与者、risk/sensitivity/tradeoff。",
              "en": "Outputs, participants, risk/sensitivity/tradeoff."
            }
          },
          {
            "id": "mind-reuse",
            "topicId": "reuse-variability",
            "title": {
              "zh": "SPL/MDA/复用可变性",
              "en": "SPL/MDA/reuse and variability"
            },
            "note": {
              "zh": "旧题保底，不抢 P0 时间。",
              "en": "Old-paper backup; do not steal P0 time."
            }
          }
        ]
      },
      {
        "id": "p3",
        "priority": "P3",
        "title": {
          "zh": "P3 明确不考/只读",
          "en": "P3 Non-Exam / Read Only"
        },
        "nodes": [
          {
            "id": "mind-ai",
            "topicId": "ai",
            "title": {
              "zh": "AI 增强 / AI 原生",
              "en": "AI-enabled / AI-native"
            },
            "note": {
              "zh": "吕骏完整录音明确不考。",
              "en": "Lu Jun explicitly said this will not be tested."
            }
          },
          {
            "id": "mind-gof",
            "title": {
              "zh": "GoF 设计模式与代码实现题",
              "en": "GoF design patterns and coding questions"
            },
            "note": {
              "zh": "相邻课程材料中剔除，不纳入本课程主线。",
              "en": "Filtered from adjacent-course material and excluded from this course mainline."
            }
          }
        ]
      }
    ]
  }
};
