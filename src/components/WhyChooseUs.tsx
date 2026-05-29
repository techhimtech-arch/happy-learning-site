import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { Cpu, ShieldAlert, Trophy, Library, BookOpen, Lightbulb } from "lucide-react";

const BentoWhyChooseUs = () => {
  const { t } = useSiteContent();

  return (
    <section id="why-choose-us" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("why.eyebrow")}</span>
            <h2 className="section-title mt-3">{t("why.title")}</h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* Card 1: STEM & Robotics (Large Col Span 2, Row Span 1) */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="premium-card group relative flex flex-col justify-between overflow-hidden p-8 h-full min-h-[260px] border-primary/10">
              {/* Radial gradient background accent on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative flex justify-between items-start gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary uppercase tracking-wider">
                    {t("why.tag.tech")}
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                    Next-Gen Learning Laboratories
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    Our campus is equipped with specialized STEM robotic centers, 3D printing equipment, and automated coding setups to introduce children to future-ready skills.
                  </p>
                </div>
                <div className="icon-container-lg bg-primary-50 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Cpu className="h-6 w-6" />
                </div>
              </div>

              {/* Sub items visual */}
              <div className="relative mt-6 flex gap-2 flex-wrap">
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">🤖 Arduino Kits</span>
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">🖨️ 3D Printing Lab</span>
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">💻 Scratch & Python</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: 100% Safe Campus (Col Span 1) */}
          <ScrollReveal delay={150}>
            <div className="premium-card group relative flex flex-col justify-between overflow-hidden p-8 h-full min-h-[260px] border-accent/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-accent-50/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="icon-container-lg bg-accent-50 text-accent transition-transform duration-500 group-hover:scale-110">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                    {t("why.tag.safe")}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                    CCTV & Guarded Security
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Continuous monitoring, secure entry/exit checkpoints, and biometric registers ensure complete student safety.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Sports Academy (Col Span 1) */}
          <ScrollReveal delay={200}>
            <div className="premium-card group relative flex flex-col justify-between overflow-hidden p-8 h-full min-h-[260px] border-secondary/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-secondary-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="icon-container-lg bg-secondary-50 text-secondary transition-transform duration-500 group-hover:scale-110">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-50 px-2.5 py-0.5 text-[10px] font-bold text-secondary uppercase tracking-wider">
                    {t("why.tag.sports")}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                    Elite Athletics & Coaching
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Extensive sports facilities including basketball courts, football turfs, and professional physical trainers.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: 24/7 Digital Library (Large Col Span 2) */}
          <ScrollReveal delay={250} className="md:col-span-2">
            <div className="premium-card group relative flex flex-col justify-between overflow-hidden p-8 h-full min-h-[260px] border-primary/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-primary-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex justify-between items-start gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary uppercase tracking-wider">
                    {t("why.tag.library")}
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                    Vast E-Resource Centers
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    Our digital libraries offer access to global research publications, interactive educational journals, and over 15,000 reference books for multi-dimensional study.
                  </p>
                </div>
                <div className="icon-container-lg bg-primary-50 text-primary-700 transition-transform duration-500 group-hover:scale-110">
                  <Library className="h-6 w-6" />
                </div>
              </div>

              {/* Sub items visual */}
              <div className="relative mt-6 flex gap-2 flex-wrap">
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">📚 Kindle Readers</span>
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">🌐 High Speed Wi-Fi</span>
                <span className="rounded-xl border bg-background px-3 py-1 text-xs font-semibold text-foreground/80">🎧 Audio Book Corner</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BentoWhyChooseUs;
