import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { sectionContent, workExperience } from "../../data";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/BackgroundBoxes";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { Scales } from "@/components/ui/scales";
import { Spotlight } from "@/components/ui/Spotlight";

const glowColors = [
  "radial-gradient(circle at top left, rgba(141,92,196,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(171,73,126,0.1), transparent 52%)",
  "radial-gradient(circle at top right, rgba(125,100,194,0.14), transparent 55%), radial-gradient(circle at bottom left, rgba(165,69,126,0.1), transparent 48%)",
  "radial-gradient(circle at bottom left, rgba(164,130,196,0.12), transparent 55%), radial-gradient(circle at top right, rgba(113,45,177,0.1), transparent 44%)",
  "radial-gradient(circle at top left, rgba(141,92,196,0.16), transparent 48%), radial-gradient(circle at bottom right, rgba(171,73,126,0.12), transparent 52%)",
];

const revealThemes = [
  {
    animationSpeed: 4.6,
    colors: [
      [141, 92, 196],
      [171, 73, 126],
    ] as [number, number, number][],
    dotSize: 3,
  },
  {
    animationSpeed: 3.8,
    colors: [
      [125, 100, 194],
      [165, 69, 126],
    ] as [number, number, number][],
    dotSize: 2,
  },
  {
    animationSpeed: 3.5,
    colors: [
      [164, 130, 196],
      [113, 45, 177],
    ] as [number, number, number][],
    dotSize: 2,
  },
  {
    animationSpeed: 4.2,
    colors: [
      [141, 92, 196],
      [171, 73, 126],
      [109, 70, 184],
    ] as [number, number, number][],
    dotSize: 3,
  },
];

const cardBadgeLabels = ["ICP / Hackathon", "Web3Bridge", "ALX AiCE", "Freelance"];

const spotlightClasses = [
  "-top-28 left-10 h-[140%] w-[70%] opacity-30",
  "-top-24 left-1/3 h-[130%] w-[72%] opacity-25",
  "-top-20 left-4 h-[135%] w-[78%] opacity-24",
  "-top-24 left-1/4 h-[138%] w-[75%] opacity-28",
];

const spotlightFills = ["#c4b5fd", "#b56ce7", "#9f73d6", "#c4b5fd"];

const verticalMask = {
  maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
} as const;

const horizontalMask = {
  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
} as const;

const cardEntrance = [
  { x: -56, y: 26, rotate: -1.5 },
  { x: 56, y: 20, rotate: 1.4 },
  { x: -38, y: 34, rotate: -1.1 },
  { x: 42, y: 28, rotate: 1.2 },
];

const spanMap = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

const ExperienceCard = ({
  title,
  description,
  thumbnail,
  index,
  id,
}: {
  title: string;
  description: string;
  thumbnail: string;
  index: number;
  id: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const isLarge = index === 0 || index === 3;
  const motionPreset = cardEntrance[index] ?? cardEntrance[0];

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: motionPreset.x,
        y: motionPreset.y,
        rotate: motionPreset.rotate,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-purple-950/55 bg-[#080314]",
        "shadow-[0_8px_16px_rgba(76,29,149,0.12)] transition duration-300 hover:border-white/15",
        spanMap[index] ?? "md:col-span-6",
        isLarge ? "min-h-[22rem]" : "min-h-[18rem]",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
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
            <CanvasRevealEffect
              animationSpeed={revealThemes[index]?.animationSpeed ?? 4}
              colors={revealThemes[index]?.colors}
              dotSize={revealThemes[index]?.dotSize ?? 3}
              containerClassName="opacity-65"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-[#0f031d]/90" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]">
        <Boxes className={cn(isLarge ? "scale-[0.34]" : "scale-[0.28]", "opacity-90")} />
      </div>

      <Spotlight className={spotlightClasses[index]} fill={spotlightFills[index]} />

      <div className="pointer-events-none absolute -inset-y-[30%] -left-8 h-[160%] w-6 opacity-60" style={verticalMask}>
        <Scales size={8} className="rounded-lg" color="rgba(255,255,255,0.16)" />
      </div>
      <div className="pointer-events-none absolute -inset-y-[30%] -right-8 h-[160%] w-6 opacity-60" style={verticalMask}>
        <Scales size={8} className="rounded-lg" color="rgba(255,255,255,0.16)" />
      </div>
      <div className="pointer-events-none absolute -inset-x-[30%] -top-8 h-6 w-[160%] opacity-60" style={horizontalMask}>
        <Scales size={8} className="rounded-lg" color="rgba(255,255,255,0.14)" />
      </div>
      <div className="pointer-events-none absolute -inset-x-[30%] -bottom-8 h-6 w-[160%] opacity-60" style={horizontalMask}>
        <Scales size={8} className="rounded-lg" color="rgba(255,255,255,0.14)" />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowColors[index] }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <div className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className={cn("relative z-10 flex h-full w-full flex-col items-center", isLarge ? "pt-8" : "pt-7")}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 + index * 0.08 }}
          animate={hovered ? { y: -6, rotate: index % 2 === 0 ? -2 : 2, scale: 1.04 } : { y: 0, rotate: 0, scale: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
          <img
            src={thumbnail}
            alt={title}
            className={cn(
              "relative z-10 object-contain opacity-90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] transition-transform duration-500",
              isLarge ? "w-48 md:w-56" : "w-28 md:w-36",
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 + index * 0.08 }}
          className="mt-auto w-full p-6 pt-4 text-center md:text-left"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/40">
              {id < 10 ? `0${id}` : id} · Role
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/80">
              {cardBadgeLabels[index] ?? "Experience"}
            </span>
          </div>

          <h2 className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/55 sm:text-[0.92rem]">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/0 transition-all duration-500 group-hover:border-white/[0.14] group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]" />
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section className="w-full py-24" id="experience">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/50">
            Career
          </span>
          <h1 className="mt-5 text-3xl font-bold capitalize text-white sm:text-4xl lg:text-5xl">
            {sectionContent.experience.heading} <span className="text-purple">{sectionContent.experience.accent}</span>
          </h1>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12">
          {workExperience.map((card, index) => (
            <ExperienceCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              thumbnail={card.thumbnail}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
