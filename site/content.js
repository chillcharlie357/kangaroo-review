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
          "zh": "主纲来源",
          "en": "Primary Baseline"
        },
        "body": {
          "zh": "以张贺、李杉杉、吕骏三份复习课纪要为主线，结合 Lecture 14 复习 slides 与 Lecture 3 复习回顾校对。",
          "en": "Uses the Zhang He, Li Shanshan, and Lu Jun review notes as the main outline, cross-checked with Lecture 14 review slides and the Lecture 3 review recap."
        }
      },
      {
        "label": {
          "zh": "适用边界",
          "en": "Scope Boundary"
        },
        "body": {
          "zh": "专门面向 2026 南京大学软件学院研究生《软件体系结构》期末复习；不保证适用于未来年份或本科《软件系统设计》。",
          "en": "Built specifically for the 2026 NJU Software Institute graduate Software Architecture final review; not guaranteed for future offerings or the undergraduate Software System Design course."
        }
      },
      {
        "label": {
          "zh": "纳入规则",
          "en": "Inclusion Rule"
        },
        "body": {
          "zh": "相邻课程《软件系统设计》只吸收体系结构重合题；GoF/OOP/代码实现类题排除，ATAM/SPL/MDA 等历史高频但今年未点名内容降权保留。",
          "en": "Adjacent-course Software System Design material contributes only overlapping architecture questions; GoF/OOP/coding items are excluded, while historical ATAM/SPL/MDA topics stay lower priority."
        }
      },
      {
        "label": {
          "zh": "佐证材料",
          "en": "Evidence Pool"
        },
        "body": {
          "zh": "课程 slides、OCR 文本、raw 前人资料、EagleBear 博客、Mubu 思维导图与 AI Wiki 只作交叉佐证，不替代老师复习课范围。",
          "en": "Slides, OCR text, raw senior notes, EagleBear posts, the Mubu mind map, and AI Wiki are cross-checking material only; they do not override the review-class scope."
        }
      }
    ]
  },
  "priorities": [
    {
      "level": "P0",
      "weight": "必看 / Highest",
      "title": {
        "zh": "复习课明确点名的主线",
        "en": "Current Review-Class Focus"
      },
      "summary": {
        "zh": "先拿这些：ADD 3.0、微服务、DDD、企业架构。李杉杉复习课把后几块合计约 30-40 分；20 分设计题往年偏 DDD，今年仍要重点练 DDD/ADD 的流程化作答。",
        "en": "Start here: ADD 3.0, microservices, DDD, and enterprise architecture. Li Shanshan's review class put the later blocks at about 30-40 points; the 20-point design question has historically leaned DDD, so practice process-based DDD/ADD answers."
      },
      "items": [
        {
          "topicId": "add",
          "zh": "ADD 3.0：会流程、会迭代目标、会文档化与评审",
          "en": "ADD 3.0: know the process, iteration goals, documentation, and review"
        },
        {
          "topicId": "microservices",
          "zh": "微服务：拆分、通信、部署、可观测性模式",
          "en": "Microservices: decomposition, communication, deployment, and observability patterns"
        },
        {
          "topicId": "ddd",
          "zh": "DDD：战略/战术设计、限界上下文、事件风暴",
          "en": "DDD: strategic/tactical design, bounded context, event storming"
        },
        {
          "topicId": "enterprise",
          "zh": "企业架构：4A/5A、TOGAF/ADM、CBM、建模落地",
          "en": "Enterprise architecture: 4A/5A, TOGAF/ADM, CBM, modeling and implementation"
        }
      ]
    },
    {
      "level": "P1",
      "weight": "高频 / High",
      "title": {
        "zh": "往年题高频核心",
        "en": "Historical High-Frequency Core"
      },
      "summary": {
        "zh": "这些是往年题反复出现的基本盘，也是简答题最稳的得分来源。相邻课程真题只用来验证这些架构基本功，不用来抬高今年复习课未点名内容。",
        "en": "These recur in past papers and are the safest source of short-answer points. Adjacent-course papers are used to practice these architecture basics, not to promote topics outside the current review-class focus."
      },
      "items": [
        {
          "topicId": "quality",
          "zh": "质量属性场景：六要素模板必须熟",
          "en": "Quality attribute scenarios: memorize the six-part template"
        },
        {
          "topicId": "asr",
          "zh": "ASR：来源、识别、效用树优先级",
          "en": "ASRs: sources, identification, utility tree priorities"
        },
        {
          "topicId": "views",
          "zh": "视图与文档：4+1、Views and Beyond、三类 viewtype",
          "en": "Views and documentation: 4+1, Views and Beyond, three viewtype families"
        },
        {
          "topicId": "patterns",
          "zh": "模式/风格/战术：会比较、会说取舍",
          "en": "Patterns/styles/tactics: compare and explain tradeoffs"
        }
      ]
    },
    {
      "level": "P2",
      "weight": "辅助 / Support",
      "title": {
        "zh": "背景与补充",
        "en": "Supporting Background"
      },
      "summary": {
        "zh": "用于论述题提气和补充上下文，只留骨架；AI 增强/AI 原生按复习课说法不作为考试重点。",
        "en": "Useful context for essays; keep only skeletons. AI-enabled/AI-native architecture is not a central exam target according to the review notes."
      },
      "items": [
        {
          "topicId": "evaluation-atam",
          "zh": "ATAM：历史高频输出/角色/风险点，只背骨架",
          "en": "ATAM: historical outputs/roles/risk points; memorize only the skeleton"
        },
        {
          "topicId": "reuse-variability",
          "zh": "SPL/MDA/复用与可变性：旧题保底，不抢主线时间",
          "en": "SPL/MDA/reuse and variability: old-paper baseline, do not steal mainline time"
        },
        {
          "topicId": "ai",
          "zh": "AI 赋能架构：背景了解，不当作主复习负担",
          "en": "AI-enabled architecture: background only, not the main review load"
        }
      ]
    }
  ],
  "topics": [
    {
      "id": "foundation",
      "priority": "P1",
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
          "zh": "架构来源：需求、利益相关者、开发组织、架构师经验、技术/运行环境、业务目标。",
          "en": "Sources: requirements, stakeholders, development organization, architect experience, technical/operational environment, business goals."
        },
        {
          "zh": "架构师四类工作：协调利益相关者、软件工程经验/最佳实践、技术知识、风险管理。",
          "en": "Architect work: stakeholder liaison, software engineering practices, technical knowledge, risk management."
        },
        {
          "zh": "架构活动：识别 ASR、设计架构、输出文档、评估架构，并随需求演化维护。",
          "en": "Activities: identify ASRs, design the architecture, document it, evaluate it, and evolve it as requirements change."
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
        "Zhang He review notes",
        "Lecture 14 softarch2026 review",
        "Lecture 1 OCR"
      ],
      "group": "core",
      "sourceConfidence": "review-class + Lecture 1 OCR",
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
            "zh": "往年喜欢问 “where does architecture come from”。",
            "en": "Past papers often ask where architecture comes from."
          },
          "must": {
            "zh": "需求、利益相关者、开发组织、架构师经验、技术/运行环境；可补充业务目标、组织约束、现有系统。",
            "en": "Requirements, stakeholders, development organization, architect experience, technical/operational environment; plus business goals, organizational constraints, existing systems."
          },
          "answer": {
            "zh": "列五类来源，再各给一个例子，例如监管方带来安全/审计，运维带来可观测性，组织结构带来团队边界。",
            "en": "List five sources and give examples such as regulators causing audit needs, operators causing observability, organization causing team boundaries."
          },
          "trap": {
            "zh": "不要把来源只写成“需求”。架构常常被非功能目标、组织和技术环境强烈驱动。",
            "en": "Do not reduce sources to requirements only; organization and environment are strong drivers."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process"
      ]
    },
    {
      "id": "quality",
      "priority": "P1",
      "title": {
        "zh": "质量属性与场景建模",
        "en": "Quality Attributes and Scenario Modeling"
      },
      "takeaway": {
        "zh": "质量属性是架构设计的主要依据。只有被场景化描述的质量需求，才适合作为架构设计输入。",
        "en": "Quality attributes are primary drivers of architecture. Only scenario-based quality requirements are suitable architectural inputs."
      },
      "answerFrame": {
        "zh": "固定六要素：source of stimulus、stimulus、environment、artifact、response、response measure。题目要画图时，把六个节点都标出来。",
        "en": "Use the fixed six elements: source of stimulus, stimulus, environment, artifact, response, response measure. If a diagram is requested, label all six nodes."
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
        "Zhang He review notes",
        "Li Shanshan review notes",
        "Lecture 14 review slide"
      ],
      "group": "core",
      "sourceConfidence": "review-class + Lecture 2-4 OCR + EagleBear quality notes",
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
            "zh": "source of stimulus、stimulus、environment、artifact、response、response measure。中文可背：刺激源、刺激、环境、制品、响应、响应度量。",
            "en": "Source of stimulus, stimulus, environment, artifact, response, response measure."
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
        "quality-scenario",
        "atam-utility-tree"
      ]
    },
    {
      "id": "asr",
      "priority": "P1",
      "title": {
        "zh": "ASR 与效用树",
        "en": "ASRs and Utility Tree"
      },
      "takeaway": {
        "zh": "ASR 是会显著影响架构设计决定的需求，不等于所有需求。复习课强调要从需求文档、访谈/workshop 和业务目标中补齐。",
        "en": "An ASR is a requirement that significantly affects architectural decisions. It is not every requirement. The review notes emphasize documents, interviews/workshops, and business goals."
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
        "Zhang He review notes",
        "Past paper clusters"
      ],
      "group": "core",
      "sourceConfidence": "review-class + past papers + EagleBear review",
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
            "zh": "先定义，再说来源：需求文档、stakeholder workshop/interview、业务目标、约束、场景/用例分析。",
            "en": "Define it, then list sources: documents, workshops/interviews, business goals, constraints, scenarios/use cases."
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
        "atam-utility-tree",
        "quality-scenario"
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
        "Li Shanshan review notes",
        "Lecture 12 ADD 3.0 slide pages 34-70",
        "Lecture 14 course review slide"
      ],
      "group": "process",
      "sourceConfidence": "Li review-class + Lecture 12 ADD 3.0 slide + course-figure correction",
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
            "en": "Do not replace the course figure with an invented simplification; do not omit Architectural Concerns or turn Step 1 into goal establishment."
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
          "zh": "迁移设计题可按“拆分边界 -> 数据迁移 -> 通信改造 -> 部署自动化 -> 可观测性 -> 灰度里程碑”组织。",
          "en": "For migration design, use: decomposition boundary -> data migration -> communication changes -> deployment automation -> observability -> rollout milestones."
        },
        {
          "zh": "博客补充微服务六大特性：服务粒度小、围绕业务能力组织、服务自治、独立部署、去中心化治理/数据、基础设施自动化。",
          "en": "Blog addition: six traits of microservices: small service granularity, organized around business capability, service autonomy, independent deployment, decentralized governance/data, infrastructure automation."
        }
      ],
      "sources": [
        "Li Shanshan review notes",
        "Lecture 14 course review slide",
        "Lecture 6-7 extracted text"
      ],
      "group": "modern",
      "sourceConfidence": "Li review-class + Lecture 6-7 + EagleBear microservice notes",
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
            "zh": "服务发现、网络失败、分布式事务、一致性、链路追踪、监控、灰度发布、配置治理。",
            "en": "Service discovery, network failures, distributed transactions, consistency, tracing, monitoring, canary releases, configuration governance."
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
        "microservice-migration",
        "ddd-context-map"
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
        "Li Shanshan review notes",
        "Lecture 14 course review slide",
        "Lecture 8-9 extracted text"
      ],
      "group": "modern",
      "sourceConfidence": "Li review-class + Lecture 8-9 + EagleBear 2025 DDD post",
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
        "ddd-context-map",
        "microservice-migration"
      ]
    },
    {
      "id": "enterprise",
      "priority": "P0",
      "title": {
        "zh": "企业架构",
        "en": "Enterprise Architecture"
      },
      "takeaway": {
        "zh": "企业架构题难度高但老师要求偏理论理解：知道 4A/5A、TOGAF/ADM、CBM 以及落地建模思路即可。",
        "en": "Enterprise architecture questions are hard but expected at a conceptual level: know 4A/5A, TOGAF/ADM, CBM, and implementation/modeling ideas."
      },
      "answerFrame": {
        "zh": "回答时围绕“找结构、找关系、定原则”。先分业务/数据/应用/技术架构，再用 TOGAF ADM 或 CBM 说明怎么落地。",
        "en": "Frame the answer as finding structures, relationships, and principles. Split business/data/application/technology architecture, then use TOGAF ADM or CBM to explain implementation."
      },
      "bullets": [
        {
          "zh": "4A：业务架构、数据架构、应用架构、技术架构；有材料也提安全架构形成 5A。",
          "en": "4A: business, data, application, and technology architecture; some materials add security architecture as 5A."
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
          "zh": "企业架构可按“现状架构 -> 目标架构 -> 差距 -> 路线图 -> 治理”组织答案。",
          "en": "Enterprise architecture answers can use “baseline architecture -> target architecture -> gaps -> roadmap -> governance”."
        },
        {
          "zh": "CBM 不是技术组件图，而是用业务能力拆分企业，帮助识别共用能力、中台和治理边界。",
          "en": "CBM is not a technical component diagram; it decomposes an enterprise by business capabilities to find shared capabilities, middle platforms, and governance boundaries."
        }
      ],
      "sources": [
        "Li Shanshan review notes",
        "Lecture 14 course review slide",
        "Lecture 10-11 extracted text"
      ],
      "group": "modern",
      "sourceConfidence": "Li review-class + Lecture 10-11 + EagleBear review",
      "examWeight": "概念理解题",
      "deepDive": [
        {
          "title": {
            "zh": "4A/5A 主线",
            "en": "4A/5A line"
          },
          "summary": {
            "zh": "企业架构把业务目标落到多层架构治理。",
            "en": "EA maps business goals to multi-layer architecture governance."
          },
          "must": {
            "zh": "业务架构、应用架构、数据架构、技术架构；若材料提 5A，优先按安全架构补充，治理作为方法/机制说明。",
            "en": "Business, application, data, and technology architecture; if a source mentions 5A, add security architecture first, while governance is better treated as a method/mechanism."
          },
          "answer": {
            "zh": "先写现状和目标，再写差距、路线图和治理机制。",
            "en": "Write current state, target state, gaps, roadmap, and governance."
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
        }
      ],
      "diagramIds": [
        "enterprise-architecture"
      ]
    },
    {
      "id": "patterns",
      "priority": "P1",
      "title": {
        "zh": "架构模式、风格与演进",
        "en": "Architectural Patterns, Styles, and Evolution"
      },
      "takeaway": {
        "zh": "吕骏复习强调：不要死背模式名，要理解每个模式回应了什么时代矛盾、改变了什么管理对象、牺牲了什么质量属性。",
        "en": "Lu Jun emphasized: do not memorize pattern names mechanically. Understand what historical tension each pattern addresses, what object it manages, and what quality attributes it trades off."
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
        "Lu Jun review notes",
        "Lecture 3 extracted text"
      ],
      "group": "patterns",
      "sourceConfidence": "Lu review-class + Lecture 3 + EagleBear pattern notes",
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
        "patterns-taxonomy",
        "microservice-migration"
      ]
    },
    {
      "id": "views",
      "priority": "P1",
      "title": {
        "zh": "视图与架构文档化",
        "en": "Views and Architecture Documentation"
      },
      "takeaway": {
        "zh": "视图是隐藏无关信息、突出某一关注点的系统表示。往年题非常高频，但复习课对今年是否重点有冲突信号，作为高频但降权复习。",
        "en": "A view represents one concern by hiding irrelevant information. It is frequent in past papers, but review notes give mixed signals for this year, so review it as high-frequency but not the top focus."
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
        "Past paper clusters",
        "Lecture 1 OCR",
        "Zhang He review notes"
      ],
      "group": "process",
      "sourceConfidence": "past papers + Lecture 1 + EagleBear document notes",
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
        "architecture-design-process",
        "views-and-beyond",
        "three-tier"
      ]
    },
    {
      "id": "quality-tactics",
      "group": "core",
      "priority": "P1",
      "examWeight": "质量属性扩展题",
      "sourceConfidence": "Lecture 2-4 OCR + EagleBear quality notes",
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
        "Lecture 2-4 OCR",
        "EagleBear Quality Attributes blog",
        "Past paper clusters"
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
        "quality-scenario",
        "patterns-taxonomy",
        "cache-invalidation"
      ]
    },
    {
      "id": "design-decisions",
      "group": "process",
      "priority": "P1",
      "examWeight": "复习课点名概念",
      "sourceConfidence": "Zhang/Li review notes + EagleBear designing notes",
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
        "Zhang He review notes",
        "Li Shanshan review notes",
        "EagleBear Designing Architecture blog"
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
        "patterns-taxonomy",
        "reuse-variability"
      ]
    },
    {
      "id": "evaluation-atam",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年高频，今年复习课降权",
      "sourceConfidence": "past papers + EagleBear system-design review",
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
        "Past paper clusters",
        "EagleBear Software System Design review"
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
        "atam-utility-tree"
      ]
    },
    {
      "id": "reuse-variability",
      "group": "historical",
      "priority": "P2",
      "examWeight": "往年题补充",
      "sourceConfidence": "past papers + raw notes + EagleBear system-design review",
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
        "Past paper clusters",
        "EagleBear Software System Design review"
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
      "diagramIds": [
        "reuse-variability"
      ]
    },
    {
      "id": "design-playbook",
      "group": "exam",
      "priority": "P0",
      "examWeight": "设计分析题模板",
      "sourceConfidence": "past papers + review-class DDD/ADD focus",
      "title": {
        "zh": "设计分析题答题模板",
        "en": "Design-Analysis Answer Playbooks"
      },
      "takeaway": {
        "zh": "设计题要让老师看到你在用架构方法，而不是只堆术语。固定写法能保住结构分。",
        "en": "Design questions should show architectural method, not terminology dumping. A fixed structure protects structure points."
      },
      "answerFrame": {
        "zh": "通用结构：识别 stakeholders/ASRs/constraints -> 选风格或方法 -> 画核心结构 -> 分配职责和接口 -> 说明质量属性 tradeoff -> 给迭代/验证。",
        "en": "Generic structure: identify stakeholders/ASRs/constraints -> choose style/method -> draw core structure -> allocate responsibilities/interfaces -> explain quality tradeoffs -> give iteration/validation."
      },
      "bullets": [
        {
          "zh": "DDD 改错题：先指出违反边界/贫血模型/领域逻辑外泄/聚合不清，再重画限界上下文、聚合和领域事件。",
          "en": "DDD correction: identify boundary violations, anemic model, leaked domain logic, unclear aggregates; then redraw bounded contexts, aggregates, and domain events."
        },
        {
          "zh": "三层设计题：画 UI/业务逻辑/数据访问，写每层职责，再用 Views and Beyond 补视图、映射、接口和理由。",
          "en": "Three-tier design: draw UI/business logic/data access, list responsibilities, then document views, mappings, interfaces, and rationale with Views and Beyond."
        },
        {
          "zh": "缓存一致性题：增加协调器或 pub-sub/broker，数据库提交后通知其他缓存失效；异构协议用 connector/adapter/Web Service 统一调用。",
          "en": "Cache consistency: add a coordinator or pub-sub/broker; notify other caches after DB commit; use connector/adapter/Web Service for heterogeneous protocols."
        },
        {
          "zh": "微服务迁移题：服务边界、数据库拆分、通信协议、部署流水线、可观测性、灰度里程碑都要覆盖。",
          "en": "Microservice migration: cover service boundaries, database split, communication protocol, deployment pipeline, observability, and rollout milestones."
        }
      ],
      "sources": [
        "Past paper clusters",
        "Li Shanshan review notes",
        "EagleBear Software System Design review"
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
            "zh": "两类常见图",
            "en": "Two common diagrams"
          },
          "summary": {
            "zh": "三层和缓存失效是往年可练的设计图。",
            "en": "Three-tier and cache invalidation are useful practice diagrams."
          },
          "must": {
            "zh": "三层：presentation/business/data；缓存：client/server/DB/coordinator/cache adapter。",
            "en": "Three-tier: presentation/business/data; cache: client/server/DB/coordinator/cache adapter."
          },
          "answer": {
            "zh": "三层题写 Views and Beyond；缓存题写先提交 DB 再通知失效，异构协议用 connector/adapter。",
            "en": "For three-tier, mention Views and Beyond; for cache, commit DB first then invalidate, use connectors/adapters for heterogeneity."
          },
          "trap": {
            "zh": "不要把缓存更新直接广播当作原子一致性保证；要说明 eventual consistency 或失败处理。",
            "en": "Do not imply broadcast gives atomic consistency; mention eventual consistency or failure handling."
          }
        }
      ],
      "diagramIds": [
        "architecture-design-process",
        "three-tier",
        "cache-invalidation",
        "add-roadmap"
      ]
    },
    {
      "id": "ai",
      "group": "modern",
      "priority": "P2",
      "examWeight": "背景了解，不当主线",
      "sourceConfidence": "review-class caveat + EagleBear review blog",
      "title": {
        "zh": "AI 增强 / AI 原生架构",
        "en": "AI-Enabled / AI-Native Architecture"
      },
      "takeaway": {
        "zh": "复习课明确说考试后两节课讲 AI 相关架构，不作为考试要求；博客中的 AI-native 内容只作为论述题背景素材。",
        "en": "The review class explicitly said AI-related lectures after the exam are not exam requirements; blog AI-native content is background material only."
      },
      "answerFrame": {
        "zh": "如论述题顺带提到，可说模型驱动、数据闭环、agent 协作、云原生集成、可观测治理，但不要把它当作核心背诵负担。",
        "en": "If an essay mentions it, discuss model-driven design, data loops, agent collaboration, cloud-native integration, and observability/governance, but do not treat it as a core memorization burden."
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
        "Zhang He review notes",
        "Li Shanshan review notes",
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
          "zh": "企业架构 4A/5A、TOGAF ADM、CBM",
          "en": "EA 4A/5A, TOGAF ADM, CBM"
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
          "zh": "按 39 个真题簇逐条看中文答案，再对照英文题干；2025/2022/2021 相邻课程真题只看架构筛选部分，GoF/OOP 题跳过",
          "en": "Read Chinese answer frames for all 39 clusters, then compare English prompts; use only the architecture-filtered parts of 2025/2022/2021 adjacent-course papers and skip GoF/OOP-only questions"
        },
        {
          "zh": "练 4 个设计模板：DDD 改错、微服务迁移、三层系统、缓存失效",
          "en": "Practice 4 design templates: DDD correction, microservice migration, three-tier system, cache invalidation"
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
        "zh": "已覆盖",
        "en": "Covered"
      },
      "evidence": "Zhang/Li review notes, EagleBear review"
    },
    {
      "area": {
        "zh": "基础概念、质量属性、ASR",
        "en": "Foundations, QAs, ASRs"
      },
      "status": {
        "zh": "已扩充",
        "en": "Expanded"
      },
      "evidence": "Lecture 1 OCR, Lecture 2-4 OCR, review notes, blog references, 2021/2022/2025 Software System Design filtered questions, 2025 keyword hints"
    },
    {
      "area": {
        "zh": "ADD、DDD、微服务、企业架构",
        "en": "ADD, DDD, microservices, EA"
      },
      "status": {
        "zh": "重点强化",
        "en": "Strengthened as focus"
      },
      "evidence": "Li review notes, slides 6-13, EagleBear 2025 DDD, 2025 review outline, Mubu 287-node architecture mind map"
    },
    {
      "area": {
        "zh": "架构模式与演进",
        "en": "Patterns and evolution"
      },
      "status": {
        "zh": "按复习课重排",
        "en": "Reorganized by review class"
      },
      "evidence": "Lu review notes, Lecture 3, EagleBear pattern notes"
    },
    {
      "area": {
        "zh": "ATAM、SPL/MDA/SOA 复用",
        "en": "ATAM, SPL/MDA/SOA reuse"
      },
      "status": {
        "zh": "历史高频，降权保留",
        "en": "Kept as lower-priority historical topics"
      },
      "evidence": "Past papers, EagleBear system-design review, 2021/2022/2025 adjacent-course architecture questions, Mubu architecture notes"
    },
    {
      "area": {
        "zh": "软件详细设计 / GoF 设计模式",
        "en": "Detailed design / GoF design patterns"
      },
      "status": {
        "zh": "排除主线",
        "en": "Excluded from mainline"
      },
      "evidence": "Current course review scope excludes design-pattern-only half; 2021/2022/2025 LSP/OCP, Factory, Command, Observer, Facade/Proxy and pattern-coding questions were filtered out"
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
          "zh": "企业架构：4A/5A、TOGAF/ADM、CBM、战略业务建模和能力沉淀。",
          "en": "EA: 4A/5A, TOGAF/ADM, CBM, strategic business modeling, capability accumulation."
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
      "id": "quality-scenario",
      "src": "assets/diagrams/quality-scenario.svg",
      "title": {
        "zh": "质量属性场景示例表",
        "en": "Quality Attribute Scenario Example Table"
      },
      "note": {
        "zh": "按原始资料表格重绘：七列对应质量属性、刺激源、刺激、工件、环境、响应、响应度量。",
        "en": "Redrawn from the source table: the seven columns are quality attribute, stimulus source, stimulus, artifact, environment, response, and response measure."
      },
      "use": {
        "zh": "适合直接背六要素和各质量属性例子；考场可画成一行六要素表，再填入题目给定场景。",
        "en": "Use it to memorize the six scenario slots and examples for each quality attribute; in an exam, draw one row and fill it with the given scenario."
      },
      "topicIds": [
        "quality",
        "asr",
        "quality-tactics"
      ],
      "questionIds": [
        "q_quality_scenarios",
        "q_req_quality_asr"
      ]
    },
    {
      "id": "architecture-design-process",
      "src": "assets/diagrams/architecture-design-process.svg",
      "title": {
        "zh": "架构设计、文档化与评估过程图",
        "en": "Architecture Design, Documentation, and Evaluation Process"
      },
      "note": {
        "zh": "按原始过程图重绘为 SVG：stakeholders、ASR、需求和约束进入架构设计；patterns/tactics 约束候选视图；文档化产出 chosen views 与 beyond-view documentation，再进入架构评估并反馈。",
        "en": "Redrawn as SVG from the source process figure: stakeholders, ASRs, requirements, and constraints feed architecture design; patterns/tactics shape candidate views; documentation produces chosen views and beyond-view documentation for evaluation and feedback."
      },
      "use": {
        "zh": "适合回答架构活动、ASR 到设计、视图文档化、架构评估闭环这类题；不要只背线性阶段，要说明输入、产物和反馈。",
        "en": "Use for questions about architecture activities, ASR-to-design flow, documentation, and architecture evaluation; explain inputs, artifacts, and feedback instead of only listing stages."
      },
      "topicIds": [
        "foundation",
        "asr",
        "views",
        "design-playbook"
      ],
      "questionIds": [
        "q_arch_process",
        "q_asr_sources",
        "q_different_views",
        "q_doc_package"
      ]
    },
    {
      "id": "add-roadmap",
      "src": "assets/diagrams/add-roadmap.svg",
      "title": {
        "zh": "ADD 3.0 方法流程图",
        "en": "ADD 3.0 Method Process"
      },
      "note": {
        "zh": "按 Lecture 12 课程原图口径重绘为 SVG：五类 driver 输入 Step 1，Step 1-7 串行推进，Step 7 后必要时回到 Step 2 继续迭代。",
        "en": "Redrawn as SVG from the Lecture 12 figure: five driver classes feed Step 1, Steps 1-7 proceed in order, and Step 7 loops back to Step 2 if another iteration is needed."
      },
      "use": {
        "zh": "适合描述 ADD 过程和架构设计过程；手画时保留五个 driver、七个步骤、iterate-if-necessary 和最终 refined design。",
        "en": "Use for ADD-process answers; when drawing by hand, keep the five drivers, seven steps, iterate-if-necessary path, and final refined design."
      },
      "topicIds": [
        "add",
        "design-playbook"
      ],
      "questionIds": [
        "q_add_process",
        "q_arch_process"
      ]
    },
    {
      "id": "ddd-context-map",
      "src": "assets/diagrams/ddd-context-map.svg",
      "title": {
        "zh": "DDD 限界上下文图",
        "en": "DDD Context Map"
      },
      "note": {
        "zh": "用订单、支付、库存上下文说明战略设计和战术设计如何连接。",
        "en": "Uses ordering, payment, and inventory contexts to connect strategic and tactical DDD."
      },
      "use": {
        "zh": "适合 DDD 论述题、设计题和微服务拆分题。",
        "en": "Use for DDD essays, design questions, and microservice decomposition."
      },
      "topicIds": [
        "ddd",
        "microservices"
      ],
      "questionIds": []
    },
    {
      "id": "microservice-migration",
      "src": "assets/diagrams/microservice-migration.svg",
      "title": {
        "zh": "微服务迁移答题综合骨架",
        "en": "Microservice Migration Answer Skeleton"
      },
      "note": {
        "zh": "答题综合骨架，非单页 PPT 原图：强调边界、独立部署、数据自治、事件通信和可观测性，而不是只说“拆小”。",
        "en": "Composite answer skeleton, not a single PPT source figure: highlights boundaries, deployment autonomy, data ownership, events, and observability instead of merely splitting small services."
      },
      "use": {
        "zh": "适合微服务 vs SOA、迁移设计和现代架构论述。",
        "en": "Use for microservices vs SOA, migration design, and modern architecture essays."
      },
      "topicIds": [
        "microservices",
        "ddd",
        "patterns"
      ],
      "questionIds": [
        "q_microservices_vs_soa",
        "q_soa_quality"
      ]
    },
    {
      "id": "three-tier",
      "src": "assets/diagrams/three-tier.svg",
      "title": {
        "zh": "三层架构答题图",
        "en": "Three-Tier Answer Diagram"
      },
      "note": {
        "zh": "表示层、业务逻辑层、数据访问层加职责、接口和 Views and Beyond 文档化提示。",
        "en": "Presentation, business logic, and data access tiers with responsibilities, interfaces, and Views and Beyond notes."
      },
      "use": {
        "zh": "适合 ATM/订票系统设计题。",
        "en": "Use for ATM or booking-system design questions."
      },
      "topicIds": [
        "design-playbook",
        "views",
        "patterns"
      ],
      "questionIds": [
        "q_three_tier_design",
        "q_layered_vs_multitier"
      ]
    },
    {
      "id": "cache-invalidation",
      "src": "assets/diagrams/cache-invalidation.svg",
      "title": {
        "zh": "分布式缓存失效辅助时序图",
        "en": "Distributed Cache Invalidation Answer Sequence"
      },
      "note": {
        "zh": "辅助答案时序图，非原题 Figure 1：先提交数据库，再发布失效事件，由 broker/coordinator 通知其他缓存。",
        "en": "Answer-aid sequence, not the original Figure 1: commit authoritative data first, then publish invalidation through a broker/coordinator."
      },
      "use": {
        "zh": "适合缓存一致性、broker/pub-sub、connector/adapter 设计题；原题图有 server/cache cluster，本图只画一种可行方案。",
        "en": "Use for cache consistency, broker/pub-sub, and connector/adapter design questions; the original prompt has a server/cache cluster, while this diagram shows one possible solution."
      },
      "topicIds": [
        "design-playbook",
        "quality-tactics",
        "patterns"
      ],
      "questionIds": [
        "q_distributed_cache_design",
        "q_broker_pattern"
      ]
    },
    {
      "id": "atam-utility-tree",
      "src": "assets/diagrams/atam-utility-tree.svg",
      "title": {
        "zh": "ASR 效用树",
        "en": "ASR Utility Tree"
      },
      "note": {
        "zh": "把 vague quality 变成质量属性、场景、度量和优先级叶节点。",
        "en": "Turns vague qualities into quality attributes, scenarios, measures, and prioritized leaves."
      },
      "use": {
        "zh": "适合 ASR 识别和效用树题；ATAM 输出题作为历史保底一起复习。",
        "en": "Use for ASR identification and utility-tree questions; keep ATAM output questions as historical fallback practice."
      },
      "topicIds": [
        "asr",
        "evaluation-atam",
        "quality"
      ],
      "questionIds": [
        "q_asr_sources",
        "q_atam_outputs",
        "q_risk_sensitivity_tradeoff"
      ]
    },
    {
      "id": "views-and-beyond",
      "src": "assets/diagrams/views-and-beyond.svg",
      "title": {
        "zh": "Views and Beyond 文档包",
        "en": "Views and Beyond Documentation Package"
      },
      "note": {
        "zh": "把 module、C&C、allocation 三类视图和 beyond-view 信息放在同一张速记图里。",
        "en": "Places module, C&C, allocation viewtypes and beyond-view information in one study diagram."
      },
      "use": {
        "zh": "适合 4+1、视图分类、架构文档包题。",
        "en": "Use for 4+1, viewtype mapping, and architecture documentation questions."
      },
      "topicIds": [
        "views",
        "design-playbook"
      ],
      "questionIds": [
        "q_style_view_mapping",
        "q_different_views",
        "q_doc_package",
        "q_4_plus_1",
        "q_three_tier_design"
      ]
    },
    {
      "id": "patterns-taxonomy",
      "src": "assets/diagrams/patterns-taxonomy.svg",
      "title": {
        "zh": "Style / Pattern / Tactic 粒度图",
        "en": "Style / Pattern / Tactic Granularity"
      },
      "note": {
        "zh": "区分风格、模式、战术的粒度、用途和常见例子。",
        "en": "Distinguishes style, pattern, and tactic by granularity, intent, and examples."
      },
      "use": {
        "zh": "适合模式、风格、战术比较题。",
        "en": "Use for pattern, style, and tactic comparison questions."
      },
      "topicIds": [
        "patterns",
        "quality-tactics",
        "design-decisions"
      ],
      "questionIds": [
        "q_patterns_tactics",
        "q_generic_design_strategies",
        "q_cnc_mvc",
        "q_layered_style"
      ]
    },
    {
      "id": "enterprise-architecture",
      "src": "assets/diagrams/enterprise-architecture.svg",
      "title": {
        "zh": "企业架构 4A/ADM/CBM 关系图",
        "en": "EA 4A/ADM/CBM Map"
      },
      "note": {
        "zh": "把业务、应用、数据、技术架构与 TOGAF/ADM、CBM 连接起来。",
        "en": "Connects business, application, data, and technology architecture with TOGAF/ADM and CBM."
      },
      "use": {
        "zh": "适合企业架构高阶论述。",
        "en": "Use for enterprise architecture essays."
      },
      "topicIds": [
        "enterprise"
      ],
      "questionIds": []
    },
    {
      "id": "reuse-variability",
      "src": "assets/diagrams/reuse-variability.svg",
      "title": {
        "zh": "SPL 可变性与绑定时间",
        "en": "SPL Variability and Binding Time"
      },
      "note": {
        "zh": "核心资产、变化点、变化机制和绑定时间的关系。",
        "en": "Shows core assets, variation points, variation mechanisms, and binding time."
      },
      "use": {
        "zh": "适合 SPL、MDA/SOA 复用、binding time 题。",
        "en": "Use for SPL, MDA/SOA reuse, and binding-time questions."
      },
      "topicIds": [
        "reuse-variability",
        "design-decisions"
      ],
      "questionIds": [
        "q_spl_vs_single",
        "q_reuse_spl_mda_soa",
        "q_spl_variability",
        "q_binding_time"
      ]
    }
  ]
};
