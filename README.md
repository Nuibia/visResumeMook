# visResumeMook

## Electron + React 从 0 到 1 实现简历平台

## 开发环境

`electron + react + typescript + less`

## 代码格式化

## `prettier + eslint + lint stage + husky`

## TODO

---

electron 两中进程，主进程和渲染进程，主进程有且只有一个，渲染进程有多个（每一个等同于浏览器的一个 tab。由 Chrome+node 组成，可以操作原生，最后实现客户端的开发

通过 ipc 实现通信 ipcRender ipcMain

---

环境搭建：
通过 webpack 提供的 loader 实现资源解析，通过 plugins 实现附加功能
通过 babel-loader 将浏览器不认识的 ts+react 解析成浏览器认识 js
通过 file-loader 将浏览器不认识的图片解析
通过 less-loader + css-loader 将 less 解析成浏览器认识的 css
