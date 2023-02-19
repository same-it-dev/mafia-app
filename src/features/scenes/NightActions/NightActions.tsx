import { Typography } from "@mui/material";
import { Gamer } from "features/gamers";
import { useNightActions, useSetNightAction } from "./hooks";

export const NightActions = () => {
  useSetNightAction();
  const { activeGamer, runNextGamer } = useNightActions();

  return activeGamer ? (
    <Gamer gamer={activeGamer} onFinishAbility={runNextGamer} />
  ) : (
    <Typography variant="h1" color="primary.contrastText">
      Немає гравців
    </Typography>
  );
};
