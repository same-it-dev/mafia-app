import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import {
  useNightActions,
  useKilling,
  usePushIncomingAbility,
} from "../../../hooks";

export const useManiac = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const pushedGamer = useKilling(Number(gamerIdValue));
  const { pushAbility } = usePushIncomingAbility();
  const { registerNightAction } = useNightActions();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onPushAbility = () => {
    if (!pushedGamer) return alert("Оберіть гравця!");

    pushAbility(pushedGamer);
    onFinishAbility("success");
    registerNightAction({
      abilityId: "killing",
      gamerIdFrom: gamerId,
      gamersIdsTo: [pushedGamer.id],
    });
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onPushAbility,
  };
};
