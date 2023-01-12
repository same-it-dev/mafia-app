import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";

import { useNightActions, useComparePersonsTeam } from "../../../hooks";
import { useDialog } from "common/components";

export const useDetective = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdsValue, setGamerIdsValue] = useState<number[]>([]);

  const checkComparePersonsData = useComparePersonsTeam(
    Number(gamerIdsValue[0]),
    Number(gamerIdsValue[1])
  );

  const { registerNightAction } = useNightActions();

  const abilityDataDialog = useDialog();
  const alertDataDialog = useDialog();

  const onChangeGamerIds = (ids: number[]) => {
    setGamerIdsValue(ids);
  };

  const onConfirmAbility = () => {
    if (checkComparePersonsData) {
      const { isTeam, gamerFirst, gamerSecond } = checkComparePersonsData;

      alertDataDialog.onRunDialog({
        icon: isTeam ? "yes" : "no",
        title: isTeam
          ? "Гравці грають за одну команду"
          : "Гравці грають за різні команди",
        onNext: () => {
          onFinishAbility("success");

          registerNightAction({
            abilityId: "checkPersonTeam",
            gamerIdFrom: gamerId,
            gamersIdsTo: [gamerFirst.id, gamerSecond.id],
          });
        },
      });
    }
  };

  const onPushAbility = () => {
    if (!checkComparePersonsData || gamerIdsValue.length < 2)
      return alertDataDialog.onRunDialog({
        title: "Оберіть двох гравців для порівняння !",
      });

    abilityDataDialog.onRunDialog({
      title: "Використати здібність ?",
      onConfirm: onConfirmAbility,
    });
  };

  return {
    onChangeGamerIds,
    gamerIdsValue,
    onPushAbility,
    abilityDataDialog,
    alertDataDialog,
  };
};
