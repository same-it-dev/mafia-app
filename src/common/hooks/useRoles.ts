import { RoleInterface } from "common/interfaces";
import { roles as rolesList } from "dataApp/roles";
import { useSettingsPreset } from "./useSettingsPreset";

export const useRoles = () => {
  const preset = useSettingsPreset();

  return {
    rolesList: rolesList || [],
    presetRolesList: preset.roles.map((roleId, index) => {
      const { id, name } = rolesList.find(
        ({ id }) => id === roleId
      ) as RoleInterface;

      return {
        id: ++index,
        roleTypeId: id,
        name: name,
      };
    }),
  };
};
