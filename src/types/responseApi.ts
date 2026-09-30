import { loginResponseSchema, logoutResponseSchema } from "@/schemas";
import z from "zod";
type LoginResponseSchema = z.infer<typeof loginResponseSchema>;
type LogoutResponseSchema = z.infer<typeof logoutResponseSchema>;

export type { LoginResponseSchema, LogoutResponseSchema };
