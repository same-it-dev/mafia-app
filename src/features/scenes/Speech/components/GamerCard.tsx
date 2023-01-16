/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { GamerInterface } from "common/interfaces";

interface Props {
  gamer: GamerInterface;
}

export const GamerCard = ({ gamer }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        flex-direction: column;
        max-width: 350px;
        align-items: center;
      `}
    >
      <Typography
        sx={{
          minWidth: "420px",
          textAlign: "center",
        }}
        variant="h4"
        color="primary.contrastText"
      >
        №-{gamer.id}
      </Typography>
      <Box
        sx={{ position: "absolute", top: "80px" }}
        component="img"
        src={`img/gamers/${gamer.role.id}.svg`}
      />
    </div>
  );
};
