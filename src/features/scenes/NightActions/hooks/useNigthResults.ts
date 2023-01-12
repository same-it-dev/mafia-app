import { useGamers, useScene } from "common/hooks";

export const useNigthResults = () => {
  const { gamers, setGamers } = useGamers();
  const { runScene } = useScene();

  const onSubmitNextScene = (): void => {
    setGamers(
      gamers.map((gamer) =>
        gamer.isKilled
          ? { ...gamer, isActive: false, incomingAbilities: [] }
          : { ...gamer, incomingAbilities: [] }
      )
    );

    runScene("speech", "Перейти до інвідуальних промов ?");
  };

  return {
    killedGamers: gamers.filter(
      ({ isKilled, incomingAbilities }) =>
        isKilled && incomingAbilities.includes("killing")
    ),
    onSubmitNextScene,
  };
};
