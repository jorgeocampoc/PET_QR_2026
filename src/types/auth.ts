import type { authSchema } from "@/schemas";
import z from "zod";
type AuthSchema = z.infer<typeof authSchema>;

export type { AuthSchema };
