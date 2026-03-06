import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import seedLogo from "@/assets/seed-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Care Plan", href: "#care-plan" },
  { label: "Programs", href: "#programs" },
  { label: "Therapies", href: "#therapies" },
  { label: "Academics", href: "#academics" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={seedLogo} alt="Seed School Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
          <span className="font-heading font-bold text-xl md:text-2xl text-primary">Seed School</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Book a Visit</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-2" size="sm">
            <a href="#contact">Book a Visit</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
