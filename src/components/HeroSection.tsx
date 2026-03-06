import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Children learning in an inclusive classroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.85)] to-[hsl(var(--hero-overlay)/0.6)]" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 animate-fade-in backdrop-blur-sm">
            🌱 Nurturing Every Unique Mind
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight animate-fade-in uppercase tracking-wide" style={{ animationDelay: "0.15s" }}>
            Seed Neurodiverse
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            சிறப்பு குழந்தைகளுக்கான நட்பு பள்ளி
          </p>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.3s" }}>
            A nurturing, structured and inclusive learning environment for children with Autism, ADHD, Cerebral Palsy and Intellectual Disabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg">
              <a href="#contact">Book a Visit</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full text-background">
          <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
