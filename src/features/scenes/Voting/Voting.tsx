import { Box, Typography } from "@mui/material";
import { Button, Dialog, GamerListSelect } from "common/components";
import { useVoting } from "./hooks";

export const Voting = () => {
  const {
    gamerIdValue,
    onSelectGamer,
    onDeleteGamer,
    onStartNight,
    deleteDataGamerDialog,
    startNightDataDialog,
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
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          "& .MuiButton-root": {
            maxWidth: "150px",
          },
        }}
      >
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
        <Button
          sx={{
            width: "100%",
            marginTop: "30px",
          }}
          variant="contained"
          onClick={onStartNight}
        >
          Почати ніч
        </Button>
      </Box>
      <Dialog {...startNightDataDialog} confirm reject />
      <Dialog {...deleteDataGamerDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </Box>
  );
};
