import React from "react";
import { cn } from "@/lib/utils";

export interface ScalesProps {
  orientation?: "horizontal" | "vertical" | "diagonal";
  size?: number;
  className?: string;
  color?: string;
}

const getGradientAngle = (orientation: ScalesProps["orientation"]) => {
  switch (orientation) {
    case "horizontal":
      return "0deg";
    case "vertical":
      return "90deg";
    case "diagonal":
    default:
      return "315deg";
  }
};

export const Scales = ({
  orientation = "diagonal",
  size = 10,
  className,
  color,
}: ScalesProps) => {
  return (
    <div
      className={cn("absolute inset-0 h-full w-full overflow-hidden", className)}
      style={
        {
          "--scales-size": `${size}px`,
          "--scales-angle": getGradientAngle(orientation),
          "--pattern-scales": color ?? "rgba(255,255,255,0.12)",
        } as React.CSSProperties
      }
    >
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(var(--scales-angle), var(--pattern-scales) 0, var(--pattern-scales) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "var(--scales-size) var(--scales-size)",
        }}
      />
    </div>
  );
};

export interface ScalesContainerProps extends ScalesProps {
  children?: React.ReactNode;
  containerClassName?: string;
}

export const ScalesContainer = ({
  children,
  orientation = "diagonal",
  size = 10,
  className,
  containerClassName,
  color,
}: ScalesContainerProps) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <Scales orientation={orientation} size={size} className={className} color={color} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Scales;
