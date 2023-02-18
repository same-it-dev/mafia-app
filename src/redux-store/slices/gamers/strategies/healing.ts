import { GamerInterface } from "common/interfaces";

const defaultStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
): GamerInterface[] => {
  return gamers.map((gamer) =>
    gamer.id === pushedGamer.id
      ? {
          ...gamer,
          incomingAbilities: ["healing"],
        }
      : gamer
  );
};

type StrategyType = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => GamerInterface[];

const strategies: Record<string, StrategyType> = {
  default: defaultStrategy,
};

export const healingStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[pushedGamer.role.id] ?? strategies["default"];

  return strategy(pushedGamer, gamers);
};
