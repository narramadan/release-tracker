import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    username: string;

    @Column()
    password: string;        
}