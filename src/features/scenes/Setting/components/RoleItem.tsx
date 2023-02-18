import { Box } from "@mui/system";

interface Props {
  name: string;
  count: number;
}

export const RoleItem = ({ name, count }: Props) => (
  <Box
    sx={{
      border: "1px solid",
      borderRadius: "4px",
      fontSize: "18px",
      borderColor: "primary.contrastText",
      color: "primary.contrastText",
      padding: "12px 18px",
      margin: "5px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <span>{name}</span>
    {count !== 1 && <span>{count}</span>}
  </Box>
);
