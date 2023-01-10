/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useStartGame } from "common/hooks/useStartGame";
import { Button } from "common/components";

export const StartGame = () => {
  const { isStartGame, startGame } = useStartGame();

  if (isStartGame) return <></>;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding-top: 60px;
      `}
    >
      <Button onClick={startGame} variant="contained">
        Почати гру
      </Button>
    </div>
  );
};
