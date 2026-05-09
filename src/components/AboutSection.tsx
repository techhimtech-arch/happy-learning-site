import ScrollReveal from "./ScrollReveal";
import { BookOpen, Target, Heart } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const aboutIcons = [BookOpen, Target, Heart];
const iconColors = [
  "bg-primary-50 text-primary",
  "bg-accent-50 text-accent",
  "bg-secondary-50 text-secondary",
];

const AboutSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{content.about.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.about.title}
            </h2>
            <p className="section-subtitle mt-5">
              {content.about.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {content.about.highlights.map((item, index) => {
            const Icon = aboutIcons[index] ?? BookOpen;
            const colorClass = iconColors[index] ?? iconColors[0];

            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="premium-card group p-8">
                  <div className={`icon-container-lg mb-5 ${colorClass} transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2.5 font-heading text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
