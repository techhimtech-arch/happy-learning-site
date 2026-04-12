import ScrollReveal from "./ScrollReveal";
import { ClipboardList, Building, CheckCircle } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Fill Form", desc: "Complete the online admission form with student details." },
  { icon: Building, step: "02", title: "Visit School", desc: "Tour our campus and meet the faculty in person." },
  { icon: CheckCircle, step: "03", title: "Confirm Admission", desc: "Complete the enrollment and welcome your child aboard!" },
];

const AdmissionSection = () => (
  <section id="admission" className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Admissions</span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Simple Admission Process
          </h2>
          <div className="mx-auto mb-10 inline-block rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive">
            🔥 Limited Seats Available — Apply Early!
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 150}>
            <div className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {s.step}
              </div>
              <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Admission Form */}
      <ScrollReveal delay={200}>
        <div className="mx-auto mt-16 max-w-xl card-shadow rounded-2xl bg-card p-8">
          <h3 className="mb-6 text-center font-heading text-2xl font-bold text-foreground">Admission Enquiry</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Student Name"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
              maxLength={100}
            />
            <input
              type="tel"
              placeholder="Parent Phone Number"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
              maxLength={15}
            />
            <select
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select Class</option>
              <option>Pre-Primary</option>
              <option>Class 1-5</option>
              <option>Class 6-8</option>
              <option>Class 9-10</option>
              <option>Class 11-12</option>
            </select>
            <textarea
              placeholder="Your Message (Optional)"
              rows={3}
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={500}
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AdmissionSection;
