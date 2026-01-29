"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUpVariant } from "@/utils/animations";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "The Luminous Silk Serum completely transformed my texture. It's liquid gold.",
    author: "Elena R.",
    role: "Verified Buyer"
  },
  {
    id: 2,
    quote: "Finally, a luxury brand that values clean ingredients as much as packaging.",
    author: "Sarah J.",
    role: "Beauty Editor"
  },
  {
    id: 3,
    quote: "The scent, the feel, the results. Amouraé is an absolute masterpiece.",
    author: "Isabella K.",
    role: "Verified Buyer"
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-neutral-50" id="reviews">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Love Notes</h2>
      </motion.div>

      {/* Horizontal Scroll / Drag Slider */}
      <motion.div 
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-6 md:px-0 scrollbar-hide"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((t) => (
          <div 
            key={t.id}
            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center"
          >
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[24px] shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-300 h-full flex flex-col justify-between border border-white/50">
              <div className="mb-6 text-primary">
                ★★★★★
              </div>
              <p className="text-lg md:text-xl font-serif leading-relaxed mb-6 italic text-neutral-800">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm tracking-wide uppercase">{t.author}</p>
                <p className="text-xs text-neutral-500 mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
