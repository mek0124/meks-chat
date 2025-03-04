/*
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const { exec } = require('child_process');
const started = require('electron-squirrel-startup');


if (started) {
  app.quit();
};


let loadingWindow;
let mainWindow;
let errorWindow;

const createErrorWindow = () => {
  errorWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, '..', '/public/images/icon.jpeg'),
  });

  errorWindow.loadFile(path.join(__dirname, '..', '/public/error/index.html'));
};

const createLoadingWindow = () => {
  loadingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '..', '/public/images/icon.jpeg'),
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
    icon: path.join(__dirname, '..', '/public/images/icon.jpeg'),
  });

  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('ready-to-show', () => {
    if (loadingWindow) {
      loadingWindow.close();
    };

    mainWindow.show();
  });
};

app.whenReady().then(() => {
  createLoadingWindow();

  const serverProcess = exec(
    'npm run dev', 
    {
      cwd: path.join(
        __dirname, '..', '..', 'server'
      )
    }
  );

  serverProcess.stdout.on('data', (data) => {
    console.log(`Server: ${data}`);

    if (data.includes('Server running at')) {
      loadingWindow.webContents.send('server-ready');
    };
  });

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

ipcMain.on('no-internet-connection', () => {
  if (loadingWindow) {
    loadingWindow.close();
  };

  if (mainWindow) {
    mainWindow.close();
  };

  createErrorWindow();
});
*/

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
    icon: path.join(__dirname, '..', '/public/images/icon.jpeg'),
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
    icon: path.join(__dirname, '..', '/public/images/icon.jpeg'),
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
