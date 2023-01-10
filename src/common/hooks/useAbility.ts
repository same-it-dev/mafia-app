import { AbilityTypes } from "common/interfaces";
import { abilities } from "dataApp/abilities";

//const abilities = dataAbilities as Record<AbilityTypes, AbilityInterface>;

export const useAbility = (abilityType: AbilityTypes) => abilities[abilityType];
