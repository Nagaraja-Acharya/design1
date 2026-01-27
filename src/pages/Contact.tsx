import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["No 290/2, 2nd floor, Lakshmi Arcade,", "Siddaiah road, Bangalore 560027"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@rishabshettyfoundation.org", "support@rishabshettyfoundation.org"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", handle: "@rishabshettyfoundation" },
  { icon: Twitter, href: "#", label: "Twitter", handle: "@rsf_official" },
  { icon: Instagram, href: "#", label: "Instagram", handle: "@rishabshettyfoundation" },
  { icon: Youtube, href: "#", label: "YouTube", handle: "Rishab Shetty Foundation" },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our work? Want to get involved? We'd love 
              to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-warm p-8 lg:p-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donate">Donations</option>
                      <option value="partner">Partnership</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="card-warm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-light-terracotta flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="card-warm p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-light-terracotta flex items-center justify-center group-hover:bg-primary transition-colors">
                        <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join our mission to preserve Kannada education and uplift communities.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              Get Involved Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
