import { USER_ROUTES } from "@/constants";
import { z } from "zod";

const loginResponseSchema = z.object({
  message: z.string(),
  path: z.enum([USER_ROUTES.admin.admin, USER_ROUTES.customer.dashboard]),
});

export { loginResponseSchema };
