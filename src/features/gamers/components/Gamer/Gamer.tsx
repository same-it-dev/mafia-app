import { Box, Typography } from "@mui/material";
import { GamerCard, GamerBottom, DisabledGamer } from "./components";
import { useGamer } from "./hooks";
import { GamerInterface } from "common/interfaces";
import { OnFinishAbilityInterface } from "../../interfaces";

export interface Props {
  gamer: GamerInterface;
  onFinishAbility: OnFinishAbilityInterface;
}

export const Gamer = ({ gamer, onFinishAbility }: Props) => {
  const GamerComponent = useGamer(gamer.role);
  const gamerTitle =
    gamer.id !== 100 ? `${gamer.role.name} №-${gamer.id}` : gamer.role.name;

  return (
    <GamerCard>
      <DisabledGamer gamer={gamer} onFinishAbility={onFinishAbility} />
      <Typography variant="h2">{gamerTitle}</Typography>

      <Box
        sx={{ position: "absolute", top: "115px" }}
        component="img"
        src={`img/gamers/${gamer.role.id}.svg`}
      />

      <GamerBottom>
        <GamerComponent gamer={gamer} onFinishAbility={onFinishAbility} />
      </GamerBottom>
    </GamerCard>
  );
};
