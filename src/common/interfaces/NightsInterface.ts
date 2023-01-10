import { AbilityTypes } from "./types";

export interface NightActionInterface {
  gamerIdFrom: number;
  gamersIdsTo: number[];
  abilityId: AbilityTypes;
}

export type NightInterface = NightActionInterface[];

export type NightsInterface = NightInterface[];
