import { OnFinishAbilityInterface } from "../../../interfaces";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (gamerIdsValue.length === 2) onConfirmAbility();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamerIdsValue]);

  return {
    onChangeGamerIds,
    gamerIdsValue,
    abilityDataDialog,
    alertDataDialog,
  };
};
