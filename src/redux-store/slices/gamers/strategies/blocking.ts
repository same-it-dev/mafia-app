import { GamerInterface } from "common/interfaces";

const defaultStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
): GamerInterface[] => {
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

type StrategyType = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => GamerInterface[];

const strategies: Record<string, StrategyType> = {
  default: defaultStrategy,
};

export const blockingStrategy = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => {
  const strategy = strategies[pushedGamer.role.id] ?? strategies["default"];

  return strategy(pushedGamer, gamers);
};
