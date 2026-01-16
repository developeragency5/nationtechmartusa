import { Store, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RealStorePromise = () => {
  return (
    <section className="py-8 bg-primary/5 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Real Store Promise</p>
              <p className="text-sm text-muted-foreground">Independent retailer, real business</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-border/60" />
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              USA-based business
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              Secure transactions
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              Real customer support
            </span>
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

export default RealStorePromise;
