import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with your free quote.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header fade-in">
            Get Your <span className="text-primary">Free Quote</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in delay-100">
            Ready to transform your outdoor space? Contact EvergreenLT Outdoor Solutions for a free consultation and personalized quote. We're here to bring your landscaping vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in delay-200">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="(828) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none"
                    placeholder="Tell us about your landscaping project, property size, and any specific goals or challenges..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send My Free Quote Request
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in delay-300">
            {/* Business Info */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-lg font-medium text-accent">(828) 555-3382</p>
                    <p className="text-sm text-muted-foreground">Free estimates over the phone</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-lg font-medium text-accent">hello@evergreenltoutdoors.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-lg font-medium text-foreground">123 Maple Ridge Rd</p>
                    <p className="text-muted-foreground">Asheville, NC 28801</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">Mon–Fri: 8am–6pm</p>
                      <p className="text-foreground">Saturday: 9am–2pm</p>
                      <p className="text-muted-foreground">Closed Sundays</p>
                      <p className="text-xs text-muted-foreground italic">(Eastern Time)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h4 className="font-semibold text-foreground mb-4">Service Areas</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Proudly serving Asheville and surrounding areas including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">West Asheville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">South Asheville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">North Asheville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">East Asheville</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">Black Mountain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">Woodfin</span>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">123 Maple Ridge Rd, Asheville, NC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;