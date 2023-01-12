import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import {
  useNightActions,
  useHealing,
  usePushIncomingAbility,
} from "../../../hooks";
import { useDialog } from "common/components";

export const useDoctor = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const pushedGamer = useHealing(Number(gamerIdValue));
  const { pushAbility } = usePushIncomingAbility();
  const { registerNightAction, checkPrevNigthToGamerAction } =
    useNightActions();

  const abilityDataDialog = useDialog();
  const alertDataDialog = useDialog();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onConfirmAbility = () => {
    if (pushedGamer) {
      pushAbility(pushedGamer);
      onFinishAbility("success");
      registerNightAction({
        abilityId: "healing",
        gamerIdFrom: gamerId,
        gamersIdsTo: [pushedGamer.id],
      });
    }
  };

  const onPushAbility = () => {
    if (!pushedGamer)
      return alertDataDialog.onRunDialog({ title: "Оберіть гравця !" });

    const isCheckPrevNight = checkPrevNigthToGamerAction(pushedGamer.id);

    if (isCheckPrevNight) {
      return alertDataDialog.onRunDialog({
        title: "Заборонено використовувати здібність 2 рази підряд",
      });
    }

    abilityDataDialog.onRunDialog({
      title: "Використати здібність ?",
      onConfirm: onConfirmAbility,
    });
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onPushAbility,
    abilityDataDialog,
    alertDataDialog,
  };
};
