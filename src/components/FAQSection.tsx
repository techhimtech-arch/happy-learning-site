import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What are the school fees?", a: "Our fee structure is competitive and transparent. Please contact the admission office or fill the enquiry form for detailed fee information for each class." },
  { q: "What is the admission process?", a: "The admission process is simple: fill the online form, visit the school for a campus tour, and complete the enrollment. We also conduct a small interaction session with the child." },
  { q: "Is transport facility available?", a: "Yes, we provide safe and reliable bus transport covering all major routes across the city. GPS-tracked buses with trained attendants are available." },
  { q: "What facilities does the school have?", a: "We have smart classrooms, fully-equipped science and computer labs, a large library, sports grounds, CCTV security, and a hygienic canteen." },
  { q: "What curriculum does the school follow?", a: "We follow the CBSE curriculum with additional focus on practical learning, co-curricular activities, and overall personality development." },
];

const FAQSection = () => (
  <section className="section-padding section-light">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-5">
                <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
