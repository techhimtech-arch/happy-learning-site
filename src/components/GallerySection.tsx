import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Students learning" },
  { src: gallery2, alt: "Smart classroom" },
  { src: gallery3, alt: "Playground activities" },
  { src: gallery4, alt: "School events" },
  { src: gallery5, alt: "School library" },
  { src: gallery6, alt: "Science lab" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Gallery</span>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Life at Our School
            </h2>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="w-full shrink-0 object-cover aspect-video"
                loading="lazy"
                width={1280}
                height={854}
              />
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-background/60"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
