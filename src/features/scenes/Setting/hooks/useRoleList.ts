import { RoleInterface } from "common/interfaces";

export const useRoleList = (roles: RoleInterface[]) => {
  const uniqueRoles = Array.from(new Set(roles));

  return uniqueRoles.map(({ id, name }) => ({
    id,
    name,
    count: roles.filter(({ id: roleId }) => roleId === id).length,
  }));
};
