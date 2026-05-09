import ScrollReveal from "./ScrollReveal";
import { Medal, ChartBar as BarChart3, Trophy } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const achievementIcons = [BarChart3, Medal, Trophy];

const AchievementsSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.achievements.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.achievements.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
          {content.achievements.items.map((achievement, index) => {
            const Icon = achievementIcons[index] ?? BarChart3;

            return (
              <ScrollReveal key={achievement.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl p-7 text-center text-white">
                  {/* Background gradient */}
                  <div className="absolute inset-0 gradient-hero" />

                  {/* Decorative circle */}
                  <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/[0.06] transition-transform duration-700 group-hover:scale-150" />
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/[0.04] transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-bold tracking-tight">{achievement.title}</h3>
                    <p className="text-sm leading-relaxed text-white/75">{achievement.desc}</p>
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

export default AchievementsSection;
