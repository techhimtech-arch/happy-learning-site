import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</span>
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Get in Touch
          </h2>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <ScrollReveal>
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "123 Education Lane, Knowledge City, India - 110001" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "info@brightfutures.edu" },
              { icon: Clock, title: "School Timing", text: "Monday - Saturday: 8:00 AM - 3:00 PM" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.233!2d77.209!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
              className="rounded-xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
