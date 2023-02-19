import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button, Dialog, GamerListMultipleSelect } from "common/components";
import { ActiveGamerList, KilledGamerList } from "./components";
import { useNigthResults } from "./hooks/useNigthResults";

export const NightResults = () => {
  const {
    killedNigthGamers,
    activeGamers,
    onSubmitNextScene,
    onChangeDisableGamers,
    onSubmitDisableGamers,
    nextSceneDataDialog,
    deleteGamersDataDialog,
    disableGamersIds,
  } = useNigthResults();

  return (
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

      <KilledGamerList gamers={killedNigthGamers} />
      <Button
        onClick={onSubmitNextScene}
        sx={{ marginTop: "15px" }}
        variant="contained"
      >
        Продовжити
      </Button>

      <Typography
        sx={{ marginTop: "25px" }}
        variant="h5"
        color="primary.contrastText"
      >
        Видалити гравців:
      </Typography>

      <GamerListMultipleSelect
        isExcludeKilled
        title="Оберіть номери"
        onSelectGamers={onChangeDisableGamers}
        onClose={onSubmitDisableGamers}
        resetValue={disableGamersIds.length}
      />

      <ActiveGamerList gamers={activeGamers} />

      <Dialog {...nextSceneDataDialog} confirm reject />
      <Dialog {...deleteGamersDataDialog} confirm />
    </Box>
  );
};
