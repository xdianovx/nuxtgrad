import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  general.scrollLenis = new Lenis({
    duration: 1.1,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  general.scrollLenis.on("scroll", ScrollTrigger.update);
  general.scrollLenis.on("scroll", ScrollTrigger.refresh);

  gsap.ticker.add((time) => {
    general.scrollLenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);



  // general.scrollLenis.scrollTo(0);
};
