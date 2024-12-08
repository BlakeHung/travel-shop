import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhTW from 'antd/locale/zh_TW'
import App from './App'

// 可以在這裡設置 antd 的全局配置
const themeConfig = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 6,
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhTW} theme={themeConfig}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)

// Use contextBr
