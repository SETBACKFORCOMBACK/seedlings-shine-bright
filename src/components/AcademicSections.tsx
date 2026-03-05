import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const sections = [
  "Day Care", "Pre Primary", "Primary", "Secondary",
  "Pre Vocational", "Vocational", "Pre NIOS", "NIOS up to 10th",
];

const AcademicSections = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="academics" className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Academic <span className="text-primary">Sections</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sections.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl p-5 shadow-sm border border-border card-hover flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <span className="font-heading font-semibold text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSections;
