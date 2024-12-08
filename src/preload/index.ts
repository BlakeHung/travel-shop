import { contextBridge } from 'electron'

// 在這裡可以暴露安全的 API 給渲染進程使用
contextBridge.exposeInMainWorld('electronAPI', {
  // 這裡可以添加你需要的方法
  platform: process.platform
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script loaded')
})
