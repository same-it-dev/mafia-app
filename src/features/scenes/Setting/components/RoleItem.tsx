import { Box } from "@mui/system";

interface Props {
  title: string;
}

export const RoleItem = ({ title }: Props) => (
  <Box
    sx={{
      border: "1px solid",
      borderRadius: "4px",
      borderColor: "primary.contrastText",
      color: "primary.contrastText",
      padding: "15px",
      margin: "5px",
    }}
  >
    {title}
  </Box>
);
