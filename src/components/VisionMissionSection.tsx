import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Target, Check } from "lucide-react";

const vision = [
  "Celebrate Neurodiversity",
  "Provide specialized training for children with Autism",
  "Build an inclusive and supportive community",
  "Promote personalized learning",
  "Strengthen family partnerships",
];

const mission = [
  "Personalized learning",
  "Holistic support",
  "Collaboration with families",
  "Empower children",
  "Play-based learning",
  "Parent counselling",
];

const VisionMissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Vision & <span className="text-primary">Mission</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl">Our Vision</h3>
            </div>
            <ul className="space-y-3">
              {vision.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              {mission.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
