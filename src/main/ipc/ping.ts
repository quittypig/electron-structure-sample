import {ipcMain} from "electron";

export default class Ping {
    constructor() {
        this.init()
    }

    private init = () => {
        ipcMain.handle('ping', () => {
            console.log("ping")
            return 'pong'
        })
    }
}