import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import ImageCard from "./ImageCard";
import Sparkle from "./Sparkle";
import { motion } from "framer-motion";
import { Users, Wallet, Cpu, Leaf } from "lucide-react";

const advantages = [
  { icon: <Users size={20} />, title: "Inversión Abierta", desc: "Acceso a energía solar para todos." },
  { icon: <Wallet size={20} />, title: "Montos Bajos", desc: "Participación en proyectos reales." },
  { icon: <Cpu size={20} />, title: "Innovación", desc: "Gestión digital y monitoreo IoT." },
  { icon: <Leaf size={20} />, title: "Sostenibilidad", desc: "Contribución directa al planeta." },
];

const SlideAdvantage = () => (
  <SlideLayout>
    <Sparkle className="absolute top-[8%] right-[10%]" size={20} delay={0.4} />

    <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full items-center">
      <div className="flex-1 space-y-10">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Nuestra Ventaja <br />
            <span className="text-primary">Competitiva</span>
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-border flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary">{adv.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{adv.title}</h3>
                <p className="text-xs text-muted-foreground leading-tight">{adv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.8}>
          <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20">
            Cualquier persona puede ser productor de energía
          </div>
        </AnimatedText>
      </div>

      <div className="flex-1 w-full h-[400px]">
        <ImageCard
          src="https://www.elespectador.com/resizer/v2/E765JCJE7ZHEHJMNHK47PKCA4Q.jpeg?auth=c933bed393d652fe2edafe2111c069b7198f4bb33fd622dccaf995f5903ff9a3&width=920&height=613&smart=true&quality=60"
          alt="Inversión Solar"
          label="Inversión con Propósito"
          delay={0.6}
          className="w-full h-full"
        />
      </div>
    </div>
  </SlideLayout>
);

export default SlideAdvantage;

