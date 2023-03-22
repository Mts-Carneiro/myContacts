import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { Response, Request, NextFunction } from "express";

import contactsRoutes from "./routes/contacts.routes";
import userRoutes from "./routes/user.routes";
import { handleErrors } from "./erros";

const app = express();

app.use(express.json());
app.use(cors());
app.use(setupCORSHeaders);
app.use("/user", userRoutes);
app.use("/contact", contactsRoutes);

app.use(handleErrors);

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  process.exit(1);
});

function setupCORSHeaders(req: Request, res: Response, next:NextFunction) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}

export default app;