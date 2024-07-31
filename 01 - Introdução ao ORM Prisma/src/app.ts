import express from "express";
import { bandRouter } from "./routers/band.router";

const app = express();
app.use(express.json());

app.use("/bands", bandRouter);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
