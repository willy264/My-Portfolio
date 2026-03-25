"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type RgbColor = [number, number, number];

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: RgbColor[];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

const DEFAULT_COLORS: RgbColor[] = [[0, 255, 255]];
const DEFAULT_OPACITIES = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1];

const toRgba = (color: RgbColor, alpha: number) =>
  `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;

export function CanvasRevealEffect({
  animationSpeed = 2.5,
  opacities = DEFAULT_OPACITIES,
  colors = DEFAULT_COLORS,
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: CanvasRevealEffectProps) {
  const palette = colors.length > 0 ? colors : DEFAULT_COLORS;
  const strongestOpacity =
    opacities.length > 0 ? Math.max(...opacities) : Math.max(...DEFAULT_OPACITIES);
  const leadColor = palette[0];
  const accentColor = palette[1] ?? palette[0];
  const tertiaryColor = palette[2] ?? palette[palette.length - 1] ?? palette[0];
  const baseOpacity = strongestOpacity * 0.2;
  const shimmerOpacity = strongestOpacity * 0.35;
  const dotGap = Math.max(dotSize * 5, 12);
  const duration = Math.max(1.2, 6 / Math.max(animationSpeed, 0.8));

  const overlayStyle: CSSProperties = {
    backgroundColor: "rgba(2, 6, 23, 0.92)",
    backgroundImage: `
      radial-gradient(circle at 18% 20%, ${toRgba(leadColor, 0.28)} 0, transparent 34%),
      radial-gradient(circle at 82% 22%, ${toRgba(accentColor, 0.22)} 0, transparent 36%),
      radial-gradient(circle at 50% 80%, ${toRgba(tertiaryColor, 0.18)} 0, transparent 42%),
      radial-gradient(circle, rgba(255,255,255,${baseOpacity}) ${dotSize}px, transparent ${dotSize + 0.7}px)
    `,
    backgroundSize: `auto, auto, auto, ${dotGap}px ${dotGap}px`,
    backgroundPosition: "center center",
  };

  const shimmerStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle, rgba(255,255,255,${shimmerOpacity}) ${Math.max(
      dotSize - 0.2,
      1,
    )}px, transparent ${dotSize + 0.5}px)`,
    backgroundSize: `${dotGap}px ${dotGap}px`,
    mixBlendMode: "screen",
  };

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "circle(8% at 50% 50%)", scale: 0.96 }}
      animate={{ opacity: 1, clipPath: "circle(85% at 50% 50%)", scale: 1 }}
      exit={{ opacity: 0, clipPath: "circle(8% at 50% 50%)", scale: 0.98 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      className={cn("absolute inset-0 overflow-hidden rounded-[inherit]", containerClassName)}
      style={overlayStyle}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={shimmerStyle}
        animate={{
          backgroundPosition: [
            "0px 0px",
            `${dotGap}px ${Math.round(dotGap / 2)}px`,
            `0px ${dotGap}px`,
          ],
        }}
        transition={{ duration: duration * 1.3, repeat: Infinity, ease: "linear" }}
      />
      {showGradient ? (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />
      ) : null}
    </motion.div>
  );
}
