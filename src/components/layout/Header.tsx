import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
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
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ecwidLoaded, setEcwidLoaded] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "All Products" },
    { href: "/shop#!/c/193853315", label: "Home Printers" },
    { href: "/shop#!/c/193855066", label: "Office Printers" },
    { href: "/shop#!/c/193859557", label: "Inkjet Printers" },
    { href: "/shop#!/c/193855067", label: "Laser Printers" },
    { href: "/shop#!/c/193855068", label: "Scanners" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return window.location.href.includes(path);
    }
    return location.pathname === path;
  };

  const isHashLink = (href: string) => href.includes('#');

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="app.ecwid.com/script.js"]');
    
    if (!existingScript) {
      window.ecwid_script_defer = true;
      window.ecwid_dynamic_widgets = true;
      
      const script = document.createElement("script");
      script.src = "https://app.ecwid.com/script.js?128774264&data_platform=code";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => {
        if (window.Ecwid?.OnAPILoaded) {
          window.Ecwid.OnAPILoaded.add(() => setEcwidLoaded(true));
        } else {
          setTimeout(() => setEcwidLoaded(true), 1000);
        }
      };
      document.body.appendChild(script);
    } else if (window.Ecwid) {
      setEcwidLoaded(true);
    }
  }, []);

  const openCart = () => {
    window.location.href = '/shop#!/~/cart';
  };

  const openAccount = () => {
    window.location.href = '/shop#!/~/signin';
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Row - Logo and Account/Cart */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="NationTechMart" className="h-10 w-auto" />
            </Link>

            {/* Desktop Account/Cart */}
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={openAccount}
                className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-user-account"
              >
                <User className="h-5 w-5" />
                <span className="text-xs">Sign In</span>
              </button>
              <button 
                onClick={openCart}
                className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs">Cart</span>
              </button>
            </div>

            {/* Mobile Menu Button + Cart */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={openCart}
                className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-cart-mobile"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs">Cart</span>
              </button>
              
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
          <nav className="hidden md:flex items-center justify-center gap-1 py-2">
            {navLinks.map((link) => 
              isHashLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
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
