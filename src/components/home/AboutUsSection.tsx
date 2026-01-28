import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in-up">
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
                Each listing gives clear details on the setup process, supported
                connectivity options like embedded Wi-Fi, and key specifications to help you find the right printer.
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
          <div className="relative animate-fade-in-up delay-200 group">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src="/assets/images/about-team.jpg"
                alt="Business team using modern office printer"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
