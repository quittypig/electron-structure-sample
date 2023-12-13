import "reflect-metadata"
import {DataSource} from "typeorm"
import {Pc} from "../entity/Pc";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "qwer1234",
    database: "wc_counter",
    synchronize: false,
    logging: true,
    entities: [Pc],
    migrations: [],
    subscribers: [],
})

export const AppDataSourceInit = () => {
    AppDataSource.initialize().then(async () => {
        console.log("Here you can setup and run express / fastify / any other framework.")
    }).catch(error => console.log(error))
}

