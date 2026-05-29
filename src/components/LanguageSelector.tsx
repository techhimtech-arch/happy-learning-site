import { useSiteContent } from "./SiteContentProvider";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const { language, setLanguage } = useSiteContent();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी (Hindi)", flag: "🇮🇳" },
  ] as const;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary-50/50 hover:shadow-sm"
        aria-label="Select Language"
      >
        <Globe className="h-3.5 w-3.5 text-primary/70" />
        <span className="hidden sm:inline">
          {language === "en" ? "English" : "हिंदी"}
        </span>
        <span className="text-sm">
          {language === "en" ? "🇬🇧" : "🇮🇳"}
        </span>
      </button>

      {isOpen && (
        <div className="glass-strong animate-scale-in absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-border/50 p-1 shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-medium transition-colors hover:bg-primary-50 hover:text-primary ${
                language === lang.code ? "bg-primary-50/70 text-primary" : "text-foreground/80"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                {lang.name}
              </span>
              {language === lang.code && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
