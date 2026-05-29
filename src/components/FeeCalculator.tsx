import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useSiteContent } from "./SiteContentProvider";
import { Calculator, Bus, Check, Cpu, Award, Coffee, ArrowRight } from "lucide-react";

type ClassTier = "preprimary" | "primary" | "middle" | "high" | "senior";

const FeeCalculator = () => {
  const { t } = useSiteContent();
  
  // States
  const [classTier, setClassTier] = useState<ClassTier>("primary");
  const [distance, setDistance] = useState<number>(5); // km
  const [hasRobotics, setHasRobotics] = useState<boolean>(true);
  const [hasSports, setHasSports] = useState<boolean>(false);
  const [hasMeals, setHasMeals] = useState<boolean>(false);

  // Constants (Base Costs)
  const baseFees: Record<ClassTier, number> = {
    preprimary: 3500,
    primary: 5000,
    middle: 6500,
    high: 8000,
    senior: 10000,
  };

  const transportPerKm = 150;
  const roboticsFee = 1200;
  const sportsFee = 1000;
  const mealsFee = 1800;

  // Calculations
  const baseCost = baseFees[classTier];
  const transportCost = distance > 0 ? distance * transportPerKm : 0;
  const additionalCost = 
    (hasRobotics ? roboticsFee : 0) + 
    (hasSports ? sportsFee : 0) + 
    (hasMeals ? mealsFee : 0);

  const monthlyTotal = baseCost + transportCost + additionalCost;
  const annualTotal = monthlyTotal * 12 * 0.9; // 10% annual payment discount

  const handleProceed = () => {
    const admissionSection = document.getElementById("admission");
    if (admissionSection) {
      admissionSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto-fill grade choice in the admission form if selector exists
      const selectElement = admissionSection.querySelector("select");
      if (selectElement) {
        if (classTier === "preprimary") selectElement.value = "Pre-Primary";
        else if (classTier === "primary") selectElement.value = "Class 1-5";
        else if (classTier === "middle") selectElement.value = "Class 6-8";
        else if (classTier === "high") selectElement.value = "Class 9-10";
        else if (classTier === "senior") selectElement.value = "Class 11-12";
        
        // Trigger select change event
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="fee-calculator" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t("calc.eyebrow")}</span>
            <h2 className="section-title mt-3">{t("calc.title")}</h2>
            <p className="section-subtitle mt-4">{t("calc.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-12">
          {/* Inputs Column */}
          <div className="space-y-6 lg:col-span-7">
            {/* Class Selector */}
            <ScrollReveal delay={100}>
              <div className="premium-card p-6">
                <label className="mb-3 block font-heading text-sm font-semibold text-foreground">
                  {t("calc.class")}
                </label>
                <div className="relative">
                  <select
                    value={classTier}
                    onChange={(e) => setClassTier(e.target.value as ClassTier)}
                    className="w-full rounded-xl border bg-background px-4 py-3.5 text-sm text-foreground transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="preprimary">{t("calc.preprimary")}</option>
                    <option value="primary">{t("calc.primary")}</option>
                    <option value="middle">{t("calc.middle")}</option>
                    <option value="high">{t("calc.high")}</option>
                    <option value="senior">{t("calc.senior")}</option>
                  </select>
                </div>
              </div>
            </ScrollReveal>

            {/* Transport Distance */}
            <ScrollReveal delay={150}>
              <div className="premium-card p-6">
                <div className="mb-3 flex items-center justify-between">
                  <label className="font-heading text-sm font-semibold text-foreground flex items-center gap-2">
                    <Bus className="h-4 w-4 text-primary/70" />
                    {t("calc.transport")}
                  </label>
                  <span className="rounded-md bg-primary-50 px-2.5 py-0.5 text-xs font-bold text-primary">
                    {distance} km
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-border accent-primary"
                />
                <div className="mt-2 flex justify-between text-[10px] font-semibold text-muted-foreground">
                  <span>0 km (No Bus)</span>
                  <span>10 km</span>
                  <span>20 km</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Programs Checkboxes */}
            <ScrollReveal delay={200}>
              <div className="premium-card p-6">
                <label className="mb-4 block font-heading text-sm font-semibold text-foreground">
                  {t("calc.programs")}
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {/* Robotics */}
                  <button
                    onClick={() => setHasRobotics(!hasRobotics)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 ${
                      hasRobotics
                        ? "border-primary/20 bg-primary-50/50 shadow-inner"
                        : "border-border/60 hover:bg-muted/40"
                    }`}
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${hasRobotics ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                      <Cpu className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">{t("calc.prog.robotics")}</span>
                  </button>

                  {/* Sports Academy */}
                  <button
                    onClick={() => setHasSports(!hasSports)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 ${
                      hasSports
                        ? "border-primary/20 bg-primary-50/50 shadow-inner"
                        : "border-border/60 hover:bg-muted/40"
                    }`}
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${hasSports ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                      <Award className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">{t("calc.prog.sports")}</span>
                  </button>

                  {/* Nutritious Meals */}
                  <button
                    onClick={() => setHasMeals(!hasMeals)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 ${
                      hasMeals
                        ? "border-primary/20 bg-primary-50/50 shadow-inner"
                        : "border-border/60 hover:bg-muted/40"
                    }`}
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${hasMeals ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                      <Coffee className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">{t("calc.prog.lunch")}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Estimates Card Column */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={250}>
              <div className="premium-card relative overflow-hidden bg-primary/95 text-white p-8 shadow-xl">
                {/* Visual grid decor overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }} />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 w-fit text-[11px] font-bold tracking-wider uppercase">
                    <Calculator className="h-3.5 w-3.5 animate-pulse" />
                    {t("calc.summary")}
                  </div>

                  {/* Calculations Details */}
                  <div className="space-y-3 divide-y divide-white/10 text-sm">
                    <div className="flex justify-between pb-2">
                      <span className="text-white/60">Base Tuition Fee:</span>
                      <span className="font-semibold">₹ {baseCost.toLocaleString("en-IN")} /mo</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-white/60">Route Bus Transport:</span>
                      <span className="font-semibold">₹ {transportCost.toLocaleString("en-IN")} /mo</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-white/60">Co-curricular Upgrades:</span>
                      <span className="font-semibold">₹ {additionalCost.toLocaleString("en-IN")} /mo</span>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4">
                    <div>
                      <div className="text-xs text-white/50">{t("calc.monthly")}</div>
                      <div className="text-3xl font-extrabold tracking-tight mt-1">
                        ₹ {monthlyTotal.toLocaleString("en-IN")}
                      </div>
                    </div>
                    
                    <div className="h-px bg-white/10" />

                    <div>
                      <div className="flex items-center justify-between text-xs text-white/50">
                        <span>{t("calc.annual")}</span>
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[9px] font-bold text-secondary-foreground uppercase">
                          Save 10%
                        </span>
                      </div>
                      <div className="text-xl font-bold tracking-tight mt-1">
                        ₹ {Math.round(annualTotal).toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-white/40 leading-relaxed italic">
                    {t("calc.note")}
                  </p>

                  <button
                    onClick={handleProceed}
                    className="btn-secondary group flex w-full items-center justify-center gap-2 border-white/15 bg-white text-primary px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-white/95"
                  >
                    {t("calc.cta")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculator;
