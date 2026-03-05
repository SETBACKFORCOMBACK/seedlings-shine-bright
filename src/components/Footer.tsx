import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="font-heading font-bold text-lg text-background mb-2">🌱 Seed School & Day Care Center</p>
        <p className="text-background/60 text-sm mb-4">for the Neurodiverse</p>
        <p className="text-background/40 text-xs flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 fill-primary text-primary" /> in Coimbatore
        </p>
      </div>
    </footer>
  );
};

export default Footer;
