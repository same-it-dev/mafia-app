import { OnFinishAbilityInterface } from "../../../interfaces";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (gamerIdValue) onConfirmAbility();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamerIdValue]);

  return {
    onChangeGamerId,
    gamerIdValue,
    abilityDataDialog,
    alertDataDialog,
  };
};
