import { Box } from "@mui/system";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SceneCard = ({ children }: Props) => (
  <Box sx={{ maxWidth: "400px", margin: "auto", padding: "0 40px" }}>
    {children}
  </Box>
);
