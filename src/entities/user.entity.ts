import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Contact } from './contact.entity'


@Entity('Users')
class User {


    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    phone!: string

    @CreateDateColumn()
    createdAt!: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts!: Contact[]

}


export { User }