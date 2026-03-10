import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import SlideCover from "@/components/slides/SlideCover";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideBusiness from "@/components/slides/SlideBusiness";
import SlideMarket from "@/components/slides/SlideMarket";
import SlideTech from "@/components/slides/SlideTech";
import SlideAdvantage from "@/components/slides/SlideAdvantage";
import SlideImpact from "@/components/slides/SlideImpact";
import SlideConclusion from "@/components/slides/SlideConclusion";

const slides = [
  SlideCover, SlideProblem, SlideSolution, SlideBusiness,
  SlideMarket, SlideTech, SlideAdvantage, SlideImpact, SlideConclusion,
];

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
  }, []);

  const goFullscreen = () => {
    document.documentElement.requestFullscreen?.();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); goFullscreen(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const CurrentSlide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="w-screen h-screen bg-background flex flex-col overflow-hidden select-none">
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-background border-t border-border">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "gradient-primary scale-125" : "bg-border hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={goFullscreen}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Maximize size={18} />
          </button>
          <button
            onClick={() => go(1)}
            disabled={current === slides.length - 1}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
