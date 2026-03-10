import { motion } from "framer-motion";
import { useState } from "react";

interface ImageCardProps {
    src?: string;
    alt?: string;
    className?: string;
    delay?: number;
    label?: string;
}

const ImageCard = ({ src, alt = "Slide image", className = "", delay = 0, label }: ImageCardProps) => {
    const [hasError, setHasError] = useState(false);

    const renderPlaceholder = () => (
        <div className="w-full h-full flex items-center justify-center p-8 text-center bg-gradient-to-br from-muted to-muted/50">
            <p className="text-muted-foreground/60 text-sm font-medium italic">
                {label || "Imagen de referencia"}
            </p>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`relative group rounded-3xl overflow-hidden shadow-elevated border border-border/50 bg-muted/30 ${className}`}
        >
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                renderPlaceholder()
            )}

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {label && (
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-background/80 backdrop-blur-md rounded-xl px-4 py-2 border border-border/50 shadow-sm">
                        <p className="text-xs font-bold text-foreground uppercase tracking-widest">{label}</p>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ImageCard;

