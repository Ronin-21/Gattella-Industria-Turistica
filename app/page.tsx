import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import HotelsSection from "./components/HotelsSection";
import PackagesSection from "./components/PackagesSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-0">
      <Hero />
      <WelcomeSection />
      <AboutSection />
      <HotelsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PackagesSection />
      <ContactSection />
    </main>
  );
}
