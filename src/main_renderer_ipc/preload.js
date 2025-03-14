const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的 API 给渲染进程
contextBridge.exposeInMainWorld('electron', {
  sendMessage: (message) => ipcRenderer.send('renderer-to-main', message),
  OnMessage: (callback) => ipcRenderer.on('main-to-renderer', (event, message) => callback(message)),
});

