import { Button, GamerListMultipleSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useDetective } from "./hooks";

export const Detective = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerIds, onPushAbility } = useDetective(
    onFinishAbility,
    gamer.id
  );

  return (
    <>
      <GamerListMultipleSelect
        title={ability.name}
        onSelectGamers={onChangeGamerIds}
      />

      <Button variant="contained" onDoubleClick={onPushAbility}>
        Використати здібність
      </Button>
    </>
  );
};
