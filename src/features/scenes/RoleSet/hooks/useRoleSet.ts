import { useGamers, useRoles, useScene, useSettingsGamers } from "common/hooks";
import { GamerInterface, RoleInterface } from "common/interfaces";
import { useEffect, useState } from "react";
import {
  GamerFormHandlersInterface,
  GamerFormRoleInterface,
  GamerFormValuesInterface,
} from "../interfaces";

const createGamer = (id: number, role: RoleInterface): GamerInterface => ({
  id,
  incomingAbilities: [],
  isActive: true,
  isKilled: false,
  isBlocked: false,
  role,
});

export const useRoleSet = () => {
  const { setGamers } = useGamers();
  const { presetRolesList, rolesList } = useRoles();
  const sttingsGamers = useSettingsGamers();
  const { runScene } = useScene();

  const [roles, setRoles] = useState<GamerFormRoleInterface[]>(presetRolesList);
  const [gamers, setSettingsGamers] = useState(sttingsGamers);
  const [configuredGamers, setConfiguredGamers] = useState<GamerInterface[]>(
    []
  );

  useEffect(() => {
    if (!gamers.length) {
      setGamers(configuredGamers);
      runScene("meeting", "Перейти до балагану ?");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamers]);

  useEffect(() => {
    const isCheckOnlyPeacefulRoles = !roles.find(
      ({ roleTypeId }) => roleTypeId !== "peaceful"
    );

    if (isCheckOnlyPeacefulRoles && roles.length) {
      const gamerRole: any = rolesList.find(({ id }) => id === "peaceful");

      const peacefuls = gamers.map(({ id }) => {
        return createGamer(Number(id), gamerRole);
      });

      setSettingsGamers([]);
      setRoles([]);

      setConfiguredGamers([...configuredGamers, ...peacefuls]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles]);

  const onSubmit = (
    { gamerId, roleId }: GamerFormValuesInterface,
    { resetForm }: GamerFormHandlersInterface
  ) => {
    resetForm();

    const selectedRole: any = roles.find(({ id }) => id === Number(roleId));

    const gamerRole: any = rolesList.find(
      ({ id }) => id === selectedRole.roleTypeId
    );

    const gamer = createGamer(Number(gamerId), gamerRole);

    setRoles(roles.filter(({ id }) => id !== Number(roleId)));
    setSettingsGamers(gamers.filter(({ id }) => id !== Number(gamerId)));
    setConfiguredGamers([...configuredGamers, gamer]);
  };

  return {
    roles: roles.filter(({ roleTypeId }) => roleTypeId !== "peaceful"),
    gamers,
    onSubmit,
  };
};
