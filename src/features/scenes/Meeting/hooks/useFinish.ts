import { useState } from "react";

export const useFinish = () => {
  const [isFinish, setIsFinish] = useState(false);

  return {
    isFinish,
    runFinish: () => setIsFinish(true),
  };
};
