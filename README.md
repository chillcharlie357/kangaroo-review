# Software Architecture Review

静态复习网站：把《软件体系结构》课程 slides、复习课纪要、raw 前人资料和往年题整理成可浏览的复习资料。

## 本地浏览

静态浏览：

```bash
python3 -m http.server 18080 --bind 127.0.0.1
```

然后打开 <http://127.0.0.1:18080/site/>。

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
- `site/content.js`：复习路线、15 个知识点、79 条术语、11 张本地图解和画板资源。
- `site/data/questions.json`：33 条往年题聚类，包含中文完整示例答案、英文关键词和图解关联。
- `site/data/sources.json`：42 个源文件的抽取状态清单。
- `server/metrics_server.py`：Python 标准库 + SQLite 的轻量访问统计 API。
- `deploy/`：systemd service 和 nginx 反代片段。
- `tools/extract_sources.py`：本地文本抽取脚本。
- `tools/vision_pdf_ocr.swift`：macOS Vision/PDFKit OCR 脚本。
- `data/catalog/sources.json`：源文件清单。
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

## 访问统计

前端会在统计服务可用时上报以下事件：

- `site_visit`：站点访问。
- `page_view` / `page_click`：页面查看和导航点击。
- `topic_view` / `glossary_view` / `question_view`：知识点、术语、真题查看。
- `source_preview` / `source_open`：资料库预览和源文件打开，打开一次按下载一次计。
- `diagram_open` / `whiteboard_open`：图解、画板放大查看。

统计后端只保存事件类型、对象 key、页面、匿名 session、哈希后的 IP 和 User-Agent 摘要；不保存明文 IP。部署时建议把 SQLite 放在 `/home/docs/kangaroo-review-runtime/metrics.sqlite3`，nginx 将 `/kangaroo-review/api/` 反代到本机 `127.0.0.1:18081`。

线上隐藏统计面板：<https://docs.cpl.icu/kangaroo-review/metrics.html>。这个入口不写在主站导航里，需要直接输入地址访问。

## 验证记录

- `node --check site/app.js site/content.js site/data/questions.js site/data/sources.js tools/smoke-site.mjs`
- `jq empty site/data/questions.json site/data/sources.json`
- `python3 -m unittest tools/test_metrics_server.py`
- Playwright/Chrome 桌面与移动视口验证：15 个知识点、33 条真题聚类、79 个术语、42 条资料清单、11 张本地图解，无控制台错误，无横向溢出。

## License

MIT
