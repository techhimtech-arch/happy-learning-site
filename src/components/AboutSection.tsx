import ScrollReveal from "./ScrollReveal";
import { BookOpen, Target, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">About Our School</span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Nurturing Young Minds Since 2010
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Our school focuses on academic excellence, discipline and overall development of students. We provide a nurturing environment where every child is encouraged to discover their potential and grow into confident, responsible individuals.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {[
          { icon: BookOpen, title: "Academic Excellence", desc: "Comprehensive curriculum designed to build strong foundations and critical thinking." },
          { icon: Target, title: "Holistic Development", desc: "Focus on sports, arts, and co-curricular activities alongside academics." },
          { icon: Heart, title: "Safe & Caring", desc: "A secure campus with caring staff dedicated to your child's well-being." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 100}>
            <div className="card-shadow rounded-xl bg-card p-6 text-center transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
