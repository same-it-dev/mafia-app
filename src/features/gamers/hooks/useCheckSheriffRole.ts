import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useCheckSheriffRole = (
  gamerId: number
): {
  isSheriff: boolean;
  checkedGamer: GamerInterface;
} | null => {
  const { getGamerById } = useGamers();

  if (gamerId) {
    const checkedGamer = getGamerById(gamerId);

    return {
      isSheriff: checkedGamer.role.id === "sheriff",
      checkedGamer,
    };
  }

  return null;
};
