import { Layout } from "@/components/layout/Layout";
import img1 from "@/assets/RSF/DSC08317 (1).jpg";
import img2 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still008.jpg";
import img3 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still009.jpg";
import img4 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still010.jpg";
import img5 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still011.jpg";
import img6 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still012.jpg";
import img7 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still013.jpg";
import img8 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still014.jpg";
import img9 from "@/assets/RSF/DSC08362 (1).jpg";
import img10 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_02.Still016.jpg";
import img11 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_03.Still002.jpg";
import img12 from "@/assets/RSF/solar_sys.png";
import img13 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_10.Still021.jpg";
import img14 from "@/assets/RSF/DSC08329 (1).jpg";
import img15 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_10.Still025.jpg";
import img16 from "@/assets/RSF/SAMKAM20260124_2959.00_00_17_17.Still027.jpg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16
];

export default function Gallery() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our Journey in Pictures
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Capturing moments from our foundation's journey and impact in the community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((imageUrl, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-[4/3] hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={imageUrl}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}