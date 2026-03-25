import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenisInstance } from "@/utils/lenis";

gsap.registerPlugin(ScrollTrigger);

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
      anchors: true,
    });
    setLenisInstance(lenis);

    const onScroll = () => {
      ScrollTrigger.update();
    };

    const onAnimationFrame = (time: number) => {
      // GSAP ticker time is in seconds, Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    const removeScrollListener = lenis.on("scroll", onScroll);
    gsap.ticker.add(onAnimationFrame);
    gsap.ticker.lagSmoothing(0);

    const refreshTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      window.clearTimeout(refreshTimeout);
      removeScrollListener();
      gsap.ticker.remove(onAnimationFrame);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
