import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">About <span className="text-primary">Seed School</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12 max-w-3xl mx-auto">
          Seed School provides individualized learning programs (IEP's) and therapeutic support for neurodiverse children. The school focuses on communication development, behavioral guidance, academics, sensory integration and life skills training to help children grow confidently and independently.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Compassionate Care", desc: "Every child is treated with love, patience and understanding in a safe environment." },
            { icon: Users, title: "Inclusive Community", desc: "We celebrate neurodiversity and build a supportive community for children and families." },
            { icon: BookOpen, title: "Individualized Learning", desc: "Programs are tailored to each child's unique strengths, needs and pace of learning." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
