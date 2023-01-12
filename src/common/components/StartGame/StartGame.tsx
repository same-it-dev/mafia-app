import { useStartGame } from "common/hooks/useStartGame";
import { Button } from "common/components";
import { Box } from "@mui/material";

export const StartGame = () => {
  const { isStartGame, startGame } = useStartGame();

  if (isStartGame) return <></>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Button onClick={startGame} variant="contained">
        Почати гру
      </Button>
    </Box>
  );
};
