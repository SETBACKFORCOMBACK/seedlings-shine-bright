import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Swords, Shield, Circle, CircleDot, Piano, Music, Music2 } from "lucide-react";

const programs = [
  { icon: Swords, name: "Silambam", color: "bg-primary/10 text-primary" },
  { icon: Shield, name: "Karate", color: "bg-accent/10 text-accent" },
  { icon: Circle, name: "Volleyball", color: "bg-secondary/20 text-secondary-foreground" },
  { icon: CircleDot, name: "Basketball", color: "bg-primary/10 text-primary" },
  { icon: Piano, name: "Keyboard", color: "bg-accent/10 text-accent" },
  { icon: Music, name: "Classical Dance", color: "bg-secondary/20 text-secondary-foreground" },
  { icon: Music2, name: "Western Dance", color: "bg-primary/10 text-primary" },
];

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Our <span className="text-primary">Programs</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="section-subtitle">Sports and arts are used to develop physical, emotional and social skills in every child.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover text-center">
              <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center mx-auto mb-4`}>
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
