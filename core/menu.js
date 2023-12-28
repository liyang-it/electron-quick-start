// 应用菜单
const {
  Menu
} = require('electron')

// 创建菜单
function createMenu() {
  const template = [{
      label: '使用默认浏览器打开网页',
      submenu: [{
        label: 'Electron官网',
        click: async () => {
          const {
            shell
          } = require('electron')
          // 使用系统默认浏览器打开页面
          await shell.openExternal('https://electronjs.org')
        }
      }],
    },
    {
      label: 'Window窗口操作',
      submenu: [{
          label: '使用主窗口加载web主页页面',
          click: async () => {
            // 调用全局窗口数组获取主窗口,使用唯一标识获取
            const win = global.sharedData.wins.find(f => f.isKey == 'main')

            console.info('主窗口信息：', win)
            // 加载指定页面
            win.loadFile('./web/index.html')
          }
        },
        {
          label: '使用主窗口加载首页',
          click: async () => {
            // 调用全局窗口数组获取主窗口,使用唯一标识获取
            const win = global.sharedData.wins.find(f => f.isKey == 'main')

            console.info('主窗口信息：', win)
            // 加载指定页面
            win.loadFile('index.html')
          }
        }
      ],
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