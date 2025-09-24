import BannerFooter from "./components/BannerFooter";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import HotelsSection from "./components/HotelsSection";
import PackagesSection from "./components/PackagesSection";
import SeasonsSection from "./components/SeasonsSection";
import ServicesSection from "./components/ServicesSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <ServicesSection />
      <HotelsSection />
      <SeasonsSection />
      {/* <TestimonialsSection /> */}
      <PackagesSection />
      <ContactSection />
      <BannerFooter />
    </main>
  );
}
