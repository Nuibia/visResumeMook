/**
 * @desc electron主入口
 */
const path = require("path");
const { app, BrowserWindow } = require("electron");

function isDev() {
  return process.env.NODE_ENV === "development";
}

const createWindow = () => {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      // 注入node模块
      nodeIntegration: true,
    },
  });
  if (isDev()) {
    // 本地开发
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadFile(`file://${path.join(__dirname, "../dist/index.html")}`);
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
