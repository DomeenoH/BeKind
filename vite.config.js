import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 动态获取所有子页面入口
const pagesDir = resolve(__dirname, 'pages')
const pages = fs.readdirSync(pagesDir).reduce((acc, dir) => {
    const fullPath = resolve(pagesDir, dir, 'index.html')
    if (fs.existsSync(fullPath)) {
        // 将连字符格式 (no-hello) 转换为驼峰或保持原样作为 key
        acc[dir] = fullPath
    }
    return acc
}, { main: resolve(__dirname, 'index.html') })

export default defineConfig({
    base: '/', // 自定义域名使用根路径
    build: {
        rollupOptions: {
            input: pages,
        },
    },
})
