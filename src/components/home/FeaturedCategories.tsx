import { Home, Building2, Droplets, Zap, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Home,
    name: "Home Printers",
    description: "Compact printers for home use",
  },
  {
    icon: Building2,
    name: "Office Printers",
    description: "High-volume office solutions",
  },
  {
    icon: Droplets,
    name: "Inkjet Printers",
    description: "Vibrant color printing",
  },
  {
    icon: Zap,
    name: "Laser Printers",
    description: "Fast, efficient printing",
  },
  {
    icon: ScanLine,
    name: "Document Scanners",
    description: "Digital document solutions",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of printers and document solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              to="/shop"
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Button asChild size="lg">
            <Link to="/shop">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;