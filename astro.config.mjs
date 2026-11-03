import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bk.0x0.cat',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  vite: {
    // 这个依赖只在点「生成卡片」时才动态加载。
    // 预构建固定下来，避免 dev 期间重新优化后旧页面拿到失效的模块地址。
    optimizeDeps: {
      include: ['qrcode'],
    },
  },
});
