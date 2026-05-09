import { useSiteContent } from "./SiteContentProvider";
import { Megaphone } from "lucide-react";

const NewsTicker = () => {
  const { content } = useSiteContent();
  const announcements = content.announcementsList ?? [];

  if (announcements.length === 0) return null;

  return (
    <div className="relative z-[60] flex h-10 w-full items-center overflow-hidden border-b border-white/10 bg-primary-900 px-4 text-white">
      <div className="container mx-auto flex items-center">
        <div className="z-10 flex shrink-0 items-center gap-2 pr-4 text-xs font-semibold uppercase tracking-[0.12em]">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/10">
            <Megaphone className="h-3 w-3" />
          </div>
          <span>Latest</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-1">
            {announcements.map((item, idx) => (
              <span key={idx} className="mx-8 text-sm font-medium text-white/80">
                {item.title}
              </span>
            ))}
            {announcements.map((item, idx) => (
              <span key={`dup-${idx}`} className="mx-8 text-sm font-medium text-white/80">
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
