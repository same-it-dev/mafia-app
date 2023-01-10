import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useCheckPersonTeam = (
  gamerId: number
): {
  isTeam: boolean;
  checkedGamer: GamerInterface;
} | null => {
  const { getGamerById } = useGamers();

  if (gamerId) {
    const checkedGamer = getGamerById(gamerId);

    return {
      isTeam:
        checkedGamer.role.type === "city" ||
        checkedGamer.role.id === "chameleon",
      checkedGamer,
    };
  }

  return null;
};
