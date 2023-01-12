import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";

import {
  useNightActions,
  useKilling,
  usePushIncomingAbility,
  useCheckPersonTeam,
} from "../../../hooks";
import { useDialog } from "common/components";

export const useSheriff = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdKillingValue, setGamerIdKillingValue] = useState("");
  const [gamerIdCheckValue, setGamerIdCheckValue] = useState("");

  const pushedGamer = useKilling(Number(gamerIdKillingValue));

  const checkedGamerData = useCheckPersonTeam(Number(gamerIdCheckValue));

  const { pushAbility } = usePushIncomingAbility();
  const { registerNightAction } = useNightActions();

  const abilityDataDialog = useDialog();
  const alertDataDialog = useDialog();

  const onChangeGamerIdKilling = (id: string) => {
    setGamerIdCheckValue("");
    setGamerIdKillingValue(id);
  };

  const onChangeGamerIdCheck = (id: string) => {
    setGamerIdKillingValue("");
    setGamerIdCheckValue(id);
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

    if (checkedGamerData) {
      const { isTeam, checkedGamer } = checkedGamerData;

      alertDataDialog.onRunDialog({
        title: isTeam
          ? `Гравець  грає за місто`
          : `Гравець  не є гравцем за місто`,
        icon: isTeam ? "yes" : "no",
        onNext: () => {
          onFinishAbility("success");
          registerNightAction({
            abilityId: "checkPersonTeam",
            gamerIdFrom: gamerId,
            gamersIdsTo: [checkedGamer.id],
          });
        },
      });
    }
  };

  const onPushAbility = () => {
    if (!pushedGamer && !gamerIdCheckValue)
      return alertDataDialog.onRunDialog({ title: "Оберіть здібність !" });

    abilityDataDialog.onRunDialog({
      title: "Використати здібність ?",
      onConfirm: onConfirmAbility,
    });
  };

  return {
    onChangeGamerIdKilling,
    gamerIdKillingValue,
    onChangeGamerIdCheck,
    gamerIdCheckValue,
    onPushAbility,
    abilityDataDialog,
    alertDataDialog,
  };
};
