'use client'

import { useState } from 'react';
import { cn } from '../../lib/utils'
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import animationData from '../../../data/confetti.json'
import Lottie from 'react-lottie';
// import MagicButton from './MagicButton'
import { BackgroundBeams } from "../ui/BackgroundBeams"
import { IoCopyOutline } from 'react-icons/io5';
import ShimmeringButton from './ShimmeringButton'

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(className,
        "grid grid-cols-1 lg:auto-rows-[18rem] md:auto-rows-[12rem] auto-rows-[12rem] md:grid-cols-6 gap-10 mx-auto"
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName, 
  titleClassName,
  spareImg,

}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText("daviswill264@gmail.com")
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]", className
      )}
      style={{
        backgroundColor: "rgb(4, 7, 29)",
        background:"linear-gradient(90deg, #10041d9d 0%, #100716a1 100%)",
      }}  
    >
{/* IMAGES */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {/* image for the 1 4 5 box */}
          {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
        </div>
{/* IMAGES */}
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {/* for spareImg in 4 and 5 */}
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

{/* PUTTING THE GRADIENT OF 6 */}
        {id === 6 && (
          <BackgroundGradientAnimation />
        )}

{/* styling individual box  */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
              
          {id === 3 && <BackgroundBeams />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 top-0 tracking-wider">
              <div className="flex flex-col gap-3 lg:gap-5">
                {['HTML5', 'CSS3', 'JavaScript', 'React.js'].map((item) => (
                  <span key={item} className='py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 -mt-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                {['Typescript', 'Three.js', 'Firebase', 'Git'].map((item) => (
                  <span key={item} className='py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 lg:gap-8 mr-1">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                {['Tailwind CSS', 'SASS', 'Framer Motion'].map((item) => (
                  <span key={item} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }} />
              </div>
                <ShimmeringButton
                  title={copied ? 'E-mail copied' : "Copy my E-mail"}
                  icon={<IoCopyOutline />}
                  otherClasses='text-sm'
                  handleClick={handleCopy}
                />          
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};
