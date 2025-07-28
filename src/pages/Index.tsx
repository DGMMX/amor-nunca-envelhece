import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TourSection from "@/components/TourSection";
import ServicesSection from "@/components/ServicesSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <TourSection />
      <ServicesSection />
      <ConversionSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
