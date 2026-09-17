import { userSchema } from "@/schemas";
import z from "zod";
type UserSchema = z.infer<typeof userSchema>;

export type { UserSchema };
