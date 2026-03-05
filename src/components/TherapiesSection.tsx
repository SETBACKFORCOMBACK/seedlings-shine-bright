import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Activity, Hand, MessageCircle, Brain, Puzzle, BookOpen } from "lucide-react";

const therapies = [
  { icon: Activity, name: "Physiotherapy", desc: "Improving mobility, strength and physical development." },
  { icon: Hand, name: "Occupational Therapy", desc: "Building fine motor skills and daily living abilities." },
  { icon: MessageCircle, name: "Speech Therapy", desc: "Enhancing communication and language skills." },
  { icon: Brain, name: "Behavior Therapy", desc: "Supporting positive behavioral development." },
  { icon: Puzzle, name: "Sensory Integration", desc: "Helping children process sensory information effectively." },
  { icon: BookOpen, name: "Special Education", desc: "Individualized academic instruction and support." },
];

const TherapiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="therapies" className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Therapies <span className="text-primary">Offered</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="section-subtitle">Our therapy programs are guided by trained professionals dedicated to each child's progress.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-all duration-300">
                <t.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{t.name}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
