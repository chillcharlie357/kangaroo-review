# 2026 软件体系结构复习课完整录音纪要

> 适用范围：南京大学软件学院 2026 研究生课程《软件体系结构》。本文件只整理复习课完整录音和对应 slides，不保证适用于未来年份或本科《软件系统设计》。

## 来源与校验

| 讲述人 | 完整录音位置 | 对应 slides | 本轮视觉核对页 |
|---|---:|---|---|
| 张贺 | 00:00-37:13 | `Lecture 14: Course Review - softarch2026-review-1.pdf` | 复习页 4/6/7；Lecture 1 页 23、29 |
| 吕骏 | 37:13-50:23 | `Lecture 3: Architectural Patterns - 软件架构模式.pdf` | 页 6、69、70 |
| 李杉杉 | 51:01-结束 | `Lecture 14: Course Review - 3 - 课程复习.pdf` | 页 5、9、12、13、15 |

本轮新增重绘图：

- ![4+1 views](diagrams/review-4-plus-1-views.svg)
- ![Architecture evolution](diagrams/review-architecture-evolution.svg)
- ![Architecture units](diagrams/review-architecture-units.svg)
- ![Microservice decomposition](diagrams/review-microservice-decomposition.svg)

可信旧图仍可作为复习图：

- `site/assets/diagrams/add-roadmap.svg`
- `site/assets/diagrams/architecture-design-process.svg`

## 考试形态

- 总评：平时成绩 40%，期末考试 60%。
- 题型：简答题、论述/问答题、设计分析题。
- 题面：英文；答题可以中文或英文，但同一道题不要中英文混用。
- 个别题可能要求画图。
- 张贺给出的比例：基础内容约 60%，进阶内容约 40%。
- 李杉杉补充：她负责的 ADD、微服务、DDD、企业架构合计可能约 30-40 分；其中设计题大概率落在微服务与 DDD 的结合处，ADD 流程与文档化仍要会。

## 优先级总表

| 优先级 | 内容 | 原因 | 复习方式 |
|---|---|---|---|
| P0 | 软件架构基本概念、4+1 views、架构过程 | 张贺明确复习，且是所有后续题的语言基础 | 能解释概念，能画 4+1 和过程图 |
| P0 | 质量属性场景、ASR、Utility tree、tactics | 张贺复习主线；往年题常问六要素 | 背六要素，用真实例子写完整场景 |
| P0 | tactics / patterns / styles、七类设计决定 | 张贺点名；容易出概念辨析和简答 | 会区分粒度、用途和例子 |
| P0 | 架构演进：主机/终端、C/S、三层、SOA、微服务、事件驱动/云原生 | 吕骏明确“可能每个架构都考”，重点是时代矛盾 | 按“旧矛盾 -> 新约束 -> 新结构 -> 质量属性取舍”答 |
| P0 | ADD 3.0 七步、driver、iteration、documentation | 李杉杉开场复习；设计分析题可能用到 | 背七步图，说明每步产物 |
| P0 | 微服务特性、对比、拆分/通信/部署/可观测性模式 | 李杉杉明确“会考特性和对比，不考定义” | 用模式组组织答案 |
| P0 | DDD 适用范围、战略/战术设计、事件风暴 | 李杉杉说设计题往年来自 DDD，今年大概率延续或与微服务结合 | 能划子域、限界上下文、聚合、领域事件 |
| P1 | 企业架构 4A、TOGAF/ADM、CBM | 会考基础分析和检查视角，但不要求重案例经验 | 背体系、价值、适用场景 |
| P1 | HPS ADD case：CQRS、Kafka、command/query/export side | 作为 ADD 流程案例支撑，不宜当唯一答案 | 理解流程和文档化，不死背所有细节 |
| P2 | AI 与 DDD 双向赋能、EA 工具演化 | 李杉杉作为趋势补充 | 了解关键词即可 |
| 不考 | AI 增强、AI 原生 | 吕骏明确说不考；定义未稳定 | 不投入背诵，只作架构演进背景 |

