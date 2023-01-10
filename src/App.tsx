/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Scene, Header, StartGame } from "common/components";

function App() {
  return (
    <div
      css={css`
        max-width: 820px;
        margin: 0 auto;
      `}
    >
      <Header />
      <Scene />
      <StartGame />
    </div>
  );
}

export default App;
