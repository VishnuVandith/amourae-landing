"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUpVariant, staggerContainer } from "@/utils/animations";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Luminous Silk Serum",
    category: "Face",
    price: "$120",
    image: "/images/product-1.webp"
  },
  {
    id: "2",
    name: "Brightening Cream",
    category: "Moisturizer",
    price: "$145",
    image: "/images/brightening-cream.jpg",
    tag: "Launching Soon"
  },
  {
    id: "3",
    name: "Nocturne Recovery Oil",
    category: "Face",
    price: "$95",
    image: "/images/product-2.webp"
  },
  {
    id: "4",
    name: "Velvet Rose Mist",
    category: "Toners",
    price: "$65",
    image: "/images/product-1.webp"
  },
];

export function CollectionCardsSection() {
  return (
    <Section className="bg-neutral-50" id="collection">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex justify-between items-end mb-12 px-2">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-serif">
            Signature Collection
          </motion.h2>
          <motion.a 
            variants={fadeUpVariant}
            href="#" 
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
          >
            View All <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={fadeUpVariant}
              className="group cursor-pointer relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] shadow-sm transition-shadow duration-500 group-hover:shadow-luxury-lg mb-6 bg-white">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-[1.04]"
                />
                
                {product.tag && (
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary">{product.tag}</span>
                  </div>
                )}
                
                {/* Floating CTA */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20">
                  <button className="bg-white text-black px-8 py-3 rounded-full uppercase text-xs tracking-widest font-medium hover:bg-black hover:text-white transition-colors duration-300">
                    {product.tag === "Launching Soon" ? "Notify Me" : "Quick Shop"}
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center">
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-xl font-serif mb-1 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                <p className="text-sm font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-widest">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
