import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const InfoCard = ({ icon, title, description, delay = 0, className = "" }: InfoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col gap-3 hover:shadow-elevated transition-shadow duration-300 ${className}`}
  >
    {icon && <div className="text-primary text-2xl">{icon}</div>}
    <h3 className="font-bold text-lg text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default InfoCard;

