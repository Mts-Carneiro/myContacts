import express from "express"
import "express-async-errors"
import "reflect-metadata"
import { handleErrors } from "./erros"
import contactsRoutes from "./routes/contacts.routes"
import userRoutes from "./routes/user.routes"


const app = express()

app.use(express.json())
app.use('/user', userRoutes)
app.use('/contact', contactsRoutes)

app.use(handleErrors)
app.listen(3000, () => {
    console.log('Server running in port 3000')
})