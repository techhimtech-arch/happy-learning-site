import ScrollReveal from "./ScrollReveal";
import { Users, Monitor, Shield, Dribbble, Heart, Lightbulb } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Faculty", desc: "Highly qualified and passionate teachers." },
  { icon: Monitor, title: "Smart Classrooms", desc: "Technology-enabled interactive learning." },
  { icon: Shield, title: "Safe Campus", desc: "24/7 CCTV surveillance and secure premises." },
  { icon: Dribbble, title: "Sports & Activities", desc: "Wide range of sports and co-curricular activities." },
  { icon: Heart, title: "Personal Attention", desc: "Low student-teacher ratio for individual care." },
  { icon: Lightbulb, title: "Modern Methods", desc: "Innovative and updated teaching approaches." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Makes Us Different
          </h2>
        </div>
      </ScrollReveal>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 80}>
            <div className="flex items-start gap-4 rounded-xl border bg-card p-5 transition-all duration-300 hover:card-shadow hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
