import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";
import Sparkle from "./Sparkle";
import { Users, MapPin, Building2, Leaf, Wallet, TrendingDown } from "lucide-react";

const SlideSolution = () => (
  <SlideLayout>
    <Sparkle className="absolute top-[10%] right-[15%]" size={16} delay={0.8} />

    <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full items-stretch">
      <div className="flex-1 flex flex-col justify-center">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            La solución de <span className="text-primary">Ünergy</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2} className="mb-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plataforma colaborativa que democratiza el acceso a la energía renovable mediante nuestra red de{" "}
            <span className="highlight-tag text-lg">Mini Granjas Solares</span>.
          </p>
        </AnimatedText>

        <div className="space-y-4">
          <InfoCard icon={<Users size={20} />} title="Inversionistas" description="Invierten desde montos accesibles." delay={0.3} className="py-4" />
          <InfoCard icon={<MapPin size={20} />} title="Dueños de terrenos" description="Rentabilizan sus espacios subutilizados." delay={0.4} className="py-4" />
          <InfoCard icon={<Building2 size={20} />} title="Empresas" description="Energía limpia a costos reducidos." delay={0.5} className="py-4" />
        </div>
      </div>

      <div className="flex-1 min-h-[400px]">
        <ImageCard
          src="https://storage.googleapis.com/unergy-landing/minigranjas/11.webp"
          alt="Granja Solar"
          label="Mini Granjas Solares"
          delay={0.6}
          className="w-full h-full"
        />
      </div>
    </div>

    <div className="flex gap-4 mt-10">
      {[
        { icon: <Leaf size={18} />, text: "Energía 100% limpia" },
        { icon: <Wallet size={18} />, text: "Inversión colaborativa" },
        { icon: <TrendingDown size={18} />, text: "Ahorro garantizado" },
      ].map((item, i) => (
        <AnimatedText key={i} delay={0.8 + i * 0.1}>
          <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-xl py-2 px-4">
            <span className="text-primary">{item.icon}</span>
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">{item.text}</span>
          </div>
        </AnimatedText>
      ))}
    </div>
  </SlideLayout>
);

export default SlideSolution;

