import { USER_ROUTES, ROLES } from "@/constants";
import type { UserPath } from "@/types/userPath";
import type { Role } from "@/types/role.types";

const isRoleValid = (role: string): boolean => {
  return Object.values(ROLES).includes(role as Role);
};

const getPathByRol = (role: string) => {
  switch (role) {
    case ROLES.admin:
      return USER_ROUTES.admin.admin as UserPath;
    case ROLES.customer:
      return USER_ROUTES.customer.dashboard as UserPath;
  }
};

export { isRoleValid, getPathByRol };
