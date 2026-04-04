import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/layout/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { OverviewSection } from "./components/sections/overview-section";
import { IntroductionSection } from "./components/sections/introduction-section";
import { PartnershipSection } from "./components/sections/partnership-section";
import { AmenitiesSection } from "./components/sections/amenities-section";
import { ArchitectureSection } from "./components/sections/architecture-section";
import { FloorPlansSection } from "./components/sections/floor-plans-section";
import { GallerySection } from "./components/sections/gallery-section";
import { NewsSection } from "./components/sections/news-section";
import { ContactSection } from "./components/sections/contact-section";
import { Footer } from "./components/layout/footer";

function App() {
  return (
    <div className="font-sans text-secondary">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <IntroductionSection />
        <PartnershipSection />
        <AmenitiesSection />
        <ArchitectureSection />
        <FloorPlansSection />
        <GallerySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
