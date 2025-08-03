import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-1.jpg";
import hardscapingImage from "@/assets/hardscaping.jpg";
import lawnMaintenanceImage from "@/assets/lawn-maintenance.jpg";
import landscapeDesignImage from "@/assets/landscape-design.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import heroImage from "@/assets/hero-landscape.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: beforeAfterImage,
      title: "Complete Backyard Transformation",
      description: "From overgrown to outstanding - a complete landscape makeover in West Asheville",
      category: "Before & After"
    },
    {
      image: hardscapingImage,
      title: "Natural Stone Patio & Fire Pit",
      description: "Custom hardscaping with native stone and outdoor entertainment area",
      category: "Hardscaping"
    },
    {
      image: landscapeDesignImage,
      title: "Native Plant Garden Design",
      description: "Sustainable landscape featuring North Carolina native plants",
      category: "Landscape Design"
    },
    {
      image: lawnMaintenanceImage,
      title: "Professional Lawn Care",
      description: "Weekly maintenance creating pristine, healthy lawn surfaces",
      category: "Lawn Maintenance"
    },
    {
      image: heroImage,
      title: "Mountain View Landscape",
      description: "Custom design maximizing beautiful Asheville mountain views",
      category: "Landscape Design"
    },
    {
      image: teamPhoto,
      title: "Satisfied Customer Project",
      description: "Another happy family enjoying their new outdoor living space",
      category: "Customer Success"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header fade-in">
              Our <span className="text-primary">Portfolio</span> of Beautiful Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in delay-100">
              See how we've transformed outdoor spaces throughout Asheville. From small garden updates to complete landscape overhauls, every project tells a story of beauty and craftsmanship.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer fade-in delay-${(index + 1) * 100}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-accent/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg">+</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in delay-700">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to See Your Yard in Our Portfolio?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your vision and create something beautiful together. Every great project starts with a conversation.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-hero"
              >
                Start Your Transformation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img 
                src={portfolioItems[selectedImage].image}
                alt={portfolioItems[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <span className="inline-block bg-accent/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white mb-2">
                  {portfolioItems[selectedImage].category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {portfolioItems[selectedImage].title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {portfolioItems[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
              {selectedImage + 1} / {portfolioItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;