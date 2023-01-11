import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import {
  useNightActions,
  useHealing,
  usePushIncomingAbility,
} from "../../../hooks";

export const useDoctor = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const pushedGamer = useHealing(Number(gamerIdValue));
  const { pushAbility } = usePushIncomingAbility();
  const { registerNightAction, checkPrevNigthToGamerAction } =
    useNightActions();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onPushAbility = () => {
    if (!pushedGamer) return alert("Оберіть гравця!");

    const isCheckPrevNight = checkPrevNigthToGamerAction(pushedGamer.id);

    if (isCheckPrevNight) {
      alert("Заборонено використовувати здібність 2 рази підряд");
    }

    if (!isCheckPrevNight) {
      pushAbility(pushedGamer);
      onFinishAbility("success");
      registerNightAction({
        abilityId: "healing",
        gamerIdFrom: gamerId,
        gamersIdsTo: [pushedGamer.id],
      });
    }
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onPushAbility,
  };
};
