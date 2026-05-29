import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { defaultSiteContent, mergeSiteContent, siteContentQuery, brandingQuery, navigationQuery, footerQuery, programsListQuery, testimonialsListQuery, galleryImagesQuery, teachersListQuery, eventsListQuery, announcementsListQuery, globalAlertQuery, downloadableFilesListQuery, type SiteContent } from "@/lib/siteContent";
import { translations, type Language } from "@/lib/translations";

type SiteContentContextValue = {
  content: SiteContent;
  isLoading: boolean;
  isSanityConfigured: boolean;
  error: string | null;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language]?.[key] ?? key;
  };

  useEffect(() => {
    if (!isSanityConfigured) {
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      setIsLoading(true);

      try {
        // PHASE 1: Load critical data for above-fold sections (Branding, Navigation, Hero, GlobalAlert)
        const [brandingData, navigationData, siteData, globalAlertData] = await Promise.all([
          sanityClient.fetch<any>(brandingQuery),
          sanityClient.fetch<any>(navigationQuery),
          sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery),
          sanityClient.fetch<any>(globalAlertQuery),
        ]);

        if (!cancelled) {
          const merged = mergeSiteContent(siteData);
          const criticalContent = {
            ...merged,
            branding: brandingData ? { ...merged.branding, ...brandingData } : merged.branding,
            navigation: navigationData
              ? { ...merged.navigation, ...navigationData, links: navigationData.links?.length ? navigationData.links : merged.navigation.links }
              : merged.navigation,
            globalAlert: globalAlertData || merged.globalAlert,
          } as SiteContent;

          setContent(criticalContent);

          // PHASE 2: Load remaining data in background (below-fold sections)
          Promise.all([
            sanityClient.fetch<any>(footerQuery),
            sanityClient.fetch<any[]>(programsListQuery),
            sanityClient.fetch<any[]>(testimonialsListQuery),
            sanityClient.fetch<any[]>(galleryImagesQuery),
            sanityClient.fetch<any[]>(teachersListQuery),
            sanityClient.fetch<any[]>(eventsListQuery),
            sanityClient.fetch<any[]>(announcementsListQuery),
            sanityClient.fetch<any[]>(downloadableFilesListQuery),
          ])
            .then(([footerData, programs, testimonials, gallery, teachers, events, announcements, downloadableFiles]) => {
              if (!cancelled) {
                setContent((prev) => ({
                  ...prev,
                  footer: footerData
                    ? {
                        ...prev.footer,
                        ...footerData,
                        quickLinks: footerData.quickLinks?.length ? footerData.quickLinks : prev.footer.quickLinks,
                        programs: footerData.programs?.length ? footerData.programs : prev.footer.programs,
                        contactDetails: footerData.contactDetails?.length ? footerData.contactDetails : prev.footer.contactDetails,
                        socialLinks: footerData.socialLinks?.length ? footerData.socialLinks : prev.footer.socialLinks,
                      }
                    : prev.footer,
                  programsList: programs && programs.length > 0 ? programs : prev.programsList,
                  testimonialsList: testimonials && testimonials.length > 0 ? testimonials : prev.testimonialsList,
                  galleryImages: gallery && gallery.length > 0 ? gallery : prev.galleryImages,
                  teachersList: teachers && teachers.length > 0 ? teachers : prev.teachersList,
                  eventsList: events && events.length > 0 ? events : prev.eventsList,
                  announcementsList: announcements && announcements.length > 0 ? announcements : prev.announcementsList,
                  downloadableFilesList: downloadableFiles && downloadableFiles.length > 0 ? downloadableFiles : prev.downloadableFilesList,
                }));
              }
            })
            .catch(() => {
              // Silently fail - defaults will be used
            })
            .finally(() => {
              if (!cancelled) {
                setIsLoading(false);
              }
            });
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load Sanity content");
          setIsLoading(false);
        }
      }
    };

    void loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, isLoading, isSanityConfigured, error, language, setLanguage, t }}>
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }

  return context;
};

