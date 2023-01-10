import { selectSettingsCountGamers, useSelector } from "redux-store";

export interface GamerInterface {
  id: number;
  isActive: boolean;
}

export const useSettingsGamers = () => {
  const countGamers = useSelector(selectSettingsCountGamers);

  const gamers: GamerInterface[] = [];

  for (let i = 0; i < countGamers; i++) {
    gamers.push({ id: i + 1, isActive: false });
  }

  return gamers;
};
