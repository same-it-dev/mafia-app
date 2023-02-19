import { Button, Dialog, GamerListSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useDoctor } from "./hooks";

export const Doctor = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const {
    onChangeGamerId,
    onPushAbility,
    onPushSelfAbility,
    gamerIdValue,
    abilityDataDialog,
    alertDataDialog,
  } = useDoctor(onFinishAbility, gamer.id);

  return (
    <>
      <GamerListSelect
        label={ability.name}
        name={ability.id}
        value={gamerIdValue}
        onSelectGamer={onChangeGamerId}
      />

      <Button
        sx={{ marginTop: "5px !important" }}
        className="gamer-push-ability"
        variant="contained"
        onClick={onPushAbility}
      >
        Використати здібність
      </Button>

      <Button
        sx={{ marginTop: "0 !important" }}
        className="gamer-push-ability"
        variant="contained"
        onClick={onPushSelfAbility}
      >
        Використати на себе
      </Button>

      <Dialog {...abilityDataDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </>
  );
};
