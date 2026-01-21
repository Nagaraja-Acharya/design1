import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Heart, Users, ArrowRight, BookOpen, Utensils, Palette, Leaf } from "lucide-react";
import childrenLearning from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_8.jpg";
import communityImage from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_9.jpg";

const focusAreas = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Kannada Medium Education",
    tagline: "Preserving Language, Building Futures",
    description: "We believe that learning in one's mother tongue is fundamental to a child's cognitive and emotional development. Our education initiatives focus on strengthening Kannada medium government schools to provide quality education.",
    initiatives: [
      { icon: BookOpen, text: "Infrastructure improvement and modernization" },
      { icon: GraduationCap, text: "Teacher training and development programs" },
      { icon: BookOpen, text: "Learning material and resource provision" },
      { icon: GraduationCap, text: "Digital literacy and technology integration" },
    ],
    bgColor: "bg-light-terracotta",
    iconColor: "text-primary",
  },
  {
    id: "welfare",
    icon: Heart,
    title: "Children Welfare",
    tagline: "Nurturing Every Child's Potential",
    description: "A healthy child is a learning child. We address the holistic needs of students, ensuring they have the physical, emotional, and social support required to thrive in school and beyond.",
    initiatives: [
      { icon: Utensils, text: "Nutritious mid-day meal programs" },
      { icon: Heart, text: "Health checkups and medical support" },
      { icon: Palette, text: "Extracurricular and creative activities" },
      { icon: Heart, text: "Counseling and emotional well-being support" },
    ],
    bgColor: "bg-light-sage",
    iconColor: "text-secondary",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Well-being",
    tagline: "Stronger Communities, Brighter Futures",
    description: "Education doesn't happen in isolation. We work with families and communities to create an ecosystem that values and supports learning, cultural preservation, and collective growth.",
    initiatives: [
      { icon: Users, text: "Parent engagement and awareness programs" },
      { icon: Leaf, text: "Community development initiatives" },
      { icon: Palette, text: "Cultural preservation and celebration" },
      { icon: Users, text: "Skill development for parents and youth" },
    ],
    bgColor: "bg-light-gold",
    iconColor: "text-accent-foreground",
  },
];

const FocusAreas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Focus Areas
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Three Pillars of Change
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work spans three interconnected areas that together create 
              lasting, meaningful impact in the lives of children and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Detail */}
      {focusAreas.map((area, index) => (
        <section
          key={area.id}
          id={area.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-cream"}`}
        >
          <div className="container-wide mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}>
              <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <div className={`w-20 h-20 rounded-2xl ${area.bgColor} flex items-center justify-center mb-6`}>
                  <area.icon className={`w-10 h-10 ${area.iconColor}`} />
                </div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Focus Area {index + 1}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {area.title}
                </h2>
                <p className="text-lg text-primary font-medium mb-6">
                  {area.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {area.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Initiatives:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {area.initiatives.map((initiative, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                      >
                        <initiative.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {initiative.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <img
                  src={index === 2 ? communityImage : childrenLearning}
                  alt="Rishab Shetty with family at Keradi Government School"
                  className="rounded-2xl shadow-elevated w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Impact Statement */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
            Our Integrated Approach
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We understand that education, child welfare, and community development 
            are deeply interconnected. A child who is healthy, supported by their 
            community, and educated in their mother tongue has the best chance of 
            reaching their full potential.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/projects">
              See Our Projects in Action
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Want to Contribute to These Areas?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Your support can help us expand our reach and deepen our impact 
            across all three focus areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                Get Involved Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FocusAreas;
