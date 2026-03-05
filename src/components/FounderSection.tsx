import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">About Our <span className="text-primary">Founder</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The founder has over 10 years of experience working with neurodiverse children including Autism, ADHD, Cerebral Palsy and Intellectual Disabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong background in special education, physiotherapy, occupational therapy and child development, the founder has built an inclusive learning environment focused on independence, emotional development and early intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
