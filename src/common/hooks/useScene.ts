/* eslint-disable no-restricted-globals */
import { SceneTypes } from "common/interfaces";
import { useDispatch, setScene } from "redux-store";

export const useScene = () => {
  const dispatch = useDispatch();

  const runScene = (
    sceneType: SceneTypes,
    message: string,
    nextScene?: string
  ) => {
    const isRun = confirm(message);

    if (isRun) {
      dispatch(setScene(sceneType));
    }
  };

  return { runScene };
};
