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
        max-width: 350px;
      `}
    >
      <img
        css={css`
          max-width: 500px;
          width: 100%;

          @media (max-width: 680px) {
            max-width: 200px;
          }
        `}
        src={gamer % 2 ? "./img/gamer.svg" : "./img/gamer2.svg"}
        alt="img"
      />
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
