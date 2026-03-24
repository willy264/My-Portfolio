"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      },
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className={`${idx > 3 ? "text-purple" : "scale-125 tracking-widest text-black dark:text-white"} opacity-0`}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                  fontFamily: '"Archivo Black", sans-serif',
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
