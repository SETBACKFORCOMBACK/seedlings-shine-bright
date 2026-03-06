import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CarePlanSection from "@/components/CarePlanSection";

import AcademicSections from "@/components/AcademicSections";
import TherapiesSection from "@/components/TherapiesSection";
import SportsSection from "@/components/SportsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CarePlanSection />
      
      <AcademicSections />
      <TherapiesSection />
      <SportsSection />
      <VisionMissionSection />
      <FounderSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
