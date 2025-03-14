const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInIsolatedWorld('version', {
  node: () => process.versions.node,
  chrome: () => process.version.chrome,
  electron: () => process.version.electron,
  ping: () => ipcRenderer.invoke('ping')
})
