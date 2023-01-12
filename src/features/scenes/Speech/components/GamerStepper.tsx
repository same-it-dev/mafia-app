/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Pagination from "@mui/material/Pagination";

interface Props {
  countGamers: number;
  activeGamer: number;
}

export const GamerStepper = ({ countGamers, activeGamer }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
        padding: 15px;
        background: #c7a0a01c;
        gap: 15px;
        .MuiPaginationItem-root {
          height: 70px;
          width: 50px;
        }
      `}
    >
      <Pagination
        hideNextButton
        hidePrevButton
        count={countGamers}
        variant="outlined"
        shape="rounded"
        page={activeGamer}
        siblingCount={0}
      />
    </div>
  );
};
