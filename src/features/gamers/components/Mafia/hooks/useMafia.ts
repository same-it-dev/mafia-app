import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import {
  useNightActions,
  useKilling,
  usePushIncomingAbility,
} from "../../../hooks";
import { useDialog } from "common/components";

export const useMafia = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const pushedGamer = useKilling(Number(gamerIdValue));
  const { pushAbility } = usePushIncomingAbility();
  const { registerNightAction } = useNightActions();

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
        abilityId: "killing",
        gamerIdFrom: gamerId,
        gamersIdsTo: [pushedGamer.id],
      });
    }
  };

  const onPushAbility = () => {
    if (!pushedGamer)
      return alertDataDialog.onRunDialog({ title: "Оберіть гравця !" });

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
