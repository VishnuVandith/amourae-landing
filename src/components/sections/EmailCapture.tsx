"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant } from "@/utils/animations";

export function EmailCaptureSection() {
  return (
    <Section className="bg-primary/5 py-24 md:py-32" id="newsletter">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="max-w-[560px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Join The Inner Circle</h2>
        <p className="text-neutral-600 mb-8 font-light leading-relaxed">
          Unlock early access to new collections, exclusive masterclasses, and a welcome gift on your first order.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 px-6 py-4 rounded-full border border-neutral-200 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm"
          />
          <Button variant="primary" className="whitespace-nowrap px-10">
            Subscribe
          </Button>
        </form>
        <p className="text-[10px] text-neutral-400 mt-4">
          By subscribing, you agree to our Privacy Policy.
        </p>
      </motion.div>
    </Section>
  );
}
