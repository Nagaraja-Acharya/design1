import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Heart, Users, Handshake, Gift, ArrowRight, CheckCircle } from "lucide-react";
import communityImage from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (_3.jpg";

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers working on the ground to make a difference in children's lives.",
    benefits: [
      "Work directly with students and teachers",
      "Contribute your skills and expertise",
      "Be part of community events",
      "Gain meaningful experience",
    ],
    cta: "Become a Volunteer",
    bgColor: "bg-light-terracotta",
    iconColor: "text-primary",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Corporates, NGOs, and institutions can partner with us to expand our reach and deepen our impact.",
    benefits: [
      "CSR partnership opportunities",
      "Skill-based volunteering programs",
      "Co-branded initiatives",
      "Impact measurement and reporting",
    ],
    cta: "Explore Partnerships",
    bgColor: "bg-light-sage",
    iconColor: "text-secondary",
  },
  {
    icon: Gift,
    title: "Donate",
    description: "Your financial contribution directly supports our programs and helps us reach more children.",
    benefits: [
      "100% of donations go to programs",
      "Tax benefits available",
      "Regular impact updates",
      "Choose specific initiatives to support",
    ],
    cta: "Make a Donation",
    bgColor: "bg-light-gold",
    iconColor: "text-accent-foreground",
  },
];

const waysToHelp = [
  "Sponsor a child's education for a year",
  "Fund infrastructure improvements at a school",
  "Donate learning materials and books",
  "Support teacher training programs",
  "Contribute to mid-day meal programs",
  "Help set up digital learning facilities",
];

const GetInvolved = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Get Involved
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Join Our Mission to Transform Education
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every contribution, big or small, helps us create lasting change 
                in the lives of children. There are many ways you can be part of 
                our journey.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="#options">
                  See How You Can Help
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src={communityImage}
                alt="Rishab Shetty"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Involvement Options */}
      <section id="options" className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-muted-foreground">
              Choose the way that works best for you — every form of support 
              makes a meaningful difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <div
                key={option.title}
                className="card-warm p-8 hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl ${option.bgColor} flex items-center justify-center mb-6`}>
                  <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {option.description}
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    {option.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-6">
                Specific Ways to Help
              </h2>
              <p className="text-cream/80 leading-relaxed mb-8">
                If you'd like to direct your contribution to a specific cause, 
                here are some of the areas where your support can make an 
                immediate impact.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {waysToHelp.map((way, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-cream/10 border border-cream/20"
                  >
                    <Heart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-cream/90">{way}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream/10 rounded-2xl p-8 border border-cream/20">
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-cream/80 mb-6">
                Get in touch with us to discuss how you can contribute to our 
                mission. Whether you're an individual, a group, or an organization, 
                we'd love to hear from you.
              </p>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <div className="card-warm p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Express Your Interest
              </h2>
              <p className="text-muted-foreground">
                Fill in your details and we'll get back to you about how you can contribute.
              </p>
            </div>

            <form className="space-y-6 max-w-lg mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How would you like to help?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer my time</option>
                  <option value="donate">Make a donation</option>
                  <option value="partner">Corporate partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Tell us more about how you'd like to contribute..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Submit Your Interest
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
