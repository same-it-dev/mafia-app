import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GamerCard = ({ children }: Props) => (
  <Box
    sx={{
      color: "#fff",
      maxWidth: "400px",
      textAlign: "center",
      margin: "0 auto",
      minHeight: "620px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& .gamer-push-ability": {
        marginTop: "35px",
      },
    }}
  >
    {children}
  </Box>
);
