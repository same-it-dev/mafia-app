import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useKilling = (gamerId: number): GamerInterface | null => {
  const { getGamerById } = useGamers();

  if (gamerId) {
    const gamer = getGamerById(gamerId);

    const isHealing = gamer.incomingAbilities.includes("healing");

    return {
      ...gamer,
      isKilled: !isHealing,
      incomingAbilities: isHealing
        ? gamer.incomingAbilities.filter((ability) => ability !== "healing")
        : [...gamer.incomingAbilities, "killing"],
    };
  }
  return null;
};
