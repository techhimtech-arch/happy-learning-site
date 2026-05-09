import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const TestimonialsSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.testimonials.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.testimonials.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {content.testimonials.items.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 100}>
              <div className="premium-card group relative p-7">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/5 transition-colors duration-500 group-hover:text-primary/10" />

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                    <Star key={ratingIndex} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
