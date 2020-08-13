import { BrowserWindow } from 'electron';

export const createWindow = () => {
  const win = new BrowserWindow({
    show: true,
    width: 890,
    height: 556,
    // webgl: true,
    frame: true,
    transparent: false,
    webPreferences: {
      webSecurity: true,
      allowRunningInsecureContent: false,
      nativeWindowOpen: false,
      nodeIntegration: true,
    },
  });
  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/../index.html`);
}