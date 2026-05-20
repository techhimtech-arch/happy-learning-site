import Navbar from "@/components/Navbar";
import GlobalAlert from "@/components/GlobalAlert";
import DownloadableFilesSection from "@/components/DownloadableFilesSection";
import NewsTicker from "@/components/NewsTicker";
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
import PageLoader from "@/components/PageLoader";
import { useSiteContent } from "@/components/SiteContentProvider";

const Index = () => {
  const { isLoading } = useSiteContent();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main className="pt-16">
      <GlobalAlert />
      <NewsTicker />
      <Navbar />
      <HeroSection />
      <AnnouncementsSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <DownloadableFilesSection />
      <AdmissionSection />
      <GallerySection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
