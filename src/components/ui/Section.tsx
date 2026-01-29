import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full px-6 md:px-12",
        "py-[64px] md:py-[80px] lg:py-[120px]", // 64px mobile, 80px tablet, 120px desktop
        "flex justify-center",
        className
      )}
    >
      <div className="w-full max-w-[1280px]">
        {children}
      </div>
    </section>
  );
}
