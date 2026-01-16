import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-background">
      {/* Hero with background image - larger banner */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] bg-muted overflow-hidden">
        <img
          src="/assets/images/hero-banner.jpg"
          alt="Young woman making a copy of a document in modern office"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 3%' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
            <div className="max-w-lg bg-primary/90 backdrop-blur-sm p-5 md:p-6 rounded-lg text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                Quality Technology Products For Your Business
              </h1>
              <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
                Discover our selection of printers, scanners, and office equipment at competitive prices.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-start">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <Truck className="h-7 w-7 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-base font-semibold text-primary-foreground">Free Shipping</p>
                  <p className="text-sm text-primary-foreground/80">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Shield className="h-7 w-7 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-base font-semibold text-primary-foreground">Secure Checkout</p>
                  <p className="text-sm text-primary-foreground/80">SSL encrypted</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-4">
                <RotateCcw className="h-7 w-7 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-base font-semibold text-primary-foreground">Easy Returns</p>
                  <p className="text-sm text-primary-foreground/80">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
