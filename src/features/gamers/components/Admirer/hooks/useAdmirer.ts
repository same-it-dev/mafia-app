import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";
import { useNightActions } from "../../../hooks";
import { useGamers } from "common/hooks";

export const useAdmirer = (
  onFinishAbility: OnFinishAbilityInterface,
  gamerId: number
) => {
  const [gamerIdValue, setGamerIdValue] = useState(0);
  const { getGamerById } = useGamers();

  const pushedGamer = gamerIdValue ? getGamerById(gamerIdValue) : null;

  const { registerNightAction } = useNightActions();

  const onChangeGamerId = (id: number) => {
    setGamerIdValue(id);
  };

  const onPushAbility = () => {
    if (!pushedGamer) return alert("Оберіть гравця!");

    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm(
      `Використати здібність в ${pushedGamer.role.name} ?`
    );

    alert(
      pushedGamer.role.id === "sheriff"
        ? "Гравець є шерифом"
        : "Цей гравець не шериф"
    );

    if (isRunAbility) {
      onFinishAbility("success");
      registerNightAction({
        abilityId: "checkSheriffRole",
        gamerIdFrom: gamerId,
        gamersIdsTo: [pushedGamer.id],
      });
    }
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onPushAbility,
  };
};
