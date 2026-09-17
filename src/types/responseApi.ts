import { loginResponseSchema } from "@/schemas";
import z from "zod";
type LoginResponseSchema = z.infer<typeof loginResponseSchema>;

export type { LoginResponseSchema };
