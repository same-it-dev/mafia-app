import { Multiple } from "common/components";
import { useGamers } from "common/hooks";

interface Props {
  title: string;
  onSelectGamers: (value: number[]) => void;
  onClose?: () => void;
  resetValue?: number;
  isExcludeKilled?: boolean;
  maxSelected?: number;
}

export const GamerListMultipleSelect = ({
  title,
  resetValue,
  isExcludeKilled,
  onSelectGamers,
  onClose,
  maxSelected,
}: Props) => {
  const { gamers } = useGamers({ isExcludeKilled, sortByGamerId: true });

  return (
    <Multiple
      title={title}
      resetValue={resetValue}
      maxSelected={maxSelected}
      options={gamers.map(({ id, role: { name } }) => ({
        firstName: `№-${id}`,
        secondName: name,
        value: id,
      }))}
      onChange={onSelectGamers}
      onClose={onClose}
    />
  );
};
