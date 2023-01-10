import { Box } from "@mui/material";
import { Multiple } from "common/components";
import { useGamers } from "common/hooks";

interface Props {
  title: string;
  onSelectGamers: (value: number[]) => void;
  resetValue?: number;
}

export const GamerListMultipleSelect = ({
  title,
  resetValue,
  onSelectGamers,
}: Props) => {
  const { gamers } = useGamers();

  return (
    <Box>
      <Multiple
        title={title}
        resetValue={resetValue}
        maxSelected={2}
        options={gamers.map(({ id, role: { name } }) => ({
          firstName: `№-${id}`,
          secondName: name,
          value: id,
        }))}
        onChange={onSelectGamers}
      />
    </Box>
  );
};
