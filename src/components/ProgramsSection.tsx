import ScrollReveal from "./ScrollReveal";
import { Baby, BookOpen, Layers, GraduationCap } from "lucide-react";

const programs = [
  { icon: Baby, title: "Pre-Primary", desc: "Play-based learning for ages 3-5. Building curiosity and social skills in a fun environment.", color: "bg-secondary/20 text-secondary-foreground" },
  { icon: BookOpen, title: "Primary School", desc: "Strong academic foundation with creative arts, sports, and language development for classes 1-5.", color: "bg-primary/10 text-primary" },
  { icon: Layers, title: "Middle School", desc: "Advanced learning with science labs, technology integration, and leadership programs for classes 6-8.", color: "bg-accent/10 text-accent" },
  { icon: GraduationCap, title: "Senior Secondary", desc: "Board exam preparation with career guidance and specialised streams for classes 9-12.", color: "bg-destructive/10 text-destructive" },
];

const ProgramsSection = () => (
  <section id="programs" className="section-padding section-light">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Programs</span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Programs for Every Stage
          </h2>
          <p className="text-muted-foreground">From playschool to board exams, we guide your child at every step.</p>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((prog, i) => (
          <ScrollReveal key={prog.title} delay={i * 100}>
            <div className="group card-shadow rounded-xl bg-card p-6 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-2">
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${prog.color}`}>
                <prog.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{prog.title}</h3>
              <p className="text-sm text-muted-foreground">{prog.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
