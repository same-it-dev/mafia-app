import { Dialog, GamerListMultipleSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useDetective } from "./hooks";

export const Detective = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerIds, abilityDataDialog, alertDataDialog } = useDetective(
    onFinishAbility,
    gamer.id
  );

  return (
    <>
      <GamerListMultipleSelect
        maxSelected={2}
        title={ability.name}
        onSelectGamers={onChangeGamerIds}
      />

      <Dialog {...abilityDataDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </>
  );
};
