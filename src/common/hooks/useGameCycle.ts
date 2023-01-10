import { useDispatch } from "react-redux";
import { selectGameCycle, setGameCycle, useSelector } from "redux-store";

export const useGameCycle = () => {
  const gameCycle = useSelector(selectGameCycle);
  const dispatch = useDispatch();

  return {
    gameCycle,
    setGameCycle: (num: number) => dispatch(setGameCycle(num)),
  };
};
