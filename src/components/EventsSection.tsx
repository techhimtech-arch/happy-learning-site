import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { Calendar, MapPin, ArrowRight, Bell } from "lucide-react";

type EventItem = {
  title: string;
  date: string; // ISO datetime
  location: string;
  description: string;
  signupUrl?: string;
};

const fallbackEvents: EventItem[] = [
  {
    title: "STEM & Robotics Innovation Fair 2026",
    date: "2026-06-15T09:30:00Z",
    location: "Main Multi-purpose Auditorium",
    description: "Students display smart models, Arduino setups, automated projects, and interactive robotic codes to parents and delegates.",
    signupUrl: "https://brightfutures.edu/rsvp-stem",
  },
  {
    title: "Term 1 Parent-Teacher Review Council",
    date: "2026-06-22T14:00:00Z",
    location: "Senior Library Conference Hall",
    description: "One-on-one session to evaluate students academic milestones, extracurricular interests, and progressive development.",
    signupUrl: "https://brightfutures.edu/rsvp-ptm",
  },
  {
    title: "demo Futures Annual Sports Championship",
    date: "2026-06-29T08:00:00Z",
    location: "Green Turf Athletics Ground",
    description: "Inter-house track races, football tournaments, and gymnastic displays showcasing dedicated physical spirit.",
    signupUrl: "https://brightfutures.edu/rsvp-sports",
  },
];

const EventsSection = () => {
  const { content, t } = useSiteContent();

  const dynamicEvents = (content.eventsList ?? []).map((e: any) => ({
    title: e.title || "",
    date: e.date || new Date().toISOString(),
    location: e.location || "School Campus",
    description: e.description || "",
    signupUrl: e.signupUrl,
  })).filter(e => e.title !== "");

  const events = dynamicEvents.length > 0 ? dynamicEvents : fallbackEvents;

  return (
    <section id="events" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              {content.eventsSection?.eyebrow || t("events.eyebrow")}
            </span>
            <h2 className="section-title mt-3">
              {content.eventsSection?.title || t("events.title")}
            </h2>
            <p className="section-subtitle mt-4">
              {content.eventsSection?.subtitle || t("events.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {events.map((event, index) => {
            const dateObj = new Date(event.date);
            const month = dateObj.toLocaleDateString("en-US", { month: "short" });
            const day = dateObj.toLocaleDateString("en-US", { day: "2-digit" });
            const time = dateObj.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

            return (
              <ScrollReveal key={event.title} delay={index * 90}>
                <div className="premium-card group relative flex flex-col md:flex-row gap-6 p-6 border-primary/5 hover:border-primary/15">
                  
                  {/* Calendar Badge */}
                  <div className="flex shrink-0 items-center justify-center md:flex-col h-20 w-20 rounded-2xl bg-primary text-white text-center shadow-glow select-none">
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-85 md:-mt-1">{month}</div>
                    <div className="text-3xl font-extrabold tracking-tight leading-none mt-0.5">{day}</div>
                  </div>

                  {/* Main Event info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground uppercase">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary/70" />
                        {event.location}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-primary/70" />
                        {time}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  {/* Action Register Link */}
                  {event.signupUrl && (
                    <div className="flex items-center justify-start md:justify-end shrink-0 pt-2 md:pt-0">
                      <a
                        href={event.signupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group py-3 px-5 text-xs font-bold"
                      >
                        {t("events.rsvp")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
