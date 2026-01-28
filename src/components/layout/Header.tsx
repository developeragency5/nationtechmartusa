import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Search, User, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@/assets/logo.png";

declare global {
  interface Window {
    Ecwid?: {
      init: () => void;
      OnAPILoaded?: {
        add: (callback: () => void) => void;
      };
    };
    ecwid_script_defer?: boolean;
    ecwid_dynamic_widgets?: boolean;
    ec?: {
      config?: {
        store_main_page_url?: string;
      };
    };
    _xnext_initialization_scripts?: Array<{
      widgetType: string;
      id: string;
      arg: string[];
    }>;
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ecwidLoaded, setEcwidLoaded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home", image: null },
    { href: "/shop", label: "All Products", image: "/assets/images/category-office-printers.png" },
    { href: "/shop#!/c/193853315", label: "Home Printers", image: "/assets/images/category-home-printers.png" },
    { href: "/shop#!/c/193855066", label: "Office Printers", image: "/assets/images/category-office-printers.png" },
    { href: "/shop#!/c/193859557", label: "Inkjet Printers", image: "/assets/images/category-inkjet-printers.png" },
    { href: "/shop#!/c/193855067", label: "Laser Printers", image: "/assets/images/category-laser-printers.png" },
    { href: "/shop#!/c/193855068", label: "Scanners", image: "/assets/images/scanner-category.png" },
    { href: "/about", label: "About", image: null },
    { href: "/contact", label: "Contact", image: null },
  ];

  const isActive = (path: string) => {
    const currentHash = window.location.hash;
    const currentPath = location.pathname;
    
    if (path.includes('#')) {
      const hashPart = path.split('#')[1];
      return currentHash.includes(hashPart);
    }
    
    if (path === '/shop') {
      return currentPath === '/shop' && !currentHash.includes('/c/');
    }
    
    return currentPath === path;
  };

  const isHashLink = (href: string) => href.includes('#');

  useEffect(() => {
    window.ec = window.ec || {};
    window.ec.config = window.ec.config || {};
    window.ec.config.store_main_page_url = '/shop';

    const existingScript = document.querySelector('script[src*="app.ecwid.com/script.js"]');
    
    if (!existingScript) {
      window.ecwid_script_defer = true;
      window.ecwid_dynamic_widgets = true;

      window._xnext_initialization_scripts = [
        {
          widgetType: 'SearchWidget',
          id: 'my-search-128774264',
          arg: ['id=my-search-128774264']
        }
      ];
      
      const script = document.createElement("script");
      script.src = "https://app.ecwid.com/script.js?128774264&data_platform=code";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => {
        if (window.Ecwid?.OnAPILoaded) {
          window.Ecwid.OnAPILoaded.add(() => {
            setEcwidLoaded(true);
            if (window.Ecwid?.init) {
              window.Ecwid.init();
            }
          });
        } else {
          setTimeout(() => {
            setEcwidLoaded(true);
            if (window.Ecwid?.init) {
              window.Ecwid.init();
            }
          }, 1000);
        }
      };
      document.body.appendChild(script);
    } else if (window.Ecwid) {
      setEcwidLoaded(true);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      {/* Top Row - Logo and Account/Cart */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="NationTechMart" className="h-10 w-auto" />
            </Link>

            {/* Desktop Account/Cart - Ecwid Widgets */}
            <div className="hidden md:flex items-center gap-6">
              <div 
                id="my-search-128774264"
                className="flex flex-col items-center gap-0.5"
                data-testid="ecwid-search"
              />
              <a 
                href="/shop#!/~/favorites"
                className="flex flex-col items-center gap-0.5 text-primary hover:text-primary/80 transition-all duration-300 group"
                data-testid="button-favourites"
                title="View your saved favourites"
              >
                <Heart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Favourites</span>
              </a>
              <a 
                href="/shop#!/~/signin"
                className="flex flex-col items-center gap-0.5 text-primary hover:text-primary/80 transition-all duration-300 group"
                data-testid="button-signin"
              >
                <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Sign In</span>
              </a>
              <div 
                className="ec-cart-widget"
                data-testid="ecwid-cart"
              />
            </div>

            {/* Mobile Menu Button + Cart - Ecwid Widgets */}
            <div className="md:hidden flex items-center gap-3">
              <a 
                href="/shop#!/~/favorites"
                className="flex flex-col items-center gap-0.5 text-primary hover:text-primary/80 transition-all duration-300"
                data-testid="button-favourites-mobile"
              >
                <Heart className="h-5 w-5" />
              </a>
              <div 
                className="ec-cart-widget"
                data-testid="ecwid-cart-mobile"
              />
              
              <button
                className="p-2 rounded hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 py-2 relative">
            {navLinks.map((link) => {
              const baseClasses = `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive(link.href) 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`;
              
              const content = (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {link.image && hoveredCategory === link.href && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="bg-card rounded-xl border border-border shadow-2xl p-2 min-w-[180px]">
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={link.image} 
                            alt={link.label}
                            className="w-44 h-32 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white text-xs font-medium">{link.label}</p>
                            <p className="text-white/70 text-[10px]">Click to explore</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45" />
                    </div>
                  )}
                </>
              );
              
              return isHashLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={baseClasses}
                  onMouseEnter={() => link.image && setHoveredCategory(link.href)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={baseClasses}
                  onMouseEnter={() => link.image && setHoveredCategory(link.href)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-3 flex flex-col gap-1">
              {navLinks.map((link) => 
                isHashLink(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.href) 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.href) 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
