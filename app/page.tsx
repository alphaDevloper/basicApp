// app/page.js
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoTicker />
      <CTASection />
      <FAQSection />
      {/* Other sections */}
    </main>
  );
}
