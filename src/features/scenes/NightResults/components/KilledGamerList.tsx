import { Box, Typography } from "@mui/material";
import { GamerInterface } from "common/interfaces";
import { KilledGamerRow } from "./KilledGamerRow";

interface Props {
  gamers: GamerInterface[];
}

export const KilledGamerList = ({ gamers }: Props) => (
  <Box sx={{ width: "100%" }}>
    <Typography variant="h5" color="primary.contrastText">
      Вбиті гравці цієї ночі:
    </Typography>

    {gamers.map((gamer) => (
      <KilledGamerRow key={gamer.id} gamer={gamer} />
    ))}
  </Box>
);
