import { FaLocationArrow } from "react-icons/fa6";
import { heroContent, skillLabels } from "../../data";
import { skillIconMap } from "../lib/iconMaps";
import { SparklesCore } from "./ui/Sparkles";
import { Spotlight } from "./ui/Spotlight";
import ShimmeringButton from "./ui/ShimmeringButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 h-screen md:-left-32 md:top-20" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-purple-100">
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-purple-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
        <SparklesCore />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            {heroContent.eyebrow}
          </h2>

          <div className="mt-2 flex gap-5">
            {heroContent.featuredSkillKeys.map((skillKey) => (
              <div key={skillKey} className="group relative cursor-cell">
                <span className="tooltip absolute top-full left-1/2 mb-2 -translate-x-1/2 transform opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {skillLabels[skillKey]}
                </span>
                {skillIconMap[skillKey]}
              </div>
            ))}
          </div>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={heroContent.headline}
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            {heroContent.intro}
          </p>

          <a href="#about">
            <ShimmeringButton
              title={heroContent.ctaLabel}
              icon={<FaLocationArrow className="mt-1 text-xs" />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
