import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 动态获取所有子页面入口
// 动态获取所有子页面入口
const pages = fs.readdirSync(__dirname).reduce((acc, dir) => {
    // 排除 hidden files, node_modules, dist, etc.
    if (dir.startsWith('.') || dir === 'node_modules' || dir === 'dist' || dir === 'public' || dir === 'src') {
        return acc
    }

    // Check if it is a directory first
    try {
        const stats = fs.statSync(resolve(__dirname, dir));
        if (!stats.isDirectory()) return acc;
    } catch (e) {
        return acc;
    }

    const fullPath = resolve(__dirname, dir, 'index.html')
    if (fs.existsSync(fullPath)) {
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
