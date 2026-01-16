import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SiteNotice from "@/components/shared/SiteNotice";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img src={logoImage} alt="NationTechMart" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted source for quality technology products. We're committed to providing excellent service and competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/order-support" className="text-muted-foreground hover:text-primary transition-colors font-medium text-primary">
                Order Support
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Policies</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping & Returns
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/trust-center" className="text-muted-foreground hover:text-primary transition-colors">
                Trust Center
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-semibold text-foreground text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  123 Technology Drive<br />
                  Suite 100<br />
                  San Francisco, CA 94105
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:support@nationtechmart.com" className="text-muted-foreground hover:text-primary transition-colors">
                  support@nationtechmart.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:+18005551234" className="text-muted-foreground hover:text-primary transition-colors">
                  1-800-555-1234
                </a>
              </div>
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
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shipping
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