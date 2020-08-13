
import { app } from 'electron';
import { createWindow } from './createWindow';

app.on('ready', async () => {
  createWindow(); // 创建一个系统应用窗口
});

app.on('window-all-closed', () => app.quit()); // 所有窗口关闭的时候退出应用

