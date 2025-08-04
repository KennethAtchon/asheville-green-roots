import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional landscaping team transforming backyard in Asheville, NC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Serving Asheville, NC</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight fade-in delay-100">
            Breathe Life Into Your{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Outdoors
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed fade-in delay-200">
            From stunning garden makeovers to reliable lawn care, EvergreenLT Outdoor Solutions delivers beauty, function, and curb appeal—right in your backyard.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-8 fade-in delay-300">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">✓</span>
              </div>
              <span className="text-foreground font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">10+</span>
              </div>
              <span className="text-foreground font-medium">Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 fill-primary text-primary" />
              </div>
              <span className="text-foreground font-medium">5-Star Reviews</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in delay-400">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Your Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Services
            </Button>
          </div>

          {/* Local Badge */}
          <div className="mt-8 inline-flex items-center space-x-2 text-sm text-muted-foreground fade-in delay-500">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Premier Landscaping Services in Asheville & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;