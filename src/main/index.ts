import { app, BrowserWindow } from 'electron'
import path from 'path'

function createWindow() {
  // 創建瀏覽器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // 加載應用的 index.html
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173')
    // 打開開發者工具
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

// 這段程序將會在 Electron 結束初始化
// 和創建瀏覽器窗口的時候調用
// 部分 API 在 ready 事件觸發後才能使用
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，當點擊 dock 中的應用程序圖標時，如果沒有其他
    // 打開的窗口，那麼程序會重新創建一個窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，當所有窗口都被關閉的時候退出程序
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
