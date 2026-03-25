import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, projectsSectionContent, skillLabels } from "../../data";
import { skillIconMap } from "../lib/iconMaps";
import { cn } from "../lib/utils";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const RecentProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinAreaRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const pinArea = pinAreaRef.current;
    const track = trackRef.current;

    if (!section || !pinArea || !track) {
      return;
    }

    const media = gsap.matchMedia();

    type HorizontalScrollConfig = {
      start: string;
      scrub: number;
      pin: boolean;
      extraEnd: number;
    };

    const initHorizontalScroll = (config: HorizontalScrollConfig) => {
      gsap.set(track, { willChange: "transform" });
      gsap.set(pinArea, { willChange: "transform" });

      const getDistance = () => Math.max(0, track.scrollWidth - pinArea.clientWidth);
      const distance = getDistance();
      if (distance < 8) {
        gsap.set(track, { x: 0 });
        return;
      }

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinArea,
          start: config.start,
          end: () => `+=${getDistance() + config.extraEnd}`,
          scrub: config.scrub,
          pin: config.pin,
          pinSpacing: true,
          pinReparent: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            gsap.set(track, { x: 0 });
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform,willChange" });
        gsap.set(pinArea, { clearProps: "willChange" });
      };
    };

    media.add("(min-width: 1024px)", () =>
      initHorizontalScroll({
        start: "top+=8 top",
        scrub: 1.5,
        pin: true,
        extraEnd: 180,
      }),
    );

    media.add("(max-width: 1023px)", () => {
      gsap.set(track, { clearProps: "transform,willChange" });
      gsap.set(pinArea, { clearProps: "willChange" });
    });

    const images = Array.from(track.querySelectorAll("img"));
    const refreshOnImageLoad = () => ScrollTrigger.refresh();
    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refreshOnImageLoad);
      }
    });

    const refreshId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshId);
      images.forEach((image) => {
        image.removeEventListener("load", refreshOnImageLoad);
      });
      media.revert();
    };
  }, { scope: sectionRef, dependencies: [] });

  return (
    <div ref={sectionRef} className="relative mt-20 py-20 transition-all" id="projects">
      <h1 className="mb-10 text-center text-3xl font-bold capitalize">
        {projectsSectionContent.heading}{" "}
        <span className="text-purple">{projectsSectionContent.accent}</span>
      </h1>

      <div
        ref={pinAreaRef}
        className="relative mt-12 lg:h-[36rem] lg:overflow-hidden"
      >
        <div
          ref={trackRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:flex lg:w-max lg:gap-14 lg:pr-[12vw]"
        >
          {projects.map(({ id, title, description, image, liveUrl, githubUrl, toolKeys, className }) => (
            <div key={id} className="flex h-[32rem] w-full items-center justify-center lg:h-[36rem] lg:w-[34rem] lg:shrink-0">
              <CardContainer className="inter-var h-full w-full" containerClassName="!py-0 h-full w-full">
                <CardBody
                  className={cn(
                    "group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]",
                    className,
                  )}
                >
                  <CardItem translateZ={50} className="text-lg font-bold text-neutral-600 dark:text-white md:text-xl">
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={60}
                    className="mt-2 max-w-sm text-xs text-neutral-500 dark:text-neutral-300 md:text-sm"
                  >
                    {description}
                  </CardItem>
                  <CardItem translateZ={100} className="mt-4 w-full">
                    <img
                      src={image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                      alt={title}
                    />
                  </CardItem>
                  <div className="mt-4 flex gap-4">
                    {toolKeys.map((toolKey) => (
                      <div key={toolKey} title={skillLabels[toolKey]}>
                        {skillIconMap[toolKey]}
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 flex items-center justify-between md:mt-20">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                    >
                      {projectsSectionContent.liveLabel}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                    >
                      <span>{projectsSectionContent.githubLabel}</span>
                      <FaChevronDown />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
