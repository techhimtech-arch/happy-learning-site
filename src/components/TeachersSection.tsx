import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { Mail, Phone, GraduationCap } from "lucide-react";

// Use some placeholder images / standard assets
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

type TeacherItem = {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  email?: string;
  phone?: string;
};

const fallbackTeachers: TeacherItem[] = [
  {
    name: "Dr. Evelyn Parker",
    title: "School Principal & Director",
    bio: "With over 20 years in primary and secondary education management, Dr. Parker oversees our digital STEM transition.",
    photoUrl: gallery1,
    email: "principal@brightfutures.edu",
    phone: "+91 9999888801",
  },
  {
    name: "Mr. Rohan Mehta",
    title: "Senior Physics Coordinator",
    bio: "Passionate about spatial astrophysics, Mr. Mehta directs our STEM robotics lab workshops and scientific camps.",
    photoUrl: gallery3,
    email: "rohan.mehta@brightfutures.edu",
    phone: "+91 9999888802",
  },
  {
    name: "Mrs. Sarah Jenkins",
    title: "Head of Primary Humanities",
    bio: "Fosters early creative language learning using interactive, multi-dimensional storybooks and plays.",
    photoUrl: gallery5,
    email: "sarah.jenkins@brightfutures.edu",
    phone: "+91 9999888803",
  },
];

const TeachersSection = () => {
  const { content, t } = useSiteContent();

  const dynamicTeachers = (content.teachersList ?? []).map((t: any) => ({
    name: t.name || "",
    title: t.title || "Educator",
    bio: t.bio || "",
    photoUrl: t.photoUrl || gallery1,
    email: t.email,
    phone: t.phone,
  })).filter(t => t.name !== "");

  const teachers = dynamicTeachers.length > 0 ? dynamicTeachers : fallbackTeachers;

  return (
    <section id="faculty" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              {content.teachersSection?.eyebrow || t("faculty.eyebrow")}
            </span>
            <h2 className="section-title mt-3">
              {content.teachersSection?.title || t("faculty.title")}
            </h2>
            <p className="section-subtitle mt-4">
              {content.teachersSection?.subtitle || t("faculty.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <ScrollReveal key={teacher.name} delay={index * 100}>
              <div className="premium-card group overflow-hidden p-0 border-primary/10">
                {/* Photo Zoom container */}
                <div className="relative aspect-[10/9] overflow-hidden bg-muted">
                  <img
                    src={teacher.photoUrl}
                    alt={teacher.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Principal / Coordinator Badge */}
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-bold text-foreground shadow-sm backdrop-blur-sm">
                    <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    {teacher.title}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground tracking-tight">{teacher.name}</h3>
                    <p className="text-[11px] font-bold text-primary tracking-wider uppercase mt-0.5">{teacher.title}</p>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {teacher.bio}
                  </p>

                  <div className="divider" />

                  {/* Actions */}
                  <div className="flex gap-2.5">
                    {teacher.email && (
                      <a
                        href={`mailto:${teacher.email}`}
                        className="btn-secondary flex-1 py-2.5 text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {t("faculty.contact")}
                      </a>
                    )}
                    {teacher.phone && (
                      <a
                        href={`tel:${teacher.phone}`}
                        className="btn-secondary h-10 w-10 p-0 flex items-center justify-center shrink-0"
                        title={teacher.phone}
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
