import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import { useCheckSheriffRole, useNightActions } from "../../../hooks";
import { useDialog } from "common/components";

export const useAdmirer = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const { registerNightAction } = useNightActions();

  const checkedSherifData = useCheckSheriffRole(Number(gamerIdValue));

  const abilityDataDialog = useDialog();
  const alertDataDialog = useDialog();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onConfirmAbility = () => {
    if (checkedSherifData) {
      const { isSheriff, checkedGamer } = checkedSherifData;

      alertDataDialog.onRunDialog({
        title: isSheriff ? `Гравець є шерифом` : `Гравець  не є шерифом`,
        icon: isSheriff ? "yes" : "no",
        onNext: () => {
          onFinishAbility("success");
          registerNightAction({
            abilityId: "checkSheriffRole",
            gamerIdFrom: gamerId,
            gamersIdsTo: [checkedGamer.id],
          });
        },
      });
    }
  };

  const onPushAbility = () => {
    if (!checkedSherifData)
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
