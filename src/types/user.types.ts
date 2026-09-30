import { registerUserSchema, userSchema } from "@/schemas";
import z from "zod";
type UserSchema = z.infer<typeof userSchema>;
type RegisterUserSchema = z.infer<typeof registerUserSchema>;
export type { UserSchema, RegisterUserSchema };
