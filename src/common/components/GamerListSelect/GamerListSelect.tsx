import { Box } from "@mui/material";
import { MenuItem, Select } from "common/components";
import { useGamers } from "common/hooks";

interface Props {
  label: string;
  name: string;
  value: string;
  onSelectGamer: (id: string, name: string) => void;
}

export const GamerListSelect = ({
  label,
  name,
  value,
  onSelectGamer,
}: Props) => {
  const { gamers } = useGamers();

  return (
    <Box>
      <Select
        label={label}
        value={value}
        name={name}
        onChange={({ target }: any) => onSelectGamer(target.value, name)}
      >
        {gamers.map(({ id, role }) => (
          <MenuItem
            sx={{
              justifyContent: "flex-start",
            }}
            key={id}
            value={id}
          >
            <Box component="span">№-{id}</Box>{" "}
            <Box
              component="span"
              sx={{
                marginLeft: "15px",
              }}
            >
              {role.name}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
