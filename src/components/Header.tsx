import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-card" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-foreground">EvergreenLT</h1>
                <p className="text-sm text-muted-foreground -mt-1">Outdoor Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="hidden md:inline-flex bg-gradient-hero hover:shadow-glow"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Free Quote
              </Button>
              
              <button
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-hero mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Free Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Floating CTA Button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isScrolled ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Button 
          onClick={() => scrollToSection("contact")}
          className="btn-hero shadow-glow float-animation"
          size="lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          Free Quote
        </Button>
      </div>
    </>
  );
};

export default Header;