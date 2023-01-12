import { useGamers } from "common/hooks";
import { useState } from "react";

export const useNightActions = () => {
  const { gamersNight } = useGamers();

  const [currentIndex, setCurrentIndex] = useState(0);

  const activeGamer = gamersNight[currentIndex];

  const runNextGamer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return {
    activeGamer,
    runNextGamer,
  };
};
