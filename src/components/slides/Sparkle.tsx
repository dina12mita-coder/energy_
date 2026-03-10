import { motion } from "framer-motion";

interface SparkleProps {
  className?: string;
  size?: number;
  delay?: number;
}

const Sparkle = ({ className = "", size = 16, delay = 0 }: SparkleProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0.6, 1], scale: [0, 1.2, 0.9, 1] }}
    transition={{ duration: 1.2, delay, repeat: Infinity, repeatDelay: 3 }}
  >
    <path
      d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
      fill="hsl(262, 100%, 65%)"
    />
  </motion.svg>
);

export default Sparkle;
