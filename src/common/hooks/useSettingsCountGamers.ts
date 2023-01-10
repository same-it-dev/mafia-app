import { selectSettingsCountGamers, useSelector } from "redux-store";

export const useSettingsCountGamers = () => {
  const countGamers = useSelector(selectSettingsCountGamers);

  return countGamers;
};
