import { Box, Typography } from "@mui/material";
import { Cooldown, useCooldownTimer } from "common/components";
import { useStartScene } from "common/hooks";
import { Navigation } from "./components";
import { useMeeting } from "./hooks";

export const Meeting = () => {
  const { isStart, runStart } = useStartScene();
  const { timer, onResetTimer } = useCooldownTimer(1, isStart);
  const { onFinishTimer, onStart, isRunNextScene, onRunNextScene } = useMeeting(
    onResetTimer,
    runStart
  );

  return (
    <Box>
      <Typography variant="h1" color="primary.contrastText">
        Балаган
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Navigation
          isStart={isStart}
          onStart={onStart}
          onResetTimer={onResetTimer}
          isRunNextScene={isRunNextScene}
          onRunNextScene={onRunNextScene}
        />
      </Box>
      <Box sx={{ marginTop: "60px" }}>
        <Cooldown timer={timer} onFinishTimer={onFinishTimer} />
      </Box>
    </Box>
  );
};
