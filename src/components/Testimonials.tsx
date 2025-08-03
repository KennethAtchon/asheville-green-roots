import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcia L.",
      location: "West Asheville",
      rating: 5,
      text: "We finally enjoy spending time outside thanks to Evergreen! They transformed our neglected backyard into a beautiful oasis. The team was professional, punctual, and the results exceeded our expectations.",
      project: "Complete Backyard Makeover"
    },
    {
      name: "Tom B.",
      location: "South Asheville", 
      rating: 5,
      text: "Professional, affordable, and the results speak for themselves. Our lawn has never looked better, and the hardscaping work they did for our patio is absolutely stunning.",
      project: "Lawn Care & Hardscaping"
    },
    {
      name: "Craig R.",
      location: "North Asheville",
      rating: 5,
      text: "They showed up on time, respected our property, and exceeded expectations. The landscape design they created perfectly complements our mountain views. Highly recommend!",
      project: "Landscape Design"
    },
    {
      name: "Jennifer M.",
      location: "Downtown Asheville",
      rating: 5,
      text: "Evergreen solved our drainage issues and created the most beautiful garden. They really know the local climate and what plants thrive here in the mountains.",
      project: "Garden Design & Drainage"
    },
    {
      name: "David & Sarah K.",
      location: "East Asheville",
      rating: 5,
      text: "From the initial consultation to project completion, everything was seamless. Our neighbors keep asking who did our landscaping - we're so proud of our yard now!",
      project: "Full Property Landscaping"
    },
    {
      name: "Lisa T.",
      location: "Asheville",
      rating: 5,
      text: "The seasonal maintenance program has been a game-changer. Our yard looks immaculate year-round without us having to worry about it. Worth every penny!",
      project: "Seasonal Maintenance"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header fade-in">
            What <span className="text-primary">Asheville Families</span> Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in delay-100">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Evergreen Outdoor Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card fade-in delay-${(index + 1) * 100}`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Project Type */}
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in delay-700">
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-foreground font-medium mb-1">Happy Customers</div>
                <div className="text-sm text-muted-foreground">Since 2014</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center space-x-1 mb-2">
                  <span className="text-3xl font-bold text-accent">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-foreground font-medium mb-1">Average Rating</div>
                <div className="text-sm text-muted-foreground">Google & Yelp Reviews</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-foreground font-medium mb-1">Customer Retention</div>
                <div className="text-sm text-muted-foreground">Return & Referral Rate</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Ready to Join Our Happy Customers?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the Evergreen difference for yourself. Get your free consultation today.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-hero"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;