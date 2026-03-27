"use client";

import { useState, type ReactNode, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { approachSteps, sectionContent } from "../../data";
import type { ApproachTheme } from "../../data/types";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const approachThemeProps: Record<
  ApproachTheme,
  {
    animationSpeed: number;
    containerClassName: string;
    colors?: [number, number, number][];
    dotSize?: number;
  }
> = {
  emerald: {
    animationSpeed: 5.1,
    containerClassName: "bg-[#190729]/95",
    colors: [
      [141, 92, 196],
      [171, 73, 126],
    ],
  },
  midnight: {
    animationSpeed: 3.2,
    containerClassName: "bg-[#12051f]/95",
    colors: [
      [125, 100, 194],
      [165, 69, 126],
      [109, 70, 184],
    ],
    dotSize: 2,
  },
  sky: {
    animationSpeed: 2.7,
    containerClassName: "bg-[#1a0830]/95",
    colors: [
      [113, 45, 177],
      [164, 130, 196],
    ],
  },
};

function Approach() {
  return (
    <section id="approach" className="relative w-full overflow-hidden py-20">
      <h1 className="heading">
        {sectionContent.approach.heading}{" "}
        <span className="text-purple">{sectionContent.approach.accent}</span>
      </h1>
      <div className="my-16 grid w-full gap-6 lg:grid-cols-3">
        {approachSteps.map((step) => (
          <Card
            key={step.phase}
            title={step.title}
            icon={<PhasePill order={step.phase} />}
            description={step.description}
          >
            <CanvasRevealEffect
              animationSpeed={approachThemeProps[step.theme].animationSpeed}
              containerClassName={approachThemeProps[step.theme].containerClassName}
              colors={approachThemeProps[step.theme].colors}
              dotSize={approachThemeProps[step.theme].dotSize ?? 3}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const activateHover = () => setHovered(true);
  const deactivateHover = () => setHovered(false);

  return (
    <div
      className="group/canvas-card relative mx-auto flex min-h-[22rem] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-purple-950/55 bg-[#080314] p-6 text-left shadow-[0_8px_16px_rgba(76,29,149,0.12)] transition duration-300 hover:-translate-y-1 hover:border-white/15 focus-within:-translate-y-1 focus-within:border-white/15 md:min-h-[24rem]"
      onMouseEnter={activateHover}
      onMouseLeave={deactivateHover}
      onFocus={activateHover}
      onBlur={deactivateHover}
      tabIndex={0}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-[#0f031d]/90" />

      <div className="relative z-20 flex h-full w-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>{icon}</div>
          <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/40 backdrop-blur-sm transition duration-300 group-hover/canvas-card:rotate-45 group-hover/canvas-card:text-white/80">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="max-w-xs text-2xl font-bold text-white transition duration-300 group-hover/canvas-card:-translate-y-1">
            {title}
          </h2>
          <p className="max-w-sm text-sm leading-6 text-white/70 transition duration-300 group-hover/canvas-card:text-white/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const PhasePill = ({ order }: { order: string }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
      {order}
    </span>
  );
};

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
