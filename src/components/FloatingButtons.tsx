import { MessageCircle, Phone } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const FloatingButtons = () => {
  const { content } = useSiteContent();
  const whatsappUrl = `https://wa.me/${content.floatingButtons.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(content.floatingButtons.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${content.floatingButtons.phoneNumber}`}
        className="group flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-xl bg-accent shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
        style={{ boxShadow: "0 4px 20px -4px hsla(142, 71%, 45%, 0.4)" }}
      >
        <MessageCircle className="h-5 w-5 text-accent-foreground transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default FloatingButtons;
