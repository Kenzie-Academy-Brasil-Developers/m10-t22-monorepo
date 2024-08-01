import { prisma } from "../database/prisma.client";
import { PlaylistCreate } from "../interfaces/playlist.interfaces";

export class PlaylistService {
  list = async () => {
    const playlists = await prisma.playlist.findMany();

    return playlists;
  };

  create = async (payload: PlaylistCreate) => {
    const playlist = await prisma.playlist.create({ data: payload });

    return playlist;
  };
}
