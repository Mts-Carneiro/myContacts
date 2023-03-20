import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Contact } from './contact.entity'


@Entity('User')
class User {


    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}


export { User }