/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
/**
 * 因为示例用过的html页面，建一个js脚本调用。如果是Vue的话就不需要这个文件了，vue或者其他前端，直接在vue组件中 引入preload.js, 按照vue或者其他前端的方法实现 以下方法
 */
// 页面发送消息给Electron事件
async function senMessageToElectron() {
  await window.electronAPI.sendElectronApiMessageToElectron('你好啊！！！')
}
// 页面发送消息给Electron
async function sendOpenUrl(url) {
  await window.electronAPI.sendOpenUrl(url)
}