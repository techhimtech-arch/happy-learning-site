import { Users, Award, Clock, Trophy, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useSiteContent } from "./SiteContentProvider";

const statIcons = [Users, Award, Clock, Trophy];

const HeroSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <img
        src={content.hero.backgroundImageUrl || heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              {content.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-delay-1 mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 mb-10 text-lg leading-relaxed text-white/75 md:text-xl">
            {content.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={content.hero.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:-translate-y-0.5"
            >
              {content.hero.primaryCtaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={content.hero.secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
            >
              {content.hero.secondaryCtaLabel}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {content.hero.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? Users;

            return (
              <div
                key={stat.label}
                className="animate-fade-up group rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.12] md:p-6"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
