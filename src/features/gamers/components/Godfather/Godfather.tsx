import { Button, GamerListSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useGodfather } from "./hooks";

export const Godfather = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerId, onPushAbility, gamerIdValue } = useGodfather(
    onFinishAbility,
    gamer.id
  );

  return (
    <>
      <GamerListSelect
        label={ability.name}
        name={ability.id}
        value={gamerIdValue}
        onSelectGamer={onChangeGamerId}
      />

      <Button variant="contained" onDoubleClick={onPushAbility}>
        Використати здібність
      </Button>
    </>
  );
};
