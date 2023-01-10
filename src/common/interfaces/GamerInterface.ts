import { RoleInterface } from "./RoleInterface";
import { AbilityTypes } from "./types";

export interface GamerIcoumingAbility {
  abilityId: AbilityTypes;
  gamerId: number;
  gameCircle: number;
}

export interface GamerInterface {
  id: number;
  isActive: boolean;
  isKilled: boolean;
  isBlocked: boolean;
  role: RoleInterface;
  incomingAbilities: AbilityTypes[];
}

export interface GamerPropsInterface {
  gamer: GamerInterface;
  gamers: GamerInterface[];
  onFinishAbility: (value: number) => void;
  checkIsBlocked: () => boolean;
}
