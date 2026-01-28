import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import heroImage from "@/assets/RSFoundation.jpg";
import keradiSchool from "@/assets/ನನ್ನ ಕುಟುಂಬದೊಂದಿಗೆ ನಮ್ಮೂರಿನ ಕೆರಾಡಿ ಸರ್ಕಾರಿ ಕನ್ನಡ ಮಾಧ್ಯಮ (JP.jpg";
import childrenLearning from "@/assets/rishabshettyofficial_1768970462394.jpg";

const newsItems = [
  {
    id: 1,
    title: "Rishab Shetty Foundation Announced on Actor's Birthday",
    excerpt: "Pragathi Shetty announces the formation of Rishab Shetty Foundation, dedicated to supporting Kannada medium government schools and child welfare.",
    date: "July 2023",
    category: "Announcement",
    image: heroImage,
    featured: true,
  },
  {
    id: 2,
    title: "Keradi Government School Adopted as Flagship Project",
    excerpt: "The Government Higher Primary School in Keradi, Rishab Shetty's hometown, becomes the first school adopted by the foundation.",
    date: "July 2023",
    category: "Project",
    image: keradiSchool,
    featured: true,
  },
  {
    id: 3,
    title: "Rishab Shetty Enrolls Children in Government School",
    excerpt: "In a remarkable show of faith in government education, actor Rishab Shetty enrolls his own children in the adopted Keradi school.",
    date: "2023",
    category: "News",
    image: childrenLearning,
    featured: false,
  },
  {
    id: 4,
    title: "Infrastructure Improvements Underway at Keradi School",
    excerpt: "Major renovation and modernization work begins at the Keradi Government Higher Primary School, including new classrooms and facilities.",
    date: "2023",
    category: "Update",
    image: keradiSchool,
    featured: false,
  },
  {
    id: 5,
    title: "Community Engagement Programs Launched",
    excerpt: "The foundation launches parent engagement and community awareness programs to strengthen the education ecosystem around Keradi school.",
    date: "2023",
    category: "Initiative",
    image: heroImage,
    featured: false,
  },
  {
    id: 6,
    title: "Digital Learning Resources Introduced",
    excerpt: "Students at Keradi school now have access to digital learning resources and a new computer lab, bridging the digital divide.",
    date: "2024",
    category: "Update",
    image: childrenLearning,
    featured: false,
  },
];

const News = () => {
  const featuredNews = newsItems.filter((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              News & Updates
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Latest from the Foundation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with our latest initiatives, milestones, and stories 
              of impact from the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            Featured Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredNews.map((item) => (
              <article key={item.id} className="card-warm overflow-hidden hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light-terracotta text-xs font-medium text-primary">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Other News */}
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            More Updates
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherNews.map((item, index) => (
              <article key={item.id} className="card-warm overflow-hidden hover-lift group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? 'object-[center_3%] scale-150' : 
                      index === 2 ? 'object-[center_20%]' : 
                      index === 3 ? 'object-[center_3%] scale-150' : ''
                    }`}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary">{item.category}</span>
                    <span className="text-xs text-muted-foreground">• {item.date}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Follow our journey and receive updates about our initiatives, 
            events, and the impact we're making together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
