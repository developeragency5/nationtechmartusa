import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { MapPin, Mail, Phone, Shield, Eye, Lock, Users } from "lucide-react";

const Privacy = () => {
  const sections = [
    { id: "who-we-are", title: "Who We Are" },
    { id: "what-we-collect", title: "What Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "payment", title: "Payment Processing" },
    { id: "sharing", title: "Who We Share Information With" },
    { id: "cookies", title: "Cookies" },
    { id: "security", title: "Data Security" },
    { id: "rights", title: "Your Rights & Choices" },
    { id: "retention", title: "Data Retention" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="NationTechMart privacy policy. Learn how we collect, use, and protect your personal information. We never sell your data. Secure payment processing."
        keywords="privacy policy, data protection, personal information, secure shopping"
        canonicalUrl="/privacy"
      />

      {/* Hero Banner - responsive, no cropping */}
      <section className="relative w-full bg-muted max-h-[250px] md:max-h-[300px] overflow-hidden">
        <img
          src="/assets/images/trust.jpg"
          alt="Privacy Policy"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                How we collect, use, and protect your personal information.
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
                <a href="mailto:privacy@nationtechmart.com" className="text-sm text-primary hover:underline">
                  privacy@nationtechmart.com
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

                  {/* Quick Summary Box */}
                  <div className="mt-8 p-4 bg-accent/30 rounded-lg border border-border">
                    <h3 className="text-sm font-bold text-foreground mb-3">Key Points</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Eye className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground">We collect only what's needed for orders</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground">We don't store card details</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground">We never sell your data</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground">You can request data deletion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-sm max-w-none space-y-10">
                  
                  <section id="who-we-are">
                    <h2 className="text-xl font-bold text-foreground mb-4">1. Who We Are</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      NationTechMart is an independent online retailer serving customers across the United States. This privacy policy explains how we handle personal information when you visit our website or make a purchase. For privacy questions, contact us at <a href="mailto:privacy@nationtechmart.com" className="text-primary hover:underline">privacy@nationtechmart.com</a>.
                    </p>
                  </section>

                  <section id="what-we-collect">
                    <h2 className="text-xl font-bold text-foreground mb-4">2. What Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We collect information that you provide directly and some information automatically:
                    </p>
                    
                    <h3 className="font-semibold text-foreground mb-2">Information You Provide</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-4">
                      <li><strong>Contact information:</strong> Name, email address, phone number</li>
                      <li><strong>Shipping address:</strong> Street address, city, state, ZIP code</li>
                      <li><strong>Billing information:</strong> Billing address (payment card details are processed by our payment processor, not stored by us)</li>
                      <li><strong>Order details:</strong> Products purchased, order history</li>
                      <li><strong>Communications:</strong> Messages you send us via email or contact forms</li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li><strong>Device information:</strong> Browser type, operating system, device type</li>
                      <li><strong>Usage data:</strong> Pages visited, time spent on site, referring website</li>
                      <li><strong>IP address:</strong> Used for security and fraud prevention</li>
                      <li><strong>Cookies:</strong> Small files stored on your device (see Cookies section below)</li>
                    </ul>
                  </section>

                  <section id="how-we-use">
                    <h2 className="text-xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We use your information to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li><strong>Process orders:</strong> Fulfill purchases, send shipping confirmations, handle returns</li>
                      <li><strong>Communication:</strong> Respond to questions and resolve issues</li>
                      <li><strong>Transactional emails:</strong> Order confirmations, shipping updates, return status</li>
                      <li><strong>Security:</strong> Detect and prevent fraud, protect our systems</li>
                      <li><strong>Legal compliance:</strong> Meet tax, legal, and regulatory requirements</li>
                      <li><strong>Improve our website:</strong> Understand how customers use our site, fix problems</li>
                    </ul>
                  </section>

                  <section id="payment">
                    <h2 className="text-xl font-bold text-foreground mb-4">4. Payment Processing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>We do not store your credit card information.</strong>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Payments are processed by trusted third-party payment processors that are PCI-DSS compliant (the payment card industry security standard). When you enter payment information at checkout, it goes directly to the payment processor over an encrypted connection.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We receive only a transaction confirmation and the last four digits of your card for order reference purposes.
                    </p>
                  </section>

                  <section id="sharing">
                    <h2 className="text-xl font-bold text-foreground mb-4">5. Who We Share Information With</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>We do not sell your personal information.</strong>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We share information only with:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                      <li><strong>Payment processors:</strong> To complete transactions</li>
                      <li><strong>Shipping carriers:</strong> To deliver your orders (name, address, phone for delivery purposes)</li>
                      <li><strong>Business partners:</strong> Companies that help us run our business (email delivery, website hosting) under confidentiality agreements</li>
                      <li><strong>Legal requirements:</strong> If required by law, court order, or to protect our rights</li>
                    </ul>
                  </section>

                  <section id="cookies">
                    <h2 className="text-xl font-bold text-foreground mb-4">6. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We use cookies (small files stored on your device) to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-3">
                      <li>Keep you logged in during your shopping session</li>
                      <li>Remember items in your cart</li>
                      <li>Understand how visitors use our site</li>
                      <li>Prevent fraud</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      You can disable cookies in your browser settings, but some website features may not work properly without them.
                    </p>
                  </section>

                  <section id="security">
                    <h2 className="text-xl font-bold text-foreground mb-4">7. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We use reasonable security measures to protect your information, including:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-3">
                      <li>SSL/TLS encryption for data in transit</li>
                      <li>Secure servers and restricted access</li>
                      <li>Regular security reviews</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      However, no system is 100% secure. We can't guarantee absolute security, but we take reasonable steps to protect your data.
                    </p>
                  </section>

                  <section id="rights">
                    <h2 className="text-xl font-bold text-foreground mb-4">8. Your Rights & Choices</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      You have the right to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-3">
                      <li><strong>Access:</strong> Request a copy of personal information we have about you</li>
                      <li><strong>Correction:</strong> Ask us to correct inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing emails using the link in any email</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      To make a privacy request, email <a href="mailto:privacy@nationtechmart.com" className="text-primary hover:underline">privacy@nationtechmart.com</a> with "Privacy Request" in the subject line. We'll respond within 30 days.
                    </p>
                  </section>

                  <section id="retention">
                    <h2 className="text-xl font-bold text-foreground mb-4">9. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We keep your information as long as needed to fulfill orders, comply with legal obligations (such as tax records), resolve disputes, and enforce our agreements. Order records are typically retained for 7 years for tax purposes.
                    </p>
                  </section>

                  <section id="children">
                    <h2 className="text-xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our website is not intended for children under 16. We don't knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we'll delete it.
                    </p>
                  </section>

                  <section id="changes">
                    <h2 className="text-xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this policy from time to time. We'll post changes on this page and update the "Last updated" date. For significant changes, we may notify you by email or a notice on our website.
                    </p>
                  </section>

                  <section id="contact">
                    <h2 className="text-xl font-bold text-foreground mb-4">12. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For privacy questions or to make a data request:
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-foreground font-medium">NationTechMart - Privacy</p>
                      <p className="text-sm text-muted-foreground">123 Technology Drive, Suite 100</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Email: <a href="mailto:privacy@nationtechmart.com" className="text-primary hover:underline">privacy@nationtechmart.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Phone: <a href="tel:+18005551234" className="text-primary hover:underline">1-800-555-1234</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Response time: Within 30 days for privacy requests
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

export default Privacy;
