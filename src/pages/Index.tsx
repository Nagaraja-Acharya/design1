import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Heart, ArrowRight, BookOpen, Home, Sparkles, Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/rishabshettyofficial_1768970461589.jpg";
import childrenLearning from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_1.jpg";
import communityImage from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_2.jpg";
import keradiSchool from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_3.jpg";

const impactStats = [
  { number: "1", label: "School Adopted", icon: Home },
  { number: "100+", label: "Students Impacted", icon: Users },
  { number: "2023", label: "Year Founded", icon: Sparkles },
];

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Kannada Medium Education",
    description: "Preserving and strengthening government schools that teach in Kannada, our mother tongue.",
    color: "bg-light-terracotta",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Children Welfare",
    description: "Ensuring every child has access to quality education, nutrition, and a nurturing environment.",
    color: "bg-light-sage",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "Community Well-being",
    description: "Building stronger communities through education, cultural preservation, and collective action.",
    color: "bg-light-gold",
    iconColor: "text-accent-foreground",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Children walking to school"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-terracotta border border-primary/20 mb-6 animate-fade-up">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">A Social Initiative by Rishab Shetty</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Preserving Kannada.{" "}
              <span className="text-primary">Empowering Education.</span>{" "}
              Uplifting Communities.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-2">
              Founded with a vision to protect Kannada medium government schools, 
              nurture our children, and build stronger communities through education 
              and cultural preservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">
                  Know Our Mission
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/get-involved">Support the Cause</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" 
          style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} />
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background -mt-8 relative z-10">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-warm p-6 text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-light-terracotta flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Saving Government Schools, One Village at a Time
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Rishab Shetty Foundation was announced in July 2023 by Pragathi Shetty 
                on the occasion of actor and filmmaker Rishab Shetty's birthday. Born from 
                a deep-rooted belief in the power of mother-tongue education, we are committed 
                to revitalizing Kannada medium government schools across Karnataka.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Inspired by the values portrayed in the acclaimed film "Sarkari Hi. Pra. Shaale," 
                we believe that every child deserves quality education in their own language, 
                in their own community.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={childrenLearning}
                  alt="Rishab Shetty with family at Keradi Government School"
                  className="rounded-2xl shadow-elevated w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-card hidden sm:block">
                  <Quote className="w-6 h-6 mb-2 opacity-70" />
                  <p className="text-sm font-medium italic">
                    "Education is the<br />seed of hope."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-background pattern-dots">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground">
              We work across three interconnected pillars to create lasting impact 
              in education and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="card-warm p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl ${area.color} flex items-center justify-center mb-6`}>
                  <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/focus-areas">
                Explore All Focus Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Flagship Project
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
                Keradi Government School
              </h2>
              <p className="text-cream/80 leading-relaxed mb-6">
                Our journey began where it matters most — home. The Government Higher Primary 
                School in Keradi, Rishab Shetty's hometown, became our first adopted school. 
                This is more than a project; it's a promise to the next generation.
              </p>
              <div className="bg-cream/10 rounded-xl p-6 mb-8 border border-cream/20">
                <p className="text-cream/90 italic text-lg">
                  "Rishab Shetty has enrolled his own children in the Keradi school, 
                  demonstrating his unwavering belief in government education and 
                  Kannada medium schooling."
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link to="/projects">
                  View Project Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={keradiSchool}
                alt="Rishab Shetty with family at Keradi Government School"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src={communityImage}
                alt="Rishab Shetty with family at Keradi Government School"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Join the Movement
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Together, We Can Make a Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're an educator, volunteer, corporate partner, or simply 
                someone who believes in the power of education — there's a place for 
                you in our mission. Every contribution, big or small, helps us build 
                a brighter future for our children.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-involved">
                    Get Involved
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Support Kannada Education?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join us in our mission to preserve and strengthen Kannada medium 
            government schools across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                Support the Foundation
                <Heart className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
