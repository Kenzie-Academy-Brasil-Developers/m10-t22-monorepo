import { prisma } from "../database/prisma.client";
import { MusicCreate } from "../interfaces/music.interfaces";

export class MusicService {
  list = async () => {
    const musics = await prisma.music.findMany();

    return musics;
  };

  create = async (payload: MusicCreate) => {
    const music = await prisma.music.create({ data: payload });

    return music;
  };
}
