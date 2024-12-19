import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { FaLocationArrow } from "react-icons/fa6"
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision"
import { SparklesCore } from "./ui/Sparkles"
import { GrConnect } from "react-icons/gr"
import ShimmeringButton  from "./ui/ShimmeringButton"
// import { HeroParallax } from "./ui/HeroParallax"

import { FaReact } from 'react-icons/fa';
import {
  SiThreedotjs,
  SiFramer,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiGreensock,
  SiSentry,
  SiVite,
} from "react-icons/si";
import { useState } from 'react';

const toolIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Three.js": <SiThreedotjs className="text-white-500 text-2xl" />,
  FramerMotion: <SiFramer className="text-purple-500 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-blue-400 text-2xl" />,
  Sass: <SiSass className="text-pink-500 text-2xl" />,
  // TypeScript: <SiTypescript className="text-blue-600 text-2xl" />,
  GSAP: <SiGreensock className="text-green-500 text-2xl" />,
  Sentry: <SiSentry className="text-gray-500 text-2xl" />,
  Vite: <SiVite className="text-yellow-300 text-2xl" />,
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>

      <BackgroundBeamsWithCollision className="h-screen w-full dark:bg-purple-100 bg-white flex items-center justify-center  absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-purple-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <SparklesCore />
      </BackgroundBeamsWithCollision>

      {/* <HeroParallax products={products} /> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with react.js
          </h2>
            <div className="flex gap-5 mt-2">
              {Object.entries(toolIcons).map(([name, icon], index) => (
                <div key={index} className="relative group cursor-cell">
                  <span className="tooltip absolute top-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {name}
                  </span>
                  {icon}
                </div>
              ))}
            </div>
          
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Designing the future, one pixel at a time.' />

          {/* The Ultimate <br /> development studio */}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Williams Akinwamide, a React.js Developer based in Nigeria.
          </p>

          <a href="#about">
            {/* <MagicButton title='Show my work' icon={<FaLocationArrow />} position='right' /> */}
            <ShimmeringButton title="Show my work" icon={<FaLocationArrow className="text-xs mt-1" />} />
          </a>
        </div>
      </div>
    </div>
    
  )
}


export default Hero