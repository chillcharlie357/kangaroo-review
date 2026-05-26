window.reviewContent = {
  "meta": {
    "title": {
      "zh": "软件体系结构复习资料",
      "en": "Software Architecture Exam Review"
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
        "zh": "复习课纪要：张贺、李杉杉、吕骏三份飞书智能纪要已抓取并作为主基准",
        "en": "Review notes: Feishu AI notes from Zhang He, Li Shanshan, and Lu Jun are the primary review baseline"
      },
      {
        "zh": "课件：10 份 slides 已建清单；图片型 PDF 走 OCR/抽取后进入校对链",
        "en": "Slides: 10 PDFs cataloged; image-based PDFs are OCR/extracted and used for cross-checking"
      },
      {
        "zh": "前人资料：raw 中 Markdown/DOCX/RTF/PDF 已抽取，真题聚类 33 条并补齐中文对照",
        "en": "Raw materials: Markdown/DOCX/RTF/PDF extracted; 33 past-paper clusters now have Chinese counterparts"
      },
      {
        "zh": "新增博客：EagleBear 2025Spring 两篇博客与架构相关引用已纳入，详细设计/设计模式专题已降权或排除",
        "en": "New blog source: two EagleBear 2025Spring posts and architecture-related references integrated; detailed design/design-pattern-only material is downgraded or excluded"
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
        "zh": "先拿这些：ADD 3.0、微服务、DDD、企业架构。李杉杉复习课明确说这些约 30-40 分，设计题大概率继续偏 DDD/ADD。",
        "en": "Start here: ADD 3.0, microservices, DDD, and enterprise architecture. Li Shanshan's review class said these account for about 30-40 points, with design questions likely around DDD/ADD."
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
        "zh": "这些是往年题反复出现的基本盘，也是简答题最稳的得分来源。",
        "en": "These recur in past papers and are the safest source of short-answer points."
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
        "zh": "用于论述题提气和补充上下文；AI 增强/AI 原生按复习课说法不作为考试重点。",
        "en": "Useful context for essays; AI-enabled/AI-native architecture is not a central exam target according to the review notes."
      },
      "items": [
        {
          "topicId": "foundation",
          "zh": "软件架构定义、架构 vs 设计/结构、架构师职责",
          "en": "Definitions, architecture vs design/structure, architect responsibilities"
        },
        {
          "topicId": "evolution",
          "zh": "架构演进：主机终端、C/S、分层、SOA、微服务、云原生",
          "en": "Evolution: mainframe/terminal, C/S, layered, SOA, microservices, cloud native"
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
      "examWeight": "稳拿基础分"
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
      "examWeight": "质量场景必背"
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
      "examWeight": "高频简答"
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
        "zh": "按流程答：确认设计目标，选择驱动因素，细化系统元素，选择设计概念，实例化元素并分配职责，定义接口，文档化，评审与迭代。",
        "en": "Answer by process: establish design purpose, select drivers, refine system elements, choose design concepts, instantiate elements and responsibilities, define interfaces, document, review, iterate."
      },
      "bullets": [
        {
          "zh": "驱动因素包括功能需求、质量属性、设计目标、约束。",
          "en": "Drivers include functional requirements, quality attributes, design goals, and constraints."
        },
        {
          "zh": "复习课提到酒店定价系统案例：可按 roadmap 做 3-4 轮迭代。",
          "en": "The review class mentioned a hotel pricing case: use a roadmap of about 3-4 design iterations."
        },
        {
          "zh": "常见轮次：整体结构、核心功能、质量属性、开发/部署/运营需求。",
          "en": "Common iterations: overall structure, core functionality, quality attributes, development/deployment/operations concerns."
        },
        {
          "zh": "ADD 3.0 和博客中的 ADD 2.0 步骤表述不同，但考试可统一成“驱动因素 -> 设计概念 -> 元素/职责/接口 -> 评审迭代”。",
          "en": "ADD 3.0 and ADD 2.0 are phrased differently, but exam answers can unify them as “drivers -> design concepts -> elements/responsibilities/interfaces -> review iteration”."
        },
        {
          "zh": "酒店定价案例可作为模板：先找外部系统、核心功能、质量属性和约束，再排 3-4 轮 roadmap。",
          "en": "The hotel pricing case is a useful template: identify external systems, core functions, quality attributes, and constraints, then plan 3-4 roadmap iterations."
        }
      ],
      "sources": [
        "Li Shanshan review notes",
        "Lecture 12/13 extracted text",
        "Lecture 14 course review slide"
      ],
      "group": "process",
      "sourceConfidence": "Li review-class + Lecture 12/13 + EagleBear designing notes",
      "examWeight": "设计题核心"
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
      "examWeight": "今年高阶重点"
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
      "examWeight": "设计分析题高概率"
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
      "examWeight": "概念理解题"
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
      "examWeight": "今年理解题"
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
      "examWeight": "历史高频，今年降权"
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
      ]
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
          "zh": "ADD 3.0 流程 + 酒店定价 roadmap 模板",
          "en": "ADD 3.0 process + hotel pricing roadmap template"
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
          "zh": "按 33 个真题簇逐条看中文答案，再对照英文题干",
          "en": "Read Chinese answer frames for all 33 clusters, then compare English prompts"
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
      "evidence": "Lecture 1 OCR, Lecture 2-4 OCR, review notes, blog references"
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
      "evidence": "Li review notes, slides 6-13, EagleBear 2025 DDD"
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
      "evidence": "Past papers, EagleBear system-design review"
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
      "evidence": "Current course review scope excludes design-pattern-only half"
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
          "zh": "ADD 3.0：确定目标、选驱动因素、细化元素、设计方案、实例化/文档化/评审，通常 3-4 轮迭代。",
          "en": "ADD 3.0: establish goal, select drivers, refine elements, design solution, instantiate/document/review, usually 3-4 iterations."
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
    }
  ]
};
