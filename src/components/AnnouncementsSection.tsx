import { useSiteContent } from "./SiteContentProvider";
import { CalendarDays, Megaphone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
};

const AnnouncementsSection = () => {
  const { content } = useSiteContent();
  const announcements = (content.announcementsList ?? []).slice(0, 3);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={itemVariants} className="eyebrow">Info Pods</motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Notice Board</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mt-4">Important updates floating your way.</motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3"
        >
          {announcements.map((announcement, index) => {
            const isFeatured = Boolean(announcement.featured);
            const publishedLabel = announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }) : "New";

            return (
              <motion.article 
                key={announcement.slug?.current ?? announcement.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(217, 145, 96, 0.25)" }}
                className="premium-card group overflow-hidden p-0 bg-white/[0.05] backdrop-blur-xl border-white/10"
              >
                  {announcement.imageUrl ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                      <img
                        src={announcement.imageUrl}
                        alt={announcement.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      {isFeatured && (
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
                          <Sparkles className="h-3 w-3 text-secondary" /> Featured
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                      <Megaphone className="h-12 w-12 text-primary/40" />
                    </div>
                  )}

                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-primary">{announcement.category ?? "Announcement"}</span>
                      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {publishedLabel}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">{announcement.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {announcement.slug?.current ? `Open the announcement slug: ${announcement.slug.current}` : "Check the Studio for the full announcement content."}
                    </p>
                  </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
