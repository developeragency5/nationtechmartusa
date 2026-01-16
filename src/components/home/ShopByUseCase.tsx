import { Link } from "react-router-dom";
import ImageCard from "@/components/shared/ImageCard";

const categories = [
  {
    title: "Home Printers",
    image: "/assets/images/category-home-printers.png",
    alt: "Compact home printer",
    categoryId: "193853315",
  },
  {
    title: "Office Printers",
    image: "/assets/images/category-office-printers.png",
    alt: "Professional office printer",
    categoryId: "193855066",
  },
  {
    title: "Inkjet Printers",
    image: "/assets/images/category-inkjet-printers.png",
    alt: "Inkjet printer with smartphone",
    categoryId: "193859557",
  },
  {
    title: "Laser Printers",
    image: "/assets/images/category-laser-printers.png",
    alt: "Laser printer",
    categoryId: "193855067",
  },
  {
    title: "Document Scanners",
    image: "/assets/images/category-document-scanners.png",
    alt: "Document scanner",
    categoryId: "193855068",
  },
];

const ShopByUseCase = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right solution for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/shop#!/c/${category.categoryId}`}
              className="group block"
              data-testid={`link-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <ImageCard
                  src={category.image}
                  alt={category.alt}
                  size="card"
                  rounded="sm"
                  shadow="none"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
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
