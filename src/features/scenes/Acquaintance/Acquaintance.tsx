/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Title, Cooldown, useCooldownTimer } from "common/components";
import { useStartScene } from "common/hooks";
import { GamerCard, Navigation } from "./components";
import { useAcquaintance } from "./hooks";

export const Acquaintance = () => {
  const { isStart, runStart } = useStartScene();
  const { timer, onResetTimer } = useCooldownTimer(1, isStart);

  const { activeGamer, onNextGamer, onFinishTimer, onStart } = useAcquaintance(
    onResetTimer,
    runStart
  );

  return (
    <div>
      <Title>Знайомство</Title>
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
