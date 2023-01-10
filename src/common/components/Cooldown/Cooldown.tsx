/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCooldown } from "./hooks";

interface Props {
  timer: { cooldownTime: number } | null;
  format?: "m" | "s";
  className?: any;
  onFinishTimer: () => void;
}

export const Cooldown = ({
  className,
  format,
  timer,
  onFinishTimer,
}: Props) => {
  const timeTikerRef = useCooldown(timer, format, onFinishTimer);

  return (
    <div
      className={className}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 42px;
        font-weight: bold;
        background-size: cover;
        margin-bottom: 20px;
        span {
          text-align: center;
          color: #abb0c5;
        }
      `}
    >
      <span ref={timeTikerRef} />
    </div>
  );
};
