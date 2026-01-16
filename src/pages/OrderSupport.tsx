import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { Link } from "react-router-dom";
import { 
  Search, 
  Package, 
  RotateCcw, 
  HelpCircle,
  Clock,
  Mail,
  Phone,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deliveryFAQs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-7 business days within the continental United States after your order has been processed. Processing usually takes 1-2 business days. Express shipping options with faster delivery times are available at checkout."
  },
  {
    question: "How do I know when my order has shipped?",
    answer: "You'll receive a shipping confirmation email with tracking information once your order leaves our warehouse. This email includes a tracking number and a link to the carrier's tracking page."
  },
  {
    question: "What carriers do you use?",
    answer: "We ship via UPS, FedEx, and USPS. The carrier used depends on your location, the size of your order, and the shipping method selected at checkout."
  },
  {
    question: "My tracking shows 'delivered' but I haven't received my package.",
    answer: "First, check around your property, with neighbors, and at any secondary addresses. Packages are sometimes marked delivered slightly before actual delivery. If you still can't locate it after 24 hours, contact us with your order number and we'll help investigate with the carrier."
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "If your order hasn't shipped yet, we may be able to update the address. Contact us immediately with your order number and the new address. Once an order has shipped, we cannot change the destination."
  },
  {
    question: "Do you ship to P.O. boxes?",
    answer: "Yes, we can ship to P.O. boxes via USPS. However, some larger items may require a physical street address for delivery via UPS or FedEx."
  },
  {
    question: "What if my package is damaged during shipping?",
    answer: "If you receive a damaged package, take photos of the damage (both the packaging and the product) before discarding anything. Contact us within 48 hours of delivery with photos and your order number so we can help resolve the issue."
  }
];

const OrderSupport = () => {
  return (
    <Layout>
      <SEO
        title="Order Support - Track Orders, Returns & Help"
        description="Get help with your NationTechMart order. Track shipments, initiate returns, change orders, and contact our customer support team. Mon-Fri 9AM-6PM EST."
        keywords="order support, track order, return printer, order help, customer service"
        canonicalUrl="/order-support"
      />
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/30 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Order Support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Need help with an order? Find tracking information, learn about returns, or contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Track Your Order */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Search className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Track Your Order
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To track your order, follow these steps:
                  </p>
                  <div className="bg-card rounded-xl border border-border/60 p-6 mb-6">
                    <ol className="space-y-4">
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">1</span>
                        <div>
                          <p className="font-medium text-foreground">Check your email</p>
                          <p className="text-sm text-muted-foreground">Look for a shipping confirmation email from NationTechMart. This email contains your tracking number and a link to track your package.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">2</span>
                        <div>
                          <p className="font-medium text-foreground">Click the tracking link</p>
                          <p className="text-sm text-muted-foreground">The link will take you directly to the carrier's website (UPS, FedEx, or USPS) with your tracking information.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">3</span>
                        <div>
                          <p className="font-medium text-foreground">Or use the tracking number</p>
                          <p className="text-sm text-muted-foreground">Copy the tracking number and paste it into the carrier's tracking page directly.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-muted/20 rounded-xl border border-border/60 p-5">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Tracking information typically updates within 24-48 hours after your order ships. If you don't see any movement after 3 business days, please contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change or Cancel Order */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Change or Cancel an Order
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We process orders quickly, so changes or cancellations must be requested as soon as possible.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-card rounded-xl border border-border/60 p-6">
                      <h3 className="font-semibold text-foreground mb-3">Before Order Ships</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        If your order hasn't shipped yet, we may be able to:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Cancel the order for a full refund</li>
                        <li>• Change the shipping address</li>
                        <li>• Modify quantities (subject to availability)</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong>Contact us immediately</strong> — orders typically ship within 1-2 business days.
                      </p>
                    </div>
                    <div className="bg-card rounded-xl border border-border/60 p-6">
                      <h3 className="font-semibold text-foreground mb-3">After Order Ships</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Once an order has shipped, we cannot cancel or modify it. Your options are:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Refuse delivery when it arrives</li>
                        <li>• Accept delivery and initiate a return</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        See our <Link to="/shipping" className="text-primary hover:underline">Returns Policy</Link> for details on returning items.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-xl border border-border/60 p-5">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> We cannot guarantee order modifications. Once submitted, orders enter our fulfillment queue quickly. The best way to ensure changes is to contact us within 1 hour of placing your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <RotateCcw className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  How to Return an Item
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Follow these steps to initiate a return:
                  </p>
                  
                  <div className="bg-card rounded-xl border border-border/60 p-6 mb-6">
                    <ol className="space-y-4">
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">1</span>
                        <div>
                          <p className="font-medium text-foreground">Check eligibility</p>
                          <p className="text-sm text-muted-foreground">Ensure your item is within the 30-day return window and meets our return conditions (unopened, original packaging).</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">2</span>
                        <div>
                          <p className="font-medium text-foreground">Contact us</p>
                          <p className="text-sm text-muted-foreground">Email support@nationtechmart.com or call 1-800-555-1234 with your order number and reason for return.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">3</span>
                        <div>
                          <p className="font-medium text-foreground">Receive return authorization</p>
                          <p className="text-sm text-muted-foreground">We'll review your request and provide a Return Merchandise Authorization (RMA) number and shipping instructions.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">4</span>
                        <div>
                          <p className="font-medium text-foreground">Ship the item</p>
                          <p className="text-sm text-muted-foreground">Pack the item securely and ship it back using a trackable shipping method. Include your RMA number on the package.</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">5</span>
                        <div>
                          <p className="font-medium text-foreground">Refund processing</p>
                          <p className="text-sm text-muted-foreground">Once we receive and inspect the item, your refund will be processed within 5-7 business days to your original payment method.</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Button asChild variant="outline">
                    <Link to="/shipping">View Full Returns Policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery FAQs */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Common Delivery Questions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Quick answers to frequently asked questions about shipping and delivery.
                </p>
                
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {deliveryFAQs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all duration-200"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
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
          </div>
        </div>
      </section>

      {/* Support Hours & Contact Form */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Contact Support
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Can't find what you're looking for? Our support team is here to help.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Support Hours */}
                  <div className="bg-card rounded-xl border border-border/60 p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-4">Support Hours</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Phone Support</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
                          <a href="tel:+18005551234" className="text-sm text-primary hover:underline">1-800-555-1234</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email Support</p>
                          <p className="text-sm text-muted-foreground">Response within 24-48 hours</p>
                          <a href="mailto:support@nationtechmart.com" className="text-sm text-primary hover:underline">support@nationtechmart.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Tip:</strong> For fastest service, have your order number ready when contacting us.
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-card rounded-xl border border-border/60 p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-4">Send Us a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="order-number">Order Number (optional)</Label>
                        <Input id="order-number" placeholder="e.g., NTM-12345" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="How can we help you?"
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-muted/20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/shipping">Shipping & Returns Policy</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/trust-center">Trust Center</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">General Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderSupport;