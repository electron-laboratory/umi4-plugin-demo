import { ipcMain } from 'electron';

const bw = getBrowserWindowRuntime();

ipcMain.on('hello', () => {
  console.log('main receive hello');
  bw.webContents.send('message', 'hello from main2 ');
});
