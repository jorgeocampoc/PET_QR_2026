const API_ROUTES_USER = {
  GET_USER: "users/get-user-by-id",
  POST_USER: "users/",
} as const;
const API_ROUTES_PET = {
  BASE_PETS: "pets",
} as const;
const API_ROUTES_ACCOUNT = {
  BASE_ACCOUNT: "account",
} as const;

export { API_ROUTES_USER, API_ROUTES_PET, API_ROUTES_ACCOUNT };
