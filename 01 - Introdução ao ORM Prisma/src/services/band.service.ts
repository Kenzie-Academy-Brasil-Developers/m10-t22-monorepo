import { prisma } from "../database/prisma.client";
import { BandCreate } from "../interfaces/band.interfaces";

export class BandService {
  list = async () => {
    // SELECT * FROM "Band";
    const bands = await prisma.band.findMany();

    return bands;
  };

  create = async (payload: BandCreate) => {
    // INSERT INTO "Band" VALUES ("name", "formationYear")...
    const band = await prisma.band.create({ data: payload });

    return band;
  };
}
