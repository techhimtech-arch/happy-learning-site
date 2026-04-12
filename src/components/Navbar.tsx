import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className={`font-heading text-xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Bright Futures
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admission"
            className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-background p-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admission"
            onClick={() => setIsMobileOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
