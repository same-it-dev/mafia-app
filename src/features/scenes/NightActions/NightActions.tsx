import { Gamer } from "features/gamers";
import { NightResults } from "./components";
import { useNightActions, useSetNightAction } from "./hooks";
import { useNigthResults } from "./hooks/useNigthResults";

export const NightActions = () => {
  useSetNightAction();
  const { activeGamer, runNextGamer } = useNightActions();
  const { killedGamers, onSubmitNextScene } = useNigthResults();

  return activeGamer ? (
    <Gamer gamer={activeGamer} onFinishAbility={runNextGamer} />
  ) : (
    <NightResults
      killedGamers={killedGamers}
      onSubmitNextScene={onSubmitNextScene}
    />
  );
};
