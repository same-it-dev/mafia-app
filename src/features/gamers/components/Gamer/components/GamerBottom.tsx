/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GamerBottom = ({ children }: Props) => (
  <div
    css={css`
      bottom: 0;
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
    `}
  >
    {children}
  </div>
);