## 张贺段：软件架构、质量属性、设计决定

### 1. 软件架构是什么

复习 PPT 的关键词是 `Structure, Elements, Relationships, Design`。答题时不要只说“组件和连接”，还要补“设计决定”和“关系”。

可背版本：

> 软件架构是系统的高层结构与设计决定，描述重要元素、元素之间的静态/动态关系、约束和设计理由。它的作用是在用户需求与开发者实现成本之间建立妥协，使后续详细设计、编码、验证能够有一致依据。

### 2. 架构师做什么

PPT 点名四类职责：

- Liaison：协调 stakeholder，达成可接受的妥协。
- Software engineering：使用软件工程经验和 best practices。
- Technical knowledge：理解技术选择、平台和实现约束。
- Risk management：管理早期设计在实现中可能失败的风险。

录音强调：工作量最大的不是“画漂亮图”，而是和不同 stakeholder 协调。

### 3. 架构从哪里来

本轮只按张贺复习 PPT 的稳定表述整理：

- NFRs / Quality Requirements：质量需求是架构最主要来源。
- ASRs：少数会显著影响架构的需求。
- Stakeholders：通过 workshop/interview 补全需求。
- Organisations：组织目标、业务目标、团队约束。
- Technical Environments：技术环境、遗留系统、基础设施、云原生等。

不要把“架构来源”扩写成无依据的固定五类清单；答题时以 PPT 这组词为准。

### 4. 4+1 Views

见重绘图 `diagrams/review-4-plus-1-views.svg`。

| View | 要点 | 中文答题 |
|---|---|---|
| Logical view | architecturally significant elements and relationships | 逻辑视图描述重要架构元素及其关系 |
| Process view | concurrency and communications | 进程视图描述并发、进程/线程、运行时通信 |
| Physical view | mapping to hardware/environment | 物理视图描述软件到硬件与部署环境的映射 |
| Development view | internal organization of software components | 开发视图描述代码模块、包、开发制品和团队组织 |
| Use case scenarios | requirements for architecture, related to multiple views | 用例场景串联并验证前四个视图 |

### 5. 架构活动与过程

复习课中只要求掌握设计早期的架构活动：

1. Specifying ASRs：从需求、约束、stakeholder concerns 中整理并优先级排序 ASRs。
2. Architecture design：用 patterns 和 tactics 形成候选架构与 candidate views。
3. Documenting：选择、组合并记录 views，以及 beyond views 的信息。
4. Architecture Evaluation：检查架构是否满足 stakeholder concerns。

可信旧图：`site/assets/diagrams/architecture-design-process.svg`。

### 6. 质量属性场景

六要素必须会背，也必须能写例子：

| 元素 | 英文 | 说明 |
|---|---|---|
| 刺激源 | Source | 谁发起刺激 |
| 刺激 | Stimulus | 发生了什么事件 |
| 制品 | Artifact | 受影响的系统/组件 |
| 环境 | Environment | 正常、高峰、故障、启动等上下文 |
| 响应 | Response | 系统应该做什么 |
| 响应度量 | Response measure | 用可度量指标约束响应 |

例子：可用性场景。

> Source：Heartbeat monitor。Stimulus：服务器无响应。Artifact：处理器。Environment：正常运行。Response：通知操作者继续操作。Response measure：没有停机时间。

### 7. ASR 与 Utility tree

ASR 是会显著影响架构的需求。复习课强调两件事：

- 不是所有质量需求都是 ASR。
- 叶节点要按两个维度评估：对用户的重要性、对开发者的实现难度/成本。

答题框架：

1. 需求文档通常缺少完整质量场景。
2. 通过 workshop/interview 补全 source、stimulus、environment、measure。
3. 结合 business goals 做取舍。
4. 用 Utility tree 组织 quality attribute -> scenario -> measure。
5. 优先处理重要性高且实现难度高的叶节点。

### 8. Strategies / Tactics / Patterns / Styles

