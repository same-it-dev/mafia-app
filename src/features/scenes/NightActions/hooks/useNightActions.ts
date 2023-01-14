import { useGamers, useRoles } from "common/hooks";
import { GamerInterface, RoleInterface } from "common/interfaces";
import { useState } from "react";

export const useNightActions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gamers } = useGamers();
  const { rolesList } = useRoles();

  const mafiaRole = rolesList.find(({ id }) => id === "mafia") as RoleInterface;

  const godfather = gamers.find(
    ({ isActive, role: { type } }) => isActive && type === "mafia"
  ) as GamerInterface;

  const gamersList = gamers.filter(
    ({ isActive, role: { isActiveNight } }) => isActive && isActiveNight
  );

  gamersList.push({
    id: 100,
    isActive: true,
    isBlocked: false,
    isKilled: false,
    incomingAbilities: [],
    role: {
      ...mafiaRole,
      name: `${mafiaRole.name} Хрещений батько №-${godfather.id}`,
    },
  });

  gamersList.sort((item1, item2) => {
    return item1.role.priority - item2.role.priority;
  });

  const activeGamer = gamersList[currentIndex];

  const runNextGamer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return {
    activeGamer,
    runNextGamer,
  };
};
