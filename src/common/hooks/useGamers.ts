import { GamerInterface } from "common/interfaces";
import { useSelector, useDispatch, selectGames, setGamers } from "redux-store";

interface FilterProps {
  isActiveNight?: boolean;
  sortByGamerId?: boolean;
}

export const useGamers = (filter?: FilterProps) => {
  const dataGamers = useSelector(selectGames);
  const dispatch = useDispatch();

  const gamers = dataGamers.filter(({ isActive }) => isActive);

  if (filter?.sortByGamerId) {
    gamers.sort((g1, g2) => g1.id - g2.id);
  }

  return {
    gamers,

    setGamers: (gamers: GamerInterface[]) => dispatch(setGamers(gamers)),

    getGamerById: (gamerId: number) =>
      dataGamers.find(({ id }) => id === gamerId) as GamerInterface,
  };
};
