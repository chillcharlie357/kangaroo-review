# ADD Ground Truth Audit

## Task Statement

修复 ADD 3.0 知识库、真题答案与图解中偏离课程原图的内容，并检查其他图解/重点内容是否存在同类幻觉。

## Desired Outcome

- ADD 3.0 HTML 图解忠实于 Lecture 12 课程原图：五个 driver、七步流程、左侧 brownfield artifact flow、Iterate if necessary 回路、legend。
- 知识库、真题、图解文案不再把自创简化流程或私有作业材料作为公开资料。
- 并行 sub agent 校验其他图解和重点知识是否与复习课/PPT ground truth 冲突。
- 完成语法、视觉、内容残留、私有路径泄漏检查后提交、推送、部署。

## Known Facts / Evidence

- 用户提供的 ADD 原图包含：Design Purpose、Primary Functionality、Quality Attributes、Architectural Concerns、Constraints。
- Lecture 12 extracted text pages 34-70 给出 ADD 3.0 七步流程与终止/迭代说明。
- 用户提到的私有作业工作区仅可作为人工参考，不能进入资料库或 public repo。
- 已发现旧版 ADD 图解曾使用自创简化流程，需替换为课程原图口径；复杂流程图改用 HTML/CSS 组件，便于后续维护。

## Constraints

- 不修改或公开私有作业内容。
- 不把飞书 AI 纪要中的错误简化步骤当成课程原图 ground truth。
- 对公开页面尽量使用课程资料可验证的措辞。

## Likely Touchpoints

- `site/app.js`
- `site/styles.css`
- `site/content.js`
- `site/data/questions.js`
- `site/data/questions.json`
- `data/extracted/slides/lecture-12-attribute-driven-design-designing-software-architectures-add-3-0-75b29884.json`
