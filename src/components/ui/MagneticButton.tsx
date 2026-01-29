"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function MagneticButton({ children, className, variant = "primary", size = "md", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: x * 0.5, y: y * 0.5 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center rounded-full transition-colors duration-300",
        "font-medium tracking-wide uppercase text-sm z-10",
        
         // Variants (Duplicated from Button.tsx for style consistency)
         variant === "primary" && "bg-primary text-white hover:bg-primary-hover shadow-luxury-sm",
         variant === "secondary" && "bg-accent text-primary hover:bg-white hover:text-primary-hover",
         variant === "outline" && "border border-current text-primary hover:bg-primary hover:text-white",
         variant === "ghost" && "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm",

         // Sizes
         size === "sm" && "h-10 px-6",
         size === "md" && "h-12 px-8",
         size === "lg" && "h-14 px-10 text-base",

        className
      )}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
    </motion.button>
  );
}
