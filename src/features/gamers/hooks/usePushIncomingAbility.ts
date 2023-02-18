import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

const pushBombAblity = (
  gamer: GamerInterface,
  gamers: GamerInterface[],
  gamerIds: number[],
  setGamers: (gamers: GamerInterface[]) => void
) => {
  const afterGamer = gamers.find(({ id }) =>
    gamerIds[gamerIds.length - 1] === gamer.id
      ? id === gamerIds[0]
      : id === gamer.id + 1
  );

  const prevGamer = gamers.find(({ id }) =>
    gamerIds[gamerIds[0]] === gamer.id
      ? id === gamerIds[gamerIds[gamerIds.length - 1]]
      : id === gamer.id - 1
  );

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
  const { gamers, setGamers, gamerIds } = useGamers({ sortByGamerId: true });

  return {
    pushAbility: (gamer: GamerInterface) => {
      if (
        gamer.role.id === "bomb" &&
        gamer.incomingAbilities.includes("killing")
      ) {
        return pushBombAblity(gamer, gamers, gamerIds, setGamers);
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
