/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";

interface Props {
  isStart: boolean;
  onResetTimer: () => void;
  onStart: () => void;
  onRunNextScene: () => void;
  isRunNextScene: boolean;
}

export const Navigation = ({
  isStart,
  onResetTimer,
  onStart,
  onRunNextScene,
}: Props) => (
  <div
    css={css`
      display: flex;
      position: relative;
      margin-top: 13px;
      align-items: center;
      justify-content: center;
      gap: 15px;
    `}
  >
    {isStart && (
      <>
        <Button onClick={onResetTimer} variant="contained" color="inherit">
          Повторити
        </Button>
        <Button onClick={onRunNextScene} variant="contained" color="inherit">
          Голосування
        </Button>
      </>
    )}

    {!isStart && (
      <Button onClick={onStart} variant="contained" color="inherit">
        Почати балаган
      </Button>
    )}
  </div>
);
