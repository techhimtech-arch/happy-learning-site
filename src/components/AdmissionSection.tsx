import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { ClipboardList, Building, CheckCircle, ArrowRight, Send, Check, PhoneCall, ChevronLeft, Calendar } from "lucide-react";

const admissionIcons = [ClipboardList, Building, CheckCircle];

const AdmissionSection = () => {
  const { content, t } = useSiteContent();

  // Multi-step states
  const [step, setStep] = useState<number>(1);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [targetClass, setTargetClass] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Admissions open state from SanitySettings (or default true)
  const isAdmissionOpen = content.admission.badge ? !content.admission.badge.toLowerCase().includes("closed") : true;

  const handleNext = () => {
    if (step === 1 && (!studentName || !studentAge)) return;
    if (step === 2 && (!parentName || !parentPhone || !parentEmail)) return;
    setStep((s) => s + 1);
  };

  const handlePrev = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentPhone || !parentName) return;

    const payload = {
      timestamp: new Date().toISOString(),
      studentName,
      studentAge,
      parentName,
      parentPhone,
      parentEmail,
      targetClass,
      message,
    };

    // Save to local browser database as fallback
    try {
      const existing = localStorage.getItem("school_admissions_leads");
      const leads = existing ? JSON.parse(existing) : [];
      leads.push(payload);
      localStorage.setItem("school_admissions_leads", JSON.stringify(leads));
      console.log("Admission inquiry saved locally in browser database (localStorage):", payload);
    } catch (err) {
      console.error("Local database save failed:", err);
    }

    // Post to Google Sheets / webhook CRM if configured dynamically in Sanity CMS
    const webhook = content.admission.webhookUrl;
    if (webhook && webhook.trim().startsWith("http")) {
      try {
        await fetch(webhook.trim(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
        });
        console.log("Admission inquiry posted dynamically to webhook Google Sheet:", webhook);
      } catch (err) {
        console.error("Webhook POST submission failed:", err);
      }
    }

    setIsSubmitted(true);
  };

  const stepLabels = [
    t("form.step.1"),
    t("form.step.2"),
    t("form.step.3"),
  ];

  return (
    <section id="admission" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("nav.admission")}</span>
            <h2 className="section-title mt-3">
              {content.admission.title || t("form.title")}
            </h2>
            
            {/* Live Admissions Badge */}
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border backdrop-blur-sm transition-all duration-300 shadow-sm"
              style={{
                borderColor: isAdmissionOpen ? "hsla(142, 71%, 45%, 0.2)" : "hsla(0, 84%, 60%, 0.2)",
                backgroundColor: isAdmissionOpen ? "hsla(142, 71%, 45%, 0.05)" : "hsla(0, 84%, 60%, 0.05)",
                color: isAdmissionOpen ? "hsl(var(--success))" : "hsl(var(--error))"
              }}
            >
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isAdmissionOpen ? "bg-success" : "bg-error"}`} />
              {isAdmissionOpen ? t("form.openBadge") : t("form.closedBadge")}
            </div>
          </div>
        </ScrollReveal>

        {/* Steps Guide */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          {content.admission.steps.map((item, index) => {
            const Icon = admissionIcons[index] ?? ClipboardList;

            return (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="group relative text-center">
                  {/* Connector line */}
                  {index < 2 && (
                    <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-primary/30 to-primary/10 md:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110">
                    {item.step}
                  </div>
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Multi-step Smart Enquiry Form */}
        <ScrollReveal delay={200}>
          <div className="mx-auto mt-20 max-w-xl">
            <div className="premium-card overflow-hidden p-8 md:p-10 border-primary/10">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-8 text-center">
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                      {t("form.title")}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t("form.subtitle")}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-bold text-primary/80 mb-2">
                      <span>{stepLabels[step - 1]}</span>
                      <span>Step {step} of 3</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-border/50">
                      <div
                        className="h-1.5 rounded-full bg-primary transition-all duration-500 ease-out shadow-glow"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Step 1: Student Details */}
                    {step === 1 && (
                      <div className="space-y-4 animate-fade-up">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.studentName")} *</label>
                          <input
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            placeholder="e.g. Aarav Sharma"
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.studentAge")} *</label>
                          <input
                            type="number"
                            value={studentAge}
                            onChange={(e) => setStudentAge(e.target.value)}
                            placeholder="e.g. 8"
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                            min="2"
                            max="18"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Parent Details */}
                    {step === 2 && (
                      <div className="space-y-4 animate-fade-up">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.parentName")} *</label>
                          <input
                            type="text"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="e.g. Rajesh Sharma"
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.parentPhone")} *</label>
                          <input
                            type="tel"
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            placeholder="e.g. +91 9876543210"
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.parentEmail")} *</label>
                          <input
                            type="email"
                            value={parentEmail}
                            onChange={(e) => setParentEmail(e.target.value)}
                            placeholder="e.g. parent@email.com"
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Preferences */}
                    {step === 3 && (
                      <div className="space-y-4 animate-fade-up">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("calc.class")} *</label>
                          <select
                            value={targetClass}
                            onChange={(e) => setTargetClass(e.target.value)}
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            required
                          >
                            <option value="">Select Grade</option>
                            <option value="Pre-Primary">Pre-Primary</option>
                            <option value="Class 1-5">Class 1-5</option>
                            <option value="Class 6-8">Class 6-8</option>
                            <option value="Class 9-10">Class 9-10</option>
                            <option value="Class 11-12">Class 11-12</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("form.message")}</label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="e.g. Any special learning needs or transport queries..."
                            rows={3}
                            className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 resize-none"
                            maxLength={500}
                          />
                        </div>
                      </div>
                    )}

                    {/* Button controls */}
                    <div className="flex gap-3 pt-3">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="btn-secondary flex-1 py-4 text-sm font-bold flex items-center justify-center gap-1.5"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          {t("form.prev")}
                        </button>
                      )}
                      
                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={
                            (step === 1 && (!studentName || !studentAge)) ||
                            (step === 2 && (!parentName || !parentPhone || !parentEmail))
                          }
                          className="btn-primary flex-1 py-4 text-sm font-bold flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {t("form.next")}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!targetClass}
                          className="btn-primary flex-1 py-4 text-sm font-bold flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          {content.admission.submitLabel || t("form.submit")}
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Closed warning detail if admissions are closed */}
                  {!isAdmissionOpen && (
                    <div className="mt-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4.5 text-xs text-destructive text-center font-medium">
                      ⚠️ {t("form.closedMsg")}
                    </div>
                  )}
                </>
              ) : (
                /* Success Screen */
                <div className="text-center py-10 animate-scale-in">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success ring-8 ring-success/5 animate-pulse-glow shadow-glow" style={{ animationDuration: '3s' }}>
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="font-heading text-3xl font-extrabold text-foreground tracking-tight">
                    {t("form.success")}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto">
                    {t("form.successSub")}
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href={`https://wa.me/${content.floatingButtons.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                        `Hello, I submitted an admission inquiry for ${studentName} for class ${targetClass}. Please help me with the next steps.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-4 text-base font-semibold flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AdmissionSection;
