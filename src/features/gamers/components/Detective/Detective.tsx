import { Button, Dialog, GamerListMultipleSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useDetective } from "./hooks";

export const Detective = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const {
    onChangeGamerIds,
    onPushAbility,
    abilityDataDialog,
    alertDataDialog,
  } = useDetective(onFinishAbility, gamer.id);

  return (
    <>
      <GamerListMultipleSelect
        title={ability.name}
        onSelectGamers={onChangeGamerIds}
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
