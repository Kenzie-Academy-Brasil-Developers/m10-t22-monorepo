import { Band } from "@prisma/client";

export type BandCreate = Omit<Band, "id">;
