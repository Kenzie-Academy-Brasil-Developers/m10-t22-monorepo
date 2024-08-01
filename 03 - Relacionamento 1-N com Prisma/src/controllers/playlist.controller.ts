import { Request, Response } from "express";
import { PlaylistService } from "../services/playlist.service";

export class PlaylistController {
  private playlistService = new PlaylistService();

  list = async (req: Request, res: Response) => {
    const playlists = await this.playlistService.list();

    return res.json(playlists);
  };

  create = async (req: Request, res: Response) => {
    const playlist = await this.playlistService.create(req.body);

    return res.status(201).json(playlist);
  };
}
