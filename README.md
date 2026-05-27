# 2026 NJU Graduate Software Architecture Review

静态复习网站：把 2026 南京大学软件学院研究生课程《软件体系结构》的 slides、复习课纪要、raw 前人资料和往年题整理成可浏览的复习资料。

> 准确性提示：本资料由 Codex（GPT-5.5）辅助整理生成，未经任课老师确认，不一定准确；专门面向 2026 南京大学软件学院研究生《软件体系结构》期末复习，不保证适用于未来年份或本科《软件系统设计》。复习和作答时请优先以课程原始 slides、复习课纪要和老师说明为准。

## 本地浏览

静态浏览：

```bash
python3 -m http.server 18080 --bind 127.0.0.1
```

然后打开 <http://127.0.0.1:18080/site/>。仓库根入口 <http://127.0.0.1:18080/> 会自动跳转到 `site/`，线上 <https://docs.cpl.icu/kangaroo-review/> 也同样跳转。

带访问统计的本地浏览：

```bash
KANGAROO_DB_PATH=/private/tmp/kangaroo-review-metrics.sqlite3 \
python3 server/metrics_server.py --host 127.0.0.1 --port 18080 --static-root . --mount /
```

然后打开 <http://127.0.0.1:18080/site/>，隐藏统计面板在 <http://127.0.0.1:18080/site/metrics.html>。

也可以直接打开 `site/index.html`；页面会使用 `site/data/*.js` fallback 数据。若要在“资料库”里预览本机抽取内容或启用访问统计，请从仓库根目录启动 18080 服务。

线上部署目标：<https://docs.cpl.icu/kangaroo-review/>。

## 内容结构

- `site/`：前端页面、样式、交互和可发布数据。
- `site/metrics.html` / `site/metrics.js`：隐藏访问统计图表页，不在主导航中展示。
- `site/assets/reward/`：底部低调打赏弹窗使用的微信/支付宝收款码。
- `site/content.js`：复习路线、15 个知识点、79 条术语、11 张本地图解和 4 张画板资源。
- `site/data/questions.json`：39 条往年题聚类，包含中文完整示例答案、英文关键词、优先级和图解关联。
- `site/data/sources.json`：52 个源文件的抽取状态清单。
- `server/metrics_server.py`：Python 标准库 + SQLite 的轻量访问统计 API。
- `deploy/`：systemd service 和 nginx 反代片段。
- `tools/extract_sources.py`：本地文本抽取脚本。
- `tools/extract_mubu.mjs`：从 Mubu public share 接口递归抽取思维导图节点。
- `tools/integrate_2025_materials.mjs`：将 2025 新资料与题簇优先级合并进发布数据。
- `tools/vision_pdf_ocr.swift`：macOS Vision/PDFKit OCR 脚本。
- `data/catalog/sources.json`：抽取脚本生成的本地原始文件清单，用于记录 raw/slides 的基础抽取状态；可发布资料库以 `site/data/sources.json` 的人工增补版本为准。
- `.omx/research/`：资料盘点、真题分析、信息架构、UX 方案等研究记录。

## 本地中间数据

以下目录保留在本机，默认不推送到 public repo：

- `raw/`
- `slides/`
- `data/extracted/`
- `data/ocr/`
- `data/feishu/*.json`
- `data/feishu/*.md`

原因是这些目录包含原始课件、前人资料、飞书纪要原文和 OCR 中间结果；公开仓库只保留可浏览网站、合成后的题库/资料清单、工具和研究记录。

服务器部署版与 public repo 不同：`docs.cpl.icu/kangaroo-review` 会额外镜像 `raw/`、`slides/`、`data/` 等源资料目录，使“资料库”页可以预览抽取文本并打开原始 PDF/文档。

同步到服务器时需要规范化源文件权限，避免本机 `600` 权限被原样带到线上后 nginx 返回 403。推荐在 rsync 中加入：

```bash
--chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r
```

