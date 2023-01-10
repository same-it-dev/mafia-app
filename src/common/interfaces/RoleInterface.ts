import { RoleTypes, RoleIdTypes, AbilityTypes } from "./types";

export interface RoleInterface {
  id: RoleIdTypes;
  type: RoleTypes;
  name: string;
  priority: number;
  isActiveNight: boolean;
  isDisabled: boolean;
  desctiption: string;
  abilities: AbilityTypes[];
}
