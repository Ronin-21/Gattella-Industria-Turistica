import AboutSection from "./components/AboutSection";
import BannerFooter from "./components/BannerFooter";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import HotelsSection from "./components/HotelsSection";
import PackagesSection from "./components/PackagesSection";
import ServicesSection from "./components/ServicesSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <AboutSection />
      <HotelsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <PackagesSection />
      <ContactSection />
      <BannerFooter />
    </main>
  );
}
