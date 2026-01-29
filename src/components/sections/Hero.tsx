"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button"; // Keeping for reference, but using MagneticButton
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUpVariant, staggerContainer, reveal3D, luxuryEasings } from "@/utils/animations";

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[92vh] overflow-hidden bg-black text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" /> {/* Gradient Overlay */}
        
        {/* Placeholder for Video/Image - using a premium abstract gradient for now */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black animate-pulse-slow">
           <img 
            src="/images/hero-bg.webp" 
            alt="Luxury Beauty Texture"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <motion.div 
          className="max-w-[800px]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden mb-6">
            <motion.h1 
              variants={reveal3D}
              className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium leading-[1.0] tracking-tight text-balance"
            >
              The Art of <br />
              <span className="italic relative inline-block">
                Eternal Radiance
                <motion.span 
                   className="absolute -bottom-2 left-0 w-full h-[2px] bg-white opacity-50" 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ delay: 1, duration: 1.5, ease: luxuryEasings.slow }}
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            variants={fadeUpVariant}
            className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-[480px] leading-relaxed"
          >
            Scientific precision meets botanical purity. Discover the new standard in luxury skincare.
          </motion.p>
          
          <motion.div 
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-6"
          >
            <MagneticButton size="lg" variant="primary">
              Discover Collection
            </MagneticButton>
            <MagneticButton size="lg" variant="ghost">
              Our Philosophy
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
