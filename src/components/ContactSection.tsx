import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const contactIcons = [MapPin, Phone, Mail, Clock];

const ContactSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.contact.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.contact.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-5">
              {content.contact.details.map((item, index) => {
                const Icon = contactIcons[index] ?? MapPin;

                return (
                  <div key={item.title} className="premium-card group flex items-start gap-4 p-5">
                    <div className="icon-container-md shrink-0 bg-primary-50 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="overflow-hidden rounded-2xl border shadow-card">
              <iframe
                src={content.contact.mapEmbedUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
