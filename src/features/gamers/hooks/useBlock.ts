import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useBlock = (gamerId: number): GamerInterface | null => {
  const { getGamerById } = useGamers();

  if (gamerId) {
    const gamer = getGamerById(gamerId);

    return {
      ...gamer,
      isBlocked: true,
      incomingAbilities: [...gamer.incomingAbilities, "block"],
    };
  }
  return null;
};
