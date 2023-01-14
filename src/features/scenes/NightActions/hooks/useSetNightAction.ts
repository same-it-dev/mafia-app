import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNight } from "redux-store";

export const useSetNightAction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNight());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
