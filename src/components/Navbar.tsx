import { useState, useEffect } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteContent } from "./SiteContentProvider";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { content, t } = useSiteContent();

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

  const getTranslatedLabel = (label: string) => {
    const clean = label.toLowerCase().trim().replace(/\s+/g, "");
    // Map common items
    if (clean === "home") return t("nav.home");
    if (clean === "about" || clean === "aboutus") return t("nav.about");
    if (clean === "programs") return t("nav.programs");
    if (clean === "facilities") return t("nav.facilities");
    if (clean === "admission" || clean === "admissions") return t("nav.admission");
    if (clean === "gallery") return t("nav.gallery");
    if (clean === "testimonials") return t("nav.testimonials");
    if (clean === "events") return t("nav.events");
    if (clean === "faculty" || clean === "teachers") return t("nav.faculty");
    if (clean === "faq") return t("nav.faq");
    if (clean === "contact") return t("nav.contact");
    return label;
  };

  const navLinks = content.navigation.links.length > 0 ? content.navigation.links : [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Facilities", href: "#facilities" },
    { label: "Admission", href: "#admission" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Events", href: "#events" },
    { label: "Faculty", href: "#faculty" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-2.5 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <motion.a 
          href="#home" 
          whileHover={{ y: -2 }}
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
            isScrolled ? "bg-primary" : "bg-white/15 backdrop-blur-sm"
          }`}>
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            {content.branding.brandName || "demo Futures"}
          </span>
        </motion.a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -3, textShadow: "0px 0px 8px rgba(96, 165, 250, 0.6)" }}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {getTranslatedLabel(link.label)}
            </motion.a>
          ))}
          
          <div className="mx-2 h-5 w-px bg-border" />
          
          {/* Language Toggle Dropdown */}
          <LanguageSelector />
          
          <a
            href={content.navigation.ctaHref || "#admission"}
            className="btn-primary ml-2 px-5 py-2.5 text-sm"
          >
            {content.navigation.ctaLabel || t("nav.cta")}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
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
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full transition-all duration-500 lg:hidden ${
          isMobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="glass-strong mx-4 mt-2 overflow-y-auto max-h-[80vh] rounded-2xl border border-border/50 p-2 shadow-lg">
          <div className="space-y-0.5 p-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {getTranslatedLabel(link.label)}
              </a>
            ))}
          </div>
          
          <div className="divider mx-4" />
          
          <div className="space-y-1 p-2">
            <a
              href={content.navigation.ctaHref || "#admission"}
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary flex w-full items-center justify-center px-5 py-3 text-sm"
            >
              {content.navigation.ctaLabel || t("nav.cta")}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
