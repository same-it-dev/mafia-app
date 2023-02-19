import { GamerInterface } from "common/interfaces";
import { StrategyGamerPushType } from "../interfaces";

const defaultStrategy: StrategyGamerPushType = (pushedGamer, gamers) => {
  return gamers.map((gamer) =>
    gamer.id === pushedGamer.id
      ? {
          ...gamer,
          isBlocked: true,
          incomingAbilities: [...gamer.incomingAbilities, "block"],
        }
      : gamer
  );
};

const strategies: Record<string, StrategyGamerPushType> = {
  default: defaultStrategy,
};

export const blockingStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[pushedGamer.role.id] ?? strategies["default"];

  return strategy(pushedGamer, gamers);
};
