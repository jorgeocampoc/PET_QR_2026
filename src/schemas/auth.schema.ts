import {
  REGEX_PASSWORD,
  REGEX_FIRST_NAME,
  REGEX_LAST_NAME,
  INPUT_FIRST_NAME_REQUIRED,
  INPUT_LAST_NAME_REQUIRED,
  INPUT_EMAIL_REQUIRED,
  INPUT_PASSWORD_REQUIRED,
  INPUT_FIRST_FORMAT,
  INPUT_LAST_FORMAT,
  INPUT_EMAIL_FORMAT,
  INPUT_PASSWORD_FORMAT,
} from "@/constants";
import z from "zod";

const registerSchema = z.object({
  first_name: z
    .string({
      required_error: INPUT_FIRST_NAME_REQUIRED,
    })
    .trim()
    .regex(REGEX_FIRST_NAME, { message: INPUT_FIRST_FORMAT }),
  last_name: z
    .string({
      required_error: INPUT_LAST_NAME_REQUIRED,
    })
    .trim()
    .regex(REGEX_LAST_NAME, { message: INPUT_LAST_FORMAT }),
  email: z
    .string({
      required_error: INPUT_EMAIL_REQUIRED,
    })
    .trim()
    .email({ message: INPUT_EMAIL_FORMAT }),
  password: z
    .string({
      required_error: INPUT_PASSWORD_REQUIRED,
    })
    .regex(REGEX_PASSWORD, INPUT_PASSWORD_FORMAT),
});

const authSchema = z.object({
  email: z
    .string({
      required_error: INPUT_EMAIL_REQUIRED,
    })
    .trim()
    .email({ message: INPUT_EMAIL_FORMAT }),
  password: z
    .string({
      required_error: INPUT_PASSWORD_REQUIRED,
    })
    .regex(REGEX_PASSWORD, INPUT_PASSWORD_FORMAT),
});

export { registerSchema, authSchema };
