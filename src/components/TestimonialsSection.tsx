import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya S.", text: "Seed School has been a blessing for our family. The teachers are incredibly patient and my son has shown remarkable progress in communication.", rating: 5 },
  { name: "Rajesh K.", text: "The individualized approach and therapy support has made a huge difference for our daughter. We finally found a school that truly understands her needs.", rating: 5 },
  { name: "Meena R.", text: "The care and dedication of the entire team is extraordinary. My child looks forward to going to school every day.", rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">What Parents <span className="text-primary">Say</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover">
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-heading font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
