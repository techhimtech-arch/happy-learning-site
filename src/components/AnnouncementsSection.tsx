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
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Latest Updates</span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">School Announcements</h2>
            <p className="text-muted-foreground">News, holidays, admissions, and important updates published by the school.</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {announcements.map((announcement, index) => {
            const isFeatured = Boolean(announcement.featured);
            const publishedLabel = announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }) : "New";

            return (
              <ScrollReveal key={announcement.slug?.current ?? announcement.title} delay={index * 90}>
                <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {announcement.imageUrl ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={announcement.imageUrl}
                        alt={announcement.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {isFeatured && (
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground shadow">
                          <Sparkles className="h-3.5 w-3.5" /> Featured
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20">
                      <Megaphone className="h-14 w-14 text-primary" />
                    </div>
                  )}

                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <span>{announcement.category ?? "Announcement"}</span>
                      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {publishedLabel}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{announcement.title}</h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
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
