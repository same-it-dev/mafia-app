import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GamerCard = ({ children }: Props) => (
  <Box
    sx={{
      color: "#fff",
      maxWidth: "375px",
      textAlign: "center",
      margin: "0 auto",
      minHeight: "550px",
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
