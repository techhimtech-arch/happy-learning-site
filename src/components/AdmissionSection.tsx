import ScrollReveal from "./ScrollReveal";
import { ClipboardList, Building, CircleCheck as CheckCircle, ArrowRight, Send } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const admissionIcons = [ClipboardList, Building, CheckCircle];

const AdmissionSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="admission" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.admission.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.admission.title}
            </h2>
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-2 text-sm font-semibold text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
              {content.admission.badge}
            </div>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          {content.admission.steps.map((step, index) => {
            const Icon = admissionIcons[index] ?? ClipboardList;

            return (
              <ScrollReveal key={step.title} delay={index * 150}>
                <div className="group relative text-center">
                  {/* Connector line */}
                  {index < 2 && (
                    <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-primary/30 to-primary/10 md:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Form */}
        <ScrollReveal delay={200}>
          <div className="mx-auto mt-20 max-w-xl">
            <div className="premium-card overflow-visible p-8 md:p-10">
              <div className="mb-8 text-center">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">{content.admission.formTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Fill in the details and we'll get back to you</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-1.5">
                  <input
                    type="tel"
                    placeholder="Parent Phone Number"
                    className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    required
                    maxLength={15}
                  />
                </div>
                <div className="space-y-1.5">
                  <select
                    className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    required
                  >
                    <option value="">Select Class</option>
                    <option>Pre-Primary</option>
                    <option>Class 1-5</option>
                    <option>Class 6-8</option>
                    <option>Class 9-10</option>
                    <option>Class 11-12</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <textarea
                    placeholder="Your Message (Optional)"
                    rows={3}
                    className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 resize-none"
                    maxLength={500}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary group mt-2 w-full py-4 text-base"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {content.admission.submitLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AdmissionSection;
