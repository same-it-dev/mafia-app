import { Box } from "@mui/material";
import { GamerInterface } from "common/interfaces";

interface Props {
  gamer: GamerInterface;
}

export const KilledGamerRow = ({ gamer: { id, role } }: Props) => (
  <Box
    sx={{
      textAlign: "left",
      width: "100%",
      display: "flex",
      margin: "15px 0",
      border: "1px solid",
      borderColor: "primary.contrastText",
      boxSizing: "border-box",
      color: "primary.contrastText",
      fontSize: "28px",
      "& .MuiBox-root": {
        padding: "15px",
      },
    }}
  >
    <Box>№-{id}</Box>
    <Box>{role.name}</Box>
  </Box>
);
