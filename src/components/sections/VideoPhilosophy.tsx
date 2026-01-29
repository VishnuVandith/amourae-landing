"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant } from "@/utils/animations";

export function VideoPhilosophySection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="w-full h-full bg-neutral-900 animate-pulse-slow">
            {/* 
                NOTE: Use a real video background in production.
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/path/to/video.mp4" type="video/mp4" />
                </video> 
            */}
             <img 
              src="/images/video-philosophy.webp" 
              alt="Brand Philosophy Video Placeholder"
              className="w-full h-full object-cover opacity-60"
            />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[720px] px-6 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariant}
        >
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm mb-6 text-white/80">The Amouraé Promise</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            "We do not create products. We distill moments of pure <span className="italic">elegance</span>."
          </h2>
          <Button variant="ghost" size="lg" className="border-white/30 hover:bg-white hover:text-black hover:border-white">
             Watch The Film
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
