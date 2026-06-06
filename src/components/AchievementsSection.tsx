import { Medal, ChartBar as BarChart3, Trophy, Orbit } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const achievementIcons = [BarChart3, Medal, Trophy];

const AchievementsSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{content.achievements.eyebrow}</span>
          <h2 className="section-title mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {content.achievements.title}
          </h2>
        </motion.div>
        
        <div className="mx-auto mt-20 grid max-w-5xl gap-12 md:grid-cols-3 justify-items-center">
          {content.achievements.items.map((achievement, index) => {
            const Icon = achievementIcons[index] ?? Orbit;
            // Try to extract a number from the title
            const numMatch = achievement.title.match(/\d+/);
            const num = numMatch ? parseInt(numMatch[0]) : null;
            const prefix = numMatch ? achievement.title.split(numMatch[0])[0] : "";
            const suffix = numMatch ? achievement.title.split(numMatch[0])[1] : achievement.title;

            return (
              <motion.div 
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 50, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 0 40px rgba(96, 165, 250, 0.4)" }}
                className="group relative flex h-64 w-64 flex-col items-center justify-center rounded-full border-2 border-white/10 bg-white/[0.03] text-center text-white backdrop-blur-xl transition-all duration-500"
              >
                {/* Orbiting rings */}
                <div className="absolute inset-[-10px] rounded-full border border-primary/20 opacity-0 transition-all duration-1000 group-hover:rotate-180 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute inset-[-20px] rounded-full border border-secondary/20 border-dashed opacity-0 transition-all duration-1000 group-hover:-rotate-180 group-hover:scale-110 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:bg-primary group-hover:text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {num !== null ? (
                      <CountUp end={num} enableScrollSpy scrollSpyOnce duration={3.5} prefix={prefix} suffix={suffix} />
                    ) : (
                      achievement.title
                    )}
                  </h3>
                  <p className="text-sm font-medium tracking-wide text-white/60 uppercase">{achievement.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
