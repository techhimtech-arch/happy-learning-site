import ScrollReveal from "./ScrollReveal";
import { BookOpen, Monitor, FlaskConical, TreePine, Bus, Camera } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const facilityIcons = [BookOpen, Monitor, FlaskConical, TreePine, Bus, Camera];

const FacilitiesSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="facilities" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.facilities.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.facilities.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.facilities.items.map((facility, index) => {
            const Icon = facilityIcons[index] ?? BookOpen;

            return (
              <ScrollReveal key={facility.title} delay={index * 80}>
                <div className="premium-card group p-6 text-center">
                  <div className="icon-container-lg mx-auto mb-4 bg-accent-50 text-accent transition-all duration-500 group-hover:scale-110 group-hover:shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">{facility.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{facility.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
