/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Title, Cooldown, useCooldownTimer } from "common/components";
import { useStartScene } from "common/hooks";
import { GamerCard, Navigation } from "./components";
import { useSpeech } from "./hooks";

export const Speech = () => {
  const { isStart, runStart } = useStartScene();
  const { timer, onResetTimer } = useCooldownTimer(1, isStart);

  const { activeGamer, onNextGamer, onFinishTimer, onStart } = useSpeech(
    onResetTimer,
    runStart
  );

  return (
    <div>
      <Typography variant="h1" color="primary.contrastText">
        Індивідуальні промови
      </Typography>
      <Navigation
        isStart={isStart}
        onStart={onStart}
        onNextGamer={onNextGamer}
        onResetTimer={onResetTimer}
      />

      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        `}
      >
        <Cooldown timer={timer} onFinishTimer={onFinishTimer} />
        <GamerCard gamer={activeGamer} />
      </div>
    </div>
  );
};
