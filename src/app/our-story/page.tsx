"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/animations";

export default function OurStoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <PageHeader 
        title="Our Heritage" 
        subtitle="Parisian Roots, Modern Soul"
        image="/images/brand-story.webp"
      />
      
      <Section className="max-w-3xl mx-auto">
        <motion.div 
          className="space-y-8 text-lg font-light leading-relaxed text-neutral-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <p>
            Amouraé began with a simple question: Can luxury be both effective and soulful?
          </p>
          <p>
            Founded in a small atelier in Le Marais, we set out to rediscover the lost art of slow beauty. 
            In a world obsessed with instant fixes, we believe in the power of rituals. Our formulations are not just mixtures 
            of chemicals; they are carefully composed symphonies of botanical actives and advanced clinical science.
          </p>
          <div className="my-12 p-8 bg-neutral-50 border-l-2 border-primary">
            <h3 className="text-2xl font-serif mb-4 text-black">"We do not create products. We distill moments."</h3>
            <p className="text-sm uppercase tracking-widest text-neutral-500">— Founders, Tarun Vinnakota & Anusha</p>
          </div>
          <p>
            Every bottle that leaves our studio is a testament to patience. From the harvesting of the Rose de Mai 
            at dawn to the 6-week maceration process of our signature oils, nothing is rushed.
          </p>
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
