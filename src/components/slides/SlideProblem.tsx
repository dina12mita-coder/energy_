import SlideLayout from "./SlideLayout";
import AnimatedText from "./AnimatedText";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";
import { AlertTriangle, Home, DollarSign } from "lucide-react";

const SlideProblem = () => (
  <SlideLayout>
    <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full items-center">
      <div className="flex-1 space-y-8">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            El problema <br />
            <span className="text-primary">energético actual</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-md">
            Muchas personas quieren invertir en energías renovables, pero existen barreras estructurales que lo impiden.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 gap-4 w-full">
          <InfoCard
            icon={<DollarSign />}
            title="Alto costo inicial"
            description="Instalar paneles solares requiere una inversión de capital muy elevada."
            delay={0.3}
            className="w-full"
          />
          <InfoCard
            icon={<Home />}
            title="Falta de espacio"
            description="Muchos no tienen techos propios o espacios adecuados para la instalación."
            delay={0.5}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-[500px]">
        <ImageCard
          src="https://ecosistemastartup.com/wp-content/uploads/2025/11/unergy-funding-energia-solar-colombia-768x419.jpg"
          alt="Costo de Energía Tradicional"
          label="Crisis Energética Tradicional"
          delay={0.6}
          className="w-full h-full"
        />
      </div>
    </div>

    <AnimatedText delay={0.9} className="mt-12 w-full flex justify-center">
      <div className="flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-elevated border border-primary/20 max-w-2xl">
        <AlertTriangle size={28} className="text-primary-foreground shrink-0" />
        <p className="font-bold text-lg md:text-xl italic leading-tight">
          "La energía limpia NO debería ser un privilegio, sino una accesibilidad real."
        </p>
      </div>
    </AnimatedText>
  </SlideLayout>
);

export default SlideProblem;


