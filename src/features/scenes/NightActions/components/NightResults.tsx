import { Box, Typography } from "@mui/material";
import { Button, GamerListMultipleSelect } from "common/components";
import { GamerInterface } from "common/interfaces";
import { NightGamerRow } from "./NightGamerRow";

interface Props {
  killedGamers: GamerInterface[];
  onSubmitNextScene: () => void;
}

export const NightResults = ({ killedGamers, onSubmitNextScene }: Props) => (
  <Box
    sx={{
      textAlign: "center",
      padding: "15px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    }}
  >
    <Typography variant="h1" color="primary.contrastText">
      Результати ночі
    </Typography>

    <Typography variant="h5" color="primary.contrastText">
      Вбиті гравці:
    </Typography>

    {killedGamers.map((gamer) => (
      <NightGamerRow key={gamer.id} gamer={gamer} />
    ))}

    <GamerListMultipleSelect
      isExcludeKilled
      title="Видалити гравців"
      onSelectGamers={() => {}}
    />

    <Button
      onClick={onSubmitNextScene}
      sx={{ marginTop: "15px" }}
      variant="contained"
    >
      Продовжити
    </Button>
  </Box>
);
