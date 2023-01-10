/* eslint-disable no-restricted-globals */
import { useScene, useSettingsCountGamers } from "common/hooks";
import { useRef, useState } from "react";

export const useAcquaintance = (
  onResetTimer: () => void,
  runStart: () => void
) => {
  const countGamers = useSettingsCountGamers();
  const gamerIndex = useRef(1);
  const isGamerStarted = useRef(false);
  const { runScene } = useScene();

  const [activeGamer, setActiveGamer] = useState(1);

  const onNextGamer = () => {
    let isNextGamer = true;

    if (countGamers === gamerIndex.current) {
      return runScene("roleset", "Почати встановлення ролей ?");
    }

    if (isGamerStarted.current) {
      isNextGamer = confirm("Ви дійсно бажаете перейти до наступного гравця ?");
    }

    if (!isNextGamer) return;

    if (gamerIndex.current <= countGamers) {
      onResetTimer();
      isGamerStarted.current = true;
      gamerIndex.current++;
      setActiveGamer(gamerIndex.current);
    }
  };

  const onStart = () => {
    isGamerStarted.current = true;
    runStart();
  };

  const onFinishTimer = () => {
    isGamerStarted.current = false;
  };

  return {
    countGamers,
    activeGamer,
    onNextGamer,
    onFinishTimer,
    onStart,
  };
};
