import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomesSection } from "@/components/sections/HomesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { VisionSection } from "@/components/sections/VisionSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <SystemSection />
        <HomesSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
