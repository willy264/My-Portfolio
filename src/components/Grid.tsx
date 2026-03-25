import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BentoGridSecondDemo from "./bento-grid-demo-2";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Grid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) {
      return;
    }

    const animation = gsap.fromTo(
      sectionRef.current,
      {
        autoAlpha: 0,
        y: 72,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} id="about" className="w-full py-20">
      <BentoGridSecondDemo />
    </section>
  );
};

export default Grid;
