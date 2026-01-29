"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant, imageReveal, luxuryEasings } from "@/utils/animations";
import { useRef } from "react";

export function BrandStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Subtle parallax

  return (
    <Section className="bg-white overflow-hidden" id="about">
      <div 
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="order-2 lg:order-1"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
            Beauty rooted in <br />
            <span className="italic text-primary">proven science.</span>
          </h2>
          <div className="space-y-6 text-neutral-600 text-lg font-light leading-relaxed">
            <p>
              Amouraé was born from a desire to bridge the gap between clinical efficacy 
              and the sensorial pleasure of luxury. We believe that caring for your skin 
              should be a ritual, not a routine.
            </p>
            <p>
              Our formulas are crafted with the highest concentration of active ingredients, 
              encapsulated in textures that melt into the skin, delivering visible results 
              with every application.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="outline">Read Our Story</Button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="order-1 lg:order-2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
           <motion.div 
            style={{ y }} 
            variants={imageReveal}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] shadow-luxury-lg group"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none z-10" />
            <img 
              src="/images/brand-story.webp" 
              alt="The Amouraé Ritual" 
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
