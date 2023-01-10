/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";

export const Night = () => (
  <div
    css={css`
      width: 100%;
      margin: auto;
      position: relative;
    `}
  >
    <img
      css={css`
        width: 100%;
        margin-top: -30px;
      `}
      src="./img/night.jpg"
      alt=""
    />
    <div
      css={css`
        position: absolute;
        z-index: 5;
        top: 0;
        display: flex;
        flex-direction: column;
        padding: 20px;

        p {
          color: white;
          font-size: 80px;
          margin: 0;
          font-family: "Courier New";
        }
      `}
    >
      <p>N</p>
      <p>I</p>
      <p>G</p>
      <p>H</p>
      <p>T</p>
    </div>
    <Button
      variant="contained"
      css={css`
        width: 130px;
        position: absolute;
        left: 20px;
        top: 42%;
      `}
    >
      Далі
    </Button>
  </div>
);
