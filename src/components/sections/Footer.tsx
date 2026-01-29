import { Section } from "@/components/ui/Section";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif tracking-widest mb-6">AMOURAÉ</h3>
            <div className="flex gap-4">
               <a href="#" className="hover:text-primary-hover transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="hover:text-primary-hover transition-colors"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="hover:text-primary-hover transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Shop</h4>
             <ul className="space-y-4 text-sm font-light text-white/80">
               <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Fragrance</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
             </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Company</h4>
             <ul className="space-y-4 text-sm font-light text-white/80">
               <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
             </ul>
          </div>
          
           <div className="col-span-1">
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Service</h4>
             <ul className="space-y-4 text-sm font-light text-white/80">
               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
               <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-widest">
           <p>© 2024 Amouraé Paris. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Use</a>
           </div>
        </div>
      </Section>
    </footer>
  );
}
