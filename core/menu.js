// 应用菜单
const {
  Menu,
  dialog 
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
            // 调用全局窗口数组获取主窗口,使用唯一标识获取, 获取指定过的窗口后 可以关闭、隐藏、显示窗口
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
        },
        {
          label: '使用主窗口加载第三方网站',
          click: async () => {
            // 调用全局窗口数组获取主窗口,使用唯一标识获取
            const win = global.sharedData.wins.find(f => f.isKey == 'main')

            console.info('主窗口信息：', win)
            // 加载指定页面
            win.loadURL('https://blog.csdn.net/qq_40739917')
          }
        },
        {
          label: '获取当前窗口页面路径',
          click: async () => {
            // 调用全局窗口数组获取主窗口,使用唯一标识获取
            const win = global.sharedData.wins.find(f => f.isKey == 'main')
            dialog.showMessageBox(win, {title: '提示', message: '当前窗口的页面URL：' + win.webContents.getURL()})
            
          }
        }
      ],
    },
    {
      label: 'Electron主进程与页面交互',
      submenu: [{
          label: '通过Electron发送指令给页面',
          click: async () => {
            // 选择哪个窗口要与页面交互，示例使用主窗口
            // 调用全局窗口数组获取主窗口,使用唯一标识获取
            const win = global.sharedData.wins.find(f => f.isKey == 'main')

            console.info('主窗口信息：', win)

            // 发送指令给渲染进程(页面)
            win.webContents.send('electron-api-message-to-page', '我是ELectron发送的指令');
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