import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ShoppingBag, Mail, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { to: "/", label: "Home", icon: Home, description: "Back to homepage" },
    { to: "/shop", label: "Shop", icon: ShoppingBag, description: "Browse products" },
    { to: "/contact", label: "Contact", icon: Mail, description: "Get in touch" },
    { to: "/faq", label: "FAQ", icon: HelpCircle, description: "Find answers" },
    { to: "/terms", label: "Policies", icon: FileText, description: "Terms & policies" },
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | NationTechMart</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or may have been moved. 
              Let's get you back on track.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex flex-col items-center p-4 bg-card rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/15 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground text-sm">{link.label}</span>
                <span className="text-xs text-muted-foreground">{link.description}</span>
              </Link>
            ))}
          </div>

          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;