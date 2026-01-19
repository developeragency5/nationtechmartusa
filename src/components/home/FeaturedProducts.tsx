import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featuredProduct1 from "@/assets/products/hp-deskjet-2827e.png";
import featuredProduct2 from "@/assets/products/hp-officejet-8135e.png";
import featuredProduct3 from "@/assets/products/hp-envy-7955e.png";
import featuredProduct4 from "@/assets/products/hp-laserjet-m110w.png";

interface FeaturedProduct {
  name: string;
  shortName: string;
  image: string;
  url: string;
  category: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    name: "HP DeskJet 2827e Wireless All-in-One Color Inkjet Printer with Print, Scan & Copy for Everyday Home Printing",
    shortName: "HP DeskJet 2827e All-in-One Printer",
    image: featuredProduct1,
    url: "/shop#!/HP-DeskJet-2827e-Wireless-All-in-One-Color-Inkjet-Printer-with-Print-Scan-&-Copy-for-Everyday-Home-Printing/p/806466784",
    category: "Home Printers",
  },
  {
    name: "HP OfficeJet 8135e Wireless All-in-One Color Inkjet Printer with 3 Months of Ink Trial for Office Use",
    shortName: "HP OfficeJet 8135e All-in-One Printer",
    image: featuredProduct2,
    url: "/shop#!/HP-OfficeJet-8135e-Wireless-All-in-One-Color-Inkjet-Printer-with-3-Months-of-Ink-Trial-for-Office-Use/p/806466580",
    category: "Office Printers",
  },
  {
    name: "HP Envy 7955e Wireless Photo All-in-One Color Inkjet Printer with Auto Duplex Printing",
    shortName: "HP Envy 7955e Photo Printer",
    image: featuredProduct3,
    url: "/shop#!/HP-Envy-7955e-Wireless-Photo-All-in-One-Color-Inkjet-Printer-with-Auto-Duplex-Printing/p/806452376",
    category: "Inkjet Printers",
  },
  {
    name: "HP LaserJet M110w Compact Wireless Monochrome Laser Printer",
    shortName: "HP LaserJet M110w Laser Printer",
    image: featuredProduct4,
    url: "/shop#!/HP-LaserJet-M110w-Compact-Wireless-Monochrome-Laser-Printer/p/806466884",
    category: "Laser Printers",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked printers and scanners for home and office use
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <a
              key={index}
              href={product.url}
              className="bg-card border border-border/60 rounded-xl overflow-hidden"
              data-testid={`featured-product-${index}`}
            >
              <div className="aspect-square bg-white p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-primary mb-1 block px-2 py-0.5 bg-primary/10 rounded-full w-fit">
                  {product.category}
                </span>
                <h3 className="font-semibold text-foreground text-sm leading-tight mb-3 mt-2 line-clamp-2">
                  {product.shortName}
                </h3>
                <div className="flex flex-wrap items-center gap-1 text-primary text-sm font-medium">
                  View Product
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop">
            <Button size="lg" data-testid="button-view-all-products">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
