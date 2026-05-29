import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export type SiteContent = {
  branding: {
    brandName: string;
    tagline: string;
    logoUrl?: string;
  };
  navigation: {
    brandName: string;
    links: Array<{ label: string; href: string }>;
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    backgroundImageUrl: string;
    stats: Array<{ value: string; label: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: Array<{ title: string; desc: string }>;
  };
  programs: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  };
  facilities: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  admission: {
    eyebrow: string;
    title: string;
    badge: string;
    steps: Array<{ step: string; title: string; desc: string }>;
    formTitle: string;
    submitLabel: string;
    webhookUrl?: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    images: Array<{ src: string; alt: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Array<{ name: string; role: string; text: string; rating: number }>;
  };
  achievements: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    details: Array<{ title: string; text: string }>;
    mapEmbedUrl: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  footer: {
    brandName: string;
    description: string;
    quickLinks: Array<{ label: string; href: string }>;
    programs: string[];
    contactDetails: Array<{ label: string; text: string }>;
    socialLinks: Array<{ platform: string; href: string }>;
    copyrightText: string;
    poweredByText: string;
    poweredByHref: string;
  };
  floatingButtons: {
    phoneNumber: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  teachersSection?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
  eventsSection?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
  programsList?: Array<{ title: string; slug?: { current?: string }; excerpt?: string; featured?: boolean }>;
  testimonialsList?: Array<{ name: string; role: string; text: string; rating?: number; videoUrl?: string }>;
  galleryImages?: Array<{ image?: string; alt?: string; caption?: string }>;
  teachersList?: Array<{ name: string; title?: string; bio?: string; photoUrl?: string }>;
  eventsList?: Array<{ title: string; date?: string; location?: string; description?: string; signupUrl?: string }>;
  announcementsList?: Array<{ title: string; slug?: { current?: string }; category?: string; imageUrl?: string; publishedAt?: string; featured?: boolean }>;
  globalAlert?: { isActive: boolean; message: string; link?: string };
  downloadableFilesList?: Array<{ title: string; fileUrl: string; category?: string }>;
};

export const defaultSiteContent: SiteContent = {
  branding: { brandName: "", tagline: "", logoUrl: "" },
  navigation: { brandName: "", links: [], ctaLabel: "", ctaHref: "" },
  hero: { badge: "", title: "", subtitle: "", primaryCtaLabel: "", primaryCtaHref: "", secondaryCtaLabel: "", secondaryCtaHref: "", backgroundImageUrl: "", stats: [] },
  about: { eyebrow: "", title: "", description: "", highlights: [] },
  programs: { eyebrow: "", title: "", description: "", items: [] },
  facilities: { eyebrow: "", title: "", items: [] },
  admission: { eyebrow: "", title: "", badge: "", steps: [], formTitle: "", submitLabel: "", webhookUrl: "" },
  gallery: { eyebrow: "", title: "", images: [] },
  testimonials: { eyebrow: "", title: "", items: [] },
  achievements: { eyebrow: "", title: "", items: [] },
  contact: { eyebrow: "", title: "", details: [], mapEmbedUrl: "" },
  faq: { eyebrow: "", title: "", items: [] },
  whyChooseUs: { eyebrow: "", title: "", items: [] },
  footer: { brandName: "", description: "", quickLinks: [], programs: [], contactDetails: [], socialLinks: [], copyrightText: "", poweredByText: "", poweredByHref: "" },
  floatingButtons: { phoneNumber: "", whatsappNumber: "", whatsappMessage: "" },
  teachersSection: { eyebrow: "", title: "", subtitle: "" },
  eventsSection: { eyebrow: "", title: "", subtitle: "" },
  globalAlert: { isActive: false, message: "" },
};

export const siteContentQuery = `*[_type == "siteSettings"][0]{
  hero,
  about,
  programs,
  facilities,
  admission,
  gallery,
  testimonials,
  achievements,
  contact,
  faq,
  whyChooseUs,
  floatingButtons,
  teachersSection,
  eventsSection
}`;

export const brandingQuery = `*[_type == "branding"][0]{brandName, tagline, "logoUrl": logo.asset->url}`;

export const navigationQuery = `*[_type == "navigation"][0]{links, ctaLabel, ctaHref}`;

export const footerQuery = `*[_type == "footer"][0]{description, quickLinks, programs, contactDetails, socialLinks, copyrightText, poweredByText, poweredByHref}`;

export const programsListQuery = `*[_type == "program"]{title, slug, excerpt, featured, "thumbnailUrl": thumbnail.asset->url}`;

export const testimonialsListQuery = `*[_type == "testimonial"]{name, role, text, rating, videoUrl}`;

export const galleryImagesQuery = `*[_type == "galleryImage"]{"imageUrl": image.asset->url, alt, caption, category}`;

export const teachersListQuery = `*[_type == "teacher"]{name, title, bio, "photoUrl": photo.asset->url, email, phone}`;

export const eventsListQuery = `*[_type == "event"]{title, date, location, description, signupUrl}`;

export const announcementsListQuery = `*[_type == "announcement"] | order(publishedAt desc) {title, slug, category, "imageUrl": image.asset->url, publishedAt, featured}`;

export const globalAlertQuery = `*[_type == "globalAlert"][0]{isActive, message, link}`;

export const downloadableFilesListQuery = `*[_type == "downloadableFile"]{title, "fileUrl": file.asset->url, category}`;

function mergeArray<T>(fallback: T[], incoming?: T[]) {
  return incoming && incoming.length > 0 ? incoming : fallback;
}

export function mergeSiteContent(incoming?: Partial<SiteContent> | null): SiteContent {
  if (!incoming) {
    return defaultSiteContent;
  }

  return {
    branding: {
      ...defaultSiteContent.branding,
      ...incoming.branding,
    },
    navigation: {
      ...defaultSiteContent.navigation,
      ...incoming.navigation,
      links: mergeArray(defaultSiteContent.navigation.links, incoming.navigation?.links),
    },
    hero: {
      ...defaultSiteContent.hero,
      ...incoming.hero,
      stats: mergeArray(defaultSiteContent.hero.stats, incoming.hero?.stats),
      backgroundImageUrl: incoming.hero?.backgroundImageUrl || defaultSiteContent.hero.backgroundImageUrl,
    },
    about: {
      ...defaultSiteContent.about,
      ...incoming.about,
      highlights: mergeArray(defaultSiteContent.about.highlights, incoming.about?.highlights),
    },
    programs: {
      ...defaultSiteContent.programs,
      ...incoming.programs,
      items: mergeArray(defaultSiteContent.programs.items, incoming.programs?.items),
    },
    facilities: {
      ...defaultSiteContent.facilities,
      ...incoming.facilities,
      items: mergeArray(defaultSiteContent.facilities.items, incoming.facilities?.items),
    },
    admission: {
      ...defaultSiteContent.admission,
      ...incoming.admission,
      steps: mergeArray(defaultSiteContent.admission.steps, incoming.admission?.steps),
      webhookUrl: incoming.admission?.webhookUrl || defaultSiteContent.admission.webhookUrl,
    },
    gallery: {
      ...defaultSiteContent.gallery,
      ...incoming.gallery,
      images: mergeArray(defaultSiteContent.gallery.images, incoming.gallery?.images),
    },
    testimonials: {
      ...defaultSiteContent.testimonials,
      ...incoming.testimonials,
      items: mergeArray(defaultSiteContent.testimonials.items, incoming.testimonials?.items),
    },
    achievements: {
      ...defaultSiteContent.achievements,
      ...incoming.achievements,
      items: mergeArray(defaultSiteContent.achievements.items, incoming.achievements?.items),
    },
    contact: {
      ...defaultSiteContent.contact,
      ...incoming.contact,
      details: mergeArray(defaultSiteContent.contact.details, incoming.contact?.details),
      mapEmbedUrl: incoming.contact?.mapEmbedUrl || defaultSiteContent.contact.mapEmbedUrl,
    },
    faq: {
      ...defaultSiteContent.faq,
      ...incoming.faq,
      items: mergeArray(defaultSiteContent.faq.items, incoming.faq?.items),
    },
    whyChooseUs: {
      ...defaultSiteContent.whyChooseUs,
      ...incoming.whyChooseUs,
      items: mergeArray(defaultSiteContent.whyChooseUs.items, incoming.whyChooseUs?.items),
    },
    footer: {
      ...defaultSiteContent.footer,
      ...incoming.footer,
      quickLinks: mergeArray(defaultSiteContent.footer.quickLinks, incoming.footer?.quickLinks),
      programs: mergeArray(defaultSiteContent.footer.programs, incoming.footer?.programs),
      contactDetails: mergeArray(defaultSiteContent.footer.contactDetails, incoming.footer?.contactDetails),
      socialLinks: mergeArray(defaultSiteContent.footer.socialLinks, incoming.footer?.socialLinks),
    },
    floatingButtons: {
      ...defaultSiteContent.floatingButtons,
      ...incoming.floatingButtons,
    },
    teachersSection: incoming.teachersSection || defaultSiteContent.teachersSection,
    eventsSection: incoming.eventsSection || defaultSiteContent.eventsSection,
    globalAlert: incoming.globalAlert || defaultSiteContent.globalAlert,
  };
}
