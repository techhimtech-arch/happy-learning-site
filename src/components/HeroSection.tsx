import { Users, Award, Clock, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "1000+", label: "Students" },
  { icon: Award, value: "50+", label: "Qualified Teachers" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Trophy, value: "Top", label: "Results" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="Happy school students"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="container relative mx-auto px-4 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="animate-fade-up mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
          🎓 Admissions Open 2025-26
        </span>
        <h1 className="animate-fade-up-delay-1 mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
          Building Bright Futures for Your Child
        </h1>
        <p className="animate-fade-up-delay-2 mb-8 text-lg text-primary-foreground/85 md:text-xl">
          Quality Education • Experienced Teachers • Safe Environment
        </p>
        <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#admission"
            className="rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Apply for Admission
          </a>
          <a
            href="#programs"
            className="rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-transform hover:scale-105"
          >
            Explore Programs
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="animate-fade-up rounded-xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
          >
            <stat.icon className="mx-auto mb-2 h-7 w-7 text-secondary" />
            <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
            <div className="text-sm text-primary-foreground/75">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
