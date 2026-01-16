import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import TransparencySection from "@/components/shared/TransparencySection";
import SiteNotice from "@/components/shared/SiteNotice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Truck, MessageSquare, ShoppingBag, Loader2, Clock, RotateCcw, Shield, Mail, Home, Building2, Zap, Layers } from "lucide-react";

declare global {
  interface Window {
    xProductBrowser?: (...args: string[]) => void;
    Ecwid?: {
      init: () => void;
      OnAPILoaded?: {
        add: (callback: () => void) => void;
      };
    };
    ecwid_script_defer?: boolean;
    ecwid_dynamic_widgets?: boolean;
    _xnext_initialization_scripts?: Array<{ widgetType: string; id: string; arg: string[] }>;
  }
}

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEcwidOverlay, setIsEcwidOverlay] = useState(false);

  // Check if URL hash indicates cart, signin, or account page
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const isOverlay = hash.includes('cart') || hash.includes('signin') || hash.includes('account');
      setIsEcwidOverlay(isOverlay);
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    // Ecwid configuration
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    // Load Ecwid script
    const script = document.createElement("script");
    script.src = "https://app.ecwid.com/script.js?128774264&data_platform=code";
    script.async = true;
    script.charset = "utf-8";
    
    script.onload = () => {
      if (typeof window.xProductBrowser === "function") {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-128774264"
        );
        // Give Ecwid time to render
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="app.ecwid.com/script.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const categories = [
    {
      title: "Home Printers",
      description: "For everyday home use",
      icon: Home,
      image: "/assets/images/home-office.jpg",
    },
    {
      title: "Office Printers",
      description: "For business needs",
      icon: Building2,
      image: "/assets/images/business-office.jpg",
    },
    {
      title: "Laser Printers",
      description: "Fast & efficient",
      icon: Zap,
      image: "/assets/images/laser-printing.jpg",
    },
    {
      title: "All-in-One",
      description: "Print, scan & copy",
      icon: Layers,
      image: "/assets/images/all-in-one.jpg",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Shop Home Printers, Office Printers & Scanners"
        description="Browse our selection of home printers, office printers, laser printers, inkjet printers, and document scanners. Quality products at competitive prices with fast USA shipping."
        keywords="buy home printer, office printer for sale, laser printer shop, inkjet printer online, scanner, document scanner"
        canonicalUrl="/shop"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Shop", url: "/shop" },
        ]}
      />

      {/* Hero Banner - hidden when showing cart/signin/account */}
      {!isEcwidOverlay && (
        <>
          <section className="relative">
            <div className="relative w-full bg-muted">
              <img
                src="/assets/images/shop-banner.jpg"
                alt="Woman checking copy of document at printer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-end">
                  <div className="text-right bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      Shop Printers & Supplies
                    </h1>
                    <p className="text-sm sm:text-base text-white/90 mt-2">
                      Quality products at competitive prices with fast USA shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 bg-card border-b border-border/60">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                  <SiteNotice variant="compact" />
                </div>
              </div>
            </div>
          </section>

          {/* Before You Buy Box */}
          <section className="py-6 bg-card border-y border-border/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border/60 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Before You Buy</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <Link to="/shipping" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>Free shipping on orders over $100</span>
                    </Link>
                    <Link to="/shipping" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <RotateCcw className="h-4 w-4 shrink-0" />
                      <span>30-day return window</span>
                    </Link>
                    <Link to="/terms" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Shield className="h-4 w-4 shrink-0" />
                      <span>Manufacturer warranty</span>
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 shrink-0" />
                      <span>Questions? Contact us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Ecwid Store Embed */}
      <section className={`bg-card ${isEcwidOverlay ? 'py-8' : 'py-16 md:py-20'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto relative">
            {/* Loading State - only show for product browsing, not cart/signin */}
            {isLoading && !isEcwidOverlay && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8 text-primary animate-pulse" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  <p className="text-lg font-medium text-foreground">Loading Store</p>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Please wait while we load our products...</p>
                
                {/* Skeleton product grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="h-32 w-full rounded-lg bg-muted animate-pulse" />
                      <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                      <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Ecwid container - React won't manage its children */}
            <div 
              id="my-store-128774264" 
              className={`min-h-[400px] ${isLoading && !isEcwidOverlay ? 'hidden' : ''}`}
            />
          </div>
        </div>
      </section>

      {/* Transparency Section - hidden for cart/signin/account */}
      {!isEcwidOverlay && <TransparencySection />}

      {/* Links Section - hidden for cart/signin/account */}
      {!isEcwidOverlay && (
        <section className="py-16 md:py-20 bg-card border-t border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <Link 
                  to="/shipping" 
                  className="group flex items-center p-6 lg:p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/15 transition-colors">
                    <Truck className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Shipping & Returns</h3>
                    <p className="text-muted-foreground">View our shipping options and return policy</p>
                  </div>
                </Link>
                <Link 
                  to="/contact" 
                  className="group flex items-center p-6 lg:p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/15 transition-colors">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Contact Us</h3>
                    <p className="text-muted-foreground">Have questions? We're here to help</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Shop;
