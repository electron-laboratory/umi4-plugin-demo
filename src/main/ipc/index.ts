import { ipcMain } from 'electron';

ipcMain.handle('hello', () => {
  // 修改我！！！
  return `hello world! pid: ${process.pid}`;
});
