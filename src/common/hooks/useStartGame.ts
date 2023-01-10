import {
  selectIsStartGame,
  useSelector,
  setStartGame,
  useDispatch,
} from "redux-store";

export const useStartGame = () => {
  const isStartGame = useSelector(selectIsStartGame);
  const dispatch = useDispatch();

  return {
    isStartGame,
    startGame: () => dispatch(setStartGame(true)),
    stopGame: () => dispatch(setStartGame(false)),
  };
};
