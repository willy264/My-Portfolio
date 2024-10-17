import { cn } from '../../lib/utils'
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';


export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(className,
        "grid grid-cols-1 md:auto-rows-[18rem] md:grid-cols-3 gap-4 max-w-7xl mx-auto"
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
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4", className
      )}
      style={{
        backgroundColor: "rgb(4, 7, 29)",
        background:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}  
    >


      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

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
        </div>

        {id === 2 && <GlobeDemo />}
      </div>


      <div className="group-hover/bento:translate-x-2 transition duration-200">
 
      </div>
    </div>
  );
};
