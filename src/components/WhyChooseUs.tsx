import { CheckCircle, Star, Users, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Licensed & Insured Professionals",
      description: "Fully licensed, bonded, and insured for your peace of mind. We protect your property and our team on every project.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "5-Star Reviews Across Google & Yelp",
      description: "Our reputation speaks for itself. Consistently rated 5 stars by satisfied customers throughout Asheville.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Local Experts with 10+ Years Experience",
      description: "Born and raised in Asheville, we understand the local climate, soil conditions, and what thrives here.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Fast Turnarounds, Always On Schedule",
      description: "We respect your time and stick to our commitments. Projects completed on time, every time.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header fade-in">
            Why Asheville Homeowners Choose{" "}
            <span className="text-primary">Evergreen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in delay-100">
            When you choose Evergreen Outdoor Solutions, you're choosing a team that's committed to excellence, reliability, and transforming your outdoor vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`service-card fade-in delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto text-center fade-in delay-500">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Trusted by Asheville Families Since 2014
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            From small garden updates to complete landscape overhauls, we've helped hundreds of Asheville families fall in love with their outdoor spaces again.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Free Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Local References</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;