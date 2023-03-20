import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('contacts')
class Contact {


    @PrimaryGeneratedColumn('uuid')
    id!: string 

    @Column()
    name!: string 

    @Column()
    email!: string

    @Column()
    phone!: number

    @CreateDateColumn()
    createdAt!: Date

    @ManyToOne(() => User)
    user!: User
}

export { Contact }