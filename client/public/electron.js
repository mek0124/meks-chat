const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('node:path');
const started = require('electron-squirrel-startup');


if (started) {
  app.quit();
};


let loadingWindow;
let mainWindow;

const createLoadingWindow = () => {
  loadingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '..', '/public/images/icon.png'),
  });

  loadingWindow.loadFile(path.join(__dirname, '..', '/public/loading/loading.html'));
};

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    alwaysOnTop: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '..', '/public/images/icon.png'),
  });

  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('ready-to-show', () => {
    loadingWindow.close();
    mainWindow.show();
  });
};

app.whenReady().then(() => {
  createLoadingWindow();

  ipcMain.once('loading-complete', () => {
    createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('cancel-loading', () => {
  if (loadingWindow) {
    app.quit();
  };
});
