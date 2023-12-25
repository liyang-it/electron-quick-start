// 应用菜单
const {
  Menu
} = require('electron')

// 创建菜单
function createMenu() {
  const template = [{
      label: '打开网页端',
      submenu: [{
        label: 'Github部署',
        click: async () => {
          const {
            shell
          } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }, {
        label: '服务器部署',
        click: async () => {
          const {
            shell
          } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }],
    },
    {
      label: '窗口',
      submenu: [{
          label: '最小化',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'
        },
        {
          label: '关闭',
          accelerator: 'CmdOrCtrl+W',
          role: 'close'
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu) // 设置主菜单栏的菜单  
}
module.exports = {
  createMenu
}