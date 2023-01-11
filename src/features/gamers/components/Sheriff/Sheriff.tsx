import {
  Button,
  GamerListMultipleSelect,
  GamerListSelect,
} from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useSheriff } from "./hooks";

export const Sheriff = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const abilityCheck = useAbility(gamer.role.abilities[0]);
  const abilityKilling = useAbility(gamer.role.abilities[1]);

  const {
    onChangeGamerIdKilling,
    gamerIdKillingValue,
    gamerIdCheckValue,
    onChangeGamerIdCheck,
    onPushAbility,
  } = useSheriff(onFinishAbility, gamer.id);

  return (
    <>
      <GamerListSelect
        label={abilityCheck.name}
        name={abilityCheck.id}
        value={gamerIdCheckValue}
        onSelectGamer={onChangeGamerIdCheck}
      />

      <GamerListSelect
        label={abilityKilling.name}
        name={abilityKilling.id}
        value={gamerIdKillingValue}
        onSelectGamer={onChangeGamerIdKilling}
      />

      <Button variant="contained" onDoubleClick={onPushAbility}>
        Використати здібність
      </Button>
    </>
  );
};