相邻课程辅助资料中，`raw/2021 痛苦回忆.pdf`、`raw/软统2022试卷.pdf` 与 `raw/25软件系统设计回忆版.jpg` 来自《软件系统设计》。该课程只有体系结构部分与本课重合，因此题库只吸收 ASR、质量属性、架构视图、C&C/SOA、ADD、微服务、Pipe-and-Filter、缓存一致性等体系结构题；LSP/OCP、Factory、Command、Observer、Facade/Proxy、代码实现类题目按详细设计/GoF 设计模式排除。`raw/考前关键词提示版本.pdf`、`raw/老师复习大纲（答案方式）.docx` 和 Mubu 思维导图作为 2025 前人冲刺资料使用，但优先级仍服从今年复习课。`data/feishu/ai-wiki-*.md` 与 `data/feishu/whiteboards/` 来自同学 AI 整理 Wiki，通过 bytedcli 抓取后作为辅助资料，不作为老师标准答案。

## 访问统计

前端会在统计服务可用时上报以下事件：

- `site_visit`：站点访问。
- `page_view` / `page_click`：页面查看和导航点击。
- `topic_view` / `glossary_view` / `question_view`：知识点、术语、真题查看。
- `source_preview` / `source_open`：资料库预览和源文件打开，打开一次按下载一次计。
- `diagram_open` / `whiteboard_open`：图解、画板放大查看。
- `reward_open`：底部打赏弹窗打开。

统计后端只保存事件类型、对象 key、页面、匿名 session、哈希后的 IP、匿名访客指纹、User-Agent 与 Accept-Language 摘要；不保存明文 IP。访客数用 `X-Forwarded-For` / `X-Real-IP` 中的客户端 IP、User-Agent、Accept-Language 与私有 salt 共同哈希后估算，历史旧数据会退回到 `ip_hash + user_agent` 口径。

隐藏统计面板支持按天/按小时切换趋势折线图，趋势分桶、访问人数统计窗口和近期事件展示均按中国时区（Asia/Shanghai）呈现。部署时建议把 SQLite 放在 `/home/docs/kangaroo-review-runtime/metrics.sqlite3`，nginx 将 `/kangaroo-review/api/` 反代到本机 `127.0.0.1:18081`，并保留以下请求头：

- `X-Real-IP`
- `X-Forwarded-For`
- `X-Forwarded-Proto`
- `Host`

## 复习清单与评论区

复习清单完全保存在浏览器 `localStorage`，不上传服务器。页面底部可以导出可读 TXT，文件里同时包含机器可读 JSON；导入旧版本清单时，仍存在的内容会继承已读/未读状态，新版本新增内容默认未读，旧版本多出来的未知条目会保留在下次导出里。

评论区复用同一个轻量 SQLite 服务，每个页面一组匿名平铺评论。默认昵称是“匿名同学”，用户可自行修改；后端保存昵称、评论正文、页面、创建时间，以及经过私有 salt 哈希后的浏览器/请求标识，不保存明文 IP。评论接口会合并默认屏蔽词和 `KANGAROO_COMMENT_BLOCK_WORDS` 自定义词库，并对同一匿名标识做短时间限流。该过滤只是基础防刷措施，不等同于完整内容审核。

## 验证记录

- `node --check site/app.js site/metrics.js tools/smoke-site.mjs tools/smoke-metrics.mjs`
- `jq empty site/data/questions.json site/data/sources.json`
- `python3 -m unittest tools/test_metrics_server.py`
- Playwright/Chrome 桌面与移动视口验证：15 个知识点、39 条真题聚类、79 个术语、52 条资料清单、11 张本地图解、4 张画板、免责声明、复习清单导入迁移、评论区入口、打赏弹窗，无控制台错误，无横向溢出。
- Playwright/Chrome 隐藏统计页验证：按天/按小时切换、访问人数卡片、事件图表、Top Items、Recent Events 均可渲染。

## License

MIT
