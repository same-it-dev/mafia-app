import { selectSettigsPreset, useSelector } from "redux-store";

export const useSettingsPreset = () => {
  const preset = useSelector(selectSettigsPreset);

  return preset;
};
