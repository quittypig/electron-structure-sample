import {Server} from "socket.io";
import * as http from "http";

export default class SocketIo {
    constructor() {
        this.init()
    }

    init = () => {
        const httpServer = http.createServer()
        const io = new Server(httpServer)

        httpServer.listen(8080, () => {
            console.log("server running at: http://127.0.0.1:8080")
        })

        io.on('connection', (socket) => {
            console.log('connection')

            socket.on('pong', () => {
                console.log('pong')
            })
        });

        setInterval(() => {
            io.emit('ping')
        }, 3000)
    }
}