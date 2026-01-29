import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out",
          "font-medium tracking-wide uppercase text-sm",
          "disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants
          variant === "primary" && "bg-primary text-white hover:bg-primary-hover shadow-luxury-sm hover:shadow-luxury-lg hover:scale-105",
          variant === "secondary" && "bg-accent text-primary hover:bg-white hover:text-primary-hover",
          variant === "outline" && "border border-current text-primary hover:bg-primary hover:text-white",
          variant === "ghost" && "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm",

          // Sizes
          size === "sm" && "h-10 px-6",
          size === "md" && "h-12 px-8",
          size === "lg" && "h-14 px-10 text-base",

          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
