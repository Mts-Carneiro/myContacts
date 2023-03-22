import express from "express"
import "express-async-errors"
import "reflect-metadata"
import { handleErrors } from "./erros"
import contactsRoutes from "./routes/contacts.routes"
import userRoutes from "./routes/user.routes"
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())
app.use('/user', userRoutes)
app.use('/contact', contactsRoutes)

app.use(handleErrors)

export default app