- Strategy：解决某质量属性的一类策略方向。
- Tactic：最小粒度的架构设计决定，通常针对某个质量属性。
- Pattern：针对反复出现的问题，把若干 tactic 组织成可复用方案。
- Style：不绑定具体问题的系统组织方式，例如微服务是一种 style；当用它解决具体问题并补充相关机制时，才形成 pattern。

### 9. 七类设计决定

张贺复习课点名七类：

1. Allocation of responsibilities：把功能或质量需求延伸出的责任分配给架构元素。
2. Coordination model：元素之间如何协同。
3. Data model：数据生命周期如何处理。
4. Management of resources：共享资源如何分配和管理。
5. Mapping among architecture elements：架构元素、软件元素、部署环境之间如何映射。
6. Binding time decisions：关系在设计时、编译时、部署时、启动时、运行时何时确定。
7. Choice of technology：技术、框架、基础设施、遗留约束如何选择。

## 吕骏段：架构模式与演进

吕骏段的核心不是背定义，而是解释“为什么旧模式失效、新模式出现”。重绘图：

- `diagrams/review-architecture-evolution.svg`
- `diagrams/review-architecture-units.svg`

### 1. 总命题

> 软件架构的历史，就是在新的成本结构下，重画边界和协作方式的历史。

答题时按四步走：

1. 时代核心矛盾是什么。
2. 上一代模式为什么开始失效。
3. 新架构如何重画边界、职责和协作。
4. 优先保障哪些质量属性，相对牺牲什么。

### 2. 演进主线

| 架构阶段 | 主要矛盾 | 结构抓手 | 优先保障 | 相对牺牲 |
|---|---|---|---|---|
| 最早期/主机前夜 | 如何高效使用昂贵算力 | 程序+数据+批处理作业 | 机器利用率、稳定执行 | 交互、复用 |
| 主机/终端 | 如何让很多人共享核心事务系统 | 强中心+弱终端 | 一致性、安全、审计、集中治理 | 易用性、局部修改 |
| C/S | 如何把交互能力下放给桌面用户 | 胖客户端+服务器 | 易用性、响应性、交互体验 | 可部署性、统一治理 |
| 三层/分层 | 如何统一入口并把系统内职责分清 | 表示层/业务层/数据层 | 可维护性、可修改性、安全、部署 | 极致性能、跨系统协同 |
| SOA | 如何跨系统复用业务能力并完成企业级整合 | 服务契约+ESB/治理 | 互操作性、复用、组合、治理 | 简单性、性能、局部演进 |
| 微服务 | 如何让团队按业务能力独立演进与发布 | 小服务+团队自治+独立部署 | 局部演进、持续交付、可扩展 | 分布式复杂度、运维成本 |
| 事件驱动/云原生 | 如何在大规模分布式环境保持韧性与自动化 | 事件事实+平台编排 | 韧性、自动化、异步解耦 | 时序可理解性、调试成本 |
| AI 增强 | 如何把语义理解接入既有软件 | 旧系统+语义/RAG能力 | 知识工作效率 | 确定性、评测成本 |
| AI 原生 | 如何工程化管理机器认知、任务执行与非确定性 | 模型/Agent+工具+状态+评测+守护 | 任务完成、人机协作、适应性 | 可验证性、成本可预测性 |

注意：AI 增强和 AI 原生作为演进理解背景，吕骏明确说不会考。

### 3. 每个架构可能怎么考

- 画结构骨架：例如主机/终端、SOA、三层/分层、微服务。
- 解释为何迁移：例如为什么 C/S 走向三层，为什么 SOA 走向微服务。
- 分析质量属性取舍：每种架构优先保障什么，牺牲什么。
- 选型题：不要追新，而要先识别系统卡在哪一层矛盾。

## 李杉杉段：ADD、微服务、DDD、企业架构

### 1. ADD 3.0

会考重点：

- Architectural drivers 的类型。
- ADD 3.0 七步。
- 设计迭代：选择 drivers -> refine elements -> design concepts -> instantiate -> sketch/document -> analyze。
- 架构文档化，尤其是 views。

七步以 `site/assets/diagrams/add-roadmap.svg` 为准：

