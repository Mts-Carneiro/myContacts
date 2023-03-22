import express from "express"
import "express-async-errors"
import "reflect-metadata"
import { handleErrors } from "./erros"
import contactsRoutes from "./routes/contacts.routes"
import userRoutes from "./routes/user.routes"
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(cors())
app.use('/user', userRoutes)
app.use('/contact', contactsRoutes)

app.use(handleErrors)

export default app