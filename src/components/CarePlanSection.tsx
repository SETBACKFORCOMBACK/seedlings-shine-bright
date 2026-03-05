import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, LayoutGrid, MessageCircle, Brain, BookOpen, Hand, Puzzle, Home } from "lucide-react";

const items = [
  { icon: Users, label: "Parental Counselling" },
  { icon: LayoutGrid, label: "Structured Classroom" },
  { icon: MessageCircle, label: "Communication Development" },
  { icon: Brain, label: "Behavioural Guidance" },
  { icon: BookOpen, label: "Academic Support" },
  { icon: Hand, label: "Motor Skills Development" },
  { icon: Puzzle, label: "Sensory Integration" },
  { icon: Home, label: "Daily Living Skills" },
];

const CarePlanSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="care-plan" className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Care <span className="text-primary">Plan</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="section-subtitle">We support parents and children through a comprehensive care approach.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-3 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarePlanSection;
