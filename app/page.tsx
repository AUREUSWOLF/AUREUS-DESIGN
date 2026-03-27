import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ShowcaseSection } from "@/components/showcase-section";
import { FeaturedProject } from "@/components/featured-project";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ToolsSection } from "@/components/tools-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ShowcaseSection />
      <FeaturedProject />
      <CapabilitiesSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
