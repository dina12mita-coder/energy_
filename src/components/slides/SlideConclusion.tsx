import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import Sparkle from "./Sparkle";
import { motion } from "framer-motion";
import { Cpu, Leaf, TrendingUp } from "lucide-react";

const SlideConclusion = () => (
  <SlideLayout>
    <Sparkle className="absolute top-[10%] left-[15%]" size={18} delay={0.3} />
    <Sparkle className="absolute top-[15%] right-[20%]" size={14} delay={0.8} />
    <Sparkle className="absolute bottom-[20%] left-[25%]" size={16} delay={1.3} />

    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full gradient-glow opacity-[0.07] blur-3xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    />

    <AnimatedText>
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-10">
        Conclusión
      </h2>
    </AnimatedText>

    <AnimatedText delay={0.2} className="mb-10 max-w-2xl text-center">
      <p className="text-lg text-muted-foreground">
        Unergy representa una nueva generación de startups que combinan:
      </p>
    </AnimatedText>

    <div className="flex flex-wrap gap-6 justify-center mb-12">
      {[
        { icon: <Cpu size={20} />, label: "Tecnología" },
        { icon: <Leaf size={20} />, label: "Sostenibilidad" },
        { icon: <TrendingUp size={20} />, label: "Inversión" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
          className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-card border border-border"
        >
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground">{item.icon}</span>
          </div>
          <span className="font-semibold text-foreground">{item.label}</span>
        </motion.div>
      ))}
    </div>

    <AnimatedText delay={1} className="max-w-xl">
      <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border text-center">
        <img
          src="https://forjads.com/wp-content/uploads/2025/12/unergy.svg"
          alt="Ünergy"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />
        <p className="text-xl font-bold text-foreground leading-relaxed">
          El futuro de la energía será{" "}
          <span className="highlight-tag">digital</span>,{" "}
          <span className="highlight-tag">descentralizado</span> y{" "}
          <span className="highlight-tag">renovable</span>.
        </p>
      </div>
    </AnimatedText>
  </SlideLayout>
);

export default SlideConclusion;

