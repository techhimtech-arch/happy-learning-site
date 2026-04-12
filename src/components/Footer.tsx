import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary py-12 text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-7 w-7" />
            <span className="font-heading text-xl font-bold">Bright Futures</span>
          </div>
          <p className="text-sm text-primary-foreground/75">
            Building bright futures for your child through quality education, experienced teachers, and a safe learning environment.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {["Home", "About", "Programs", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition hover:text-primary-foreground">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {["Pre-Primary", "Primary School", "Middle School", "Senior Secondary"].map((p) => (
              <li key={p}><span>{p}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>📍 123 Education Lane, Knowledge City</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@brightfutures.edu</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:bg-primary-foreground/20" aria-label="Social media">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
        © 2025 Bright Futures School. All rights reserved. | Powered by{" "}
        <a href="#" className="font-semibold text-secondary hover:underline">TechHim Solutions</a>
      </div>
    </div>
  </footer>
);

export default Footer;
