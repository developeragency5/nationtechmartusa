import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
    // Navigate to shop page with cart hash - Ecwid will handle the cart display
    window.location.href = '/shop#!/~/cart';
  };

  const openAccount = () => {
    // Navigate to shop page with account hash - Ecwid will handle the account display
    window.location.href = '/shop#!/~/account';
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NationTechMart" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={openAccount}
              data-testid="button-user-account"
              aria-label="My Account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={openCart}
              data-testid="button-cart"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button + Cart */}
          <div className="md:hidden flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={openCart}
              data-testid="button-cart-mobile"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded transition-colors ${
                    isActive(link.href) 
                      ? "text-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
