import ScrollReveal from "./ScrollReveal";
import { Baby, BookOpen, Layers, GraduationCap, ArrowRight } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const programIcons = [Baby, BookOpen, Layers, GraduationCap];
const programGradients = [
  "from-primary-50 to-primary-100/50",
  "from-accent-50 to-accent-100/30",
  "from-secondary-50 to-secondary-100/30",
  "from-primary-50 to-accent-50/30",
];
const programIconColors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-secondary/15 text-secondary",
  "bg-primary/10 text-primary-700",
];

const ProgramsSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="programs" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.programs.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.programs.title}
            </h2>
            <p className="section-subtitle mt-4">{content.programs.description}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.programs.items.map((prog, index) => {
            const Icon = programIcons[index] ?? BookOpen;

            return (
              <ScrollReveal key={prog.title} delay={index * 100}>
                <div className="premium-card group relative overflow-hidden p-6">
                  {/* Gradient background accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${programGradients[index] ?? programGradients[0]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative">
                    <div className={`icon-container-lg mb-5 ${programIconColors[index] ?? programIconColors[0]} transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground">{prog.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{prog.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
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

export default ProgramsSection;
