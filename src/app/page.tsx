"use client";

import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/Hero";
import { BrandStorySection } from "@/components/sections/BrandStory";
import { CollectionCardsSection } from "@/components/sections/FeaturedCollection";
import { VideoPhilosophySection } from "@/components/sections/VideoPhilosophy";
import { TrustPillarsSection } from "@/components/sections/TrustPillars";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { EmailCaptureSection } from "@/components/sections/EmailCapture";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <VideoPhilosophySection />
      <CollectionCardsSection />
      <TrustPillarsSection />
      <TestimonialsSection />
      <EmailCaptureSection />
      <Footer />
    </main>
  );
}
