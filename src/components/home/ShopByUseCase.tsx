import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Home Printers",
    image: "/assets/images/category-home-printers.png",
    alt: "Compact home printer",
    categoryId: "193853315",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Office Printers",
    image: "/assets/images/category-office-printers.png",
    alt: "Professional office printer",
    categoryId: "193855066",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Inkjet Printers",
    image: "/assets/images/category-inkjet-printers.png",
    alt: "Inkjet printer with smartphone",
    categoryId: "193859557",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Laser Printers",
    image: "/assets/images/category-laser-printers.png",
    alt: "Laser printer",
    categoryId: "193855067",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Document Scanners",
    image: "/assets/images/scanner-category.png",
    alt: "Document scanner with keyboard",
    categoryId: "193855068",
    gradient: "from-rose-500/20 to-red-500/20",
  },
];

const ShopByUseCase = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-14 animate-fade-in-up">
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
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`link-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative bg-card rounded-2xl border border-border/60 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`} />
                
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                </div>
                
                {/* Title section */}
                <div className="relative z-20 p-4 text-center bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByUseCase;
