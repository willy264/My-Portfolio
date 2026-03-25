import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sectionContent, testimonials } from "../../data";

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(testimonials.length / 2));
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    activeItem?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

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
            {sectionContent.testimonials.heading}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-200 bg-clip-text text-transparent">
              {" "}
              {sectionContent.testimonials.accent}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/58 sm:text-base">
            People I have built with, learned with, and shipped alongside. Browse the portrait strip to explore each testimonial.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          {/* Image select */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[30rem]"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#05030a] to-transparent sm:w-14" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#05030a] to-transparent sm:w-14" />

            <div className="overflow-x-auto px-3 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="mx-auto flex min-w-max items-center gap-3 sm:gap-4">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.button
                      key={testimonial.name}
                      ref={(element) => {
                        itemRefs.current[index] = element;
                      }}
                      type="button"
                      layout
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ y: isActive ? -4 : -8, scale: isActive ? 1.01 : 1.03 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className={`relative shrink-0 overflow-hidden rounded-[1.35rem] border transition duration-300 ${
                        isActive
                          ? "h-44 w-28 border-white/18 shadow-[0_24px_48px_rgba(0,0,0,0.3)] sm:h-56 sm:w-36"
                          : "h-24 w-[4.5rem] border-white/8 opacity-80 sm:h-32 sm:w-24"
                      }`}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`h-full w-full object-cover transition duration-500 ${
                          isActive ? "scale-100 grayscale-0" : "scale-[1.04] grayscale-[20%]"
                        }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <motion.div
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute inset-x-0 bottom-0 p-3 text-left"
                      >
                        <p className="text-xs font-semibold text-white sm:text-sm">{testimonial.name}</p>
                        <p className="mt-1 line-clamp-2 text-[11px] text-white/62 sm:text-xs">{testimonial.designation}</p>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Content section */}
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
