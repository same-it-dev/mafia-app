import { GamerInterface } from "common/interfaces";

export interface PushGamerAbilityPropsInterface {
  gamer: GamerInterface;
}

export type PushGamerAbilityInterface = (
  data: PushGamerAbilityPropsInterface
) => void;

export type OnFinishAbilityInterface = (data: "success" | "fail") => void;

export interface GamerPropsInterface {
  gamer: GamerInterface;
  onFinishAbility: OnFinishAbilityInterface;
}

export type GamerAbilityHookInterface = GamerInterface | null;
