import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+919876543210"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6 text-primary-foreground" />
    </a>
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20enquire%20about%20admission"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-accent-foreground" />
    </a>
  </div>
);

export default FloatingButtons;
