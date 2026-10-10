import { motion } from "motion/react";

type DrawnWordProps = {
  word: string;
  color: string;
  delay: number;
  reduceMotion: boolean;
  onComplete?: () => void;
};

const DRAW_DURATION = 0.9;
export const LAST_NAME_DELAY = 0.7;
const FILL_DELAY = LAST_NAME_DELAY + DRAW_DURATION;
const FILL_DURATION = 0.35;

export const DrawnWord = ({
  word,
  color,
  delay,
  reduceMotion,
  onComplete,
}: DrawnWordProps) => {
  return (
    <svg
      viewBox="0 0 500 115"
      className="block w-full overflow-visible"
      aria-hidden="true"
    >
      <motion.text
        x="5"
        y="95"
        fontSize="100"
        fontWeight="900"
        fontFamily="inherit"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="1200"
        initial={
          reduceMotion
            ? false
            : {
                strokeDashoffset: 1200,
                fill: "rgba(0, 0, 0, 0)",
              }
        }
        animate={{
          strokeDashoffset: 0,
          fill: color,
        }}
        transition={{
          strokeDashoffset: {
            duration: reduceMotion ? 0 : DRAW_DURATION,
            delay: reduceMotion ? 0 : delay,
            ease: "easeInOut",
          },
          fill: {
            duration: reduceMotion ? 0 : FILL_DURATION,
            delay: reduceMotion ? 0 : FILL_DELAY,
            ease: "easeOut",
          },
        }}
        onAnimationComplete={onComplete}
      >
        {word}
      </motion.text>
    </svg>
  );
};
