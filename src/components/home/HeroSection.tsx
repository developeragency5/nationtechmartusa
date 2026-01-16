import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-background">
      {/* Hero with background image - responsive, reduced height */}
      <div className="relative w-full bg-muted max-h-[420px] md:max-h-[525px] overflow-hidden">
        <img
          src="/assets/images/hero-banner.jpg"
          alt="Young woman making a copy of a document in modern office"
          className="w-full h-auto object-cover"
          style={{ objectPosition: 'center 3%' }}
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
            <div className="max-w-xl bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Quality Technology Products For Your Business
              </h1>
              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                Discover our selection of printers, scanners, and office equipment at competitive prices.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-3 justify-start">
                <Button asChild size="lg">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
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
          <div className="py-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Truck className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Free Shipping</p>
                  <p className="text-xs text-primary-foreground/80">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Secure Checkout</p>
                  <p className="text-xs text-primary-foreground/80">SSL encrypted</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-3">
                <RotateCcw className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Easy Returns</p>
                  <p className="text-xs text-primary-foreground/80">30-day return policy</p>
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
