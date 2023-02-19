import { GamerInterface } from "common/interfaces";
import { StrategyGamerPushType } from "../interfaces";

const bombStrategy: StrategyGamerPushType = (pushedGamer, gamers) => {
  const gamerIds = gamers.map(({ id }) => id);

  const afterGamer = gamers.find(({ id }) =>
    gamerIds[gamerIds.length - 1] === pushedGamer.id
      ? id === gamerIds[0]
      : id === pushedGamer.id + 1
  );

  const prevGamer = gamers.find(({ id }) =>
    gamerIds[gamerIds[0]] === pushedGamer.id
      ? id === gamerIds[gamerIds[gamerIds.length - 1]]
      : id === pushedGamer.id - 1
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
    current.id === pushedGamer.id
      ? {
          ...getGamer(current.id, pushedGamer, prevGamer, afterGamer),
          isKilled: !current.incomingAbilities.includes("healing"),
          incomingAbilities: current.incomingAbilities.includes("healing")
            ? current.incomingAbilities.filter((value) => value !== "healing")
            : [...current.incomingAbilities, "killing"],
        }
      : current
  );
};

const defaultStrategy: StrategyGamerPushType = (pushedGamer, gamers) => {
  const isHealing = pushedGamer.incomingAbilities.includes("healing");

  return gamers.map((gamer) =>
    gamer.id === pushedGamer.id
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

const strategies: Record<string, StrategyGamerPushType> = {
  bomb: bombStrategy,
  default: defaultStrategy,
};

export const killingStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[pushedGamer.role.id] ?? strategies["default"];

  return strategy(pushedGamer, gamers);
};
