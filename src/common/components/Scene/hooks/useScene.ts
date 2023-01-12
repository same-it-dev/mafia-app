import { SceneTypes, StepInterface } from "common/interfaces";
import { useSelector, selectStep } from "redux-store";
import {
  Acquaintance,
  Meeting,
  Setting,
  RoleSet,
  NightActions,
  Speech,
} from "features/scenes";

const Scenes: Record<SceneTypes, () => JSX.Element> = {
  meeting: Meeting,
  cards: Acquaintance,
  roulette: Acquaintance,
  voting: Acquaintance,
  setting: Setting,
  roleset: RoleSet,
  nightActions: NightActions,
  acquaintance: Acquaintance,
  speech: Speech,
  day: function (): JSX.Element {
    throw new Error("Function not implemented.");
  },
  night: function (): JSX.Element {
    throw new Error("Function not implemented.");
  },
};

export const useScene = () => {
  const step = useSelector<StepInterface>(selectStep);

  return Scenes[step.scene];
};
