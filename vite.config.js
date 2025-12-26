import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nohello: resolve(__dirname, 'pages/no-hello/index.html'),
                xyproblem: resolve(__dirname, 'pages/xy-problem/index.html'),
                dontasktoask: resolve(__dirname, 'pages/dont-ask-to-ask/index.html'),
                itdidntwork: resolve(__dirname, 'pages/it-didnt-work/index.html'),
                wheatonslaw: resolve(__dirname, 'pages/wheatons-law/index.html'),
                smartquestions: resolve(__dirname, 'pages/smart-questions/index.html'),
                cunninghamslaw: resolve(__dirname, 'pages/cunninghams-law/index.html'),
                rubberduck: resolve(__dirname, 'pages/rubber-duck/index.html'),
                bikeshedding: resolve(__dirname, 'pages/bike-shedding/index.html'),
                yakshaving: resolve(__dirname, 'pages/yak-shaving/index.html'),
                hanlonsrazor: resolve(__dirname, 'pages/hanlons-razor/index.html'),
            },
        },
    },
})
