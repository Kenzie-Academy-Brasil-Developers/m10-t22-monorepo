import express from "express";
import "express-async-errors";

import { handleGlobalErrors } from "./errors/handle.errors";
import { bandRouter, musicRouter, playlistRouter, userRouter } from "./routers";

const app = express();
app.use(express.json());

app.use("/bands", bandRouter);
app.use("/musics", musicRouter);
app.use("/playlists", playlistRouter);
app.use("/users", userRouter);

app.use(handleGlobalErrors);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
