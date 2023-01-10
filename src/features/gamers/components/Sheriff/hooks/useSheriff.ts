import { OnFinishAbilityInterface } from "../../../interfaces";
import { useState } from "react";

import {
  useNightActions,
  useKilling,
  usePushIncomingAbility,
  useCheckPersonTeam,
} from "../../../hooks";

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

  const onChangeGamerIdKilling = (id: string) => {
    setGamerIdCheckValue("");
    setGamerIdKillingValue(id);
  };

  const onChangeGamerIdCheck = (id: string) => {
    setGamerIdKillingValue("");
    setGamerIdCheckValue(id);
  };

  const onPushAbility = () => {
    if (!pushedGamer && !gamerIdCheckValue) return alert("Оберіть здібність!");

    if (pushedGamer) {
      // eslint-disable-next-line no-restricted-globals
      const isRunAbility = confirm(
        `Використати здібність в №-${pushedGamer.id} ${pushedGamer.role.name} ?`
      );

      if (isRunAbility) {
        pushAbility(pushedGamer);
        onFinishAbility("success");
        registerNightAction({
          abilityId: "killing",
          gamerIdFrom: gamerId,
          gamersIdsTo: [pushedGamer.id],
        });
      }
    }

    if (checkedGamerData) {
      const { isTeam, checkedGamer } = checkedGamerData;

      // eslint-disable-next-line no-restricted-globals
      const isRunAbility = confirm(
        `Перевірити гравця №-${checkedGamer.id} ${checkedGamer.role.name}?`
      );

      if (isRunAbility) {
        alert(
          isTeam
            ? `Гравець ${checkedGamer.role.name} грає за місто`
            : `Гравець ${checkedGamer.role.name} не є гравцем за місто`
        );

        onFinishAbility("success");
        registerNightAction({
          abilityId: "checkPersonTeam",
          gamerIdFrom: gamerId,
          gamersIdsTo: [checkedGamer.id],
        });
      }
    }
  };

  return {
    onChangeGamerIdKilling,
    gamerIdKillingValue,
    onChangeGamerIdCheck,
    gamerIdCheckValue,
    onPushAbility,
  };
};
