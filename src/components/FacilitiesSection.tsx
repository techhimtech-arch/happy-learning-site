import ScrollReveal from "./ScrollReveal";
import { BookOpen, Monitor, FlaskConical, TreePine, Bus, Camera } from "lucide-react";

const facilities = [
  { icon: BookOpen, title: "Library", desc: "Thousands of books and digital resources." },
  { icon: Monitor, title: "Computer Lab", desc: "Modern computers with internet access." },
  { icon: FlaskConical, title: "Science Lab", desc: "Fully equipped physics, chemistry & biology labs." },
  { icon: TreePine, title: "Playground", desc: "Spacious grounds for sports and recreation." },
  { icon: Bus, title: "Transport", desc: "Safe and reliable bus service across the city." },
  { icon: Camera, title: "CCTV Security", desc: "Complete campus surveillance for safety." },
];

const FacilitiesSection = () => (
  <section id="facilities" className="section-padding section-light">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Facilities</span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            World-Class Facilities
          </h2>
        </div>
      </ScrollReveal>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 80}>
            <div className="card-shadow rounded-xl bg-card p-6 text-center transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <f.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
