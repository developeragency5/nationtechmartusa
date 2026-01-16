import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
  return (
    <section className="py-8 bg-primary/5 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Our Approach</p>
              <p className="text-sm text-muted-foreground">We operate as an independent online retailer focused on transparent pricing, clear policies, and reliable customer support.</p>
            </div>
          </div>
          
          <Link 
            to="/about" 
            className="text-sm font-medium text-primary hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
