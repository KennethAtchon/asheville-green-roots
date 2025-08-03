import { Scissors, PenTool, Hammer, Leaf, Droplets } from "lucide-react";
import lawnMaintenanceImage from "@/assets/lawn-maintenance.jpg";
import landscapeDesignImage from "@/assets/landscape-design.jpg";
import hardscapingImage from "@/assets/hardscaping.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Maintenance",
      description: "Weekly mowing, edging, and fertilization to keep your lawn pristine year-round",
      features: ["Professional mowing", "Precision edging", "Seasonal fertilization", "Weed control"],
      image: lawnMaintenanceImage,
      alt: "Professional lawn maintenance service showing perfectly manicured green lawn in Asheville, NC"
    },
    {
      icon: PenTool,
      title: "Landscape Design", 
      description: "Custom plans tailored to your space, vision, and budget using native NC plants",
      features: ["Custom design plans", "Native plant selection", "3D renderings", "Installation included"],
      image: landscapeDesignImage,
      alt: "Custom landscape design featuring native North Carolina plants and flowers in Asheville"
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description: "Stone patios, walkways, and retaining walls that elevate your yard's functionality",
      features: ["Natural stone work", "Patio construction", "Retaining walls", "Walkway installation"],
      image: hardscapingImage,
      alt: "Beautiful stone patio and hardscaping project with natural stone walkways in Asheville, NC"
    },
    {
      icon: Leaf,
      title: "Seasonal Cleanup",
      description: "Leaf removal, mulching, pruning and more—comprehensive year-round care",
      features: ["Fall leaf removal", "Spring cleanup", "Pruning & trimming", "Mulch installation"]
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Smart watering solutions that keep your greens green while conserving water",
      features: ["Smart irrigation", "Drip systems", "Sprinkler installation", "Water conservation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header fade-in">
            Complete <span className="text-primary">Landscaping Services</span> in Asheville
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in delay-100">
            From routine maintenance to complete landscape transformations, we provide comprehensive outdoor solutions that enhance your property's beauty and value.
          </p>
        </div>

        <div className="grid gap-8 max-w-7xl mx-auto">
          {/* Featured Services with Images */}
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center service-card fade-in delay-${(index + 1) * 100} ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="feature-icon">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xs">✓</span>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.image && (
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-elegant">
                    <img 
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {services.slice(3).map((service, index) => (
              <div 
                key={index + 3}
                className={`service-card fade-in delay-${(index + 4) * 100}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="feature-icon">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xs">✓</span>
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in delay-600">
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Outdoor Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized quote for your landscaping project. Free consultations available.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-hero"
            >
              Get Your Free Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;