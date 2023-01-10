import { useState } from "react";

export const useCooldownTimer = (time: number = 1, isStart: boolean = true) => {
  const [timer, setTimer] = useState({ cooldownTime: time });

  const onResetTimer = () => {
    setTimer({ cooldownTime: time });
  };

  return {
    timer: isStart ? timer : null,
    setTimer,
    onResetTimer,
  };
};
