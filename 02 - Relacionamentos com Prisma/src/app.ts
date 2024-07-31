import express from "express";
import "express-async-errors";
import { bandRouter } from "./routers/band.router";
import { handleGlobalErrors } from "./errors/handle.errors";

const app = express();
app.use(express.json());

app.use("/bands", bandRouter);

app.use(handleGlobalErrors);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
