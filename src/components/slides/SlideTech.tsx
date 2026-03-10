import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";
import Sparkle from "./Sparkle";
import { Monitor, Activity, Link, ShieldCheck, Eye, Zap } from "lucide-react";

const SlideTech = () => (
  <SlideLayout>
    <Sparkle className="absolute top-[12%] left-[18%]" size={14} delay={0.5} />
    <Sparkle className="absolute bottom-[15%] right-[12%]" size={18} delay={1.2} />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl w-full items-center">
      <div className="lg:col-span-12">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Tecnología <span className="text-primary">de Vanguardia</span>
          </h2>
        </AnimatedText>
      </div>

      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageCard
          src="https://static.platzi.com/media/blog/open_graph-5ed4aaef-2a6e-4374-bac8-be6a68724358.png"
          alt="Monitoreo Tecnológico"
          label="Plataforma de Inversión"
          delay={0.4}
          className="aspect-video md:aspect-auto md:row-span-2 h-full"
        />
        <div className="space-y-6">
          <InfoCard icon={<Monitor />} title="Dashboard Digital" description="Interfaz intuitiva para el seguimiento de inversiones." delay={0.5} />
          <InfoCard icon={<Activity />} title="Monitoreo IoT" description="Datos en tiempo real de producción y ahorro." delay={0.6} />
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <InfoCard icon={<Link />} title="Blockchain" description="Trazabilidad y seguridad en cada transacción." delay={0.7} />

        <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Certificaciones</p>
          <div className="flex flex-col gap-3">
            {[
              { icon: <ShieldCheck size={16} />, text: "Seguridad Bancaria" },
              { icon: <Eye size={16} />, text: "Transparencia Total" },
              { icon: <Zap size={16} />, text: "Respuesta Inmediata" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground/80">
                <span className="text-primary">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideTech;

