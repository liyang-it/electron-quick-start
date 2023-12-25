// 设置系统托盘
const {
  Tray,
  Menu,
} = require('electron')

const path = require('node:path')

function createTray(app, mainWindow) {
  // 创建系统托盘
  const tray = new Tray(path.join(__dirname, '../assets/tray-icon.png'));

  // 创建系统托盘右键菜单
  const contextMenu = Menu.buildFromTemplate([{
      label: '打开应用',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: '退出应用',
      click: () => {
        // 设置为退出应用
        global.sharedData.quitType = 2;
        app.quit();
      },
    },
  ]);
  // 设置系统托盘右键菜单
  tray.setContextMenu(contextMenu);

  // 点击系统托盘图标显示窗口
  tray.on('click', () => {
    mainWindow.show();
  });
}
module.exports = {
  createTray
}