import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, Quote, Play, X } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

type TestimonialItem = {
  name: string;
  role: string;
  text: string;
  rating: number;
  videoUrl?: string;
};

const fallbackTestimonials: TestimonialItem[] = [
  {
    name: "Mrs. Priya Sharma",
    role: "Parent of Class 4 Student",
    text: "The robotic labs and interactive teaching methodologies have completely transformed my son's attitude towards science. He is excited to go to school every day!",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll as fallback
  },
  {
    name: "Dr. Amit Verma",
    role: "Parent of Class 8 Student",
    text: "Bright Futures offers an exceptional blend of premium academic rigor and co-curricular sports programs. The safety protocols on campus are also top-notch.",
    rating: 5,
  },
  {
    name: "Mrs. Katherine Cole",
    role: "Parent of Class 12 Student",
    text: "Fabulous faculty guidance! The digital library and personalized support from coordinators helped my daughter secure admissions into premier STEM institutes.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { content, t } = useSiteContent();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const dynamicTestimonials = (content.testimonialsList ?? []).map((item: any) => ({
    name: item.name || "",
    role: item.role || "Parent",
    text: item.text || "",
    rating: item.rating || 5,
    videoUrl: item.videoUrl,
  })).filter(t => t.name !== "");

  const testimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : fallbackTestimonials;

  // Helper to extract Youtube video ID
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url; // fallback
  };

  const handlePlay = (videoUrl: string) => {
    setActiveVideo(getYoutubeEmbedUrl(videoUrl));
    document.body.style.overflow = "hidden";
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto overflow-hidden">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="eyebrow">{t("test.eyebrow")}</span>
          <h2 className="section-title mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {content.testimonials.title || t("test.title")}
          </h2>
        </div>

        <div className="relative flex w-full overflow-hidden">
          {/* Gradient Edges for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          
          <div className="flex w-max min-w-full animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const hasVideo = Boolean(testimonial.videoUrl);

              return (
                <div key={`${testimonial.name}-${index}`} className="w-[350px] shrink-0">
                  <div className="premium-card group relative p-7 h-full flex flex-col justify-between border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                    {/* Quote icon overlay */}
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 transition-colors duration-500 group-hover:text-primary/30" />

                    <div className="space-y-4">
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                          <Star key={ratingIndex} className="h-3.5 w-3.5 fill-accent text-accent" />
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed text-white/70 italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-3">
                      {/* Profile */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary shrink-0 shadow-glow">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-heading text-sm font-semibold text-white">{testimonial.name}</div>
                          <div className="text-[11px] text-white/50">{testimonial.role}</div>
                        </div>
                      </div>

                      {/* Play Video button */}
                      {hasVideo && (
                        <button
                          onClick={() => handlePlay(testimonial.videoUrl!)}
                          className="group/btn flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
                          title={t("test.playVideo")}
                        >
                          <Play className="h-3.5 w-3.5 fill-accent-foreground text-accent-foreground transition-transform group-hover/btn:scale-110" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Lightbox Player Modal */}
        {activeVideo && (
          <div 
            onClick={handleCloseVideo}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-scale-in"
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container Box */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl"
            >
              <iframe
                src={activeVideo}
                title="Video testimonial"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
