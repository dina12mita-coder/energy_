import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
}

const SlideLayout = ({ children }: SlideLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center p-12 md:p-20 relative overflow-hidden bg-background"
    >
      {children}
    </motion.div>
  );
};

export default SlideLayout;
