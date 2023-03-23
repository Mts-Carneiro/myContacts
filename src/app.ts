import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";

import contactsRoutes from "./routes/contacts.routes";
import userRoutes from "./routes/user.routes";
import { handleErrors } from "./erros";

const app = express();
app.use(cors());

app.use(express.json());


/* app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', "true");
    next();
}); */

app.use("/user", userRoutes);
app.use("/contact", contactsRoutes);

app.use(handleErrors);

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  process.exit(1);
});

export default app;
