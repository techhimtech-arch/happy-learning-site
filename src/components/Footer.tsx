import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const iconMap: Record<string, typeof Facebook> = {
  Facebook,
  Twitter,
  Instagram,
  YouTube: Youtube,
};

const Footer = () => {
  const { content } = useSiteContent();

  return (
    <footer className="gradient-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-7 w-7" />
              <span className="font-heading text-xl font-bold">{content.footer.brandName}</span>
            </div>
            <p className="text-sm text-primary-foreground/75">{content.footer.description}</p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {content.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-primary-foreground">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {content.footer.programs.map((p) => (
                <li key={p}><span>{p}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {content.footer.contactDetails.map((item) => (
                <li key={item.label}>
                  {item.label}: {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              {content.footer.socialLinks.map((social) => {
                const Icon = iconMap[social.platform] ?? Facebook;

                return (
                  <a key={social.platform} href={social.href} className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:bg-primary-foreground/20" aria-label={social.platform}>
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
          {content.footer.copyrightText} | Powered by{" "}
          <a href={content.footer.poweredByHref} className="font-semibold text-secondary hover:underline">{content.footer.poweredByText}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
