import { Gamer } from "features/gamers";
import { NightResults } from "./components";
import { useNightActions } from "./hooks";
import { useNigthResults } from "./hooks/useNigthResults";

export const NightActions = () => {
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
