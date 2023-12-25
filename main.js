// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow
} = require('electron')


const path = require('node:path')

// 顶部菜单
const menu = require('./core/menu')
// 系统托盘
const tray = require('./core/tray')

// 创建一个全局变量
global.sharedData = {
  // 设置一个自定义变量，用于控制点击关闭应用是 确定退出应用还是 缩小致系统托盘
  // 默认 1(缩小至系统托盘), 2 直接退出应用
  quitType: 1,
};

let mainWindow = null;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1460,
    height: 700,
    icon: path.join(__dirname, 'assets/tray-icon.png'), // 设置系统图标
    webPreferences: {
      nodeIntegrationInWorker: true, // 开启多线程
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // 监听窗口关闭事件
  mainWindow.on('close', (event) => {
    // 判断是退出应用还是缩小致系统托盘
    if (global.sharedData.quitType == 1) {
      // 取消默认的关闭行为，将窗口缩小至系统托盘  
      event.preventDefault()
      mainWindow.hide()
      console.info('缩小至系统托盘')
    } else {
      // 退出应用
      app.quit()
      console.info('退出应用')
    }
  });

  // 监听窗口关闭后的事件，清空对窗口对象的引用
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.whenReady().then(() => {
  createWindow()

  // 创建系统顶部菜单
  menu.createMenu();

  // 创建系统托盘
  tray.createTray(app, mainWindow)

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  app.quit()
})