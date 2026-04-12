import ScrollReveal from "./ScrollReveal";
import { Medal, BarChart3, Trophy } from "lucide-react";

const achievements = [
  { icon: BarChart3, title: "98% Board Results", desc: "Consistently outstanding board exam results across all streams." },
  { icon: Medal, title: "50+ Awards", desc: "Recognised at state and national level for academic and sports excellence." },
  { icon: Trophy, title: "Student Success", desc: "Alumni in top universities including IITs, AIIMS, and international institutions." },
];

const AchievementsSection = () => (
  <section className="section-padding section-light">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Achievements</span>
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Proud Achievements
          </h2>
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {achievements.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 100}>
            <div className="gradient-primary rounded-xl p-6 text-center text-primary-foreground">
              <a.icon className="mx-auto mb-4 h-10 w-10" />
              <h3 className="mb-2 font-heading text-xl font-bold">{a.title}</h3>
              <p className="text-sm text-primary-foreground/80">{a.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
