# 🎯 全站重构计划 (The Etiquette Collection)

本计划旨在重构首页 (`index.html`) 并统一样式系统，打造一个风格契合、操作直观的现代网页。目标是对齐 "No Hello" 等页面的 "Silent Luxury" (静奢/极简) 风格。

## 1. 核心目标 (Goals)

-   **视觉统一 (Visual Unification)**: 确保首页与子页面 (`pages/*`) 共享相同的设计语言（字体、色彩、间距）。
-   **交互优化 (Intuitive Operations)**: 提升首页卡片的交互反馈，优化导航体验。
-   **代码规范 (Code Standardization)**: 消除硬编码样式，全面拥抱 CSS 变量 (`style.css` 中的 `oklch` 系统)。

## 2. 阶段规划 (Phases)

### Phase 1: 设计系统标准化 (Design System Audit)
-   **任务**: 审计 `style.css`。
-   **细节**:
    -   确保所有颜色使用 CSS 变量（如 `--primary`, `--muted-foreground`）。
    -   统一排版（Typography）规则。
    -   移除无用的遗留 CSS（如 `reference_style.css` 中未使用的部分）。

### Phase 2: 首页重构 (Homepage Overhaul)
-   **任务**: 重写 `index.html` 结构。
-   **变更**:
    -   **Hero Section**: 对齐子页面的 `.hero` 结构，确保标题层级一致。
    -   **Card Grid**:
        -   使用 CSS Grid 布局（已存在，需优化响应式）。
        -   **卡片样式升级**: 增加微交互（Hover effect），使用“毛玻璃”或微妙阴影代替简单的背景色切换，提升高级感。
        -   **内容呈现**: 优化 Emoji 与标题的排版，使其更具呼吸感。

### Phase 3: 子页面对齐 (Sub-page consistency)
-   **任务**: 遍历 `pages/` 目录。
-   **细节**:
    -   确保每个子页面都正确引用 `style.css`。
    -   检查是否所有页面都拥有统一的“返回首页” (`.nav-back`) 链接。
    -   验证 `.container` 和 `.hero` 的嵌套结构是否一致。

### Phase 4: 验证与优化 (Verification)
-   **任务**: 视觉回归测试。
-   **细节**:
    -   移动端适配检查（< 425px）。
    -   Dark Mode 兼容性检查（检查 `style.css` 中的 `.dark` 类支持）。

## 3. 风险评估 (Risk Assessment)

-   **样式冲突**: 修改 `style.css` 可能会意外破坏现有子页面的布局。
    -   *Mitigation*: 修改 CSS 变量时保持向后兼容，优先在 `index.html` 使用新的类名。
-   **构建依赖**: 即使修改了 HTML，也需要确保 Vite 构建流程正常（当前似乎是纯静态，问题不大）。

## 4. 执行标准 (User Rules)

-   **Zero Sycophancy**: 仅提供代码和必要的解释。
-   **Single Source of Truth**: 以 `PLAN.md` 为唯一执行准则。
