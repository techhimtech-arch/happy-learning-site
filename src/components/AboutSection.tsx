import { BookOpen, Target, Heart } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";
import { motion } from "framer-motion";

const aboutIcons = [BookOpen, Target, Heart];
const iconColors = [
  "bg-primary-50 text-primary",
  "bg-accent-50 text-accent",
  "bg-secondary-50 text-secondary",
];

const AboutSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="about" className="section-padding bg-background border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="eyebrow">{content.about.eyebrow}</span>
            <h2 className="section-title mt-3 text-white">
              {content.about.title}
            </h2>
            <p className="section-subtitle mt-5 text-white/70 text-left mx-0">
              {content.about.description}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {content.about.highlights.slice(0, 4).map((item, index) => {
                const Icon = aboutIcons[index % aboutIcons.length] ?? BookOpen;
                const colorClass = iconColors[index % iconColors.length] ?? iconColors[0];

                return (
                  <div key={item.title} className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                    <div className={`icon-container-md mb-4 ${colorClass} bg-transparent border border-current`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 font-heading text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Director's Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Director" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-1">Director's Message</p>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Dr. Sarah Jenkins</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">"Our mission is to launch the next generation of thinkers into the universe with a solid foundation of gravity and discipline."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
