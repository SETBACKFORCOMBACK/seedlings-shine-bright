import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Get in <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="section-subtitle">We'd love to hear from you. Reach out for admissions, enquiries or to schedule a visit.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">9344172392 / 9789522490</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Email</h4>
                  <a href="mailto:seedneurodiverse@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">seedneurodiverse@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">4/16 Anand Ayankar Street, VKL Nagar,<br />NGGO Colony, Coimbatore – 641022</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Instagram</h4>
                  <a href="https://instagram.com/Seed_school.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">@Seed_school.in</a>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="font-heading font-bold text-xl mb-6">Send us an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="rounded-xl" />
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="rounded-xl" />
              <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl" />
              <Textarea placeholder="Your Message or Enquiry" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="rounded-xl" />
              <Button type="submit" className="w-full rounded-xl" size="lg">
                <Send className="w-4 h-4 mr-2" /> Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
