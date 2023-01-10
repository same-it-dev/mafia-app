import { useGamers } from "common/hooks";
import { GamerInterface } from "common/interfaces";

export const useComparePersonsTeam = (
  gamerFirstId: number,
  gamerSecondId: number
): {
  isTeam: boolean;
  gamerFirst: GamerInterface;
  gamerSecond: GamerInterface;
} | null => {
  const { getGamerById } = useGamers();

  if (gamerFirstId && gamerSecondId) {
    const gamerFirst = getGamerById(gamerFirstId);
    const gamerSecond = getGamerById(gamerSecondId);

    let isTeam = gamerFirst.role.type === gamerSecond.role.type;

    if (
      gamerFirst.role.id === "chameleon" ||
      gamerSecond.role.id === "chameleon"
    ) {
      isTeam = !isTeam;
    }

    return {
      isTeam,
      gamerFirst,
      gamerSecond,
    };
  }

  return null;
};
