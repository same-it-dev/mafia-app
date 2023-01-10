import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";

import { useNightActions, useComparePersonsTeam } from "../../../hooks";

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

  const onChangeGamerIds = (ids: number[]) => {
    setGamerIdsValue(ids);
  };

  const onPushAbility = () => {
    if (!checkComparePersonsData || gamerIdsValue.length < 2)
      return alert("Оберіть двох гравців для порівняння !");

    const { isTeam, gamerFirst, gamerSecond } = checkComparePersonsData;

    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm(
      `Порівняти гравців №-${gamerFirst.id} ${gamerFirst.role.name} - №-${gamerSecond.id} ${gamerSecond.role.name}?`
    );

    if (isRunAbility) {
      alert(
        isTeam
          ? `Гравці №-${gamerFirst.id} ${gamerFirst.role.name} - №-${gamerSecond.id} ${gamerSecond.role.name} грають за одну команду`
          : `Гравці №-${gamerFirst.id} ${gamerFirst.role.name} - №-${gamerSecond.id} ${gamerSecond.role.name} грають за різні команди`
      );

      onFinishAbility("success");

      registerNightAction({
        abilityId: "checkPersonTeam",
        gamerIdFrom: gamerId,
        gamersIdsTo: [gamerFirst.id, gamerSecond.id],
      });
    }
  };

  return {
    onChangeGamerIds,
    gamerIdsValue,
    onPushAbility,
  };
};
