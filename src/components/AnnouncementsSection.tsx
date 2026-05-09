import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { CalendarDays, Megaphone, Sparkles } from "lucide-react";

const AnnouncementsSection = () => {
  const { content } = useSiteContent();
  const announcements = (content.announcementsList ?? []).slice(0, 3);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Latest Updates</span>
            <h2 className="section-title mt-3">School Announcements</h2>
            <p className="section-subtitle mt-4">News, holidays, admissions, and important updates published by the school.</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {announcements.map((announcement, index) => {
            const isFeatured = Boolean(announcement.featured);
            const publishedLabel = announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }) : "New";

            return (
              <ScrollReveal key={announcement.slug?.current ?? announcement.title} delay={index * 90}>
                <article className="premium-card group overflow-hidden p-0">
                  {announcement.imageUrl ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={announcement.imageUrl}
                        alt={announcement.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      {isFeatured && (
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                          <Sparkles className="h-3 w-3 text-secondary" /> Featured
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100/30">
                      <Megaphone className="h-12 w-12 text-primary/30" />
                    </div>
                  )}

                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <span className="rounded-md bg-primary-50 px-2 py-0.5 text-primary">{announcement.category ?? "Announcement"}</span>
                      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {publishedLabel}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">{announcement.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {announcement.slug?.current ? `Open the announcement slug: ${announcement.slug.current}` : "Check the Studio for the full announcement content."}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
