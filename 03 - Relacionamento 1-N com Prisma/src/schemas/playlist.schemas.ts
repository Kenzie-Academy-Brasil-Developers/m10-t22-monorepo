import { z } from "zod";

export const playlistSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().max(50),
});

export const playlistCreateSchema = playlistSchema.omit({ id: true });
