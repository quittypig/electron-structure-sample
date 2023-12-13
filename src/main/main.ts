import {app, BrowserWindow} from "electron";
import * as path from "path";
import Ipc from "./ipc/ipc";
import {AppDataSourceInit} from "./data-source";
import {io as cio} from "socket.io-client";
import SocketIo from "./server";

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "../preload/preload.js"),
        },
        width: 800,
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "../../index.html"));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    AppDataSourceInit()

    createWindow();

    new Ipc()

    new SocketIo()

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});


// client test
const socketClient = cio('http://localhost:8080')
socketClient.on("connect", () => {
    console.log("connect");
});

socketClient.on("disconnect", () => {
    console.log("disconnect");
});

socketClient.on("ping", () => {
    socketClient.emit('pong')
});

