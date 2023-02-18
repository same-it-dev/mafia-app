import { GamerInterface } from "common/interfaces";

const bombStrategy = (
  gamerId: number,
  gamers: GamerInterface[]
): GamerInterface[] => {
  const gamer = gamers.find(({ id }) => id === gamerId) as GamerInterface;

  const gamerIds = gamers.map(({ id }) => id);

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

  return gamers.map((current) =>
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
  );
};

const defaultStrategy = (
  gamerId: number,
  gamers: GamerInterface[]
): GamerInterface[] => {
  const currentGamer = gamers.find(
    ({ id }) => id === gamerId
  ) as GamerInterface;

  const isHealing = currentGamer.incomingAbilities.includes("healing");

  return gamers.map((gamer) =>
    gamer.id === gamerId
      ? {
          ...gamer,
          isKilled: !isHealing,
          incomingAbilities: isHealing
            ? gamer.incomingAbilities.filter((ability) => ability !== "healing")
            : [...gamer.incomingAbilities, "killing"],
        }
      : gamer
  );
};

type StrategyType = (
  gamerId: number,
  gamers: GamerInterface[]
) => GamerInterface[];

const strategies: Record<string, StrategyType> = {
  bomb: bombStrategy,
  default: defaultStrategy,
};

export const killingStrategy = (
  name: string,
  gamerId: number,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[name] ?? strategies["default"];

  return strategy(gamerId, gamers);
};
