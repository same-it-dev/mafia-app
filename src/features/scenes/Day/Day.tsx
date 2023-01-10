/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";

export const Day = () => (
  <div
    css={css`
      width: 350px;
      height: 600px;
      margin: auto;
      margin-top: 20px;
      background-image: url(./img/day.jpg) no-repeat;
      position: relative;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 20px;

        p {
          color: white;
          font-size: 100px;
          margin: 0;
          font-family: "Courier New";
        }
      `}
    >
      <p>D</p>
      <p>A</p>
      <p>Y</p>
    </div>
    <Button variant="contained">Далі</Button>
  </div>
);
