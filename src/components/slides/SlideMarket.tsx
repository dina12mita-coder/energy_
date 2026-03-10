import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";
import { TrendingUp, MapPin, Building } from "lucide-react";

const SlideMarket = () => (
  <SlideLayout>
    <AnimatedText>
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-12">
        Mercado y <span className="text-primary">Clientes Objetivo</span>
      </h2>
    </AnimatedText>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full items-center">
      <div className="grid grid-cols-1 gap-6 order-2 lg:order-1">
        <InfoCard
          icon={<TrendingUp />}
          title="Inversionistas"
          description="Inversionistas digitales buscando rentabilidad con propósito ambiental."
          delay={0.3}
        />
        <InfoCard
          icon={<MapPin />}
          title="Propietarios"
          description="Dueños de terrenos rurales listos para ser transformados en granjas solares."
          delay={0.5}
        />
        <InfoCard
          icon={<Building />}
          title="Empresas (B2B)"
          description="Grandes consumidores que buscan eficiencia y reducción de costos fijos."
          delay={0.7}
        />
      </div>

      <div className="w-full h-[400px] lg:h-[500px] order-1 lg:order-2">
        <ImageCard
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
          alt="Mercado de Energía"
          label="Segmentación de Mercado"
          delay={0.4}
          className="w-full h-full"
        />
      </div>
    </div>
  </SlideLayout>
);

export default SlideMarket;

