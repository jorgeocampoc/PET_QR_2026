import {USER_ROUTES , ROLES } from "@/constants";

const routesCustomer = [
  {
    path:USER_ROUTES.customer.dashboard,
    component: () => import("@/pages/DashBoardCustomerPage.vue"),
    meta: { requiresAuth: true, role: ROLES.customer },
  },
];
const routesAdmin = [
  {
    path:USER_ROUTES.admin.admin,
    component: () => import("@/pages/DashBoardAdminPage.vue"),
    meta: { requiresAuth: true, role: ROLES.admin },
  },
];

export { routesAdmin, routesCustomer };
