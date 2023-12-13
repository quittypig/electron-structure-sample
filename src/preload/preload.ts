import {contextBridge, ipcRenderer} from 'electron/renderer'

contextBridge.exposeInMainWorld('electronAPI', {
    ping: () => ipcRenderer.invoke('ping')
})