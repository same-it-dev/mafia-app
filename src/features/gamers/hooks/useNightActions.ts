import { NightActionInterface } from "common/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { setNightAction, selectNights } from "redux-store";

export const useNightActions = () => {
  const dispatch = useDispatch();
  const nights = useSelector(selectNights);

  return {
    registerNightAction: (action: NightActionInterface) =>
      dispatch(setNightAction(action)),

    checkPrevNigthToGamerAction: (gamerId: number) => {
      const prevNigth = nights.at(-2);

      if (!prevNigth) return false;

      if (prevNigth) {
        return !!prevNigth.find(({ gamersIdsTo }) =>
          gamersIdsTo.includes(gamerId)
        );
      }
    },
  };
};
