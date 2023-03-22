import {z} from 'zod'
import { returnedcontactScherma } from './contact.schema'


const userSchema = z.object({
    name: z.string().min(3).max(120),
    email: z.string().email(),
    phone: z.number() 
})

const userUpdateScherma = userSchema.partial()

const returnCreateUser = userSchema.extend({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.number(),
    createdAt: z.date()
})

const returnedUserScherma = userSchema.extend({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.number(),
    createdAt: z.date(),
    contacts: returnedcontactScherma.nullable().array()
})

const returnMultpleuserScherma = returnedUserScherma.array()


export {
    userSchema, userUpdateScherma, returnMultpleuserScherma, returnedUserScherma, returnCreateUser
}