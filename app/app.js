const fs = require("fs");
const path = require("path");
const app = require("app");
const BrowserWindow = require("browser-window");
const {ipcMain, dialog} = require('electron');
const store = require("./store");

const ROOT_PATH = `file://${__dirname}`;
const RUN_PATH = path.dirname(process.cwd());

app.on("window-all-closed", e => {
  app.quit();
});

app.on("ready", e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  const {webContents} = mainWindow;

  const render = e => webContents.send("render", store.getState());

  ipcMain.on("store-dispatch", (sender, e) => {
    store.dispatch(e);
    render();
  });

  ipcMain.on("save-file", e => {
    dialog.showSaveDialog(mainWindow, {title: "save html", defaultPath: `${RUN_PATH}/index.html`}, (filename) => {
      if(!filename) return;
      fs.writeFile(filename, store.getState().preview);
    });
  });

  webContents.on("dom-ready", render);
  
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});
