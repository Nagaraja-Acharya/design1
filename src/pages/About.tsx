import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Heart, Target, Eye, Quote } from "lucide-react";
import childrenLearning from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_4.jpg";
import communityImage from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_5.jpg";

const values = [
  {
    title: "Authenticity",
    description: "We stay true to our roots, honoring Kannada heritage and grassroots values in everything we do.",
  },
  {
    title: "Inclusivity",
    description: "Education is a right for all. We work to ensure no child is left behind, regardless of their background.",
  },
  {
    title: "Community-First",
    description: "We believe in building from within, empowering local communities to drive sustainable change.",
  },
  {
    title: "Transparency",
    description: "Every contribution is accounted for. We maintain complete transparency in our operations and impact.",
  },
];

const timeline = [
  {
    year: "July 2023",
    title: "Foundation Announced",
    description: "Pragathi Shetty announces the Rishab Shetty Foundation on Rishab Shetty's birthday, marking the beginning of a new chapter in social service.",
  },
  {
    year: "2023",
    title: "Keradi School Adoption",
    description: "The Government Higher Primary School in Keradi becomes the first school adopted by the foundation, setting a precedent for future initiatives.",
  },
  {
    year: "2023",
    title: "Personal Commitment",
    description: "Rishab Shetty enrolls his own children in the Keradi government school, demonstrating unwavering belief in Kannada medium education.",
  },
  {
    year: "Ongoing",
    title: "Growing Impact",
    description: "Continuing to expand our reach, improve infrastructure, and support more students across Karnataka.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Story of Hope & Education
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a deep love for Kannada culture and an unwavering belief in 
              the power of education, the Rishab Shetty Foundation is committed to 
              transforming lives, one school at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                The Beginning
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Reel to Real: A Mission Born of Conviction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The seeds of the Rishab Shetty Foundation were sown long before its 
                official announcement. Through his acclaimed film "Sarkari Hi. Pra. Shaale, 
                Kasaragodu," Rishab Shetty highlighted the struggles and triumphs of 
                Kannada medium government schools, touching hearts across Karnataka and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On his birthday in July 2023, Pragathi Shetty announced the foundation, 
                transforming the message of the film into tangible action. What started 
                as a cinematic narrative became a movement for educational equity and 
                cultural preservation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, the foundation stands as a testament to what's possible when 
                artistry meets purpose, and when individuals choose to invest in the 
                futures of their communities.
              </p>
            </div>
            <div className="relative">
              <img
                src={childrenLearning}
                alt="Rishab Shetty with family at Keradi Government School"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card-warm bg-cream/10 border-cream/20 p-8 lg:p-10">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/80 leading-relaxed">
                A Karnataka where every child has access to quality education in their 
                mother tongue, where government schools are centers of excellence, and 
                where communities thrive through knowledge and cultural pride.
              </p>
            </div>
            <div className="card-warm bg-cream/10 border-cream/20 p-8 lg:p-10">
              <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/80 leading-relaxed">
                To revitalize Kannada medium government schools by improving infrastructure, 
                enhancing teaching quality, supporting student welfare, and fostering 
                community engagement — ensuring no child is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <div className="text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="font-serif text-2xl sm:text-3xl text-foreground italic leading-relaxed mb-8">
              "The strength of our culture lies in our language. By nurturing Kannada 
              medium schools, we're not just educating children — we're preserving our 
              identity for generations to come."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Rishab Shetty</p>
                <p className="text-sm text-muted-foreground">Founder, Actor & Filmmaker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground">
              Every decision we make is rooted in these core values that define 
              who we are and how we work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-warm p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-light-terracotta flex items-center justify-center mb-4">
                  <span className="font-serif text-lg font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Milestones Along the Way
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="inline-block text-sm font-semibold text-primary mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="card-warm p-8 lg:p-12 text-center">
            <img
              src={communityImage}
              alt="Rishab Shetty with family at Keradi Government School"
              className="w-full h-98 object-cover rounded-xl mb-8"
            />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you want to volunteer, donate, or partner with us, there are 
              many ways to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </section>
    </Layout>
  );
};

export default About;
