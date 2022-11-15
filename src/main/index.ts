import { shell, ipcMain } from 'electron';

const bw = getBrowserWindowRuntime();

ipcMain.on('open-external-url', (e, url) => {
  shell.openExternal(url);
});
