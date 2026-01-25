import { Building2, Users, Laptop, UserCheck, Droplets, Calendar } from "lucide-react";

const contributionsData2024 = [
  {
    category: "Infrastructure Development",
    icon: Building2,
    items: [
      "Levelling of the school playground",
      "Painting of school buildings", 
      "Tile installation in two classrooms",
      "Construction of one toilet facility"
    ]
  },
  {
    category: "School Facilities & Utilities",
    icon: Droplets,
    items: [
      "Two school vehicles along with maintenance support",
      "Installation of one water purifier",
      "Solar power system installation"
    ]
  },
  {
    category: "Student Support",
    icon: Users,
    items: [
      "ID cards provided to students",
      "Uniforms for LKG and UKG students",
      "Classroom boards for all grades",
      "Notice boards",
      "Two school name boards"
    ]
  },
  {
    category: "Human Resources",
    icon: UserCheck,
    items: [
      "Appointment of honorary teachers",
      "Appointment of one support staff (Aya)"
    ]
  }
];

const contributionsData2025 = [
  {
    category: "Water & Maintenance",
    icon: Droplets,
    items: [
      "Borewell pump installation"
    ]
  },
  {
    category: "Education & Technology",
    icon: Laptop,
    items: [
      "15 sets of student uniforms",
      "Computer support",
      "Television repair",
      "Laboratory kit provision"
    ]
  },
  {
    category: "Digital Learning",
    icon: Laptop,
    items: [
      "Smart Class setup worth ₹1,00,000"
    ]
  },
  {
    category: "Experiential Learning",
    icon: Users,
    items: [
      "Educational tour expenses supported – ₹25,000"
    ]
  },
  {
    category: "Collaboration",
    icon: UserCheck,
    items: [
      "Special contribution by Yuva Foundation"
    ]
  }
];

const impactStats = [
  { number: "25+", label: "Educational & Infrastructure Initiatives" },
  { number: "2", label: "Academic Years of Continuous Support" },
  { number: "100+", label: "Students Directly Benefited" }
];

const ImpactContributions = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
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

        {/* Academic Year 2024-25 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Contributions – Academic Year 2024–25
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionsData2024.map((category, index) => (
              <div key={index} className="card-warm p-6 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Year 2025-26 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-secondary" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Contributions – Academic Year 2025–26
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contributionsData2025.map((category, index) => (
              <div key={index} className="card-warm p-6 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impact at a Glance */}
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
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactContributions;