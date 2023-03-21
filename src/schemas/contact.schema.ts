import {z} from 'zod'
import { userSchema } from './user.schema'

const contactSchema = z.object({
    name: z.string().min(3).max(120),
    email: z.string().email(),
    phone: z.number(),
    user: z.any()
})

const contactUpdateScherma = contactSchema.partial()

const returnedcontactScherma = contactSchema.extend({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.number(),
    createdAt: z.date()
})

const returnMultplecontactScherma = returnedcontactScherma.array()


export { contactSchema, contactUpdateScherma, returnMultplecontactScherma,returnedcontactScherma }