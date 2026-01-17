import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import TransparencySection from "@/components/shared/TransparencySection";
import SiteNotice from "@/components/shared/SiteNotice";
import { useEffect, useState } from "react";
import { ShoppingBag, Loader2, Wifi, Smartphone, Cloud, Monitor, Check, Building2, Users, Zap, FileText, Droplets, Image, Clock, ScanLine, FolderOpen, Shield } from "lucide-react";

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
    switch (currentCategory) {
      case "home-printers":
        return {
          title: "Home Printers for Everyday Printing, Scanning & Copying",
          description: "Shop home printers designed for everyday personal and family use. Compact, wireless, and reliable printers for school assignments, documents, and photos.",
          keywords: "home printer, wireless home printer, family printer, home office printer, compact printer",
        };
      case "office-printers":
        return {
          title: "Office Printers for Business & Workgroup Productivity",
          description: "Shop office printers built for high-volume business printing. Fast, reliable, and network-ready printers for professional environments.",
          keywords: "office printer, business printer, workgroup printer, commercial printer, network printer",
        };
      case "inkjet-printers":
        return {
          title: "Inkjet Printers for Vibrant Color & Photo Printing",
          description: "Shop inkjet printers for stunning color output and photo-quality prints. Perfect for graphics, photos, and everyday documents.",
          keywords: "inkjet printer, color printer, photo printer, ink tank printer, wireless inkjet",
        };
      case "laser-printers":
        return {
          title: "Laser Printers for Fast, High-Volume Printing",
          description: "Shop laser printers for speed, efficiency, and professional text quality. Ideal for offices and high-volume printing needs.",
          keywords: "laser printer, monochrome laser, color laser printer, fast printer, office laser",
        };
      case "scanners":
        return {
          title: "Document Scanners for Digital Organization",
          description: "Shop document scanners for fast, accurate digitization. Perfect for archiving, OCR, and paperless workflows.",
          keywords: "document scanner, flatbed scanner, sheet-fed scanner, portable scanner, OCR scanner",
        };
      default:
        return {
          title: "Shop Home Printers, Office Printers & Scanners",
          description: "Browse our selection of home printers, office printers, laser printers, inkjet printers, and document scanners. Quality products at competitive prices with fast USA shipping.",
          keywords: "buy home printer, office printer for sale, laser printer shop, inkjet printer online, scanner, document scanner",
        };
    }
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


      {/* ==================== HOME PRINTERS - TOP CONTENT ==================== */}
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
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Home Printers Make Sense</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Designed for low to moderate print volumes</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Compact footprint suitable for desks and shelves</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Wireless, Wi-Fi, and mobile printing options</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Affordable upfront cost with efficient ink usage</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Simple controls and app-based management</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== OFFICE PRINTERS - TOP CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "office-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Office Printers for Business & Workgroup Productivity
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Office printers are engineered for the demands of professional environments, delivering high-speed output, robust duty cycles, and seamless network integration. Whether you're running a small business, managing a department, or equipping a busy workgroup, these printers are built to handle consistent, high-volume printing without compromising quality.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Modern office printers offer advanced features like automatic duplex printing, large paper capacity, and enterprise-grade security, making them essential tools for productive business operations.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Office Printers Excel</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">High-speed printing for demanding workloads</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Large paper capacity and automatic document feeders</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Network-ready with multiple connectivity options</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Automatic duplex printing for efficiency</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Lower cost per page for high-volume printing</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== INKJET PRINTERS - TOP CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "inkjet-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Inkjet Printers for Vibrant Color & Photo Printing
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Inkjet printers excel at producing vibrant, photo-quality output with exceptional color accuracy. Using liquid ink sprayed through microscopic nozzles, these printers create smooth gradients and rich hues that make them ideal for graphics, photos, and creative projects.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  From compact models for occasional home use to high-capacity ink tank systems for frequent printing, inkjet technology offers versatility and stunning visual results across a wide range of media types.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Choose Inkjet Printers</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Superior color accuracy and photo quality</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Prints on various media including photo paper and cardstock</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Lower upfront cost compared to laser printers</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Compact designs for space-conscious setups</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Ink tank options for high-volume, low-cost printing</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== LASER PRINTERS - TOP CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "laser-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Laser Printers for Fast, High-Volume Printing
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Laser printers use toner and heat fusion technology to deliver fast, precise output with exceptional text clarity. Built for speed and efficiency, laser printers are the go-to choice for offices and businesses that require high-volume document production with minimal downtime.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  With lower cost per page, faster print speeds, and toner that doesn't dry out, laser printers offer long-term value for users who prioritize productivity and professional-quality documents.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Choose Laser Printers</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Faster print speeds for high-volume needs</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Crisp, professional text quality</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Lower cost per page than inkjet</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Toner doesn't dry out like ink cartridges</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Durable output resistant to water and smudging</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== SCANNERS - TOP CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "scanners" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Document Scanners for Digital Organization
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Document scanners convert physical papers, photos, and receipts into digital files for easy storage, sharing, and archiving. From flatbed scanners for delicate materials to high-speed sheet-fed models for bulk digitization, scanners are essential tools for going paperless.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Modern scanners offer features like automatic document feeders, duplex scanning, OCR (optical character recognition), and direct-to-cloud capabilities, making digital document management faster and more efficient than ever.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Choose Document Scanners</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Fast digitization for paperless workflows</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">OCR for searchable, editable documents</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Automatic document feeders for batch scanning</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">High-resolution scanning for archival quality</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Direct scanning to cloud storage and email</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== ECWID STORE EMBED ==================== */}
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

      {/* ==================== HOME PRINTERS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "home-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Designed for Real-Life Home Use</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Home printers are built to support a wide range of everyday tasks without requiring technical expertise. From quick black-and-white documents to vibrant color prints, these printers balance performance with simplicity. Many models are equipped with print, scan, and copy functionality in a single device, reducing clutter and cost.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Wireless & Mobile Printing Ecosystem</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">Most home printers integrate seamlessly with your existing devices and networks:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Smartphone className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Smartphones & Tablets</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Monitor className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Laptops & Desktops</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Cloud className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Cloud Printing Apps</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Wifi className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Home Wi-Fi Networks</span></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ink Efficiency & Print Quality</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Modern inkjet and ink tank home printers are engineered to deliver:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Sharp text for documents</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Rich colors for graphics and photos</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Optimized ink consumption to reduce waste</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Consistent output even with infrequent use</span></li>
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Student assignments and projects</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Home office documentation</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Creative and photo printing</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Scanning and copying important papers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== OFFICE PRINTERS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "office-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for Business Demands</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Office printers are designed to handle the continuous demands of professional environments. With high monthly duty cycles, fast warm-up times, and robust construction, these printers minimize downtime and maximize productivity. Many models include advanced finishing options like stapling and hole-punching.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Network & Workgroup Integration</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">Office printers connect seamlessly to your business infrastructure:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Building2 className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Enterprise Networks</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Users className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Workgroup Sharing</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Shield className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Secure Printing</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Cloud className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Cloud Integration</span></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Cost Efficiency at Scale</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Lower cost per page with high-yield toner</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Automatic duplex printing saves paper</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Energy-efficient operation modes</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Reduced maintenance requirements</span></li>
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ideal For</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Small to medium businesses</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Corporate departments</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Shared workgroup environments</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />High-volume document production</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== INKJET PRINTERS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "inkjet-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Color Accuracy & Photo Quality</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Inkjet technology excels at reproducing subtle color gradations and photographic detail. With individual ink cartridges for each color, you only replace what you use. Advanced print heads deliver precise droplet placement for stunning results on photo paper, cardstock, and specialty media.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Versatile Media Handling</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">Inkjet printers handle a wide variety of print materials:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Image className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Photo Paper</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><FileText className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Plain Paper</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Droplets className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Glossy & Matte</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><FileText className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Cardstock & Labels</span></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ink Tank Technology</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Refillable ink tanks for ultra-low cost per page</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Print thousands of pages before refilling</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">No more running out of ink mid-project</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Environmentally friendly with less waste</span></li>
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Best For</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Photo printing enthusiasts</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Creative professionals</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Color-critical documents</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Marketing materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== LASER PRINTERS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "laser-printers" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Speed & Efficiency</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Laser printers deliver pages faster than inkjet alternatives, making them ideal for time-sensitive business printing. Once warmed up, laser printers can output dozens of pages per minute with consistent quality from the first page to the last.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Toner Advantages</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">Laser printing technology offers distinct benefits:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Zap className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Fast Print Speeds</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><FileText className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Crisp Text Quality</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Clock className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Toner Never Dries</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Shield className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Smudge Resistant</span></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Monochrome vs. Color Laser</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Monochrome laser: Lowest cost for text documents</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Color laser: Professional graphics and presentations</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Both offer superior text sharpness</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">High-yield toner cartridges available</span></li>
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ideal For</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />High-volume document printing</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Business reports and contracts</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Legal and financial documents</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Offices with multiple users</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== SCANNERS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && currentCategory === "scanners" && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Digital Document Management</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Scanners transform your paper documents into organized digital files. With OCR technology, scanned documents become searchable and editable, making it easy to find information, extract text, and integrate scans into your digital workflows.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Scanner Types & Features</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">Choose the scanner that fits your needs:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><ScanLine className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Flatbed Scanners</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><FileText className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Sheet-Fed Scanners</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><FolderOpen className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Document Feeders</span></div>
                  <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/60"><Cloud className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Cloud Connected</span></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Going Paperless</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Reduce physical storage requirements</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Instant access to any document from anywhere</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Secure backup of important records</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Easy sharing via email or cloud storage</span></li>
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Applications</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Archiving business records</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Digitizing receipts and invoices</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Scanning contracts and legal documents</li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" />Creating digital photo archives</li>
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
