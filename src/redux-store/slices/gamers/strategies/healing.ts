import { GamerInterface } from "common/interfaces";
import { StrategyGamerPushType } from "../interfaces";

const defaultStrategy: StrategyGamerPushType = (pushedGamer, gamers) => {
  return gamers.map((gamer) =>
    gamer.id === pushedGamer.id
      ? {
          ...gamer,
          incomingAbilities: ["healing"],
        }
      : gamer
  );
};

const strategies: Record<string, StrategyGamerPushType> = {
  default: defaultStrategy,
};

export const healingStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[pushedGamer.role.id] ?? strategies["default"];

  return strategy(pushedGamer, gamers);
};
