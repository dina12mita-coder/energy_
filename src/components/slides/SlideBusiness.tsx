import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { Building2, User, Leaf, Zap, ShieldCheck, TrendingUp, Handshake, Globe, Users } from "lucide-react";

const SlideBusiness = () => (
  <SlideLayout>
    <div className="flex flex-col gap-10 max-w-7xl w-full items-center">
      <AnimatedText>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center">
          Modelo de <span className="text-primary">Triple Impacto</span>
        </h2>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full pb-8">
        {/* Pillar 1: Economic */}
        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-border/50 shadow-card flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-primary/20 transition-colors" />
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <TrendingUp className="text-primary" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Impacto Económico</h3>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li className="flex items-center gap-2 justify-center">
              <Zap size={14} className="text-primary" /> Reducción COGS energéticos B2B
            </li>
            <li className="flex items-center gap-2 justify-center">
              <ShieldCheck size={14} className="text-primary" /> Activos reales desalineados del mercado
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Building2 size={14} className="text-primary" /> Modelo de ingresos escalable
            </li>
          </ul>
        </motion.div>

        {/* Pillar 2: Social */}
        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-border/50 shadow-card flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-secondary/20 transition-colors" />
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
            <User className="text-secondary" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Impacto Social</h3>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li className="flex items-center gap-2 justify-center">
              <Handshake size={14} className="text-secondary" /> Democratización de la inversión
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Users size={14} className="text-secondary" /> Inclusión financiera digital
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Globe size={14} className="text-secondary" /> Reactivación económica rural
            </li>
          </ul>
        </motion.div>

        {/* Pillar 3: Environmental */}
        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-border/50 shadow-card flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-green-500/20 transition-colors" />
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
            <Leaf className="text-green-500" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Impacto Ambiental</h3>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li className="flex items-center gap-2 justify-center">
              <Zap size={14} className="text-green-500" /> Energía 100% renovable
            </li>
            <li className="flex items-center gap-2 justify-center">
              <ShieldCheck size={14} className="text-green-500" /> Descarbonización industrial
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Leaf size={14} className="text-green-500" /> Protección de suelos agrivoltaicos
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl h-48 md:h-64 mt-4">
        <ImageCard
          src="https://static.platzi.com/media/blog/cover-de549249-94c1-40a2-b07f-79d148ef41d0.png"
          alt="Granja Solar Triple Impacto"
          label="Sostenibilidad integrada en el modelo"
          delay={0.9}
          className="w-full h-full"
        />
      </div>
    </div>
  </SlideLayout>
);

export default SlideBusiness;



