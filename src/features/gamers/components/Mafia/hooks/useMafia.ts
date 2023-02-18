import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import { useNightActions, usePushIncomingAbilityNew } from "../../../hooks";
import { useDialog } from "common/components";
import { useGamers } from "common/hooks";

export const useMafia = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const { getGamerById } = useGamers();

  const pushedGamer = getGamerById(Number(gamerIdValue));

  const { pushIncomingAbility } = usePushIncomingAbilityNew();
  const { registerNightAction } = useNightActions();

  const abilityDataDialog = useDialog();
  const alertDataDialog = useDialog();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onConfirmAbility = () => {
    if (pushedGamer) {
      pushIncomingAbility({ abilityId: "killing", pushedGamer });
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
