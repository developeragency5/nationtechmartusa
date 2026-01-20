import { Link } from "react-router-dom";
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
    description: "Perfect for everyday family use. Print school projects, photos, and documents with ease. Compact designs that fit any home office or study space.",
    customIcon: homePrinterIcon,
    link: "/shop/home-printers",
    highlights: ["Compact & space-saving", "Photo printing", "Wireless connectivity"],
  },
  {
    title: "Office Printers",
    description: "Built for productivity and reliability. Handle high-volume printing with fast speeds and professional-quality output for your business needs.",
    customIcon: officePrinterIcon,
    link: "/shop/office-printers",
    highlights: ["High-volume capacity", "Fast print speeds", "Network ready"],
  },
  {
    title: "Inkjet Printers",
    description: "Ideal for vibrant color printing and photos. Inkjet technology delivers exceptional detail and color accuracy for creative projects and documents.",
    customIcon: inkjetPrinterIcon,
    link: "/shop/inkjet-printers",
    highlights: ["Vivid color output", "Photo-quality prints", "Versatile media"],
  },
  {
    title: "Laser Printers",
    description: "Fast, efficient, and cost-effective for text-heavy documents. Laser technology offers crisp text and lower cost-per-page for high-volume printing.",
    customIcon: laserPrinterIcon,
    link: "/shop/laser-printers",
    highlights: ["Sharp text quality", "Low cost per page", "High-speed output"],
  },
  {
    title: "Scanners",
    description: "Digitize documents, photos, and artwork with precision. From flatbed to portable options, find the right scanner for your digitization needs.",
    customIcon: scannerIcon,
    link: "/shop/scanners",
    highlights: ["High resolution", "Document management", "Photo scanning"],
  },
];

const PrinterCategoryGuide = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-printer-category-guide">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
            data-testid="text-category-guide-heading"
          >
            Find the Right Printer for Your Needs
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-category-guide-description"
          >
            Not sure which printer is right for you? Explore our categories to find the perfect match for your home, office, or creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const categorySlug = category.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <Card
                key={category.title}
                className="hover-elevate border-border/50 bg-card"
                data-testid={`card-category-${categorySlug}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={category.customIcon}
                      alt={category.title}
                      className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-foreground mb-3"
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
                    variant="ghost"
                    className="mt-6 w-full justify-center gap-2"
                  >
                    <Link 
                      to={category.link} 
                      data-testid={`link-category-${categorySlug}`}
                    >
                      Browse {category.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/shop" data-testid="link-view-all-products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrinterCategoryGuide;
