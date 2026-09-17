const USER_ROUTES = {
  admin: {
    admin: "/admin",
  },
  customer: {
    dashboard: "/dashboard",
  },
} as const;

const AUTH_ROUTES = {
  auth: "/auth",
} as const;

export { USER_ROUTES, AUTH_ROUTES };
