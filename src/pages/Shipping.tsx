import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { Truck, Package, RotateCcw, Clock, AlertCircle, CheckCircle, MapPin, Mail, Phone, Search } from "lucide-react";

const Shipping = () => {
  return (
    <Layout>
      <SEO
        title="Shipping & Returns Policy"
        description="NationTechMart shipping and returns policy. Free shipping on orders over $100, 30-day returns. Learn about delivery times and return process."
        keywords="printer shipping, return policy, shipping rates, delivery time, order returns"
        canonicalUrl="/shipping"
      />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/images/shipping.jpg"
          alt="Packages ready for shipping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Shipping & Returns
              </h1>
              <p className="text-lg text-muted-foreground">
                Clear, honest information about how we ship orders and handle returns.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Identity */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">NationTechMart</strong><br />
                  123 Technology Drive, Suite 100<br />
                  San Francisco, CA 94105
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm">
                  <a href="mailto:contact@nationtechmart.com" className="text-primary hover:underline">
                    contact@nationtechmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm">
                  <a href="tel:+18005551234" className="text-primary hover:underline">
                    1-800-555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Image Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Shipping at a Glance
              </h2>
              <p className="text-lg font-medium text-primary">
                Free Shipping on Orders Over $100
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Handling Time Card */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-40 bg-accent/30 flex items-center justify-center">
                  <Package className="h-16 w-16 text-primary/60" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Handling Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Orders typically ship within <strong>1-2 business days</strong>. During peak periods, 
                    processing may take up to 3 business days.
                  </p>
                </div>
              </div>

              {/* Carriers Card */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-40 bg-accent/30 flex items-center justify-center">
                  <Truck className="h-16 w-16 text-primary/60" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Carriers & Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We ship via <strong>UPS, FedEx, and USPS</strong>. Standard delivery takes 3-7 
                    business days.
                  </p>
                </div>
              </div>

              {/* Tracking Card */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-40 bg-accent/30 flex items-center justify-center">
                  <Search className="h-16 w-16 text-primary/60" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Order Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a <strong>tracking number via email</strong> once your order ships. 
                    Track your package through the carrier's website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policy Details */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-8 w-8 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-foreground">Shipping Policy</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Free Shipping:</strong> Orders totaling $100 or more qualify for free standard shipping.
                </p>
                <p>
                  <strong className="text-foreground">Geographic Availability:</strong> Shipping is available to addresses within the United States only. We do not ship internationally at this time.
                </p>
                <p>
                  <strong className="text-foreground">Delivery Time:</strong> Standard delivery takes 3-7 business days after your order ships. Delivery times are estimates and may vary based on carrier conditions and destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Section with Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Returns Image */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden h-64 lg:h-80">
                  <img
                    src="/assets/images/returns.jpg"
                    alt="Easy returns process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-accent/30 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <RotateCcw className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">30-Day Return Window</h4>
                      <p className="text-sm text-muted-foreground">
                        Request a return within 30 days of delivery. Items must be unopened, 
                        unused, and in original packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How Returns Work - 3 Steps */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <RotateCcw className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    How Returns Work
                  </h2>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Contact Us</h4>
                      <p className="text-sm text-muted-foreground">
                        Email <a href="mailto:contact@nationtechmart.com" className="text-primary hover:underline">contact@nationtechmart.com</a> with 
                        your order number and reason for return. We'll respond within 1-2 business days.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Receive RMA & Ship</h4>
                      <p className="text-sm text-muted-foreground">
                        Once approved, you'll receive a Return Merchandise Authorization (RMA) number. 
                        Ship the item back using a trackable method (at your expense unless it's our error).
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Refund Processed</h4>
                      <p className="text-sm text-muted-foreground">
                        After we receive and inspect the item, your refund is processed within 5-7 business days 
                        to the original payment method. Bank processing may add 3-5 days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Non-returnable items */}
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    Items That Cannot Be Returned
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Opened software, ink cartridges, or toner</li>
                    <li>Items marked "Final Sale" at purchase</li>
                    <li>Products with removed/altered serial numbers</li>
                    <li>Returns after the 30-day window</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Disclaimer */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Warranty Disclaimer</h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>NationTechMart is not the manufacturer</strong> of the products we sell. We are an independent retailer.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    All products are covered by the manufacturer's warranty only. Warranty terms vary by product and brand. 
                    For warranty claims, you may need to contact the manufacturer directly. We can provide proof of purchase upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-muted/30 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're available Monday through Friday, 9 AM - 6 PM EST.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:contact@nationtechmart.com" className="text-primary hover:underline font-medium">
                contact@nationtechmart.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="tel:+18005551234" className="text-primary hover:underline font-medium">
                1-800-555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shipping;
