import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('$api', {
  hello: async () => {
    return await ipcRenderer.invoke('hello');
  },
});
