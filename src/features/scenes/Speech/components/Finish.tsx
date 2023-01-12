/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Button } from "@mui/material";

interface Props {
  isStart: boolean;
}

export const Finish = ({ isStart }: Props) =>
  isStart ? (
    <div
      css={css`
        display: flex;
        position: relative;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        gap: 15px;
      `}
    >
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<PlayCircleFilledIcon />}
      >
        Почати Знайомство
      </Button>
    </div>
  ) : (
    <></>
  );
