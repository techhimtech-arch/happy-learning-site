import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Class 5 Student", text: "The teachers genuinely care about every child. My daughter has grown so much in confidence and academics since joining.", rating: 5 },
  { name: "Rajesh Patel", role: "Parent of Class 8 Student", text: "Excellent facilities and a safe environment. The school maintains perfect balance between studies and activities.", rating: 5 },
  { name: "Anita Verma", role: "Parent of Pre-Primary Student", text: "The warmth and care shown by the staff is wonderful. My son loves going to school every day!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Parents Say
          </h2>
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="card-shadow rounded-xl bg-card p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-muted-foreground">"{t.text}"</p>
              <div>
                <div className="font-heading text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
