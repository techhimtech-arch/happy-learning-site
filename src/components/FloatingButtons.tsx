import { MessageCircle, Phone } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const FloatingButtons = () => {
  const { content } = useSiteContent();
  const whatsappUrl = `https://wa.me/${content.floatingButtons.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(content.floatingButtons.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${content.floatingButtons.phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-accent-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
