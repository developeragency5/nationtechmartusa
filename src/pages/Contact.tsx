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
  HelpCircle,
  Package,
  Truck,
  RotateCcw,
  FileText,
  ShoppingCart,
  AlertTriangle,
  Building2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      title: "Message Sent",
      description: "Thank you for contacting us. We'll review your inquiry during business hours.",
    });
    setFormData({ name: "", email: "", orderNumber: "", message: "" });
  };

  const canContactAbout = [
    { icon: Package, text: "Order confirmation and order status inquiries" },
    { icon: Truck, text: "Shipping information and delivery timelines" },
    { icon: RotateCcw, text: "Return eligibility and store return procedures" },
    { icon: FileText, text: "General product information based on published specifications" },
    { icon: ShoppingCart, text: "Website or checkout-related questions" },
    { icon: HelpCircle, text: "General inquiries about NationTechMart and our policies" },
  ];

  const doNotProvide = [
    "Technical troubleshooting or setup assistance",
    "Repair or diagnostic evaluations",
    "Manufacturer warranty claims or replacements",
    "OEM-authorized technical assistance",
  ];

  const faqs = [
    {
      question: "Does NationTechMart provide technical assistance?",
      answer: "No. Technical assistance, troubleshooting, and setup guidance are provided by the product manufacturer. Please refer to your product documentation or the manufacturer's official website."
    },
    {
      question: "Can NationTechMart help with warranty claims?",
      answer: "No. All warranty coverage and claims are handled directly by the manufacturer. NationTechMart is an independent retailer and does not process manufacturer warranty requests."
    },
    {
      question: "What kind of questions can I contact NationTechMart about?",
      answer: "You may contact us for order-related inquiries, shipping questions, return eligibility, and general product information based on published specifications."
    },
    {
      question: "How should I contact the manufacturer?",
      answer: "Manufacturer contact details are typically included in the product packaging or on the manufacturer's official website. Each product page also includes links to manufacturer resources when available."
    },
  ];

  return (
    <Layout>
      <SEO
        title="Contact NationTechMart | Orders, Products & General Inquiries"
        description="Contact NationTechMart for questions about products, orders, shipping, or store policies. We provide clear information and transparent communication."
        keywords="contact NationTechMart, order help, shipping questions, return policy, product inquiries"
        canonicalUrl="/contact"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/30 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Contact NationTechMart
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              NationTechMart is an independent online retailer offering printers, scanners, and related technology products. 
              This Contact Us page is provided to help customers reach us for order-related questions, general product information, 
              and store policy inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-6 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                Important: We do not provide technical troubleshooting, setup assistance, or manufacturer warranty handling.
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                For product-specific technical assistance or warranty claims, customers should contact the original equipment manufacturer (OEM) directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Contact Us About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Can Contact About */}
              <div className="bg-card rounded-xl p-8 border border-border">
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
                <ul className="space-y-2">
                  {canContactAbout.map((item, index) => (
                    <li key={index} className="group flex items-start gap-3 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <item.icon className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground text-sm pt-1">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Do Not Provide */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    What We Do Not Provide
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  To maintain transparency, please note that NationTechMart does not provide:
                </p>
                <ul className="space-y-3">
                  {doNotProvide.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 -ml-3 rounded-lg bg-red-50 dark:bg-red-950/20">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    All technical assistance and warranty inquiries are handled directly by the product manufacturer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Contact Methods
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred way to reach us. Email is the preferred method for order-related questions and general inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Email Card */}
                <a 
                  href="mailto:contact@nationtechmart.com" 
                  className="group block bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <Mail className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Email</h3>
                      <p className="text-primary font-medium">contact@nationtechmart.com</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Email is the preferred method for order-related questions and general inquiries.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+18005551234" 
                  className="group block bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <Phone className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Phone</h3>
                      <p className="text-primary font-medium">1-800-555-1234</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Phone inquiries are available for general questions related to orders and store information.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Address Card */}
                <div className="group bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <MapPin className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Business Address</h3>
                      <p className="text-foreground">
                        NationTechMart<br />
                        123 Technology Drive<br />
                        Suite 100<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        This address is provided for business correspondence only.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="group bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <Clock className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Business Hours</h3>
                      <p className="text-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        We review inquiries during standard business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 border border-border h-fit">
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
                    <li>Your full name</li>
                    <li>Email address</li>
                    <li>Order number (if applicable)</li>
                    <li>A clear description of your inquiry</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Providing accurate information helps us respond efficiently.
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
                    <label className="text-sm font-medium text-foreground">Your Inquiry <span className="text-red-500">*</span></label>
                    <Textarea
                      placeholder="Please describe your inquiry clearly..."
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

      {/* Response Expectations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Response Expectations
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We review inquiries during standard business hours. Response times may vary depending on message volume and inquiry type.
            </p>
            <div className="bg-card rounded-xl border border-border p-6 max-w-xl mx-auto">
              <p className="text-muted-foreground">
                For the fastest resolution of technical or warranty-related issues, customers should contact the product manufacturer 
                directly using the information provided in the product documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="group bg-card border border-border/60 rounded-xl px-6 data-[state=open]:border-primary data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                  NationTechMart is not affiliated with, endorsed by, or sponsored by HP or any other manufacturer. 
                  All trademarks, product names, and brand logos are the property of their respective owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">NationTechMart is committed to clear communication and accurate information.</span>{" "}
              By setting proper expectations, we aim to ensure a transparent and straightforward shopping experience for all customers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
