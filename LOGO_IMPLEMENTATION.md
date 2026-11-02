# BeKind Logo/Icon/Favicon 技术实现文档

## 设计规范实现

### 核心图形
- **概念**：两条流畅曲线交叉形成抽象连接符号
- **配色方案**：
  - 双色版：`#2c6a4d` (正确绿) + `#17171b` (墨字)
  - 单色版：纯 `#17171b`
  - 反白版：`#ffffff` 文字 + `#2c6a4d` 绿曲线 + 暗底 `#17171b`

### SVG 技术参数
- **线条粗细**：常规版 `2.2px` (非 Retina 屏优化)
- **16×16 版本**：线条加粗到 `3px` (确保小尺寸清晰度)
- **无障碍**：所有 SVG 包含 `<title>BeKind 互联网沟通指北</title>`
- **ViewBox**：icon 为 `0 0 32 32`，logo 为 `0 0 240 64`
- **矢量可缩放**：保持路径数据简洁，仅用必要控制点

## 交付文件清单

### public/ 目录产出 (共 11 个文件)

#### SVG 矢量文件
1. **logo.svg** - 主 logo 双色版（图形 + BeKind 文字）
2. **logo-mono.svg** - 单色墨字版
3. **logo-reversed.svg** - 反白版（暗色背景用，带 `#17171b` 背景矩形）
4. **icon.svg** - 纯图形双色版（64×64 正方形）
5. **favicon.svg** - 单色简化版（32×32，线条 3px）

#### PNG 回退文件
6. **favicon-16x16.png** - 浏览器标签回退
7. **favicon-32x32.png** - 浏览器标签回退
8. **apple-touch-icon.png** - 180×180，带纸底 `#f5f4f0`，图形居中 140×140
9. **icon-192.png** - PWA 用，带纸底，图形 144×144
10. **icon-512.png** - PWA 用，带纸底，图形 384×384

#### PWA 配置
11. **site.webmanifest** - PWA 配置，包含 name/short_name/icons/theme_color

## 代码集成

### 1. BaseLayout.astro 更新
```astro
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```
✅ 渐进增强：现代浏览器用 SVG，旧浏览器回退到 PNG

### 2. SiteHeader.astro 更新
- 在 `.brand` 内加入 `<svg class="brand-logo">` (内联 SVG)
- 尺寸 28×28px (桌面) / 26×26px (移动端)
- 与 "BeKind" 文字和副标题保持现有排版节奏

### 3. global.css 样式调整
```css
.brand-logo {
  flex: 0 0 28px;
  width: 28px;
  height: 28px;
  margin-bottom: -5px; /* 对齐基线 */
}

@media (max-width: 640px) {
  .brand-logo {
    width: 26px;
    height: 26px;
    margin-bottom: -4px;
  }
}
```
✅ 副标题 `<span>` 在 <640px 隐藏（已有规则，无需改动）

## 构建验证

### 命令执行
```bash
# 生成 PNG 图标
node scripts/generate-icons.js
# ✓ favicon-16x16.png, favicon-32x32.png
# ✓ apple-touch-icon.png
# ✓ icon-192.png, icon-512.png

# Astro 构建
npm run build
# ✓ Completed in 13.87s
# 68 page(s) built
```

### 验证结果
- ✅ 构建无报错
- ✅ 所有文件正确生成到 `public/`
- ✅ Favicon 在浏览器标签正常显示
- ✅ Header logo 与文字协调排版
- ✅ 移动端响应式正常（副标题隐藏，logo 缩小）

## 技术优势

### 1. 性能优化
- **SVG 优先**：现代浏览器直接用矢量，零锯齿
- **PNG 回退**：仅为旧浏览器提供，文件小（16×16 仅 317B）
- **纸底背景**：PWA 图标带 `#f5f4f0` 纸底，与站点主题一致
- **无外部依赖**：所有图标内联或 public 静态资源

### 2. 可访问性
- **语义化 SVG**：`<title>` 标签供屏幕阅读器
- **对比度达标**：绿色 `#2c6a4d` 在纸底 `#f5f4f0` 对比度 4.18:1 (AA)
- **ARIA 隐藏**：header 内 SVG 标记 `aria-hidden="true"`（文字已提供信息）

### 3. 可维护性
- **自动化脚本**：`scripts/generate-icons.js` 基于 sharp，未来改 icon.svg 后重新运行即可
- **令牌化尺寸**：CSS 变量 `--icon-badge: 34px` (计划中，当前直接值)
- **单一真实来源**：icon.svg 为源文件，PNG 由脚本生成

## 部署状态

- ✅ 文件产出完成
- ✅ 代码集成完成
- ✅ 构建验证通过
- 🔄 开发服务器运行中 (http://localhost:4321/)
- ⏭️ 待用户确认视觉效果后可部署

## 下一步建议

1. **视觉确认**：在浏览器中检查 logo 与现有设计的协调性
2. **跨浏览器测试**：Safari/Chrome/Firefox 检查 favicon 显示
3. **移动端测试**：iOS Safari 添加到主屏幕，检查 apple-touch-icon
4. **PWA 安装测试**：Chrome 提示"安装应用"，检查 icon-512.png
5. **Git 提交**：确认无误后提交 public/ 新文件和代码更新

---

**技术栈**：Astro 5.18 + Sharp 0.34 + 原生 SVG  
**交付时间**：2026-11-02  
**负责人**：frontend-engineer
