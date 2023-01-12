import { Box, Typography } from "@mui/material";
import { Button, Dialog, GamerListSelect } from "common/components";
import { useVoting } from "./hooks";

export const Voting = () => {
  const {
    gamerIdValue,
    onSelectGamer,
    onDeleteGamer,
    deleteDataGamerDialog,
    alertDataDialog,
  } = useVoting();

  return (
    <Box
      sx={{
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Typography
        sx={{
          marginBottom: "50px",
        }}
        variant="h1"
        color="primary.contrastText"
      >
        Голосування
      </Typography>
      <GamerListSelect
        label="Видалити гравця"
        name="delete-gamer"
        value={gamerIdValue}
        onSelectGamer={onSelectGamer}
      />
      <Button
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
        variant="contained"
        onClick={onDeleteGamer}
      >
        Видалити
      </Button>
      <Dialog {...deleteDataGamerDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </Box>
  );
};
