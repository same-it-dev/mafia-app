import { useState } from "react";

export const useStartScene = () => {
  const [isStart, setIsStart] = useState(false);

  return {
    isStart,
    runStart: () => setIsStart(true),
    stopStart: () => setIsStart(false),
  };
};
