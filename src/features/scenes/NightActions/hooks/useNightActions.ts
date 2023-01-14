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

  const gamersList = gamers.reduce(
    (ac, item) => {
      if (!item.isActive || !item.role.isActiveNight) return ac;

      if (mafiaRole.priority < item.role.priority && !ac.isAddMafia) {
        ac.gamers.push({
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
        ac.isAddMafia = true;
      }

      ac.gamers.push(item);
      return ac;
    },
    { gamers: [] as GamerInterface[], isAddMafia: false }
  );

  const activeGamer = gamersList.gamers[currentIndex];

  const runNextGamer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return {
    activeGamer,
    runNextGamer,
  };
};
