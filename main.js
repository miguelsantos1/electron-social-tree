const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

const createWindow = () => {
   win = new BrowserWindow({
    width: 350,
    height: 600,
    titleBarStyle: 'hidden',
    alwaysOnTop: false,
    resizable: false,
  })


  win.loadFile('index.html')
}

// SHORTCUTS

function exit() {
  app.quit()
}

function createShortcuts() {
  globalShortcut.register('Esc', exit);
  globalShortcut.register('')
}

app.whenReady()
.then(createWindow)
.then(createShortcuts)