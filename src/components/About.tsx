import { CheckCircle, Users, Award, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="section-header fade-in">
                Transforming Asheville Yards for{" "}
                <span className="text-primary">Over 10 Years</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed fade-in delay-100">
                EvergreenLT Outdoor Solutions has been transforming yards in Asheville for over 10 years. We're a team of passionate landscapers who believe outdoor spaces should be functional, beautiful, and built to last.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed fade-in delay-200">
                Locally owned and operated, we know the North Carolina terrain like the back of our rakes. From the clay soils to the mountain climate, we understand what it takes to create landscapes that thrive in our unique environment.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-xl shadow-card fade-in delay-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="feature-icon">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">500+</h3>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card fade-in delay-400">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="feature-icon">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">10+</h3>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card fade-in delay-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="feature-icon">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Licensed</h3>
                    <p className="text-sm text-muted-foreground">& Insured</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card fade-in delay-600">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="feature-icon">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Local</h3>
                    <p className="text-sm text-muted-foreground">Asheville Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamPhoto}
                alt="EvergreenLT Outdoor Solutions team with landscaping tools in front of completed yard project in Asheville, NC"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant border border-border float-animation">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Serving</div>
                <div className="text-sm font-medium text-foreground">Asheville</div>
              </div>
            </div>

            {/* Secondary Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-glow float-animation" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-lg font-bold mb-1">★★★★★</div>
                <div className="text-xs">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;