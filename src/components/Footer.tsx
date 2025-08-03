import { Phone, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Evergreen</h3>
                <p className="text-background/80 -mt-1">Outdoor Solutions</p>
              </div>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Transforming Asheville outdoor spaces for over 10 years. From lawn care to complete landscape design, we bring your vision to life with professional craftsmanship and local expertise.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background">(828) 555-3382</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background">hello@evergreenoutdoors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background">123 Maple Ridge Rd, Asheville, NC 28801</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="space-y-3 text-background/80">
              <p className="hover:text-primary transition-colors cursor-pointer">Lawn Maintenance</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Landscape Design</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Hardscaping</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Seasonal Cleanup</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Irrigation Systems</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} Evergreen Outdoor Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Serving Asheville, NC</span>
              <span>•</span>
              <span>10+ Years Experience</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm text-background/80">
                Proudly serving the Asheville community since 2014
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;