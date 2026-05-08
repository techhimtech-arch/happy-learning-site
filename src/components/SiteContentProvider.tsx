import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { defaultSiteContent, mergeSiteContent, siteContentQuery, brandingQuery, navigationQuery, footerQuery, programsListQuery, testimonialsListQuery, galleryImagesQuery, teachersListQuery, eventsListQuery, announcementsListQuery, type SiteContent } from "@/lib/siteContent";

type SiteContentContextValue = {
  content: SiteContent;
  isLoading: boolean;
  isSanityConfigured: boolean;
  error: string | null;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      setIsLoading(true);

      try {
        const [siteData, brandingData, navigationData, footerData, programs, testimonials, gallery, teachers, events, announcements] = await Promise.all([
          sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery),
          sanityClient.fetch<any>(brandingQuery),
          sanityClient.fetch<any>(navigationQuery),
          sanityClient.fetch<any>(footerQuery),
          sanityClient.fetch<any[]>(programsListQuery),
          sanityClient.fetch<any[]>(testimonialsListQuery),
          sanityClient.fetch<any[]>(galleryImagesQuery),
          sanityClient.fetch<any[]>(teachersListQuery),
          sanityClient.fetch<any[]>(eventsListQuery),
          sanityClient.fetch<any[]>(announcementsListQuery),
        ]);

        if (!cancelled) {
          const merged = mergeSiteContent(siteData);
          // attach lists if present
          const final = {
            ...merged,
            branding: brandingData ? { ...merged.branding, ...brandingData } : merged.branding,
            navigation: navigationData
              ? { ...merged.navigation, ...navigationData, links: navigationData.links?.length ? navigationData.links : merged.navigation.links }
              : merged.navigation,
            footer: footerData
              ? {
                  ...merged.footer,
                  ...footerData,
                  quickLinks: footerData.quickLinks?.length ? footerData.quickLinks : merged.footer.quickLinks,
                  programs: footerData.programs?.length ? footerData.programs : merged.footer.programs,
                  contactDetails: footerData.contactDetails?.length ? footerData.contactDetails : merged.footer.contactDetails,
                  socialLinks: footerData.socialLinks?.length ? footerData.socialLinks : merged.footer.socialLinks,
                }
              : merged.footer,
            programsList: programs && programs.length > 0 ? programs : merged.programsList,
            testimonialsList: testimonials && testimonials.length > 0 ? testimonials : merged.testimonialsList,
            galleryImages: gallery && gallery.length > 0 ? gallery : merged.galleryImages,
            teachersList: teachers && teachers.length > 0 ? teachers : merged.teachersList,
            eventsList: events && events.length > 0 ? events : merged.eventsList,
            announcementsList: announcements && announcements.length > 0 ? announcements : merged.announcementsList,
          } as SiteContent;

          setContent(final);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load Sanity content");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return <SiteContentContext.Provider value={{ content, isLoading, isSanityConfigured, error }}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }

  return context;
};
