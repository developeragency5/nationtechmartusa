import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homePrinterIcon from "@/assets/home-printer-icon.png";
import officePrinterIcon from "@/assets/office-printer-icon.png";
import inkjetPrinterIcon from "@/assets/inkjet-printer-icon.png";
import laserPrinterIcon from "@/assets/laser-printer-icon.png";
import scannerIcon from "@/assets/scanner-icon.png";

const categories = [
  {
    title: "Home Printers",
    description: "Perfect for everyday printing needs at home and small home office setups.",
    customIcon: homePrinterIcon,
    link: "/shop#!/c/193853315",
    highlights: ["Compact design, easy setup", "Built-in Wi-Fi, wireless printing", "Handles daily print jobs smoothly"],
  },
  {
    title: "Office Printers",
    description: "Built for productivity, durability, and consistent performance in busy work environments.",
    customIcon: officePrinterIcon,
    link: "/shop#!/c/193855066",
    highlights: ["High-volume printing, fast speeds", "Duplex printing, network-ready", "Built-in security features"],
  },
  {
    title: "Inkjet Printers",
    description: "Ideal for producing vibrant images, documents, and printing photos with accurate color reproduction.",
    customIcon: inkjetPrinterIcon,
    link: "/shop#!/c/193859557",
    highlights: ["Great print quality, smooth colors", "Supports photo paper", "Flexible media handling"],
  },
  {
    title: "Laser Printers",
    description: "Fast, efficient, and cost-effective printers designed for text-heavy workloads.",
    customIcon: laserPrinterIcon,
    link: "/shop#!/c/193855067",
    highlights: ["Clear, sharp text output", "Low cost per page", "Fast print speed, strong parts"],
  },
  {
    title: "Scanners",
    description: "Digitize documents with precision and reliability for home and office use.",
    customIcon: scannerIcon,
    link: "/shop#!/c/193855068",
    highlights: ["High-resolution scanning", "Fast performance", "Automatic document feeders"],
  },
  {
    title: "All-in-One Printers",
    description: "Print, scan, copy, and fax in one convenient device.",
    customIcon: null,
    link: "/shop",
    highlights: ["Space-saving, cost-effective", "Color touchscreen controls", "Wireless connectivity"],
    isViewAll: true,
  },
];

const PrinterCategoryGuide = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-printer-category-guide">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
            data-testid="text-category-guide-heading"
          >
            Find the Right Printer
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-category-guide-description"
          >
            Not sure which printer is right for you? Check out our product categories to find what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const categorySlug = category.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <Card
                key={category.title}
                className="group border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-category-${categorySlug}`}
              >
                <CardContent className={`p-6 text-center ${(category as any).isViewAll ? 'bg-primary/5 flex flex-col justify-center h-full' : ''}`}>
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    {category.customIcon ? (
                      <img
                        src={category.customIcon}
                        alt={category.title}
                        className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                        <ArrowRight className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <h3 
                    className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary"
                    data-testid={`text-category-title-${categorySlug}`}
                  >
                    {category.title}
                  </h3>
                  
                  <p 
                    className="text-muted-foreground leading-relaxed text-sm"
                    data-testid={`text-category-desc-${categorySlug}`}
                  >
                    {category.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {category.highlights.map((highlight, idx) => (
                      <li
                        key={highlight}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                        data-testid={`text-highlight-${categorySlug}-${idx}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={(category as any).isViewAll ? "default" : "ghost"}
                    className="mt-6 w-full justify-center gap-2"
                  >
                    <a 
                      href={category.link} 
                      data-testid={`link-category-${categorySlug}`}
                    >
                      {(category as any).isViewAll ? "Shop Now" : `Browse ${category.title}`}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PrinterCategoryGuide;
