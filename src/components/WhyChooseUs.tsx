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
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.whyChooseUs.eyebrow}</span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.whyChooseUs.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.whyChooseUs.items.map((r, i) => {
            const Icon = reasonIcons[i] ?? Users;

            return (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-xl border bg-card p-5 transition-all duration-300 hover:card-shadow hover:-translate-y-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
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
