import { Link } from "react-router-dom";
import ImageCard from "@/components/shared/ImageCard";

const useCases = [
  {
    title: "Home Office",
    description: "Compact printers for personal use",
    image: "/assets/images/home-office.jpg",
    alt: "Cozy home office setup with printer on desk",
  },
  {
    title: "Business Office",
    description: "High-volume solutions for teams",
    image: "/assets/images/business-office.jpg",
    alt: "Professional business office workspace",
  },
  {
    title: "Laser Printing",
    description: "Fast, efficient document output",
    image: "/assets/images/laser-printing.jpg",
    alt: "High-speed laser printing concept with motion blur",
  },
  {
    title: "All-in-One",
    description: "Print, scan, copy in one device",
    image: "/assets/images/all-in-one.jpg",
    alt: "Multifunction all-in-one printer device",
  },
];

const ShopByUseCase = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Shop by Use Case
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right solution for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              to="/shop"
              className="group block"
            >
              <div className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <ImageCard
                  src={useCase.image}
                  alt={useCase.alt}
                  size="card"
                  rounded="sm"
                  shadow="none"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByUseCase;
