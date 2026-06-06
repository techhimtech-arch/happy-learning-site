import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Rocket } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const iconMap: Record<string, typeof Facebook> = {
  Facebook,
  Twitter,
  Instagram,
  YouTube: Youtube,
};

const Footer = () => {
  const { content } = useSiteContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="font-heading text-lg font-bold tracking-tight text-white">{content.branding.brandName}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">{content.footer.description}</p>
              <div className="mt-6 flex gap-2">
                {content.footer.socialLinks.map((social) => {
                  const Icon = iconMap[social.platform] ?? Facebook;

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-white/15 hover:text-white hover:-translate-y-0.5"
                      aria-label={social.platform}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Quick Links</h4>
              <ul className="space-y-3">
                {content.footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/65 transition-colors duration-300 hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Programs</h4>
              <ul className="space-y-3">
                {content.footer.programs.map((p) => (
                  <li key={p}>
                    <span className="text-sm text-white/65">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Contact</h4>
              <ul className="space-y-3">
                {content.footer.contactDetails.map((item) => (
                  <li key={item.label} className="text-sm text-white/65">
                    <span className="font-medium text-white/80">{item.label}:</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row relative">
            <p className="text-xs text-white/40">
              {content.footer.copyrightText}
            </p>
            
            {/* Back to Top Rocket */}
            <button 
              onClick={scrollToTop}
              className="absolute -top-6 right-0 sm:static sm:mt-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-glow hover:-translate-y-2 hover:shadow-hover transition-all duration-300 group z-20"
              aria-label="Back to top"
            >
              <Rocket className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>

            <p className="text-xs text-white/40">
              Powered by{" "}
              <a href={content.footer.poweredByHref} className="font-medium text-white/60 transition-colors hover:text-white">{content.footer.poweredByText}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
