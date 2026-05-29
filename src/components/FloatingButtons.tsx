import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const FloatingButtons = () => {
  const { content, t } = useSiteContent();
  
  const whatsappNumber = content.floatingButtons.whatsappNumber || "919999888800";
  const phoneNumber = content.floatingButtons.phoneNumber || "+919999888800";
  const whatsappMsg = content.floatingButtons.whatsappMessage || "Hello, I want to inquire about admissions for Bright Futures School.";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 select-none">
      
      {/* Call Admissions Helpline */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
        title={t("float.call")}
      >
        <Phone className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute right-14 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-xl bg-slate-900 text-[10px] font-bold text-white px-3 py-1.5 shadow-md whitespace-nowrap">
          {t("float.call")}
        </span>
      </a>

      {/* WhatsApp Help Desk */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-accent shadow-lg transition-all duration-300 hover:-translate-y-1"
        title={t("float.whatsapp")}
        style={{ boxShadow: "0 6px 20px -4px hsla(142, 71%, 45%, 0.4)" }}
      >
        <MessageCircle className="h-5 w-5 text-accent-foreground transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute right-14 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-xl bg-slate-900 text-[10px] font-bold text-white px-3 py-1.5 shadow-md whitespace-nowrap">
          {t("float.whatsapp")}
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
