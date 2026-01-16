import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import TransparencySection from "@/components/shared/TransparencySection";
import SiteNotice from "@/components/shared/SiteNotice";
import { useEffect, useState } from "react";
import { ShoppingBag, Loader2, Wifi, Smartphone, Cloud, Monitor, Check } from "lucide-react";

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

const CATEGORY_IDS = {
  HOME_PRINTERS: "193853315",
  OFFICE_PRINTERS: "193855066",
  INKJET_PRINTERS: "193859557",
  LASER_PRINTERS: "193855067",
  SCANNERS: "193855068",
};

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEcwidOverlay, setIsEcwidOverlay] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const isOverlay = hash.includes('cart') || hash.includes('signin') || hash.includes('account');
      setIsEcwidOverlay(isOverlay);

      if (hash.includes(CATEGORY_IDS.HOME_PRINTERS)) {
        setCurrentCategory("home-printers");
      } else if (hash.includes(CATEGORY_IDS.OFFICE_PRINTERS)) {
        setCurrentCategory("office-printers");
      } else if (hash.includes(CATEGORY_IDS.INKJET_PRINTERS)) {
        setCurrentCategory("inkjet-printers");
      } else if (hash.includes(CATEGORY_IDS.LASER_PRINTERS)) {
        setCurrentCategory("laser-printers");
      } else if (hash.includes(CATEGORY_IDS.SCANNERS)) {
        setCurrentCategory("scanners");
      } else {
        setCurrentCategory(null);
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

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
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="app.ecwid.com/script.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const getSEOData = () => {
    if (currentCategory === "home-printers") {
      return {
        title: "Home Printers for Everyday Printing, Scanning & Copying",
        description: "Shop home printers designed for everyday personal and family use. Compact, wireless, and reliable printers for school assignments, documents, and photos.",
        keywords: "home printer, wireless home printer, family printer, home office printer, compact printer",
      };
    }
    return {
      title: "Shop Home Printers, Office Printers & Scanners",
      description: "Browse our selection of home printers, office printers, laser printers, inkjet printers, and document scanners. Quality products at competitive prices with fast USA shipping.",
      keywords: "buy home printer, office printer for sale, laser printer shop, inkjet printer online, scanner, document scanner",
    };
  };

  const seoData = getSEOData();

  return (
    <Layout>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl="/shop"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Shop", url: "/shop" },
        ]}
      />

      {/* Default Hero Banner - shown when not viewing a specific category */}
      {!isEcwidOverlay && !currentCategory && (
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
        </>
      )}

      {/* Home Printers Category - Top Content */}
      {!isEcwidOverlay && currentCategory === "home-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Home Printers for Everyday Printing, Scanning & Copying
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Home printers are designed to deliver consistent, high-quality output for everyday personal and family use. Whether you're printing school assignments, household documents, creative projects, or occasional photos, modern home printers combine compact design, wireless convenience, and dependable performance.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  These printers are optimized for easy setup, low noise operation, and seamless mobile printing, making them ideal for homes and home offices that need reliable results without professional-level complexity.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Why Home Printers Make Sense
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Designed for low to moderate print volumes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Compact footprint suitable for desks and shelves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Wireless, Wi-Fi, and mobile printing options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Affordable upfront cost with efficient ink usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Simple controls and app-based management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ecwid Store Embed */}
      <section className={`bg-card ${isEcwidOverlay ? 'py-8' : 'py-12 md:py-16'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto relative">
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
            
            <div 
              id="my-store-128774264" 
              className={`min-h-[400px] ${isLoading && !isEcwidOverlay ? 'hidden' : ''}`}
            />
          </div>
        </div>
      </section>

      {/* Home Printers Category - Bottom Content */}
      {!isEcwidOverlay && currentCategory === "home-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Designed for Real-Life Home Use */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Designed for Real-Life Home Use
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Home printers are built to support a wide range of everyday tasks without requiring technical expertise. From quick black-and-white documents to vibrant color prints, these printers balance performance with simplicity. Many models are equipped with print, scan, and copy functionality in a single device, reducing clutter and cost.
                </p>
              </div>

              {/* Wireless & Mobile Printing Ecosystem */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Wireless & Mobile Printing Ecosystem
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Most home printers integrate seamlessly with your existing devices and networks:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60">
                    <Smartphone className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground text-center">Smartphones & Tablets</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60">
                    <Monitor className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground text-center">Laptops & Desktops</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60">
                    <Cloud className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground text-center">Cloud Printing Apps</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60">
                    <Wifi className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground text-center">Home Wi-Fi Networks</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  This allows multiple family members to print from different devices without cables or complex configuration.
                </p>
              </div>

              {/* Ink Efficiency & Print Quality */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ink Efficiency & Print Quality
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                  Modern inkjet and ink tank home printers are engineered to deliver:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Sharp text for documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Rich colors for graphics and photos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Optimized ink consumption to reduce waste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Consistent output even with infrequent use</span>
                  </li>
                </ul>
              </div>

              {/* Trusted for Home & Home-Office Environments */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Trusted for Home & Home-Office Environments
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Whether you're managing household paperwork, remote learning, or light professional work, home printers offer the right balance of performance, affordability, and reliability.
                </p>
              </div>

              {/* Popular Use Cases */}
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    Student assignments and projects
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    Home office documentation
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    Creative and photo printing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    Scanning and copying important papers
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    Everyday personal printing needs
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Transparency Section - hidden for cart/signin/account */}
      {!isEcwidOverlay && <TransparencySection />}

    </Layout>
  );
};

export default Shop;
