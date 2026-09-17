const INPUT_FIRST_NAME_REQUIRED = "First name is required" as const;
const INPUT_LAST_NAME_REQUIRED = "Last name is required" as const;
const INPUT_EMAIL_REQUIRED = "Email is required" as const;
const INPUT_PASSWORD_REQUIRED = "Password is required" as const;

const INPUT_FIRST_FORMAT = "Must contain at least 3 characters." as const;
const INPUT_LAST_FORMAT = "Must contain at least 3 characters." as const;
const INPUT_EMAIL_FORMAT = "Format email not valid" as const;
const INPUT_PASSWORD_FORMAT =
  "Password must be at least 6 characters long and contain at least one letter, one number, and one special character" as const;

export {
  INPUT_FIRST_NAME_REQUIRED,
  INPUT_LAST_NAME_REQUIRED,
  INPUT_EMAIL_REQUIRED,
  INPUT_PASSWORD_REQUIRED,
  INPUT_FIRST_FORMAT,
  INPUT_LAST_FORMAT,
  INPUT_EMAIL_FORMAT,
  INPUT_PASSWORD_FORMAT,
};
