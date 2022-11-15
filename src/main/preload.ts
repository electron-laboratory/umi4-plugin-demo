import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('$api', {
  hello: async () => {
    return await ipcRenderer.invoke('hello');
  },
  openExternal: (url: string) => {
    ipcRenderer.send('open-external-url', url);
  },
});
