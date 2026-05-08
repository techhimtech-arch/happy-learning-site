import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FacilitiesSection from "@/components/FacilitiesSection";
import AdmissionSection from "@/components/AdmissionSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SiteContentProvider } from "@/components/SiteContentProvider";

const Index = () => (
  <SiteContentProvider>
    <main>
      <Navbar />
      <HeroSection />
      <AnnouncementsSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <AdmissionSection />
      <GallerySection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  </SiteContentProvider>
);

export default Index;
