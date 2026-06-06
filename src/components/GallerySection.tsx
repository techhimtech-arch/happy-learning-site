import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";
import { motion } from "framer-motion";

// Import local fallbacks
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  caption?: string;
};

const fallbackGallery: GalleryItem[] = [
  { src: gallery1, alt: "Students learning in modern environment", category: "classroom", caption: "Smart Interactive Learning Sessions" },
  { src: gallery2, alt: "Well-stocked digital library study space", category: "classroom", caption: "Digital Library Access Center" },
  { src: gallery3, alt: "Active physical activities play zone", category: "sports", caption: "Extensive Outdoor Sports Program" },
  { src: gallery4, alt: "Annual day cultural performances on stage", category: "events", caption: "Grand Annual Day Cultural Performance" },
  { src: gallery5, alt: "Secondary reference digital library room", category: "classroom", caption: "Senior Reference Section" },
  { src: gallery6, alt: "Fully automated STEM robotic testing tables", category: "labs", caption: "Advanced STEM Robotics Laboratory" },
];

const GallerySection = () => {
  const { content, t } = useSiteContent();
  
  // States
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Map Sanity fetched galleryImages to standard item format
  const dynamicImages: GalleryItem[] = (content.galleryImages ?? []).map((img: any) => ({
    src: img.imageUrl || "",
    alt: img.alt || "School gallery image",
    category: img.category ? img.category.toLowerCase().trim() : "classroom",
    caption: img.caption || img.alt || "",
  })).filter(img => img.src !== "");

  const images = dynamicImages.length > 0 ? dynamicImages : fallbackGallery;

  // Filters List
  const filters = [
    { code: "all", label: t("gallery.filter.all") },
    { code: "classroom", label: t("gallery.filter.classroom") },
    { code: "sports", label: t("gallery.filter.sports") },
    { code: "labs", label: t("gallery.filter.labs") },
    { code: "events", label: t("gallery.filter.events") },
  ];

  // Filtered array
  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    // Find index of the image in the filtered list
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(c => (c === 0 ? filteredImages.length - 1 : c! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(c => (c === filteredImages.length - 1 ? 0 : c! + 1));
  };

  return (
    <section id="gallery" className="section-padding section-light">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t("gallery.eyebrow")}</span>
          <h2 className="section-title mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {content.gallery.title || t("gallery.title")}
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.code}
              onClick={() => setActiveFilter(f.code)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === f.code
                  ? "bg-primary text-white shadow-glow ring-2 ring-primary/20"
                  : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Zero-G Display */}
        <div className="mx-auto mt-16 max-w-6xl columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 group/gallery">
          {filteredImages.map((img, index) => {
            const randomDuration = 4 + Math.random() * 3;
            const randomDelay = Math.random() * 2;
            const yOffset = 10 + Math.random() * 15;

            return (
              <motion.div
                key={`${img.src}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                animate={{ y: [0, -yOffset, 0] }}
                transition={{ 
                  y: { repeat: Infinity, duration: randomDuration, delay: randomDelay, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="break-inside-avoid"
              >
                <div 
                  onClick={() => openLightbox(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-sm transition-all duration-500 hover:!opacity-100 hover:scale-105 group-hover/gallery:opacity-40 hover:z-10 hover:shadow-glow"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Visual Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-5">
                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0 text-white">
                      <Maximize2 className="h-5 w-5 mb-2 text-white/80" />
                      <h4 className="font-heading text-base font-bold tracking-tight leading-snug">{img.caption}</h4>
                      <span className="text-xs uppercase font-bold text-primary tracking-widest mt-2 block">{img.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-screen Glassmorphic Lightbox */}
        {lightboxIndex !== null && (
          <div 
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-scale-in"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Close viewer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Slider Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Content Display Card */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center gap-4 select-none"
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/15"
              />
              
              {/* Caption Overlay Details */}
              <div className="glass-strong text-foreground text-center rounded-2xl px-6 py-4.5 max-w-xl border border-border/40 w-fit">
                <p className="font-heading text-sm font-semibold tracking-tight">
                  {filteredImages[lightboxIndex].caption}
                </p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mt-1">
                  {filteredImages[lightboxIndex].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
