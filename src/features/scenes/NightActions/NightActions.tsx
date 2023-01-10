import { Gamer } from "features/gamers";
import { useNightActions } from "./hooks";

export const NightActions = () => {
  const { activeGamer, runNextGamer } = useNightActions();

  return <Gamer gamer={activeGamer} onFinishAbility={runNextGamer} />;
};
