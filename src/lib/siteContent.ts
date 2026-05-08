import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export type SiteContent = {
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
  programsList?: Array<{ title: string; slug?: { current?: string }; excerpt?: string; featured?: boolean }>;
  testimonialsList?: Array<{ name: string; role: string; text: string; rating?: number }>;
  galleryImages?: Array<{ image?: string; alt?: string; caption?: string }>;
  teachersList?: Array<{ name: string; title?: string; bio?: string; photoUrl?: string }>;
  eventsList?: Array<{ title: string; date?: string; location?: string; description?: string; signupUrl?: string }>;
  announcementsList?: Array<{ title: string; slug?: { current?: string }; category?: string; imageUrl?: string; publishedAt?: string; featured?: boolean }>;
};

export const defaultSiteContent: SiteContent = {
  navigation: {
    brandName: "Bright Futures",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Apply Now",
    ctaHref: "#admission",
  },
  hero: {
    badge: "Admissions Open 2025-26",
    title: "Building Bright Futures for Your Child",
    subtitle: "Quality Education • Experienced Teachers • Safe Environment",
    primaryCtaLabel: "Apply for Admission",
    primaryCtaHref: "#admission",
    secondaryCtaLabel: "Explore Programs",
    secondaryCtaHref: "#programs",
    backgroundImageUrl: heroBg,
    stats: [
      { value: "1000+", label: "Students" },
      { value: "50+", label: "Qualified Teachers" },
      { value: "10+", label: "Years Experience" },
      { value: "Top", label: "Results" },
    ],
  },
  about: {
    eyebrow: "About Our School",
    title: "Nurturing Young Minds Since 2010",
    description:
      "Our school focuses on academic excellence, discipline and overall development of students. We provide a nurturing environment where every child is encouraged to discover their potential and grow into confident, responsible individuals.",
    highlights: [
      { title: "Academic Excellence", desc: "Comprehensive curriculum designed to build strong foundations and critical thinking." },
      { title: "Holistic Development", desc: "Focus on sports, arts, and co-curricular activities alongside academics." },
      { title: "Safe & Caring", desc: "A secure campus with caring staff dedicated to your child's well-being." },
    ],
  },
  programs: {
    eyebrow: "Our Programs",
    title: "Programs for Every Stage",
    description: "From playschool to board exams, we guide your child at every step.",
    items: [
      { title: "Pre-Primary", desc: "Play-based learning for ages 3-5. Building curiosity and social skills in a fun environment." },
      { title: "Primary School", desc: "Strong academic foundation with creative arts, sports, and language development for classes 1-5." },
      { title: "Middle School", desc: "Advanced learning with science labs, technology integration, and leadership programs for classes 6-8." },
      { title: "Senior Secondary", desc: "Board exam preparation with career guidance and specialised streams for classes 9-12." },
    ],
  },
  facilities: {
    eyebrow: "Facilities",
    title: "World-Class Facilities",
    items: [
      { title: "Library", desc: "Thousands of books and digital resources." },
      { title: "Computer Lab", desc: "Modern computers with internet access." },
      { title: "Science Lab", desc: "Fully equipped physics, chemistry & biology labs." },
      { title: "Playground", desc: "Spacious grounds for sports and recreation." },
      { title: "Transport", desc: "Safe and reliable bus service across the city." },
      { title: "CCTV Security", desc: "Complete campus surveillance for safety." },
    ],
  },
  admission: {
    eyebrow: "Admissions",
    title: "Simple Admission Process",
    badge: "Limited Seats Available — Apply Early!",
    steps: [
      { step: "01", title: "Fill Form", desc: "Complete the online admission form with student details." },
      { step: "02", title: "Visit School", desc: "Tour our campus and meet the faculty in person." },
      { step: "03", title: "Confirm Admission", desc: "Complete the enrollment and welcome your child aboard!" },
    ],
    formTitle: "Admission Enquiry",
    submitLabel: "Submit Enquiry",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Life at Our School",
    images: [
      { src: gallery1, alt: "Students learning" },
      { src: gallery2, alt: "Smart classroom" },
      { src: gallery3, alt: "Playground activities" },
      { src: gallery4, alt: "School events" },
      { src: gallery5, alt: "School library" },
      { src: gallery6, alt: "Science lab" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Parents Say",
    items: [
      { name: "Priya Sharma", role: "Parent of Class 5 Student", text: "The teachers genuinely care about every child. My daughter has grown so much in confidence and academics since joining.", rating: 5 },
      { name: "Rajesh Patel", role: "Parent of Class 8 Student", text: "Excellent facilities and a safe environment. The school maintains perfect balance between studies and activities.", rating: 5 },
      { name: "Anita Verma", role: "Parent of Pre-Primary Student", text: "The warmth and care shown by the staff is wonderful. My son loves going to school every day!", rating: 5 },
    ],
  },
  achievements: {
    eyebrow: "Achievements",
    title: "Our Proud Achievements",
    items: [
      { title: "98% Board Results", desc: "Consistently outstanding board exam results across all streams." },
      { title: "50+ Awards", desc: "Recognised at state and national level for academic and sports excellence." },
      { title: "Student Success", desc: "Alumni in top universities including IITs, AIIMS, and international institutions." },
    ],
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Get in Touch",
    details: [
      { title: "Address", text: "123 Education Lane, Knowledge City, India - 110001" },
      { title: "Phone", text: "+91 98765 43210" },
      { title: "Email", text: "info@brightfutures.edu" },
      { title: "School Timing", text: "Monday - Saturday: 8:00 AM - 3:00 PM" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.233!2d77.209!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      { q: "What are the school fees?", a: "Our fee structure is competitive and transparent. Please contact the admission office or fill the enquiry form for detailed fee information for each class." },
      { q: "What is the admission process?", a: "The admission process is simple: fill the online form, visit the school for a campus tour, and complete the enrollment. We also conduct a small interaction session with the child." },
      { q: "Is transport facility available?", a: "Yes, we provide safe and reliable bus transport covering all major routes across the city. GPS-tracked buses with trained attendants are available." },
      { q: "What facilities does the school have?", a: "We have smart classrooms, fully-equipped science and computer labs, a large library, sports grounds, CCTV security, and a hygienic canteen." },
      { q: "What curriculum does the school follow?", a: "We follow the CBSE curriculum with additional focus on practical learning, co-curricular activities, and overall personality development." },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "What Makes Us Different",
    items: [
      { title: "Experienced Faculty", desc: "Highly qualified and passionate teachers." },
      { title: "Smart Classrooms", desc: "Technology-enabled interactive learning." },
      { title: "Safe Campus", desc: "24/7 CCTV surveillance and secure premises." },
      { title: "Sports & Activities", desc: "Wide range of sports and co-curricular activities." },
      { title: "Personal Attention", desc: "Low student-teacher ratio for individual care." },
      { title: "Modern Methods", desc: "Innovative and updated teaching approaches." },
    ],
  },
  footer: {
    brandName: "Bright Futures",
    description: "Building bright futures for your child through quality education, experienced teachers, and a safe learning environment.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    programs: ["Pre-Primary", "Primary School", "Middle School", "Senior Secondary"],
    contactDetails: [
      { label: "Address", text: "123 Education Lane, Knowledge City" },
      { label: "Phone", text: "+91 98765 43210" },
      { label: "Email", text: "info@brightfutures.edu" },
    ],
    socialLinks: [
      { platform: "Facebook", href: "#" },
      { platform: "Twitter", href: "#" },
      { platform: "Instagram", href: "#" },
      { platform: "YouTube", href: "#" },
    ],
    copyrightText: "© 2025 Bright Futures School. All rights reserved.",
    poweredByText: "TechHim Solutions",
    poweredByHref: "#",
  },
  floatingButtons: {
    phoneNumber: "+919876543210",
    whatsappNumber: "+919876543210",
    whatsappMessage: "Hello, I want to enquire about admission",
  },
};

export const siteContentQuery = `*[_type == "siteSettings"][0]{
  navigation,
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
  footer,
  floatingButtons
}`;

export const programsListQuery = `*[_type == "program"]{title, slug, excerpt, featured, "thumbnailUrl": thumbnail.asset->url}`;

export const testimonialsListQuery = `*[_type == "testimonial"]{name, role, text, rating}`;

export const galleryImagesQuery = `*[_type == "galleryImage"]{"imageUrl": image.asset->url, alt, caption, category}`;

export const teachersListQuery = `*[_type == "teacher"]{name, title, bio, "photoUrl": photo.asset->url, email, phone}`;

export const eventsListQuery = `*[_type == "event"]{title, date, location, description, signupUrl}`;

export const announcementsListQuery = `*[_type == "announcement"] | order(publishedAt desc) {title, slug, category, "imageUrl": image.asset->url, publishedAt, featured}`;

function mergeArray<T>(fallback: T[], incoming?: T[]) {
  return incoming && incoming.length > 0 ? incoming : fallback;
}

export function mergeSiteContent(incoming?: Partial<SiteContent> | null): SiteContent {
  if (!incoming) {
    return defaultSiteContent;
  }

  return {
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
  };
}
