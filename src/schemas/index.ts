import { registerUserSchema, authSchema } from "./auth.schema";
import { loginResponseSchema, logoutResponseSchema } from "./responsesApi.schema";
import { userSchema } from "./user.schema";
import { registerPetSchema, petSchema, updatePetSchema } from "./pet.schema";
import { paginationmailSchema } from "./pagination";

export {
  registerUserSchema,
  petSchema,
  paginationmailSchema,
  authSchema,
  loginResponseSchema,
  userSchema,
  logoutResponseSchema,
  registerPetSchema,
  updatePetSchema,
};
