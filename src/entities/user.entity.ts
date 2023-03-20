import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Contact } from './contact.entity'

@Entity('User')
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ unique: true })
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}


export { User }