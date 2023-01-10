/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";

interface Props {
  isStart: boolean;
  onNextGamer: () => void;
  onResetTimer: () => void;
  onStart: () => void;
}

export const Navigation = ({
  isStart,
  onNextGamer,
  onResetTimer,
  onStart,
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
        <Button onClick={onResetTimer} variant="text" color="inherit">
          Ще хвилина
        </Button>
        <Button onClick={onNextGamer} variant="contained" color="inherit">
          Продовжити
        </Button>
      </>
    )}
    {!isStart && (
      <Button onClick={onStart} variant="contained" color="inherit">
        Почати Знайомство
      </Button>
    )}
  </div>
);
