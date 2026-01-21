import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  Package,
  Truck,
  RotateCcw,
  FileText,
  ShoppingCart,
  Building2,
  CreditCard,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We will review your inquiry during business hours and respond as soon as possible.",
    });
    setFormData({ name: "", email: "", orderNumber: "", message: "" });
  };

  const canContactAbout = [
    { icon: Package, text: "Order confirmation, billing, and order status" },
    { icon: Truck, text: "Shipping information and delivery updates (as shown during checkout and in order emails)" },
    { icon: RotateCcw, text: "Return eligibility and return procedures" },
    { icon: FileText, text: "Store policies (shipping, returns, payments, taxes)" },
    { icon: ShoppingCart, text: "General product questions based on the specifications and details shown on product pages" },
    { icon: CreditCard, text: "Website, checkout, account, and cart-related issues" },
    { icon: HelpCircle, text: "General questions about NationTechMart" },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Us | NationTechMart - Orders & Store Inquiries"
        description="Contact NationTechMart for questions about orders, shipping, returns, or store policies. We are an independent online retailer of printers and technology products."
        keywords="contact NationTechMart, order questions, shipping inquiries, return policy, store policies"
        canonicalUrl="/contact"
      />

      {/* Hero Banner */}
      <section className="relative w-full bg-muted max-h-[400px] md:max-h-[500px] overflow-hidden">
        <img
          src="/assets/images/contact-banner.jpg"
          alt="Contact NationTechMart for order and store inquiries"
          className="w-full h-auto object-cover min-h-[350px] md:min-h-[450px]"
          style={{ objectPosition: 'center 20%' }}
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
            <div className="max-w-xl bg-black/50 backdrop-blur-sm p-5 md:p-7 rounded-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Contact Us
              </h1>
              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                Have a question about an order, shipping, returns, or our store policies? We're here to help with clear answers and timely responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-intro">
              NationTechMart is an independent online retailer offering printers, scanners, and related printing equipment. This page is provided so customers can reach us for order-related questions, store policy inquiries, and general product questions based on the information shown on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Card */}
              <a 
                href="mailto:contact@nationtechmart.com" 
                className="group block bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                data-testid="link-contact-email"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Mail className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Email (Preferred)</h3>
                    <p className="text-primary font-medium">contact@nationtechmart.com</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Email is the preferred contact method for order-related questions and general inquiries.
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+18005551234" 
                className="group block bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                data-testid="link-contact-phone"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Phone className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Phone</h3>
                    <p className="text-primary font-medium">1-800-555-1234</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Phone support is available for general order and store questions during business hours.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Contact Us About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  What You Can Contact Us About
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Customers may contact NationTechMart regarding:
              </p>
              <ul className="space-y-3">
                {canContactAbout.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm pt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info & Form */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Business Info */}
              <div className="space-y-6">
                {/* Online Store */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <ShoppingCart className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Online Store</h3>
                      <p className="text-foreground">
                        Shop 24/7 at nationtechmart.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Browse our selection of printers, scanners, and office equipment. Place orders anytime through our secure checkout.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Processing */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Package className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Order Processing</h3>
                      <p className="text-foreground">
                        Monday – Friday (EST)
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Orders are typically processed within 1-2 business days. You'll receive tracking information via email once your order ships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-foreground text-sm mb-2">When using our contact form, please include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Order number (if applicable)</li>
                    <li>A clear description of your inquiry</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Providing accurate details helps us respond efficiently.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name <span className="text-red-500">*</span></label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address <span className="text-red-500">*</span></label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Order Number <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <Input
                      placeholder="e.g., NTM-12345"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      data-testid="input-contact-order"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Message <span className="text-red-500">*</span></label>
                    <Textarea
                      placeholder="Please describe your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-contact-submit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Retailer Disclosure */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Independent Retailer Disclosure</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  NationTechMart is an independent retailer and is not affiliated with, endorsed by, or sponsored by HP or any other manufacturer. All trademarks, product names, and brand logos are the property of their respective owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
