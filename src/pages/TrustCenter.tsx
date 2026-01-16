import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Package, 
  DollarSign, 
  Truck, 
  Shield, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustCenter = () => {
  return (
    <Layout>
      <SEO
        title="Trust Center - Transparency & Business Practices"
        description="Learn about NationTechMart's business practices. We're an independent retailer committed to transparency in pricing, sourcing, and shipping."
        keywords="trust center, independent retailer, transparent pricing, honest business"
        canonicalUrl="/trust-center"
      />
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/30 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Trust Center
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in transparency. Learn more about who we are, how we operate, and what you can expect when shopping with NationTechMart.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Who We Are
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    NationTechMart is an <strong className="text-foreground">independent online retailer</strong> specializing in printers, scanners, and related technology products. We are a small business dedicated to providing quality products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Important:</strong> NationTechMart is not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, or any other manufacturer. All product names, logos, and brands are property of their respective owners.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We operate independently and are solely responsible for our sales and fulfillment. When you shop with us, you're buying from NationTechMart, not directly from a manufacturer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Source Products */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  How We Source Products
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We source our products from reputable suppliers, including authorized distributors and established wholesalers. We work to ensure that the products we sell are genuine and in new condition.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While we take care in selecting our suppliers, we cannot guarantee the supply chain history of every individual product. If you have specific concerns about a product's origin or authenticity, please contact us before purchasing.
                  </p>
                  <div className="bg-card rounded-xl border border-border/60 p-5 mt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Product availability, specifications, and packaging may vary. We recommend checking individual product listings for the most accurate information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Pricing Transparency
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We strive to be upfront about our pricing. Here's what you can expect:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Product prices</strong> are displayed in USD and are subject to change based on market conditions and availability.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Sales tax</strong> is calculated at checkout based on your shipping address and applicable state/local tax laws.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Free shipping</strong> on orders over $100
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">No hidden fees.</strong> The total shown at checkout is the total you'll pay.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Shipping & Returns
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Here's a quick overview of our shipping and return policies:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-card rounded-xl border border-border/60 p-6">
                      <h3 className="font-semibold text-foreground mb-3">Shipping</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Free shipping on orders over $100</li>
                        <li>• Orders typically ship within 1-2 business days</li>
                        <li>• Standard delivery takes 3-7 business days</li>
                        <li>• Carriers include UPS, FedEx, and USPS</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">See shipping page for full details</p>
                    </div>
                    <div className="bg-card rounded-xl border border-border/60 p-6">
                      <h3 className="font-semibold text-foreground mb-3">Returns</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 30-day return window for most items</li>
                        <li>• Items must be unopened and in original packaging</li>
                        <li>• Some products may have different return terms</li>
                        <li>• Refunds processed within 5-7 business days</li>
                        <li>• Refunded to original payment method</li>
                      </ul>
                    </div>
                  </div>

                  <Button asChild variant="outline">
                    <Link to="/shipping">View Full Shipping & Returns Policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  Warranty Information
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Products sold by NationTechMart are covered by the <strong className="text-foreground">manufacturer's standard warranty</strong>. Warranty terms, coverage, and duration vary by product and manufacturer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Important considerations:</strong>
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Warranty claims are typically handled directly with the manufacturer. We can provide proof of purchase and assist with the process.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Some manufacturers may require products to be purchased from authorized retailers for warranty coverage. Please verify with the manufacturer if this is a concern.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        NationTechMart does not provide additional warranty coverage beyond the manufacturer's warranty unless explicitly stated on the product page.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Extended warranty options may be available for select products. Check individual product listings for details.
                      </span>
                    </li>
                  </ul>
                  <div className="bg-card rounded-xl border border-border/60 p-5">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tip:</strong> We recommend reviewing the manufacturer's warranty terms before purchasing. Specific warranty information is available on individual product pages when provided by the manufacturer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                  How to Contact Us
                </h2>
                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We're here to help. If you have questions about products, orders, or policies, please reach out:
                  </p>
                  
                  <div className="bg-card rounded-xl border border-border/60 p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <a href="mailto:contact@nationtechmart.com" className="text-primary hover:underline">
                          contact@nationtechmart.com
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                        <a href="tel:+18005551234" className="text-primary hover:underline">
                          1-800-555-1234
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-foreground mb-2">Mailing Address</h3>
                        <p className="text-muted-foreground">
                          NationTechMart<br />
                          123 Technology Drive, Suite 100<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/shipping">Shipping & Returns</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border/60 p-6">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                <strong className="text-foreground">Our Commitment:</strong> We strive to be honest and transparent in all our business practices. If something isn't right with your order, please contact us and we'll do our best to make it right. Your trust is important to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrustCenter;