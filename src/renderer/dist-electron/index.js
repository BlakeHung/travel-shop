import { contextBridge } from "electron";
contextBridge.exposeInMainWorld("electronAPI", {
  // 這裡可以添加你需要的方法
  platform: process.platform
});
window.addEventListener("DOMContentLoaded", () => {
  console.log("Preload script loaded");
});
ebSecurity: false
    }
  });
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "../renderer/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
