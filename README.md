# 一个最基础的快速启动 Electron程序，实现了最基础常用功能
* 默认缩小至系统托盘(可以右键打开应用、退出应用)
* 设置顶部菜单栏
* 窗口操作
* 页面与ELectron交互

# 如果已经有现成的Web项目，直接把web静态部署文件拷贝到web文件夹启启动就可以了

# 版本限制
用`electron-forge` 最低  需要 Node.js >= 16.4.0

# 开始

```cmd
npm install
```

# 启动
```cmd
npm run start
```
# 打包,当前默认Windows，其他平台请参考官网实现
打包工具使用 [electron-builder](https://www.electron.build/)
```cmd
npm run build
```
打包目录在 `build`文件夹
