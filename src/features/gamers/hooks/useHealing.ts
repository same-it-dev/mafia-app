import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useHealing = (gamerId: number): GamerInterface | null => {
  const { getGamerById } = useGamers();

  if (gamerId) {
    const gamer = getGamerById(gamerId);

    return { ...gamer, incomingAbilities: ["healing"] };
  }
  return null;
};
