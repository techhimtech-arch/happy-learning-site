import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent } from "./SiteContentProvider";

const FAQSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{content.faq.eyebrow}</span>
            <h2 className="section-title mt-3">
              {content.faq.title}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {content.faq.items.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="premium-card overflow-hidden rounded-2xl border-border/50 px-6 data-[state=open]:border-primary/15 data-[state=open]:shadow-glow">
                  <AccordionTrigger className="py-5 font-heading text-sm font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
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
};

export default FAQSection;
