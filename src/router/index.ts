import { createRouter, createWebHistory } from "vue-router";
import routesAuth from "./auth.routes";
import { routesAdmin, routesCustomer } from "./user.routes";
import { useAuthStore } from "@/stores/auth";
import { AUTH_ROUTES } from "@/constants";
import type { Role } from "../types/index";
import routesNotFoundPage from "./notFound.routes";
import { getPathByRol, isRoleValid } from "@/utils";

const routes = [
  ...routesAuth,
  ...routesAdmin,
  ...routesCustomer,
  ...routesNotFoundPage,
  {
    path: "/",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth || to.path == AUTH_ROUTES.auth) {
    await authStore.getUser();
  }
  
  const role = authStore.user?.role || "";
  const isValidRole = isRoleValid(role);
  if (to.path === AUTH_ROUTES.auth) {
    if (authStore.isAuthenticated && isValidRole) {
      return getPathByRol(role as Role);
    }
    return true;
  }
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return AUTH_ROUTES.auth;
  }
  if (to.meta.requiresAuth && to.meta.role && role !== to.meta.role) {
    return getPathByRol(role as Role);
  }
  return true;
});

export default router;
