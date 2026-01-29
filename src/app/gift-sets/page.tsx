"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/utils/animations";

const giftSets = [
  {
    id: "g1",
    name: "The Ritual Edit",
    description: "Complete 3-step evening routine",
    price: "$280",
    image: "/images/product-1.webp"
  },
  {
    id: "g2",
    name: "Luminous Duo",
    description: "Serum & Mist Set",
    price: "$165",
    image: "/images/product-2.webp"
  },
];

export default function GiftSetsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <PageHeader 
        title="Curated Gifts" 
        subtitle="The Art of Giving"
        image="/images/video-philosophy.webp"
      />
      
      <Section>
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {giftSets.map((set) => (
             <motion.div 
               key={set.id}
               variants={fadeUpVariant}
               className="group cursor-pointer"
             >
               <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] mb-4 bg-neutral-100">
                 <img 
                   src={set.image} 
                   alt={set.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                   Limited Edition
                 </div>
               </div>
               <div className="text-center">
                 <h3 className="text-xl font-serif mb-1 group-hover:text-primary transition-colors">{set.name}</h3>
                 <p className="text-sm text-neutral-500 mb-1">{set.description}</p>
                 <p className="text-sm font-medium">{set.price}</p>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
