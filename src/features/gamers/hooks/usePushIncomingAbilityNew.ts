import { useDispatch } from "react-redux";
import { pushIncomingAbility, PushIncomingAbilityInterface } from "redux-store";

export const usePushIncomingAbilityNew = () => {
  const dispatch = useDispatch();

  return {
    pushIncomingAbility: (data: PushIncomingAbilityInterface) => {
      dispatch(pushIncomingAbility(data));
    },
  };
};
