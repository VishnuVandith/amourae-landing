"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/utils/animations";

const skincareProducts = [
  {
    id: "1",
    name: "Luminous Silk Serum",
    category: "Face",
    price: "$120",
    image: "/images/product-1.webp"
  },
  {
    id: "2",
    name: "Nocturne Recovery Oil",
    category: "Face",
    price: "$95",
    image: "/images/product-2.webp"
  },
  {
    id: "3",
    name: "Velvet Rose Mist",
    category: "Toners",
    price: "$65",
    image: "/images/product-1.webp"
  },
   {
    id: "4",
    name: "Hydra-Luxe Cream",
    category: "Moisturizer",
    price: "$110",
    image: "/images/product-2.webp"
  },
];

export default function SkincarePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <PageHeader 
        title="The Skincare Collection" 
        subtitle="Science Meets Nature"
        image="/images/hero-bg.webp"
      />
      
      <Section>
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skincareProducts.map((product) => (
             <motion.div 
               key={product.id}
               variants={fadeUpVariant}
               className="group cursor-pointer"
             >
               <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] mb-4 bg-neutral-100">
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               <div className="text-center">
                 <h3 className="text-xl font-serif mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                 <p className="text-sm text-neutral-500">{product.category} — {product.price}</p>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
