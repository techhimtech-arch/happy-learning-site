import { useEffect, useRef } from "react";
import { Users, Award, Clock, Trophy, ArrowRight, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useSiteContent } from "./SiteContentProvider";

const statIcons = [Users, Award, Clock, Trophy];

const HeroSection = () => {
  const { content, t } = useSiteContent();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];
    
    let mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      
      // Update & Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary Collisions
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 180)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Link nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const badgeText = content.hero.badge || t("hero.badge");
  const titleText = content.hero.title || t("about.title");
  const subtitleText = content.hero.subtitle || t("about.description");
  const statsList = content.hero.stats.length > 0 ? content.hero.stats : [
    { value: "1200+", label: t("hero.stat.students") },
    { value: "65+", label: t("hero.stat.teachers") },
    { value: "12+", label: t("hero.stat.labs") },
    { value: "15:1", label: t("hero.stat.ratio") },
  ];

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <motion.img
        style={{ y: y1 }}
        src={content.hero.backgroundImageUrl || heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Decorative meshes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50 z-10"
      />

      <div className="container relative mx-auto px-4 pt-32 pb-16 z-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge & Tagline */}
          <div className="animate-fade-up mb-6 flex flex-col items-center gap-3">
            <motion.span 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-xl font-heading text-white/80 tracking-widest font-medium"
            >
              🚀 Floating Towards Excellence
            </motion.span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md shadow-glass">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-delay-1 mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl text-balance">
            {titleText}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 mb-10 text-lg leading-relaxed text-white/75 md:text-xl text-balance">
            {subtitleText}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#admission"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-all duration-300 hover:bg-accent/90"
            >
              {t("hero.secondaryCta")}
              <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#programs"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-black/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              {t("nav.programs")}
            </motion.a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {statsList.map((stat, index) => {
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
