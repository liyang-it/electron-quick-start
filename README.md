# 一个最基础的快速启动 Electron程序，实现了最基础常用功能
* 默认缩小至系统托盘(可以右键打开应用、退出应用)
* 设置顶部菜单栏
* 窗口操作
* 页面与ELectron双向交互

## 如果已经有现成的Web项目，直接把web静态部署文件拷贝到web文件夹启启动就可以了


##  开始

```cmd
npm install
```

## 启动
```cmd
npm  start
```

## 打包,当前默认Windows，其他平台请参考官网实现
打包工具使用 [electron-builder](https://www.electron.build/)
```cmd
npm run build
```

打包目录在 `build`文件夹

## 调整Electron版本、应用名称等参数, 请修改 package.json
更多参数请参考 [electron-builder](https://www.electron.build/)
```json
  "build": {
    "appId": "com.liyangit", // 应用唯一标识
    "productName": "electronQuickStart", // 应用名称
    "directories": {
      "output": "build" // 打包输出的目录
    },
    "win": {
      "target": "msi",
      "icon": "./assets/favicon(256).ico" // 图标
    }
  }
```
