import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

const pushBombAblity = (
  gamer: GamerInterface,
  gamers: GamerInterface[],
  setGamers: (gamers: GamerInterface[]) => void
) => {
  const prevGamer = gamers.find(({ id }) => id === gamer.id - 1);
  const afterGamer = gamers.find(({ id }) => id === gamer.id + 1);

  console.log(gamer);
  console.log(prevGamer);
  console.log(afterGamer);

  const getGamer = (
    currentId: number | undefined,
    gamer: GamerInterface,
    prev?: GamerInterface,
    after?: GamerInterface
  ) => {
    if (prev && prev.id === currentId) return prev;
    if (after && after.id === currentId) return after;

    return gamer;
  };

  setGamers(
    gamers.map((current) =>
      current.id === prevGamer?.id ||
      current.id === afterGamer?.id ||
      current.id === gamer.id
        ? {
            ...getGamer(current.id, gamer, prevGamer, afterGamer),
            isKilled: !current.incomingAbilities.includes("healing"),
            incomingAbilities: current.incomingAbilities.includes("healing")
              ? current.incomingAbilities.filter((value) => value !== "healing")
              : [...current.incomingAbilities, "killing"],
          }
        : current
    )
  );
};

export const usePushIncomingAbility = () => {
  const { gamers, setGamers } = useGamers({ sortByGamerId: true });

  return {
    pushAbility: (gamer: GamerInterface) => {
      if (
        gamer.role.id === "bomb" &&
        gamer.incomingAbilities.includes("killing")
      ) {
        return pushBombAblity(gamer, gamers, setGamers);
      }

      setGamers(
        gamers.map((current) =>
          current.id === gamer.id
            ? { ...gamer, incomingAbilities: [...gamer.incomingAbilities] }
            : current
        )
      );
    },
  };
};
