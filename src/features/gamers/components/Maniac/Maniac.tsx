import { Button, Dialog, GamerListSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useManiac } from "./hooks";

export const Maniac = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const {
    onChangeGamerId,
    onPushAbility,
    gamerIdValue,
    abilityDataDialog,
    alertDataDialog,
  } = useManiac(onFinishAbility, gamer.id);

  return (
    <>
      <GamerListSelect
        label={ability.name}
        name={ability.id}
        value={gamerIdValue}
        onSelectGamer={onChangeGamerId}
      />

      <Button
        className="gamer-push-ability"
        variant="contained"
        onClick={onPushAbility}
      >
        Використати здібність
      </Button>

      <Dialog {...abilityDataDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </>
  );
};
