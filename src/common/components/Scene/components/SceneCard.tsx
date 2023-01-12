import { Box } from "@mui/system";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SceneCard = ({ children }: Props) => (
  <Box sx={{ maxWidth: "400px", margin: "auto" }}>{children}</Box>
);
