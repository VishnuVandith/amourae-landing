"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm text-neutral-900 border-b border-neutral-100" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu className="w-6 h-6" strokeWidth={1} />
        </button>

        {/* Desktop Nav Left */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium">
          <Link href="/skincare" className="hover:opacity-70 transition-opacity">Skincare</Link>
          <Link href="/fragrance" className="hover:opacity-70 transition-opacity">Fragrance</Link>
          <Link href="/gift-sets" className="hover:opacity-70 transition-opacity">Gift Sets</Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center">
          <Link href="/" className="font-serif text-2xl md:text-3xl tracking-widest font-bold">
            AMOURAÉ
          </Link>
        </div>

        {/* Desktop Nav Right */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium">
          <Link href="/our-story" className="hover:opacity-70 transition-opacity">Our Story</Link>
          <Link href="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
          <div className="flex items-center gap-6 border-l border-current pl-6 ml-2">
            <button className="hover:opacity-70 transition-opacity">
              <Search className="w-4 h-4" />
            </button>
            <button className="hover:opacity-70 transition-opacity relative">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-[10px] text-white flex items-center justify-center rounded-full leading-none">0</span>
            </button>
          </div>
        </nav>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <button>
            <ShoppingBag className="w-5 h-5" strokeWidth={1} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
