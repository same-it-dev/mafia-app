/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => (
  <h2
    css={css`
      text-align: center;
      padding: 15px 0;
      margin: 0;
      color: #abb0c5;
      font-size: 35px;
      line-height: 40px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    `}
  >
    {children}
  </h2>
);
