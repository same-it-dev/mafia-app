import { GamerInterface } from "common/interfaces";

export type StrategyGamerPushType = (
  pushedGamer: GamerInterface,
  gamers: GamerInterface[]
) => GamerInterface[];
