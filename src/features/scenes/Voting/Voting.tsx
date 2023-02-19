import { Box, Typography } from "@mui/material";
import { Button, Dialog, GamerListMultipleSelect } from "common/components";
import { useVoting } from "./hooks";

export const Voting = () => {
  const {
    gamerIdsValue,
    onSelectGamers,
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

      <Typography variant="h5" color="primary.contrastText">
        Видалити гравців
      </Typography>

      <GamerListMultipleSelect
        title="Оберіть номери"
        onSelectGamers={onSelectGamers}
        onClose={onDeleteGamer}
        resetValue={gamerIdsValue.length}
      />
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
      <Dialog {...startNightDataDialog} confirm reject />
      <Dialog {...deleteDataGamerDialog} confirm reject />
      <Dialog {...alertDataDialog} next />
    </Box>
  );
};
