import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HeartPulse } from "lucide-react";

const SportsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-primary-foreground text-center shadow-xl">
          <HeartPulse className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Sports & Development</h2>
          <p className="text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
            The school provides sports activities under the guidance of sports physiotherapists and occupational therapists to improve children's physical and emotional development. Through structured play and athletic programs, every child gains confidence, coordination and joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
