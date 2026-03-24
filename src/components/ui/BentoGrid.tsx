"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../data/confetti.json";
import { skillLabels } from "../../../data";
import type { AboutGridItem } from "../../../data/types";
import { cn } from "../../lib/utils";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import ShimmeringButton from "./ShimmeringButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto grid grid-cols-1 gap-10 md:grid-cols-6 md:auto-rows-[12rem] lg:auto-rows-[18rem]",
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ item }: { item: AboutGridItem }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!item.copyValue) {
      return;
    }

    await navigator.clipboard.writeText(item.copyValue);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none group/bento",
        item.className,
      )}
      style={{
        backgroundColor: "rgb(4, 7, 29)",
        background: "linear-gradient(90deg, #10041d9d 0%, #100716a1 100%)",
      }}
    >
      <div className={cn(item.variant === "copy-contact" && "flex justify-center", "h-full")}>
        <div className="absolute h-full w-full">
          {item.img ? (
            <img
              src={item.img}
              alt={item.title}
              className={cn(item.imgClassName, "object-cover object-center")}
            />
          ) : null}
        </div>

        <div
          className={cn(
            "absolute right-0 -bottom-5",
            item.variant === "feature-link" && "w-full opacity-80",
          )}
        >
          {item.spareImg ? (
            <img
              src={item.spareImg}
              alt={item.title}
              className={cn("h-full w-full object-cover object-center", item.spareImgClassName)}
            />
          ) : null}
        </div>

        {item.variant === "copy-contact" ? (
          <BackgroundGradientAnimation className="" containerClassName="">
            {null}
          </BackgroundGradientAnimation>
        ) : null}

        <div
          className={cn(
            item.titleClassName,
            "relative flex min-h-40 flex-col px-5 p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          <div className="z-10 max-w-32 font-sans text-sm font-extralight text-[#C1C2D3] md:text-xs lg:text-base">
            {item.description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {item.title}
          </div>

          {item.variant === "globe" ? <GlobeDemo /> : null}

          {item.variant === "tech-stack" ? <BackgroundBeams /> : null}
          {item.variant === "tech-stack" && item.skillColumns ? (
            <div className="absolute top-0 -right-3 flex w-fit gap-1 tracking-wider lg:-right-2 lg:gap-5">
              {item.skillColumns.map((column, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={cn(
                    "flex flex-col gap-3 lg:gap-5",
                    index === 1 && "-mt-5",
                    index === 2 && "mr-1 lg:gap-8",
                  )}
                >
                  {index > 0 ? (
                    <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center"></span>
                  ) : null}
                  {column.map((skillKey) => (
                    <span
                      key={skillKey}
                      className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-3 lg:text-base lg:opacity-100"
                    >
                      {skillLabels[skillKey]}
                    </span>
                  ))}
                  {index !== 1 ? (
                    <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center"></span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {item.variant === "feature-link" && item.linkUrl && item.linkLabel ? (
            <div className="relative mt-5">
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 text-sm text-blue-400 underline decoration-blue-400/50 transition-colors duration-200 hover:text-blue-300 hover:decoration-blue-300 lg:text-base"
              >
                {item.linkLabel}
              </a>
            </div>
          ) : null}

          {item.variant === "copy-contact" && item.copyLabel && item.copiedLabel ? (
            <div className="relative mt-5">
              <div className={cn("absolute -right-0 -bottom-5", copied ? "block" : "hidden")}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <ShimmeringButton
                title={copied ? item.copiedLabel : item.copyLabel}
                icon={<IoCopyOutline />}
                otherClasses="text-sm"
                handleClick={handleCopy}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
