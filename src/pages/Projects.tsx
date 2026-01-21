import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Users, GraduationCap, ArrowRight, CheckCircle, Star } from "lucide-react";
import keradiSchool from "@/assets/rishabshettyofficial_1768970464184.jpg";
import childrenLearning from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (JP.jpg";

const projectHighlights = [
  "Complete infrastructure renovation and modernization",
  "Digital learning resources and computer lab setup",
  "Enhanced teaching methodologies and teacher training",
  "Nutritious mid-day meal program",
  "Extracurricular activities and sports facilities",
  "Community engagement and parent involvement programs",
];

const impactMetrics = [
  { number: "100+", label: "Students Benefited", icon: Users },
  { number: "7", label: "Classes Supported", icon: GraduationCap },
  { number: "1", label: "Village Transformed", icon: MapPin },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Projects
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Transforming Schools, Changing Lives
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project we undertake is a step towards our vision of 
              quality Kannada medium education for all children.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-gold border border-accent/30 mb-6">
              <Star className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">Flagship Project</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Government Higher Primary School, Keradi
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Keradi, Kundapura Taluk, Udupi District, Karnataka</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Government Higher Primary School in Keradi holds a special place in our 
                  mission. Located in Rishab Shetty's hometown, this school represents the 
                  foundation's commitment to grassroots change. By adopting this school, we're 
                  not just improving infrastructure — we're creating a model for what 
                  government schools can become.
                </p>

                <div className="bg-light-terracotta/50 rounded-xl p-6 mb-8 border border-primary/10">
                  <p className="text-foreground font-medium italic">
                    "In a powerful demonstration of belief in government education, Rishab 
                    Shetty has enrolled his own children in the Keradi school. This personal 
                    commitment speaks louder than any words about our faith in the potential 
                    of Kannada medium education."
                  </p>
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Project Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {projectHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <img
                  src={keradiSchool}
                  alt="Rishab Shetty with family at Keradi Government School"
                  className="rounded-2xl shadow-elevated w-full"
                />
                <img
                  src={childrenLearning}
                  alt="Rishab Shetty with family at Keradi Government School"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid sm:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="card-warm p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-light-terracotta flex items-center justify-center">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-foreground mb-1">
                  {metric.number}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Film */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
            From Reel to Real
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            The values portrayed in "Sarkari Hi. Pra. Shaale, Kasaragodu" — the 
            importance of government schools, mother-tongue education, and community 
            support — are not just cinematic themes. They are the guiding principles 
            of our work at the Keradi school and beyond.
          </p>
          <p className="text-cream/60 text-sm">
            The film highlighted the struggles of Kannada medium schools. The foundation 
            is working to change that narrative, one school at a time.
          </p>
        </div>
      </section>

      {/* Future Projects */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Looking Ahead
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Future Initiatives
            </h2>
            <p className="text-muted-foreground">
              The Keradi school is just the beginning. We envision a network of 
              revitalized government schools across Karnataka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-warm p-6 border-dashed border-2 border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                School Adoption Program
              </h3>
              <p className="text-muted-foreground text-sm">
                Expanding our model to adopt and transform more government schools 
                across Udupi and neighboring districts.
              </p>
            </div>
            <div className="card-warm p-6 border-dashed border-2 border-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Teacher Excellence Program
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive training and development programs for government 
                school teachers to enhance teaching quality.
              </p>
            </div>
            <div className="card-warm p-6 border-dashed border-2 border-accent/30">
              <div className="w-12 h-12 rounded-xl bg-light-gold flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Community Learning Centers
              </h3>
              <p className="text-muted-foreground text-sm">
                Establishing after-school learning centers for additional support 
                and skill development activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Support Our Projects
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Your contribution can help us expand our impact and bring quality 
            education to more children across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                Contribute Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
