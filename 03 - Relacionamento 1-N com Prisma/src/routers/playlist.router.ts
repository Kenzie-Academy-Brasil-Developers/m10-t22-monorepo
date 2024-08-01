import { Router } from "express";
import { validateBody } from "../middlewares/body.validator";
import { playlistCreateSchema } from "../schemas/playlist.schemas";
import { PlaylistController } from "../controllers/playlist.controller";

export const playlistRouter = Router();
const playlistController = new PlaylistController();

playlistRouter.get("", playlistController.list);
playlistRouter.post(
  "",
  validateBody(playlistCreateSchema),
  playlistController.create
);
