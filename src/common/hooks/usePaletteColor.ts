import { useTheme } from "@mui/material";
import { colorTypes } from "common/interfaces";

export const usePaletteColor = (color: colorTypes) => {
  const { palette } = useTheme();

  return {
    modeColor: palette[color][palette.mode],
    themeColor: palette[color],
  };
};
