/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const {
  ipcRenderer,
  contextBridge
} = require('electron')
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  // 监听ELectron的消息
  ipcRenderer.on('electron-api-message-to-page', (_event, value) => {
    console.info('页面接受到指令：', value)
  })
  contextBridge.exposeInMainWorld('electronAPI', {
    // 构建发送指令的API，用于前端js调用
    sendElectronApiMessageToElectron: (value) => ipcRenderer.send('electron-api-message-to-electron', value),
    sendOpenUrl: (url) => ipcRenderer.send('electron-api-message-openurl', url)
  })

})