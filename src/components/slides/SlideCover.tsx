import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import Sparkle from "./Sparkle";
import { motion } from "framer-motion";

const SlideCover = () => (
  <SlideLayout>
    {/* Decorative background elements */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />
    </motion.div>

    <Sparkle className="absolute top-[15%] left-[10%]" size={20} delay={0.5} />
    <Sparkle className="absolute top-[30%] right-[15%]" size={14} delay={1} />
    <Sparkle className="absolute bottom-[25%] left-[20%]" size={18} delay={1.5} />
    <Sparkle className="absolute bottom-[40%] right-[10%]" size={12} delay={2} />

    {/* Main Logo Container - Size adapted for artboard prominence */}
    <motion.div
      className="w-[320px] h-[140px] md:w-[500px] md:h-[200px] mb-12"
      initial={{ y: 20, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img
        src="https://forjads.com/wp-content/uploads/2025/12/unergy.svg"
        alt="Ünergy"
        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]"
      />
    </motion.div>

    <AnimatedText delay={0.3}>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-center leading-none">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" style={{ backgroundImage: "linear-gradient(135deg, hsl(262, 100%, 60%), hsl(263, 91%, 70%))" }}>
          Revolucionando la Energía
        </span>
      </h1>
    </AnimatedText>

    <AnimatedText delay={0.5} className="mt-8">
      <p className="text-xl md:text-3xl text-muted-foreground font-light tracking-widest text-center">
        Sostenibilidad • Inversión • Tecnología
      </p>
    </AnimatedText>

    <AnimatedText delay={0.8} className="mt-14 max-w-lg">
      <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 shadow-elevated border border-border/50 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <p className="text-foreground/90 text-lg md:text-xl italic leading-relaxed font-medium">
          "El futuro de la inversión en energía renovable está aquí."
        </p>
      </div>
    </AnimatedText>

    {/* Presenters section */}
    <AnimatedText delay={1.1} className="mt-24 w-full max-w-4xl border-t border-border/40 pt-12">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-foreground font-bold text-2xl md:text-3xl">
          <span className="relative group cursor-default">
            Jesus Sanchez
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="relative group cursor-default">
            Willy Sanchez
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="relative group cursor-default">
            Natalia Rodriguez
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground/60 font-black">Equipo de Desarrollo</p>
      </div>
    </AnimatedText>
  </SlideLayout>
);

export default SlideCover;


