import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // 主程序入口 - 修正路徑
        entry: resolve(__dirname, 'src/main/index.ts')
      },
      {
        // preload 腳本入口 - 修正路徑
        entry: resolve(__dirname, 'src/preload/index.ts'),
        onstart(options) {
          options.reload()
        },
      },
    ]),
  ],
  root: resolve(__dirname, 'src/renderer'),
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/renderer/src')
    }
  },
  build: {
    outDir: 'dist/renderer'
  }
})
