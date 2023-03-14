const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    titleBarOverlay: true,
    width: 1280,
    height: 860,
  });

  // Charge à partir d'une URL distante
  win.loadURL('https://legoshii.tk')

  // Ou à partir d'un fichier HTML local
  win.loadFile('src/index.html')  

   // Ouvrir les outils de développement.
//win.webContents.openDevTools()
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});