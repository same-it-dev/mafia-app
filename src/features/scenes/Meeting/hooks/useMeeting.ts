/* eslint-disable no-restricted-globals */
import { useScene } from "common/hooks";
import { useState } from "react";

export const useMeeting = (onResetTimer: () => void, runStart: () => void) => {
  const { runScene } = useScene();
  const [isRunNextScene, setIsRunNextScene] = useState(false);

  const onStart = () => {
    runStart();
  };

  const onFinishTimer = () => {
    setIsRunNextScene(true);
  };

  const onRunNextScene = () => {
    runScene("speech", "Бажаєте перейти до індивідуальних промов ?");
  };

  return {
    onFinishTimer,
    onStart,
    isRunNextScene,
    onRunNextScene,
  };
};
