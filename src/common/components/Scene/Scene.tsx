/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useStartGame } from "common/hooks/useStartGame";
import { useScene } from "./hooks";

export const Scene = () => {
  const SceneComponent = useScene();
  const { isStartGame } = useStartGame();

  if (!isStartGame) return <></>;

  return (
    <div
      css={css`
        padding-top: 30px;
        position: relative;
        height: 100vh;
        background: #11131a;
      `}
    >
      <SceneComponent />
    </div>
  );
};
