import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";

import { useNightActions, useCheckSheriffRole } from "../../../hooks";

export const useBeauty = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");

  const checkedSherifData = useCheckSheriffRole(Number(gamerIdValue));

  const { registerNightAction } = useNightActions();

  const onChangeGamerId = (id: string) => {
    setGamerIdValue(id);
  };

  const onPushAbility = () => {
    if (!checkedSherifData) return alert("Оберіть гравця!");

    const { isSheriff, checkedGamer } = checkedSherifData;

    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm(
      `Перевірити гравця №-${checkedGamer.id} ${checkedGamer.role.name}?`
    );

    if (isRunAbility) {
      alert(
        isSheriff
          ? `Гравець ${checkedGamer.role.name} є шерифом`
          : `Гравець ${checkedGamer.role.name} не шериф`
      );

      onFinishAbility("success");

      registerNightAction({
        abilityId: "checkPersonTeam",
        gamerIdFrom: gamerId,
        gamersIdsTo: [checkedGamer.id],
      });
    }
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onPushAbility,
  };
};
