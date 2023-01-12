/* eslint-disable no-restricted-globals */
import { useGamers, useScene } from "common/hooks";
import { useRef, useState } from "react";

export const useSpeech = (onResetTimer: () => void, runStart: () => void) => {
  const { gamers } = useGamers();
  const countGamers = gamers.length;

  const gamerIndex = useRef(1);
  const isGamerStarted = useRef(false);
  const { runScene } = useScene();

  const [activeGamer, setActiveGamer] = useState(gamers[0]);

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
      setActiveGamer(gamers[gamerIndex.current]);
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
