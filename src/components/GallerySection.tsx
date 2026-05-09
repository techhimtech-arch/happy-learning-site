import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const fallbackImages = [
  { src: gallery1, alt: "Students learning" },
  { src: gallery2, alt: "Smart classroom" },
  { src: gallery3, alt: "Playground activities" },
  { src: gallery4, alt: "School events" },
  { src: gallery5, alt: "School library" },
  { src: gallery6, alt: "Science lab" },
];

const GallerySection = () => {
  const { content } = useSiteContent();
  const [current, setCurrent] = useState(0);
  const images = content.gallery.images.length > 0 ? content.gallery.images : fallbackImages;

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.gallery.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.gallery.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <ScrollReveal delay={100}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img) => (
                <div key={img.alt} className="relative w-full shrink-0">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-sm font-medium text-white/90">
                    {img.alt}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-foreground shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-foreground shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
