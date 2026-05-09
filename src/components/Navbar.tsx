import { useState, useEffect } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { content } = useSiteContent();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-2.5 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="#home" className="group flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
            isScrolled ? "bg-primary" : "bg-white/15 backdrop-blur-sm"
          }`}>
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            {content.branding.brandName}
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {content.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-foreground/70 hover:text-foreground hover:bg-primary-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mx-2 h-5 w-px bg-border" />
          <a
            href={content.navigation.ctaHref}
            className="btn-primary ml-1 px-5 py-2.5 text-sm"
          >
            {content.navigation.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://admin.brightpath.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              isScrolled
                ? "border-border text-foreground hover:border-primary/30 hover:bg-primary-50 hover:text-primary"
                : "border-white/20 text-white hover:border-white/40 hover:bg-white/10"
            }`}
          >
            Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-5">
            <span className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full transition-all duration-300 ${
              isMobileOpen
                ? "translate-y-[7px] rotate-45"
                : isScrolled ? "bg-foreground" : "bg-white"
            }`} />
            <span className={`absolute left-0 top-[9px] h-0.5 w-5 rounded-full transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : isScrolled ? "bg-foreground" : "bg-white"
            }`} />
            <span className={`absolute left-0 bottom-0.5 h-0.5 w-5 rounded-full transition-all duration-300 ${
              isMobileOpen
                ? "-translate-y-[7px] -rotate-45"
                : isScrolled ? "bg-foreground" : "bg-white"
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full transition-all duration-500 lg:hidden ${
          isMobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="glass-strong mx-4 mt-2 overflow-hidden rounded-2xl border border-border/50 p-2 shadow-lg">
          <div className="space-y-0.5 p-2">
            {content.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="divider mx-4" />
          <div className="space-y-1 p-2">
            <a
              href={content.navigation.ctaHref}
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary flex w-full items-center justify-center px-5 py-3 text-sm"
            >
              {content.navigation.ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://admin.brightpath.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="btn-secondary flex w-full items-center justify-center px-5 py-3 text-sm"
            >
              Login to Portal
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
