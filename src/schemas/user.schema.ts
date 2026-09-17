import { REGEX_FIRST_NAME, REGEX_LAST_NAME, ROLES } from "@/constants";
import z from "zod";

const userSchema = z.strictObject({
  id: z.string(),
  first_name: z.string().trim().regex(REGEX_FIRST_NAME),
  last_name: z.string().trim().regex(REGEX_LAST_NAME),
  email: z.string().trim().email(),
  password: z.string().trim(),
  role: z.enum([...Object.values(ROLES)] as [string, ...string[]]),
  is_Active: z.boolean().optional(),
  email_verification: z.boolean().optional(),
});

export { userSchema };
