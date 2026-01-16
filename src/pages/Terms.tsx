import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { MapPin, Mail, Phone } from "lucide-react";

const Terms = () => {
  const sections = [
    { id: "who-we-are", title: "Who We Are" },
    { id: "eligibility", title: "Eligibility" },
    { id: "using-website", title: "Using Our Website" },
    { id: "orders-pricing", title: "Orders & Pricing" },
    { id: "payment", title: "Payment" },
    { id: "shipping", title: "Shipping" },
    { id: "returns", title: "Returns & Refunds" },
    { id: "warranties", title: "Product Warranties" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "ip", title: "Intellectual Property" },
    { id: "changes", title: "Changes to These Terms" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <Layout>
      <SEO
        title="Terms and Conditions"
        description="NationTechMart terms and conditions. Read our policies on orders, pricing, payment, shipping, returns, and warranty for home printers, office printers, and scanners."
        keywords="terms and conditions, purchase terms, order policy, NationTechMart terms"
        canonicalUrl="/terms"
      />

      {/* Hero Banner - responsive, no cropping */}
      <section className="relative w-full bg-muted max-h-[250px] md:max-h-[300px] overflow-hidden">
        <img
          src="/assets/images/trust.jpg"
          alt="Terms and Conditions"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                Terms and Conditions
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                The rules and guidelines for using our website and purchasing from us.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Identity */}
      <section className="py-6 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">NationTechMart</strong> · San Francisco, CA
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:contact@nationtechmart.com" className="text-sm text-primary hover:underline">
                  contact@nationtechmart.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+18005551234" className="text-sm text-primary hover:underline">
                  1-800-555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content with TOC */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Table of Contents - Sticky Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                    Contents
                  </h2>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {index + 1}. {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-sm max-w-none space-y-10">
                  
                  <section id="who-we-are">
                    <h2 className="text-xl font-bold text-foreground mb-4">1. Who We Are</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      NationTechMart is an independent online retailer selling technology products, primarily printers and related equipment. We are <strong>not affiliated with, endorsed by, or sponsored by any manufacturer</strong> whose products we sell.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      When you place an order with us, you're purchasing from NationTechMart, not from the product manufacturer.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Educational guides and informational content provided on the Site are for general informational purposes only and are separate from product sales.
                    </p>
                  </section>

                  <section id="eligibility">
                    <h2 className="text-xl font-bold text-foreground mb-4">2. Eligibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To use this website and make purchases, you must be at least eighteen (18) years of age and capable of entering into a binding contract.
                    </p>
                  </section>

                  <section id="using-website">
                    <h2 className="text-xl font-bold text-foreground mb-4">3. Using Our Website</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      By using this website, you agree to follow these terms. You must be at least eighteen (18) years of age and capable of entering into a binding contract. If you don't agree, please don't use our site or place orders.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      You agree to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li>Provide accurate information when placing orders</li>
                      <li>Use the website only for lawful purposes</li>
                      <li>Not attempt to disrupt or harm our website or systems</li>
                      <li>Not use automated tools to scrape or access our site without permission</li>
                    </ul>
                  </section>

                  <section id="orders-pricing">
                    <h2 className="text-xl font-bold text-foreground mb-4">4. Orders & Pricing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Prices:</strong> All prices are in U.S. dollars. Prices may change without notice. The price at the time you place your order is the price you pay.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Taxes:</strong> Sales tax is calculated based on your shipping address and added at checkout where required by law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Order acceptance:</strong> Placing an order is an offer to buy. We may accept or decline your order for any reason, including product availability, pricing errors, or suspected fraud. If we cancel your order, we'll refund any payment you've made.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Errors:</strong> We try to keep product information accurate, but mistakes happen. If there's a significant error in pricing or product description, we'll contact you before shipping to confirm or cancel the order.
                    </p>
                  </section>

                  <section id="payment">
                    <h2 className="text-xl font-bold text-foreground mb-4">5. Payment</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Payment is required at the time of purchase. We accept major credit cards and other payment methods shown at checkout.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Your payment is processed by trusted third-party payment processors. We do not store your full credit card number on our servers.
                    </p>
                  </section>

                  <section id="shipping">
                    <h2 className="text-xl font-bold text-foreground mb-4">6. Shipping</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Shipping is available to addresses within the United States only.</strong> We do not ship internationally.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Free Shipping:</strong> Orders totaling $100 or more qualify for free standard shipping within the United States. Orders under $100 are subject to shipping charges calculated at checkout.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Delivery Times:</strong> Standard shipping typically takes 3-7 business days after processing. Shipping times are estimates, not guarantees. We're not responsible for carrier delays, weather, or other factors outside our control.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      For additional shipping details, see our <a href="/shipping" className="text-primary hover:underline">Shipping & Returns</a> page.
                    </p>
                  </section>

                  <section id="returns">
                    <h2 className="text-xl font-bold text-foreground mb-4">7. Returns & Refunds</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We accept returns within 30 days of delivery for unopened items in original condition. Some restrictions apply.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      For complete return policy details, including what can't be returned and how refunds work, see our <a href="/shipping" className="text-primary hover:underline">Shipping & Returns</a> page.
                    </p>
                  </section>

                  <section id="warranties">
                    <h2 className="text-xl font-bold text-foreground mb-4">8. Product Warranties</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>NationTechMart is not the manufacturer.</strong> We do not provide product warranties.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Products are covered by the manufacturer's warranty, if any. Warranty terms vary by product and brand. For warranty claims, you may need to contact the manufacturer directly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We can provide proof of purchase to support warranty claims upon request.
                    </p>
                  </section>

                  <section id="liability">
                    <h2 className="text-xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      To the extent permitted by law:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-3">
                      <li>We're not liable for indirect, incidental, or consequential damages</li>
                      <li>Our total liability is limited to the amount you paid for the specific product in question</li>
                      <li>We don't guarantee that our website will always be available or error-free</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      This doesn't affect any rights you have under applicable consumer protection laws that can't be waived.
                    </p>
                  </section>

                  <section id="ip">
                    <h2 className="text-xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Product names, logos, and trademarks belong to their respective owners. NationTechMart content (our website text, design, and original images) is our property. Don't copy or reuse our content without permission.
                    </p>
                  </section>

                  <section id="changes">
                    <h2 className="text-xl font-bold text-foreground mb-4">11. Changes to These Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update these terms from time to time. The version posted on this page is the current version. We'll update the "Last updated" date when changes are made. Continued use of our site after changes means you accept the new terms.
                    </p>
                  </section>

                  <section id="governing-law">
                    <h2 className="text-xl font-bold text-foreground mb-4">12. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes will be resolved in the courts of San Francisco County, California.
                    </p>
                  </section>

                  <section id="contact">
                    <h2 className="text-xl font-bold text-foreground mb-4">13. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Questions about these terms? Contact us:
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-foreground font-medium">NationTechMart</p>
                      <p className="text-sm text-muted-foreground">123 Technology Drive, Suite 100</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Email: <a href="mailto:contact@nationtechmart.com" className="text-primary hover:underline">contact@nationtechmart.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Phone: <a href="tel:+18005551234" className="text-primary hover:underline">1-800-555-1234</a>
                      </p>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
