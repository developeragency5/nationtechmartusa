import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Search } from "lucide-react";
import { useState } from "react";
import SiteNotice from "@/components/shared/SiteNotice";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop#!/~/search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/shop#!/~/search");
    }
  };

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <img src={logoImage} alt="NationTechMart" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted source for quality technology products at competitive prices.
            </p>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                data-testid="input-footer-search"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                data-testid="button-footer-search"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Home
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/shop" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Shop
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/about" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                About Us
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/contact" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Contact
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Policies</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/shipping" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Shipping & Returns
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/terms" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Terms & Conditions
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/privacy" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Privacy Policy
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/trust-center" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                Trust Center
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/faq" className="group relative text-muted-foreground hover:text-primary transition-colors w-fit">
                FAQ
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="group flex items-start space-x-4 p-2 -ml-2 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  123 Technology Drive<br />
                  Suite 100<br />
                  San Francisco, CA 94105
                </p>
              </div>
              <a href="mailto:contact@nationtechmart.com" className="group flex items-center space-x-4 p-2 -ml-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <Mail className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  contact@nationtechmart.com
                </span>
              </a>
              <a href="tel:+18005551234" className="group flex items-center space-x-4 p-2 -ml-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <Phone className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  1-800-555-1234
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} NationTechMart. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="group relative text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/terms" className="group relative text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/shipping" className="group relative text-sm text-muted-foreground hover:text-primary transition-colors">
                Shipping
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
          
          {/* Disclaimer - Required Site Notice */}
          <SiteNotice className="mt-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;