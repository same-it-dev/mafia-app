import { GamerInterface } from "common/interfaces";
import { useRef } from "react";
import { useSelector, useDispatch, selectGames, setGamers } from "redux-store";

interface FilterProps {
  isActiveNight: boolean;
}

interface PushedGamerOptionsInterface {
  isNeedClear?: boolean;
  isActive?: boolean;
  isBlocked?: boolean;
}

export const useGamers = (filter?: FilterProps) => {
  const dataGamers = useSelector(selectGames);
  const dispatch = useDispatch();
  const isGodfather = useRef(false);

  return {
    gamers: dataGamers.filter((gamer) => gamer.isActive),

    gamersNight: dataGamers.filter((gamer) => {
      if (!gamer.isActive) return false;

      if (gamer.role.id === "godfather" && !isGodfather.current) {
        isGodfather.current = true;
        return true;
      }

      if (gamer.role.id === "mafiosi" && isGodfather.current) {
        return false;
      }

      if (gamer.role.isActiveNight) return true;

      return false;
    }),

    setGamers: (gamers: GamerInterface[]) => dispatch(setGamers(gamers)),

    getGamerById: (gamerId: number) =>
      dataGamers.find(({ id }) => id === gamerId) as GamerInterface,

    pushIncomingAbility: (
      pushGamerId: number,
      ability: string,
      options?: PushedGamerOptionsInterface
    ) => {},
  };
};
