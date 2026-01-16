import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              About NationTechMart
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NationTechMart is an independent online retailer specializing in printers, 
                scanners, and office equipment. We're not affiliated with any manufacturer—we 
                simply source quality products and offer them at competitive prices.
              </p>
              <p>
                Our goal is straightforward: provide reliable technology products with honest 
                pricing, clear policies, and a hassle-free shopping experience. Free shipping 
                on orders over $100, easy 30-day returns, and manufacturer warranties on all products.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" data-testid="button-learn-more-about">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/images/about-team.jpg"
              alt="Professional team working together"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
