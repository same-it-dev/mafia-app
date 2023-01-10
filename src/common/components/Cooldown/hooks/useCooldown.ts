import { useEffect, useRef } from "react";

const getFormatedTime = (min: number, sek: number) => {
  if (sek === 60) {
    return `${min}:00`;
  }

  if (min >= 1) {
    return `${min}:${sek >= 10 ? sek : `0${sek}`}`;
  }

  return `${sek}`;
};

export const useCooldown = (
  timer: { cooldownTime: number } | null,
  format: "m" | "s" = "m",
  onFinishTimer: () => void
) => {
  const timeTikerRef: any = useRef();
  const sekCount = useRef(60);
  const minCount = useRef(0);

  useEffect(() => {
    sekCount.current = 60;
    timeTikerRef.current.innerText = 0;
    minCount.current = timer?.cooldownTime || 0;

    if (!timer) return;

    timeTikerRef.current.innerText = getFormatedTime(
      minCount.current,
      sekCount.current
    );

    const addTimeSecond = setInterval(() => {
      --sekCount.current;

      if (sekCount.current === 0 && minCount.current) {
        sekCount.current = 60;
      }

      if (sekCount.current === 59) {
        --minCount.current;
      }

      timeTikerRef.current.innerText = getFormatedTime(
        minCount.current,
        sekCount.current
      );

      if (sekCount.current === 0) {
        onFinishTimer();
        sekCount.current = 60;
        minCount.current = timer.cooldownTime;
        clearInterval(addTimeSecond);
      }
    }, 100);

    return () => {
      clearInterval(addTimeSecond);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return timeTikerRef;
};
