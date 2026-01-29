"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUpVariant, staggerContainer } from "@/utils/animations";
import { Leaf, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Rare Botanicals",
    description: "Sourced from the world's most secluded sanctuaries."
  },
  {
    icon: FlaskConical,
    title: "Clinical Potency",
    description: "Formulas backed by rigorous dermatological testing."
  },
  {
    icon: ShieldCheck,
    title: "Pure Standards",
    description: "Free from parabens, sulfates, and synthetic dyes."
  },
  {
    icon: Sparkles,
    title: "Artisan Craft",
    description: "Small-batch production to ensure peak freshness."
  }
];

export function TrustPillarsSection() {
  return (
    <Section className="bg-white" id="trust">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {pillars.map((pillar, index) => (
          <motion.div 
            key={index} 
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-6 p-4 rounded-full bg-accent/30 text-primary group-hover:scale-110 transition-transform duration-500">
              <pillar.icon strokeWidth={1} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif mb-3">{pillar.title}</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-[240px]">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
