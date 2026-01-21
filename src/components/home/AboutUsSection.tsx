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
                NationTechMart is an independent online retailer specializing in
                printers, scanners, and office equipment for home users, professionals, and businesses.
                We do not affiliate with any manufacturer. Instead, we source quality products
                through lawful distribution channels and offer them at competitive prices with clear policies.
              </p>
              <p>
                Our catalog has inkjet and laser printers, all-in-one devices, and scanners.
                We also feature popular models like the HP OfficeJet Pro. People choose these
                for their reliability, performance, and ease of use.
              </p>
              <p>
                Each listing gives clear details on the setup process. It also shows supported
                connectivity options like embedded Wi-Fi. Additionally, it includes ongoing needs
                such as ink cartridges or ink toner compatibility.
              </p>
              <p>
                Our goal is simple: we want to offer reliable technology products. We provide
                clear pricing, accurate product details, and an easy shopping experience.
                During checkout, customers can review shipping details, delivery timelines,
                and secure payment options. Eligible products offer easy 30-day returns,
                and manufacturers include standard warranty coverage where available.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild data-testid="button-learn-more-about">
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
              alt="Business team using modern office printer"
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
