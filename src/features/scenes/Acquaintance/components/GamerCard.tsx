/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  gamer: number;
}

export const GamerCard = ({ gamer }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        flex-direction: column;
        max-width: 500px;
      `}
    >
      <img src="/img/gamer.svg" alt="img" />
      <h2
        css={css`
          font-size: 32px;
          background: #1d1e26;
          border-radius: 5px;
          color: #abb0c5;
          text-align: center;
          margin: 44px 0;
          padding: 6px 20px 5px 20px;
        `}
      >
        Гравець {gamer}
      </h2>
    </div>
  );
};
