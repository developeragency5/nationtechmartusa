import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-background">
      {/* Hero with background image */}
      <div className="relative">
        <div className="relative h-80 md:h-[28rem]">
          <img
            src="/assets/images/hero-banner.jpg"
            alt="Young woman making a copy of a document in modern office"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
              <div className="max-w-xl bg-black/40 backdrop-blur-sm p-6 rounded-lg text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Quality Technology Products For Your Business
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                Discover our selection of printers, scanners, and office equipment at competitive prices.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-start">
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
      </div>

      {/* Trust bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Truck className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $100 (USA)</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Secure Checkout</p>
                  <p className="text-xs text-muted-foreground">SSL encrypted</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-3">
                <RotateCcw className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
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
