import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What age group does Seed School accept?", a: "We accept children from early childhood through vocational age, with programs tailored from Day Care through NIOS (up to 10th standard)." },
  { q: "What conditions does the school support?", a: "We support children with Autism, ADHD, Cerebral Palsy, Intellectual Disabilities and other neurodiverse conditions." },
  { q: "Are therapies included in the program?", a: "Yes, we offer physiotherapy, occupational therapy, speech therapy, behavior therapy, sensory integration therapy and special education as part of our holistic approach." },
  { q: "Can parents visit the school before admission?", a: "Absolutely! We encourage parents to book a visit and meet our team. Use the contact form or call us to schedule." },
  { q: "Does the school provide transportation?", a: "Please contact us directly to discuss transportation options available in your area." },
  { q: "How is progress measured?", a: "Each child has an individualized plan with regular assessments. We work closely with parents to track and share progress." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border px-6 shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline py-5">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
