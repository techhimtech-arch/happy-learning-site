import ScrollReveal from "./ScrollReveal";
import { Users, Monitor, Shield, Dribbble, Heart, Lightbulb } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const reasonIcons = [Users, Monitor, Shield, Dribbble, Heart, Lightbulb];

const WhyChooseUs = () => {
  const { content } = useSiteContent();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.whyChooseUs.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.whyChooseUs.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.whyChooseUs.items.map((r, i) => {
            const Icon = reasonIcons[i] ?? Users;

            return (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="premium-card group flex items-start gap-4 p-6">
                  <div className="icon-container-md shrink-0 bg-primary-50 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
