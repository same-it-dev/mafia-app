import { useGamers, useRoles, useScene } from "common/hooks";
import { GamerInterface, RoleInterface } from "common/interfaces";
import { useState } from "react";

export const useNightActions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gamers } = useGamers();
  const { rolesList } = useRoles();
  const { runScene } = useScene();

  const mafiaRole = rolesList.find(({ id }) => id === "mafia") as RoleInterface;

  const godfather = gamers.find(
    ({ isActive, role: { type } }) => isActive && type === "mafia"
  ) as GamerInterface;

  const gamersList = gamers.filter(
    ({ isActive, role: { isActiveNight } }) => isActive && isActiveNight
  );

  if (godfather) {
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
  }

  gamersList.sort((item1, item2) => {
    return item1.role.priority - item2.role.priority;
  });

  const activeGamer = gamersList[currentIndex];

  const runNextGamer = () => {
    const isGamer = !!gamersList[currentIndex + 1];

    if (isGamer) {
      setCurrentIndex(currentIndex + 1);
    }

    if (!isGamer) {
      runScene("nightResults");
    }
  };

  return {
    activeGamer,
    runNextGamer,
  };
};
