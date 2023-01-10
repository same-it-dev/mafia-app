import { Button, GamerListSelect } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "../../interfaces";

import { useBeauty } from "./hooks";

export const Beauty = ({ gamer, onFinishAbility }: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerId, gamerIdValue, onPushAbility } = useBeauty(
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

      <Button variant="contained" onClick={onPushAbility}>
        Використати здібність
      </Button>
    </>
  );
};
