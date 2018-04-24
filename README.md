electron react app

### React + Electron 搭建一个桌面应用

#### 1、创建一个项目

```
create-react-app my-app

cd my-app && npm start

```
浏览器 http://localhost:3000

#### 2、添加 Electron 包

```
npm install electron --save

```

#### 3、根目录下配置main.js

```
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win;

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({width: 800, height: 600});

  // 然后加载应用的 index.html。========>>>>> 打包之后路径指向
  /*win.loadURL(url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  }));*/

  // ======>>>>>> 调试时，时时刷新
  win.loadURL('http://localhost:3001/');

  // 打开开发者工具。
  win.webContents.openDevTools();

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null;
  })
}


// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);


// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
});


app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
});

```

#### 4、配置package.json

```
{
  "name": "electron-react-app",
  "version": "0.1.0",
  "private": true,
  "main": "main.js", //自己添加的启动文件
  "homepage":".",
  "dependencies": {
    "electron": "^1.8.4",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "electron-start": "./node_modules/.bin/electron ." // 配置electron的start，为了区分web端的start
  }
}
```

#### 5、启动项目

```
npm start  //启动react项目

npm run electron-start //启动electron

```

此时直接可以更改项目，command + R 刷新 electron 看到页面变化

注意：
默认情况下，homepage 是 http://localhost:3000，build 后，所有资源文件路径都是 /static，
而 Electron 调用的入口是 file :协议，/static 就会定位到根目录去，所以找不到静态文件。
在 package.json 文件中添加 homepage 字段并设置为"."后，静态文件的路径就变成了相对路径，就能正确地找到了添加如下配置

```
"homepage":"."

```