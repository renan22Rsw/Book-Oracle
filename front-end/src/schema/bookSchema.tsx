import { z } from "zod";

export const bookSchema = z.object({
  description: z.string().min(3).max(100),
});
