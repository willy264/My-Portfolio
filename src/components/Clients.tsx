import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { sectionContent, testimonials } from "../../data";

const carouselCopies = 7;

const getLoopedIndex = (index: number, length: number) => {
  if (!length) {
    return 0;
  }

  return ((index % length) + length) % length;
};

const getCarouselState = (distance: number) => {
  const clampedDistance = Math.min(Math.abs(distance), 4);
  const direction = distance === 0 ? 0 : distance > 0 ? 1 : -1;

  const yOffsets = [0, 18, 42, 72, 96];
  const scales = [1, 0.84, 0.68, 0.56, 0.48];
  const opacities = [1, 0.84, 0.58, 0.32, 0.14];
  const rotations = [0, direction * 2.5, direction * 4.5, direction * 6, direction * 7.5];

  return {
    y: yOffsets[clampedDistance],
    scale: scales[clampedDistance],
    opacity: opacities[clampedDistance],
    rotate: rotations[clampedDistance],
    zIndex: 20 - clampedDistance,
    isActive: clampedDistance === 0,
  };
};

const Clients = () => {
  const selectorViewportRef = useRef<HTMLDivElement>(null);
  const selectorTrackRef = useRef<HTMLDivElement>(null);

  const centeredBatch = Math.floor(carouselCopies / 2);
  const initialVisualIndex = centeredBatch * testimonials.length + Math.floor(testimonials.length / 2);

  const [activeVisualIndex, setActiveVisualIndex] = useState(initialVisualIndex);
  const [trackShouldAnimate, setTrackShouldAnimate] = useState(true);
  const [metrics, setMetrics] = useState({
    viewportWidth: 0,
    slotWidth: 0,
    gap: 0,
  });

  const carouselItems = useMemo(
    () =>
      Array.from({ length: carouselCopies }, (_, batchIndex) =>
        testimonials.map((testimonial, index) => ({
          key: `${batchIndex}-${index}-${testimonial.name}`,
          batchIndex,
          originalIndex: index,
          testimonial,
        })),
      ).flat(),
    [],
  );

  useEffect(() => {
    if (!testimonials.length) {
      return;
    }

    setTrackShouldAnimate(false);
    setActiveVisualIndex(centeredBatch * testimonials.length + Math.floor(testimonials.length / 2));

    const frame = window.requestAnimationFrame(() => {
      setTrackShouldAnimate(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [centeredBatch]);

  useEffect(() => {
    const updateMetrics = () => {
      const viewport = selectorViewportRef.current;
      const track = selectorTrackRef.current;
      const firstSlot = track?.querySelector<HTMLElement>("[data-carousel-slot='true']");

      if (!viewport || !track || !firstSlot) {
        return;
      }

      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.gap || "0");

      setMetrics({
        viewportWidth: viewport.clientWidth,
        slotWidth: firstSlot.offsetWidth,
        gap,
      });
    };

    updateMetrics();

    const observer = new ResizeObserver(updateMetrics);
    if (selectorViewportRef.current) {
      observer.observe(selectorViewportRef.current);
    }
    if (selectorTrackRef.current) {
      observer.observe(selectorTrackRef.current);
    }

    window.addEventListener("resize", updateMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, [carouselItems.length]);

  useEffect(() => {
    if (testimonials.length < 2) {
      return;
    }

    const lowerBound = testimonials.length * 2;
    const upperBound = testimonials.length * (carouselCopies - 2);

    if (activeVisualIndex < lowerBound || activeVisualIndex >= upperBound) {
      const normalizedIndex = getLoopedIndex(activeVisualIndex, testimonials.length);

      const timeoutId = window.setTimeout(() => {
        setTrackShouldAnimate(false);
        setActiveVisualIndex(centeredBatch * testimonials.length + normalizedIndex);

        const frame = window.requestAnimationFrame(() => {
          setTrackShouldAnimate(true);
        });

        return () => {
          window.cancelAnimationFrame(frame);
        };
      }, 720);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }
  }, [activeVisualIndex, centeredBatch]);

  if (!testimonials.length) {
    return null;
  }

  const activeIndex = getLoopedIndex(activeVisualIndex, testimonials.length);
  const activeTestimonial = testimonials[activeIndex];
  const trackX =
    metrics.slotWidth > 0
      ? metrics.viewportWidth / 2 - metrics.slotWidth / 2 - activeVisualIndex * (metrics.slotWidth + metrics.gap)
      : 0;

  return (
    <section id="testimonials" className="w-full py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/50">
            Collaborators
          </span>
          <h1 className="mt-5 text-3xl font-bold capitalize text-white sm:text-4xl lg:text-5xl">
            {sectionContent.testimonials.heading}{" "}
            <span className="bg-gradient-to-r from-white via-[#c4b5fd] to-[#7dd3fc] bg-clip-text text-transparent">
              {sectionContent.testimonials.accent}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/58 sm:text-base">
            People I have built with, learned with, and shipped alongside. Browse the portrait rail to explore each featured voice.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#05030a] via-[#05030a]/85 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#05030a] via-[#05030a]/85 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div
              ref={selectorViewportRef}
              className="relative h-[14.5rem] overflow-hidden px-2 pt-2 sm:h-[18.5rem] sm:px-4"
            >
              <motion.div
                ref={selectorTrackRef}
                animate={{ x: trackX }}
                transition={
                  trackShouldAnimate
                    ? { type: "spring", stiffness: 90, damping: 22, mass: 0.9 }
                    : { duration: 0 }
                }
                className="flex h-full items-start gap-2.5 sm:gap-4"
              >
                {carouselItems.map((item, itemIndex) => {
                  const distance = itemIndex - activeVisualIndex;
                  const state = getCarouselState(distance);

                  return (
                    <div
                      key={item.key}
                      data-carousel-slot="true"
                      className="relative flex h-full w-[5.2rem] shrink-0 items-start justify-center sm:w-[6.8rem]"
                    >
                      <motion.button
                        type="button"
                        onClick={() => setActiveVisualIndex(itemIndex)}
                        animate={{
                          y: state.y,
                          scale: state.scale,
                          opacity: state.opacity,
                          rotate: state.rotate,
                        }}
                        whileHover={{
                          y: Math.max(state.y - 8, -8),
                          scale: state.isActive ? 1.05 : state.scale + 0.08,
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 24 }}
                        className="relative flex h-[10.8rem] w-[4.8rem] items-end justify-center sm:h-[13.8rem] sm:w-[16rem]"
                        style={{ zIndex: state.zIndex }}
                        aria-label={`Show testimonial from ${item.testimonial.name}`}
                      >
                        <div
                          className={`relative h-full w-full overflow-hidden rounded-[1.4rem] border transition duration-500 ${
                            state.isActive
                              ? "border-white/22 shadow-[0_26px_52px_rgba(0,0,0,0.34)]"
                              : "border-white/8 shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
                          }`}
                        >
                          <img
                            src={item.testimonial.image}
                            alt={item.testimonial.name}
                            className={`h-full w-full object-cover transition duration-500 ${
                              state.isActive ? "scale-100 grayscale-0" : "scale-[1.05] grayscale-[20%]"
                            }`}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                          <motion.div
                            initial={false}
                            animate={{
                              opacity: state.isActive ? 1 : 0,
                              y: state.isActive ? 0 : 10,
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute inset-x-0 bottom-0 p-3 text-left"
                          >
                            <p className="text-xs font-semibold text-white sm:text-sm">{item.testimonial.name}</p>
                            <p className="mt-1 line-clamp-2 text-[11px] text-white/62 sm:text-xs">
                              {item.testimonial.designation}
                            </p>
                          </motion.div>
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-[42rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-6 lg:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(196,181,253,0.12),transparent_32%)]" />
                <div className="relative z-10">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.26em] text-white/42">
                    Featured Voice
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{activeTestimonial.name}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/58 sm:text-base">
                    {activeTestimonial.designation}
                  </p>

                  <motion.blockquote
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                    className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-[1.05rem] sm:leading-8"
                  >
                    "{activeTestimonial.quote}"
                  </motion.blockquote>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/62">
                      Collaboration
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/62">
                      Product Delivery
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
