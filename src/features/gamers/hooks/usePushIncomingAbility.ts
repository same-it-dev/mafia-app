import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const usePushIncomingAbility = () => {
  const { gamers, setGamers } = useGamers();

  return {
    pushAbility: (gamer: GamerInterface) =>
      setGamers(
        gamers.map((current) =>
          current.id === gamer.id
            ? { ...gamer, incomingAbilities: [...gamer.incomingAbilities] }
            : current
        )
      ),
  };
};
