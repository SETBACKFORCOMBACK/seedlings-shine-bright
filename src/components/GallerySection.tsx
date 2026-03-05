import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1587654780292-e42e6e57a48e?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571210862729-78a257b842ab?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">Our <span className="text-primary">Gallery</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-border card-hover aspect-[4/3]">
              <img src={src} alt={`School gallery image ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
