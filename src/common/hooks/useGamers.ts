import { GamerInterface } from "common/interfaces";
import { useSelector, useDispatch, selectGames, setGamers } from "redux-store";

interface FilterProps {
  isActiveNight: boolean;
}

export const useGamers = (filter?: FilterProps) => {
  const dataGamers = useSelector(selectGames);
  const dispatch = useDispatch();

  return {
    gamers: dataGamers.filter((gamer) => gamer.isActive),

    setGamers: (gamers: GamerInterface[]) => dispatch(setGamers(gamers)),

    getGamerById: (gamerId: number) =>
      dataGamers.find(({ id }) => id === gamerId) as GamerInterface,
  };
};
