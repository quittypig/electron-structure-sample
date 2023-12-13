import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Pc {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no: number

    @Column()
    ip: string
}
