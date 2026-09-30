import type { API_ROUTES_USER, API_ROUTES_PET } from "@/constants";

type ApiRoutesUser = (typeof API_ROUTES_USER)[keyof typeof API_ROUTES_USER];
type ApiRoutesPet = (typeof API_ROUTES_PET)[keyof typeof API_ROUTES_PET];
export type { ApiRoutesUser, ApiRoutesPet };
