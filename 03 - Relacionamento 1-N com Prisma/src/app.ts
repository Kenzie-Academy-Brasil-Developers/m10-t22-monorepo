import express from "express";
import "express-async-errors";
import { bandRouter } from "./routers/band.router";
import { handleGlobalErrors } from "./errors/handle.errors";
import { musicRouter } from "./routers/music.router";
import { playlistRouter } from "./routers/playlist.router";

const app = express();
app.use(express.json());

app.use("/bands", bandRouter);
app.use("/musics", musicRouter);
app.use("/playlists", playlistRouter);

app.use(handleGlobalErrors);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
