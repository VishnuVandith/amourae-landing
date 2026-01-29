"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/animations";

export default function FragrancePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <PageHeader 
        title="Olfactory Journeys" 
        subtitle="Scents of Amouraé"
        image="/images/brand-story.webp"
      />
      
      <Section className="py-24 text-center">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           variants={fadeUpVariant}
           className="max-w-2xl mx-auto"
         >
           <p className="text-lg font-light text-neutral-600 mb-8">
             Our fragrances are composed like poetry, designed to linger on the skin and in the memory. 
             Coming soon to the online boutique.
           </p>
           <span className="text-xs uppercase tracking-widest text-primary">Launching Spring 2026</span>
         </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
