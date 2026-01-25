import { Building2, Users, Laptop, UserCheck, Droplets, Calendar } from "lucide-react";

const ImpactContributions = () => {
  return (
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
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Contributions – Academic Year 2024–25
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Infrastructure Development
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Levelling of the school playground
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Painting of school buildings
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Tile installation in two classrooms
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Construction of one toilet facility
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                School Facilities & Utilities
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Two school vehicles with maintenance support
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Installation of one water purifier
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Solar power system installation
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Student Support
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  ID cards provided to students
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Uniforms for LKG and UKG students
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Classroom boards for all grades
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Two school name boards
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-terracotta flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Human Resources
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Appointment of honorary teachers
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                  Appointment of one support staff (Aya)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-secondary" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Contributions – Academic Year 2025–26
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Water & Maintenance
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Borewell pump installation
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Education & Technology
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  15 sets of student uniforms
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Computer support
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Television repair
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Digital Learning
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Smart Class setup worth ₹1,00,000
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Experiential Learning
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Educational tour expenses – ₹25,000
                </li>
              </ul>
            </div>

            <div className="card-warm p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-light-sage flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Collaboration
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                  Special contribution by Yuva Foundation
                </li>
              </ul>
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
                25+
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
  );
};

export default ImpactContributions;