import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import TransparencySection from "@/components/shared/TransparencySection";
import SiteNotice from "@/components/shared/SiteNotice";
import { useEffect, useState } from "react";
import { ShoppingBag, Loader2, Wifi, Smartphone, Cloud, Monitor, Check, Building2, Users, Zap, FileText, Droplets, Image, Clock, ScanLine, FolderOpen, Shield, ArrowRight, Home, Briefcase, Palette, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const [isSearchView, setIsSearchView] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const isOverlay = hash.includes('cart') || hash.includes('signin') || hash.includes('account');
      setIsEcwidOverlay(isOverlay);
      setIsSearchView(hash.includes('/search') || hash.includes('~/search'));

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

      {/* ==================== ALL PRODUCTS - TOP CONTENT ==================== */}
      {!isEcwidOverlay && !currentCategory && !isSearchView && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                All Products – Complete Printer & Scanning Solutions Catalog
              </h1>
              <p className="text-xl text-primary font-medium mb-6">Discover Reliable Printing Technology for Home, Office & Business</p>
              
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8 space-y-4">
                <p className="text-base md:text-lg leading-relaxed">
                  Welcome to Nation TechMart, your trusted online destination for professional-grade printers and document scanning solutions. Our All Products catalog is designed to give you complete visibility into our full range of printing technology—making it easy to find the right device for your specific needs, workload, and budget.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  We understand that printing requirements vary widely. Some users need compact wireless printers for occasional home use, while others require high-speed laser printers or document scanners to support demanding workflows. That's why our catalog brings together home printers, office printers, inkjet printers, laser printers, ink tank systems, and document scanners in one centralized, easy-to-navigate experience.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">A Purpose-Built Catalog for Smarter Buying Decisions</h2>
                <p className="text-muted-foreground mb-4">
                  Buying a printer or scanner isn't just about price—it's about performance, efficiency, long-term cost, and reliability. Our catalog is structured to help you compare product types, understand real-world use cases, and choose technology that aligns with how you actually work.
                </p>
                <p className="text-muted-foreground">
                  Instead of overwhelming you with unnecessary technical jargon, we focus on clarity, categorization, and practical value. Every product category exists for a reason and serves a specific type of user—from students and families to small businesses and professional offices.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Comprehensive Product Categories</h2>
              
              <div className="space-y-6 mb-10">
                <a href={`#!/c/${CATEGORY_IDS.HOME_PRINTERS}`} className="block group bg-card border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5" data-testid="link-category-home">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Home className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Home Printers – Practical Solutions for Everyday Life</h3>
                      <p className="text-sm text-primary/80">Perfect for families, students & home offices</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Home printers are designed for users who want dependable performance without complexity. These printers are ideal for daily personal use such as printing school assignments, household paperwork, forms, travel documents, and occasional photos.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Key characteristics include compact size, wireless connectivity, easy setup, and intuitive controls. Many models feature all-in-one functionality, allowing users to print, scan, and copy from a single device.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Browse Home Printers <ArrowRight className="h-4 w-4" />
                  </span>
                </a>

                <a href={`#!/c/${CATEGORY_IDS.OFFICE_PRINTERS}`} className="block group bg-card border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5" data-testid="link-category-office">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Briefcase className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Office Printers – Built for Consistency & Productivity</h3>
                      <p className="text-sm text-primary/80">High-volume printing for business environments</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Office printers are engineered to handle higher print volumes and frequent usage. These devices are designed for environments where reliability, speed, and efficiency are critical.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    They typically offer faster print speeds, larger paper handling capacity, and advanced features such as automatic duplex printing, network connectivity, and enhanced security options.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Browse Office Printers <ArrowRight className="h-4 w-4" />
                  </span>
                </a>

                <a href={`#!/c/${CATEGORY_IDS.INKJET_PRINTERS}`} className="block group bg-card border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5" data-testid="link-category-inkjet">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Palette className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Inkjet Printers – Flexible & High-Quality Output</h3>
                      <p className="text-sm text-primary/80">Vibrant colors & photo-quality prints</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Inkjet printers are widely valued for their versatility and superior color reproduction. They are capable of producing sharp text documents as well as rich, vibrant images.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    These printers are ideal for users who need flexibility—such as students, creatives, and home offices—while maintaining an affordable upfront cost.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Browse Inkjet Printers <ArrowRight className="h-4 w-4" />
                  </span>
                </a>

                <a href={`#!/c/${CATEGORY_IDS.LASER_PRINTERS}`} className="block group bg-card border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5" data-testid="link-category-laser">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <Zap className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Laser Printers – Speed, Precision & Efficiency</h3>
                      <p className="text-sm text-primary/80">Fast output & professional text quality</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Laser printers are designed for users who prioritize speed and sharp text quality. Commonly used in professional and business environments, these printers excel at producing high volumes of documents quickly.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With durable internal components, laser printers are an excellent choice for organizations that rely heavily on printed documentation.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Browse Laser Printers <ArrowRight className="h-4 w-4" />
                  </span>
                </a>

                <a href={`#!/c/${CATEGORY_IDS.SCANNERS}`} className="block group bg-card border border-border/60 rounded-xl p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5" data-testid="link-category-scanners">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                      <ScanLine className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Document Scanners – Powering Digital Transformation</h3>
                      <p className="text-sm text-primary/80">Go paperless with accurate digitization</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Document scanners play a critical role in modern document management. These devices are built to digitize paperwork accurately and efficiently, helping organizations transition to paperless workflows.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    High-speed scanning, network integration, and compatibility with document management systems make scanners indispensable for offices and professionals.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Browse Document Scanners <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Designed for Modern Workflows & Everyday Reliability</h2>
                <p className="text-muted-foreground mb-4">
                  All products available through Nation TechMart are selected with real-world usage in mind. We focus on devices that balance performance, durability, and ease of use—ensuring that your printing and scanning technology supports your workflow instead of slowing it down.
                </p>
                <p className="text-muted-foreground">
                  Many of our products combine multiple functions into a single device, reducing equipment clutter and lowering overall ownership costs.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Smart Connectivity & Device Compatibility</h2>
                <p className="text-muted-foreground mb-4">
                  Modern printing demands flexibility. That's why most products in our catalog support:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl"><Wifi className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Wireless & Wi-Fi</span></div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl"><Smartphone className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Mobile Devices</span></div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl"><Monitor className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Desktop & Laptop</span></div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl"><Cloud className="h-8 w-8 text-primary mb-2" /><span className="text-sm text-muted-foreground text-center">Cloud Printing</span></div>
                </div>
                <p className="text-muted-foreground mt-4">
                  This allows users to print and scan from virtually anywhere within their home or office network.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Optimized for Long-Term Value</h2>
                <p className="text-muted-foreground mb-4">
                  Beyond initial purchase price, printers and scanners must deliver long-term value. Our catalog includes devices designed for efficient ink and toner usage, reduced maintenance requirements, and consistent output quality over time.
                </p>
                <p className="text-muted-foreground">
                  These features help users control operating costs while maintaining professional results.
                </p>
              </div>

              <div className="mt-10 text-center">
                <p className="text-lg font-medium text-foreground">Browse Our Complete Product Selection Below</p>
                <p className="text-muted-foreground mt-2">Scroll down to explore our full catalog, including category sections and featured product listings.</p>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Wireless and mobile printing support</span></li>
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
                  Modern office printers offer advanced features like automatic duplex printing, large paper capacity, and business security features, making them essential tools for productive business operations.
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
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Affordable upfront investment</span></li>
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
                  Laser printers offer long-term value for users who prioritize productivity and professional-quality documents, with fast print speeds and reliable toner-based output.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Choose Laser Printers</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Faster print speeds for high-volume needs</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Crisp, professional text quality</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Efficient cost per page for high-volume printing</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Long-lasting toner with extended shelf life</span></li>
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

              {/* Cross-Category Links */}
              <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Categories</h3>
                <p className="text-muted-foreground mb-4">Looking for more options? Check out these related product categories:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`#!/c/${CATEGORY_IDS.INKJET_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Palette className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Inkjet Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.OFFICE_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Office Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.SCANNERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ScanLine className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Document Scanners</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href="/shop" className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">View All Products</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </div>
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

              {/* Cross-Category Links */}
              <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Categories</h3>
                <p className="text-muted-foreground mb-4">Looking for more options? Check out these related product categories:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`#!/c/${CATEGORY_IDS.LASER_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Laser Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.HOME_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Home Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.SCANNERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ScanLine className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Document Scanners</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href="/shop" className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">View All Products</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </div>
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
                  Inkjet technology excels at reproducing subtle color gradations and photographic detail. Advanced print heads deliver precise droplet placement for stunning results on photo paper, cardstock, and specialty media.
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

              {/* Cross-Category Links */}
              <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Categories</h3>
                <p className="text-muted-foreground mb-4">Looking for more options? Check out these related product categories:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`#!/c/${CATEGORY_IDS.HOME_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Home Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.LASER_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Laser Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.SCANNERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ScanLine className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Document Scanners</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href="/shop" className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">View All Products</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </div>
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

              {/* Cross-Category Links */}
              <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Categories</h3>
                <p className="text-muted-foreground mb-4">Looking for more options? Check out these related product categories:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`#!/c/${CATEGORY_IDS.OFFICE_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Office Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.INKJET_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Palette className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Inkjet Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.SCANNERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ScanLine className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Document Scanners</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href="/shop" className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">View All Products</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </div>
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

              {/* Cross-Category Links */}
              <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Categories</h3>
                <p className="text-muted-foreground mb-4">Need a printer too? Check out these related product categories:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`#!/c/${CATEGORY_IDS.HOME_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Home Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.OFFICE_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Office Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href={`#!/c/${CATEGORY_IDS.LASER_PRINTERS}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Laser Printers</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                  <a href="/shop" className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/60 hover:border-primary transition-colors group">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="text-foreground group-hover:text-primary transition-colors">View All Products</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== ALL PRODUCTS - BOTTOM CONTENT ==================== */}
      {!isEcwidOverlay && !currentCategory && !isSearchView && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Engineered for Performance, Accuracy & Durability</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  At Nation TechMart, performance is non-negotiable. Our printers and scanners are engineered to deliver reliable output day after day—whether you're printing a single page or processing hundreds of documents. From crisp monochrome text to detailed color graphics and accurate scans, our products are designed to meet professional standards across all usage levels.
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Ink, Toner & Resource Efficiency</h2>
                <p className="text-muted-foreground mb-4">
                  Efficient resource usage is a priority for both individuals and businesses. Many products in our catalog feature:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Droplets className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">High-yield ink and toner solutions</span></li>
                  <li className="flex items-start gap-3"><Droplets className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Ink tank systems for reduced refill frequency</span></li>
                  <li className="flex items-start gap-3"><Droplets className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Consistent output even during extended idle periods</span></li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  These efficiencies help reduce waste, control expenses, and support sustainable usage practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Supporting Diverse Use Cases Across Industries</h2>
                <p className="text-muted-foreground mb-6">Our catalog serves a wide range of users and industries, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Users className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Students & Educational Institutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Monitor className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Remote Workers & Home Offices</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Building2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Small & Medium Businesses</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Building2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Corporate Environments</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Image className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Creative Professionals</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/60">
                    <Shield className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Security-Conscious Users</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">No matter your industry or workflow, our product range is designed to adapt.</p>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Security, Reliability & Peace of Mind</h2>
                <p className="text-muted-foreground">
                  Many modern printers and scanners include features designed to protect sensitive information and ensure stable operation. Network security options, controlled access, and reliable hardware design help safeguard your data while maintaining productivity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Clear, Transparent Shopping Experience</h2>
                <p className="text-muted-foreground mb-6">We believe informed customers make better decisions. That's why we emphasize transparency at every step of the shopping process.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/60 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Pricing & Taxes</h3>
                    <p className="text-sm text-muted-foreground">All prices are listed in USD. Sales tax is calculated automatically at checkout based on your shipping destination.</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Shipping & Order Processing</h3>
                    <p className="text-sm text-muted-foreground">Orders are typically processed within 1–2 business days. Shipping times typically range from 3–7 business days, depending on carrier and location.</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Returns Policy</h3>
                    <p className="text-sm text-muted-foreground">Most unopened items may be returned within 30 days of delivery, subject to applicable terms and conditions.</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Warranty Coverage</h3>
                    <p className="text-sm text-muted-foreground">Products include applicable manufacturer standard warranty coverage where offered; terms vary by product and brand.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Why Customers Choose Nation TechMart</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Extensive selection of printing and scanning technology</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Clear product categorization and descriptions</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Competitive pricing from well-known brands</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Secure checkout and reliable fulfillment</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Customer-focused shopping experience</span></li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our mission is to simplify the process of choosing the right technology while delivering dependable solutions you can trust.
                </p>
              </div>

              <div className="text-center bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Invest in the Right Printing Solution Today</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you're setting up a home workspace, expanding an office, or modernizing document workflows, Nation TechMart provides the tools you need to succeed. Explore our complete catalog, compare features, and invest confidently in printing and scanning solutions designed for today's demands and tomorrow's growth.
                </p>
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
