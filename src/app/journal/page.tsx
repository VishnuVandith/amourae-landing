"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/utils/animations";

const articles = [
  {
    id: 1,
    category: "Skin Education",
    title: "The Science of Circadian Rhythms",
    excerpt: "Why your skin needs different care at night than it does during the day.",
    image: "/images/hero-bg.webp",
    date: "Oct 12, 2025"
  },
  {
    id: 2,
    category: "Rituals",
    title: "Slow Beauty: A Meditation",
    excerpt: "Reclaiming your time in the bathroom mirror.",
    image: "/images/brand-story.webp",
    date: "Sep 28, 2025"
  },
   {
    id: 3,
    category: "Ingredients",
    title: "Why We Use Blue Tansy",
    excerpt: "The calming power of this rare Moroccan flower explained.",
    image: "/images/product-2.webp",
    date: "Sep 15, 2025"
  },
];

export default function JournalPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <PageHeader 
        title="The Edit" 
        subtitle="Journal of Aesthetics"
        image="/images/video-philosophy.webp"
      />
      
      <Section>
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {articles.map((article) => (
            <motion.div 
               key={article.id}
               variants={fadeUpVariant}
               className="group cursor-pointer flex flex-col"
            >
               <div className="relative aspect-video overflow-hidden rounded-[16px] mb-6">
                 <img 
                   src={article.image} 
                   alt={article.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               <div className="flex-1">
                 <div className="flex justify-between items-center mb-3 text-xs uppercase tracking-widest text-neutral-500">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                 </div>
                 <h3 className="text-2xl font-serif mb-3 leading-tight group-hover:text-primary transition-colors">
                   {article.title}
                 </h3>
                 <p className="text-neutral-600 font-light leading-relaxed mb-4">
                   {article.excerpt}
                 </p>
                 <span className="text-sm underline underline-offset-4 decoration-neutral-300 group-hover:decoration-primary transition-all">Read Article</span>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
