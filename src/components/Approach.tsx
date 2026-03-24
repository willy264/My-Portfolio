"use client";

import React, { type ReactNode, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { approachSteps, sectionContent } from "../../data";
import type { ApproachTheme } from "../../data/types";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import ShimmeringButton from "./ui/ShimmeringButton";

const approachThemeProps: Record<
  ApproachTheme,
  {
    animationSpeed: number;
    containerClassName: string;
    colors?: number[][];
    dotSize?: number;
  }
> = {
  emerald: {
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900",
  },
  midnight: {
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
    dotSize: 2,
  },
  sky: {
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
  },
};

function Approach() {
  return (
    <section className="relative w-full overflow-hidden py-20 text-center">
      <h1 className="heading">
        {sectionContent.approach.heading} <span className="text-purple">{sectionContent.approach.accent}</span>
      </h1>
      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        {approachSteps.map((step) => (
          <Card
            key={step.phase}
            title={step.title}
            icon={<AceternityIcon order={step.phase} />}
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
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[30rem]"
    >
      <Icon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />
      <AnimatePresence>
        {hovered ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 h-full w-full">
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="absolute top-[50%] left-[50%] mx-auto flex w-full -translate-x-[-50%] -translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
        <h2
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <ShimmeringButton title={order} />
    </div>
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
