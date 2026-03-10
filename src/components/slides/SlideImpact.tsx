import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { Leaf, Wind, Zap } from "lucide-react";

const SlideImpact = () => (
  <SlideLayout>
    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl w-full items-center">
      <div className="flex-1 space-y-8">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Impacto <span className="text-primary">Sostenible</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Nuestro modelo no solo es rentable, sino que acelera la transición energética hacia un futuro más limpio y equitativo.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 gap-6">
          {[
            { icon: <Zap size={20} />, label: "Energía 100% Limpia", desc: "Generación distribuida de alto impacto." },
            { icon: <Wind size={20} />, label: "Descarbonización", desc: "Reducción directa de la huella de CO2." },
            { icon: <Leaf size={20} />, label: "Ecosistemas", desc: "Preservación de entornos rurales mediante tecnología." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 h-[450px]">
        <ImageCard
          src="https://imagenes.portafolio.co/files/og_thumbnail/uploads/2023/10/12/652870ba22ff3.jpeg"
          alt="Energía Solar Renovables"
          label="Renovables"
          delay={0.6}
          className="h-full"
        />
        <div className="grid grid-rows-2 gap-4 h-full">
          <ImageCard
            src="https://storage.googleapis.com/unergy-landing/blog/sun-solar-panel-solar-energy-and-electricity-is-f-2023-11-27-04-51-59-utc.jpg"
            alt="Energía Solar Fotovoltaica"
            label="Energía Infinita"
            delay={0.8}
            className="h-full"
          />
          <ImageCard
            src="https://cdn.forbes.co/2023/04/Unergy-1024x683.jpg"
            alt="Comunidad y Colaboración"
            label="Comunidad"
            delay={1.0}
            className="h-full"
          />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideImpact;

