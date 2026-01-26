import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Users, GraduationCap, ArrowRight, CheckCircle, Star, Building2, Droplets, UserCheck, Laptop, Calendar } from "lucide-react";
import keradiSchool from "@/assets/rishabshettyofficial_1768970464184.jpg";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462205.jpg";
import schoolVan from "@/assets/school van.jpg";
import solarSystem from "@/assets/solar_sys.png";
import facilitiesImg1 from "@/assets/RSF/DSC08329 (1).jpg";
import facilitiesImg2 from "@/assets/RSF/DSC08362 (1).jpg";
import smartClassTV from "@/assets/smart_class_tv.jpg";
import digitalLearning from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_10.Still021.jpg";
import studentSupportImage from "@/assets/Student Support.jpg";
import schoolNameBoard from "@/assets/School name board.jpg";

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
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={childrenLearning} alt="Children Learning" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/80 via-deep-brown/70 to-deep-brown/90"></div>
        <div className="relative z-10 container-wide mx-auto text-center px-4">
          <span className="inline-block text-sm font-semibold text-cream uppercase tracking-wider mb-4">
            Our Projects
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-cream mb-6">
            Transforming Schools, Changing Lives
          </h1>
          <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
            Every project we undertake is a step towards our vision of quality Kannada medium education for all children.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={keradiSchool} alt="Keradi School" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 border border-accent mb-6">
                  <Star className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Flagship Project</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream mb-4">
                  Government Higher Primary School, Keradi
                </h2>
                <div className="flex items-center gap-2 text-cream/90 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span>Keradi, Kundapura Taluk, Udupi District, Karnataka</span>
                </div>
                
                <p className="text-cream/90 text-lg leading-relaxed max-w-3xl">
                  Located in Rishab Shetty's hometown, this school represents our commitment to grassroots change — creating a model for what government schools can become.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-light-terracotta/30 rounded-2xl p-8 border border-primary/20">
                <p className="text-foreground font-medium italic text-lg leading-relaxed">
                  "In a powerful demonstration of belief in government education, Rishab Shetty has enrolled his own children in the Keradi school. This personal commitment speaks louder than any words."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {projectHighlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

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

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Impact & Contributions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Building Better Learning Environments Through Action
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Rishab Shetty Foundation, registered in Bengaluru, has been actively working towards 
              strengthening government schools through infrastructure development, student support, 
              and educational enhancement initiatives.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-12">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Contributions - Academic Year 2024-25
              </h3>
            </div>
            
            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground">
                      School Facilities & Utilities
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-15">
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Two school vehicles with drivers and maintenance support
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Safe drinking water unit installation
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Solar power system worth ₹4 lakh
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Borewell construction with pump installation
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src={facilitiesImg1} alt="School Facilities" className="w-full h-40 object-cover rounded-xl shadow-lg" />
                  <img src={facilitiesImg2} alt="School Utilities" className="w-full h-40 object-cover rounded-xl shadow-lg" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground">
                      Student Support
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-15">
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      ID cards distributed to students
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Uniforms for LKG and UKG students (2 years)
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Classroom boards for all grades
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Two school name boards donated
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Laboratory kit worth ₹18,000
                    </li>
                  </ul>
                </div>
                <div className="lg:order-1">
                  <img src={studentSupportImage} alt="Student Support at Keradi School" className="w-full h-64 object-cover object-[center_30%] rounded-xl shadow-lg" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground">
                      Infrastructure Development
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-15">
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Playground leveling with steps construction
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Complete painting of school buildings
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Tile installation in two classrooms
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Well-equipped toilet construction
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-light-terracotta/20 rounded-xl p-8 text-center">
                    <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Infrastructure improvements creating a better learning environment</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground">
                      Staff & Support
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-15">
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      Five guest teachers appointed
                    </li>
                    <li className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                      One helper (Aya) for school cleanliness
                    </li>
                  </ul>
                </div>
                <div className="lg:order-1">
                  <div className="bg-light-terracotta/20 rounded-xl p-8 text-center">
                    <UserCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Dedicated staff ensuring quality education and clean environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-12">
              <Calendar className="w-6 h-6 text-secondary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Contributions - Academic Year 2025-26
              </h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    Digital Learning & Technology
                  </h4>
                </div>
                <ul className="space-y-3 ml-15">
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Smart Class with TV panel worth over ₹1 lakh
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Technology-based education enabling modern learning
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Reduced teacher workload through digital tools
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Computer repairs and maintenance
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    15 sets of student uniforms
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Educational trip funding - ₹25,000
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2"></span>
                    Special contribution by Yuva Foundation
                  </li>
                </ul>
              </div>
              <div>
                <img src={digitalLearning} alt="Digital Learning" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Impact at a Glance
              </h3>
              <p className="text-muted-foreground">
                Measurable outcomes from our continuous commitment to education
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">
                  30+
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  Educational & Infrastructure Initiatives
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">
                  2
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  Academic Years of Continuous Support
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">
                  100+
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  Students Directly Benefited
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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