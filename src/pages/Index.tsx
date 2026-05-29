import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import GlobalAlert from "@/components/GlobalAlert";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FloatingButtons from "@/components/FloatingButtons";
import { SectionSkeleton } from "@/components/SectionSkeleton";
import { useSiteContent } from "@/components/SiteContentProvider";

// Lazy load below-fold sections for code splitting
const DownloadableFilesSection = lazy(() => import("@/components/DownloadableFilesSection"));
const AnnouncementsSection = lazy(() => import("@/components/AnnouncementsSection"));
const ProgramsSection = lazy(() => import("@/components/ProgramsSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const FacilitiesSection = lazy(() => import("@/components/FacilitiesSection"));
const AdmissionSection = lazy(() => import("@/components/AdmissionSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AchievementsSection = lazy(() => import("@/components/AchievementsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Premium Upgrades
const TeachersSection = lazy(() => import("@/components/TeachersSection"));
const EventsSection = lazy(() => import("@/components/EventsSection"));
const InfrastructureSlider = lazy(() => import("@/components/InfrastructureSlider"));

// Reusable Suspense wrapper for consistent skeleton loading
const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<SectionSkeleton variant="grid" lines={4} />}>
    {children}
  </Suspense>
);

const Index = () => {
  const { isLoading } = useSiteContent();

  return (
    <main className="pt-16">
      {/* Above-fold: Load immediately */}
      <GlobalAlert />
      <NewsTicker />
      <Navbar />
      <HeroSection />

      {/* Below-fold: Lazy load with skeleton fallback */}
      <LazySection>
        <AnnouncementsSection />
      </LazySection>

      <LazySection>
        <AboutSection />
      </LazySection>

      <LazySection>
        <ProgramsSection />
      </LazySection>

      <LazySection>
        <WhyChooseUs />
      </LazySection>

      <LazySection>
        <FacilitiesSection />
      </LazySection>

      <LazySection>
        <InfrastructureSlider />
      </LazySection>

      <LazySection>
        <DownloadableFilesSection />
      </LazySection>

      <LazySection>
        <AdmissionSection />
      </LazySection>

      <LazySection>
        <GallerySection />
      </LazySection>

      <LazySection>
        <TeachersSection />
      </LazySection>

      <LazySection>
        <EventsSection />
      </LazySection>

      <LazySection>
        <TestimonialsSection />
      </LazySection>

      <LazySection>
        <AchievementsSection />
      </LazySection>

      <LazySection>
        <ContactSection />
      </LazySection>

      <LazySection>
        <FAQSection />
      </LazySection>

      <LazySection>
        <Footer />
      </LazySection>

      <FloatingButtons />
    </main>
  );
};

export default Index;
