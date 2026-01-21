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
  XCircle,
  Package,
  Truck,
  RotateCcw,
  FileText,
  ShoppingCart,
  Building2,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We will review your inquiry during business hours and respond as soon as possible.",
    });
    setFormData({ name: "", email: "", orderNumber: "", inquiryType: "", message: "" });
  };

  const canContactAbout = [
    { icon: Package, text: "Order status and order confirmation questions" },
    { icon: Truck, text: "Shipping status and delivery inquiries" },
    { icon: RotateCcw, text: "Return eligibility and return process questions" },
    { icon: FileText, text: "Store policy questions" },
    { icon: ShoppingCart, text: "Website and checkout questions" },
  ];

  const cannotHelpWith = [
    "Technical troubleshooting or product setup",
    "Software installation or driver configuration",
    "Diagnostic evaluations or error resolution",
    "Printer repairs or hardware servicing",
    "Warranty claims or warranty replacements",
    "OEM technical assistance or manufacturer-level guidance",
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
                Questions about your order, shipping, returns, or our store policies? Reach out and we will respond during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Store & Order Inquiries Only
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-intro">
              NationTechMart is an independent online retailer specializing in printers, scanners, and office technology products. 
              This page is for questions related to orders placed through our store, shipping, returns, and general store policies.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column: Can Contact / Cannot Help */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What You CAN Contact Us About */}
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    What You Can Contact Us About
                  </h2>
                </div>
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

              {/* What We DO NOT Provide */}
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    What We Do Not Provide
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  NationTechMart does not offer the following:
                </p>
                <ul className="space-y-2">
                  {cannotHelpWith.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">For technical or warranty issues:</strong> Please contact the product manufacturer directly. Manufacturer contact information is included in your product packaging and on the manufacturer's website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Reach Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Email is the preferred contact method for order-related questions and store inquiries. Phone is available for general questions during business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
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
                        Best for order inquiries, shipping questions, and return requests.
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
                        Available during business hours for general store questions.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Business Address */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Business Address</h3>
                      <p className="text-foreground">
                        NationTechMart<br />
                        123 Technology Drive, Suite 100<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For business correspondence only. This is not a retail location or service center.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                      <p className="text-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Inquiries received outside business hours will be reviewed the next business day.
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
                  <h4 className="font-semibold text-foreground text-sm mb-2">Contact Form Instructions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Provide your full name and email address</li>
                    <li>Include your order number if your inquiry is about an existing order</li>
                    <li>Describe your question clearly and specifically</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Complete and accurate information helps us respond more efficiently.
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
                    <label className="text-sm font-medium text-foreground">Order Number <span className="text-muted-foreground font-normal">(if applicable)</span></label>
                    <Input
                      placeholder="e.g., NTM-12345"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      data-testid="input-contact-order"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Question <span className="text-red-500">*</span></label>
                    <Textarea
                      placeholder="Please describe your question about orders, shipping, returns, or store policies..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-contact-submit">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Issues Notice */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Technical or Warranty Issues?</h3>
                  <p className="text-muted-foreground mb-3">
                    NationTechMart is an online retailer. We do not provide technical troubleshooting, product repairs, setup assistance, or warranty claim processing.
                  </p>
                  <p className="text-muted-foreground">
                    For technical issues, product malfunctions, or warranty claims, please contact the product manufacturer directly. Manufacturer contact information is available in your product documentation and on the manufacturer's website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Retailer & Trademark Disclosure */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Independent Retailer & Trademark Notice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  NationTechMart is an independent online retailer. We are not affiliated with, endorsed by, sponsored by, or connected to HP Inc., Canon, Epson, Brother, or any other manufacturer.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All product names, trademarks, brand names, and logos mentioned on this website are the property of their respective owners. Any use of these trademarks is for identification purposes only and does not imply endorsement, sponsorship, or affiliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">NationTechMart is committed to transparency.</span>{" "}
              We provide accurate product information and clear policies to help you make informed purchasing decisions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
