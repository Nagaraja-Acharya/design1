import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "News & Updates", path: "/news" },
  ],
  focusAreas: [
    { name: "Education", path: "/focus-areas" },
    { name: "Children Welfare", path: "/focus-areas" },
    { name: "Community Well-being", path: "/focus-areas" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-deep-brown text-cream">
      {/* Main Footer */}
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-cream leading-tight">
                  Rishab Shetty
                </span>
                <span className="text-sm text-cream/70 -mt-0.5">Foundation</span>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Preserving Kannada heritage through education, empowering communities, 
              and nurturing the future of our children.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cream" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-5">
              Focus Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.focusAreas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  Keradi, Kundapura Taluk,<br />
                  Udupi District, Karnataka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@rishabshettyfoundation.org"
                  className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                >
                  info@rishabshettyfoundation.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rishab Shetty Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
