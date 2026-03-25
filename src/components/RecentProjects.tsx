import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, projectsSectionContent, skillLabels } from "../../data";
import { skillIconMap } from "../lib/iconMaps";
import { cn } from "../lib/utils";
import { getLenisInstance } from "@/utils/lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const panelViewport = { once: true, amount: 0.3 };
const panelTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

const RecentProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinAreaRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const pinArea = pinAreaRef.current;
    const track = trackRef.current;
    const lenis = getLenisInstance();

    if (!section || !pinArea || !track) {
      return;
    }

    const media = gsap.matchMedia();

    type HorizontalScrollConfig = {
      start: string;
      scrub: number;
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
          pin: true,
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
        start: "top 18%",
        scrub: 1.5,
        extraEnd: 180,
      }),
    );

    media.add("(min-width: 768px) and (max-width: 1023px)", () =>
      initHorizontalScroll({
        start: "top 14%",
        scrub: 1.3,
        extraEnd: 150,
      }),
    );

    media.add("(max-width: 767px)", () =>
      initHorizontalScroll({
        start: "top 20%",
        scrub: 1.15,
        extraEnd: 120,
      }),
    );

    const images = Array.from(track.querySelectorAll("img"));
    const refreshOnImageLoad = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };
    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refreshOnImageLoad);
      }
    });

    const refreshId = window.requestAnimationFrame(() => {
      lenis?.resize();
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
    <section
      ref={sectionRef}
      className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden py-24 transition-all"
      id="projects"
    >
      <div className="pointer-events-none absolute inset-x-0 top-28 h-72 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_68%)] blur-3xl" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-white/55"
          >
            Selected Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mt-5 text-3xl font-bold capitalize text-white sm:text-4xl lg:text-5xl"
          >
            {projectsSectionContent.heading}{" "}
            <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#7dd3fc] bg-clip-text text-transparent">
              {projectsSectionContent.accent}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
            className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base"
          >
            A tighter look at products built for real users, with motion, polish, and production-ready interfaces.
          </motion.p>
        </motion.div>
      </div>

      <div ref={pinAreaRef} className="relative mt-14 h-[28rem] overflow-hidden sm:h-[29rem] md:h-[31rem] lg:h-[35rem]">
        <div
          ref={trackRef}
          className="mx-auto flex w-max gap-6 px-4 sm:gap-8 sm:px-8 lg:gap-10 lg:px-10 lg:pr-[14vw]"
        >
          {projects.map(({ id, title, description, image, liveUrl, githubUrl, toolKeys, className }, index) => (
            <div
              key={id}
              className="flex h-[24rem] w-[86vw] max-w-[22rem] items-stretch justify-center shrink-0 sm:h-[25rem] sm:w-[24rem] sm:max-w-[24rem] md:h-[27rem] md:w-[44rem] md:max-w-none lg:h-[30rem] lg:w-[min(90vw,980px)]"
            >
              <div
                className={cn(
                  "group/card relative grid h-full w-full overflow-hidden rounded-[1.9rem] border border-white/12 bg-[linear-gradient(135deg,#090411_0%,#12081d_55%,#05020a_100%)] p-4 text-white shadow-[0_28px_90px_rgba(4,1,12,0.7)] sm:p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] md:gap-4 lg:p-5",
                  className,
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(196,181,253,0.16),transparent_28%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

                <motion.div
                  initial={{ opacity: 0, x: -42 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={panelViewport}
                  transition={panelTransition}
                  className="relative z-10 flex h-full min-h-full min-w-0 flex-col rounded-[1.55rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-6 lg:p-5"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={panelViewport}
                    transition={{ ...panelTransition, delay: 0.08 }}
                    className="w-fit items-center gap-3 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.6rem] font-normal uppercase tracking-[0.28em] text-white/55 hidden xs:inline-flex"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-1 w-1 rounded-full bg-[#7dd3fc]" />
                    <span>Featured Build</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={panelViewport}
                    transition={{ ...panelTransition, delay: 0.12 }}
                    className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2rem] tracking-wide"
                  >
                    {title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={panelViewport}
                    transition={{ ...panelTransition, delay: 0.16 }}
                    className="mt-2 max-w-xl text-sm leading-relaxed text-white/62 sm:text-base lg:text-[0.85rem] line-clamp-3 "
                  >
                    {description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={panelViewport}
                    transition={{ ...panelTransition, delay: 0.2 }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {toolKeys.map((toolKey) => (
                      <div
                        key={toolKey}
                        title={skillLabels[toolKey]}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[9px] text-white/70 shadow-[0_14px_30px_rgba(0,0,0,0.24)]"
                      >
                        {skillIconMap[toolKey]}
                        <span className="hidden uppercase tracking-[0.16em] lg:inline">
                          {skillLabels[toolKey]}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={panelViewport}
                    transition={{ ...panelTransition, delay: 0.24 }}
                    className="mt-auto flex flex-col gap-4 pt-6 sm:flex-col sm:items-top sm:justify-between"
                  >
                    <div className="space-y-1 hidden sm:block">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">Experience</p>
                      <p className="text-sm text-white/70">Live product, source code, and polished interface details.</p>
                    </div>

                    <div className="flex flex-row flex-wrap items-center gap-3">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                      >
                        {projectsSectionContent.liveLabel}
                      </a>

                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        <span>{projectsSectionContent.githubLabel}</span>
                        <FaChevronDown />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 42, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={panelViewport}
                  transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="relative z-10 hidden min-h-[16rem] min-w-0 md:block md:h-full md:min-h-0"
                >
                  <div className="relative flex h-full w-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#05030a] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.4)]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>

                    <img
                      src={image}
                      className="h-full w-full rounded-[1.15rem] bg-black/40 object-contain object-center p-3 transition duration-500 group-hover/card:scale-[1.015] lg:p-4"
                      alt={title}
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-[1.55rem] bg-gradient-to-t from-[#05030a]/78 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Preview</p>
                        <p className="mt-1 text-sm font-medium text-white/85">Interactive product snapshot</p>
                      </div>
                      <div className="hidden rounded-full border border-white/12 bg-black/35 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm sm:block">
                        Scroll
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}

          <div
            aria-hidden="true"
            className="flex h-[24rem] w-[86vw] max-w-[22rem] items-stretch justify-center shrink-0 sm:h-[25rem] sm:w-[24rem] sm:max-w-[24rem] md:h-[27rem] md:w-[44rem] md:max-w-none lg:h-[30rem] lg:w-[min(90vw,980px)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,8,29,0.55),rgba(5,2,10,0.9))] shadow-[0_28px_90px_rgba(4,1,12,0.42)]">
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="pointer-events-none absolute inset-8 rounded-[1.6rem] border border-dashed border-white/10 bg-white/[0.015]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
