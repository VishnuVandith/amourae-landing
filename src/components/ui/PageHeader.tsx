"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/animations";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-neutral-900 text-white flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[800px]">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {subtitle && (
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-4 text-white/80">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-2">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