1. Review inputs。
2. Establish iteration goal by selecting drivers。
3. Choose one or more elements of the system to refine。
4. Choose design concepts that satisfy the selected drivers。
5. Instantiate architectural elements, allocate responsibilities, and define interfaces。
6. Sketch views and record design decisions。
7. Perform analysis of current design and review iteration goal and achievement of design purpose。

HPS case 的作用是帮助理解流程，不建议死背所有业务细节。高价值关键词：Design Purpose、Primary Functionality、Quality Attributes、Concerns、Constraints、CQRS、Kafka/Event Bus、command side、query side、export side、deployability、monitorability。

### 2. 微服务

李杉杉明确说：不重点考微服务定义，重点考特性、与其他架构风格对比、核心设计模式。

模式组：

- 拆分：根据业务能力拆分、根据子域拆分。
- 通信：Circuit Breaker、应用层服务发现、平台层服务发现、API Gateway。
- 部署：单主机多实例、虚拟机、容器、服务部署平台、无服务器部署。
- 可观测性：日志聚合、审计日志、应用程序指标、分布式跟踪、异常跟踪、健康检查 API。

设计题答题骨架：

1. 从需求或 user stories 识别 system operations。
2. 根据业务能力或子域识别 service。
3. 定义 service API 和协作。
4. 补充数据边界、部署、通信、故障处理、可观测性。
5. 说明 tradeoff：自治与独立发布换来分布式复杂度。

### 3. DDD

DDD 不是万能方法。会考范围：

- 适用：高业务复杂度产品、企业应用架构、稳态/敏态系统设计与重构。
- 不适用：低业务复杂度系统、数据中心分析平台、前端 UI 开发。
- 价值：应对系统隐晦、耦合、变化三大复杂性。
- 战略设计：划分子领域、定义限界上下文、上下文映射。
- 战术设计：统一语言、实体/值对象、聚合、领域服务、工厂/资源库。
- 事件风暴：识别领域事件，按时间轴梳理，识别参与者，划分聚合与限界上下文，区分读/写模型。

设计题中最可能要做的是：给一个业务场景，划子域/限界上下文/聚合/领域事件，并和微服务拆分边界相互印证。

### 4. 企业架构

企业架构部分不会要求重案例经验，重点是基础分析和检查视角。

必会：

- 定义：组织的基本组成部分及其内外部关系、设计与治理原则。
- 核心：找结构、找关系、定原则。
- 4A：
  - Business Architecture：客户、产品、渠道策略、业务流程、业务组件。
  - Data Architecture：逻辑/物理数据资产、数据标准、数据责任。
  - Application Architecture：应用蓝图、组件化设计、服务共享。
  - Technology Architecture：技术组件、基础设施、标准化。
- TOGAF：核心是 ADM 架构开发周期。
- CBM：业务能力是核心，组件是能力载体；高内聚、低耦合、可复用、可组装。
- 实施方式：自顶向下战略业务建模；自底向上通用能力沉淀和中台构建。
- 建模方法：五级流程、标准动词库；5W1H 识别业务对象；A/B/C/D 分层数据设计；流程+数据聚类推导业务组件。

## 明确不考 / 降低优先级

- AI 增强、AI 原生：吕骏明确说不会考，只当演进背景。
- 微服务定义背诵：李杉杉说不考定义，考特性、对比和模式。
- ADD 的大规模设计题：李杉杉说 20 分设计题应该不会直接来源于 ADD case，但 ADD 流程和文档化仍是高优先级。
- 企业架构案例细节：华为、建行等案例了解即可，不要当背诵主线。
- GoF 设计模式：不属于当前《软件体系结构》复习课主线。

## 下一步建议

1. 你先 review 这份纪要和 mindmap。
2. 确认无误后，再把它作为新的中心纲领，回灌到网页知识库和真题答案。
3. 回灌时，应把旧网页里来源不稳的 diagrams 逐一降级或重绘；当前只保留 `add-roadmap.svg` 和 `architecture-design-process.svg` 为可信图。
