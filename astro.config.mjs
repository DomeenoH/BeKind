import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bk.0x0.cat',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
});
