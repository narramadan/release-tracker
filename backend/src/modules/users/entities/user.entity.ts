import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({name: "USER_ID"})
    id: number;

    @Column({name: "FIRST_NAME"})
    firstName: string;

    @Column({name: "LAST_NAME"})
    lastName: string;

    @Column({name: "USER_NAME"})
    userName: string;

    @Column({name: "PASSWORD"})
    password: string;    
}