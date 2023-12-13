import Ping from "./ping";

export default class Ipc {
    constructor() {
        this.init()
    }

    private init = () => {
        new Ping()
    }
}
