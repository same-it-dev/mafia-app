import { useGamers } from "common/hooks";

export const useNigthResults = () => {
  const { gamers, setGamers } = useGamers();

  const onSubmitNextScene = (): void => {
    setGamers(
      gamers.map((gamer) =>
        gamer.isKilled
          ? { ...gamer, isActive: false, incomingAbilities: [] }
          : { ...gamer, incomingAbilities: [] }
      )
    );
  };

  return {
    killedGamers: gamers.filter(
      ({ isKilled, incomingAbilities }) =>
        isKilled && incomingAbilities.includes("killing")
    ),
    onSubmitNextScene,
  };
};
