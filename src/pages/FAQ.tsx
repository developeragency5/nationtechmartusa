import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { useState, useMemo } from "react";
import { Search, Package, RotateCcw, Shield, CreditCard, Info, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FAQCategory = "shipping" | "returns" | "warranty" | "payments" | "product" | "account";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

const categories: { id: FAQCategory; label: string; icon: typeof Package }[] = [
  { id: "shipping", label: "Shipping", icon: Package },
  { id: "returns", label: "Returns", icon: RotateCcw },
  { id: "warranty", label: "Warranty", icon: Shield },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "product", label: "Product Info", icon: Info },
  { id: "account", label: "Account", icon: User },
];

const faqs: FAQ[] = [
  // Shipping (5)
  {
    category: "shipping",
    question: "What is your shipping policy?",
    answer: "Shipping details are shown at checkout. Orders are typically processed within 1-2 business days. Delivery times vary by destination and carrier and generally range from 3-7 business days. Please see our Shipping page for complete policy details including geographic restrictions."
  },
  {
    category: "shipping",
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States (all 50 states). Please see our Shipping page for complete details."
  },
  {
    category: "shipping",
    question: "What carriers do you use?",
    answer: "We ship via UPS, FedEx, and USPS. The carrier is determined automatically to provide the best combination of speed and reliability for your order."
  },
  {
    category: "shipping",
    question: "Can I change my shipping address after placing an order?",
    answer: "If your order hasn't shipped yet, we may be able to update the address. Please contact us immediately at contact@nationtechmart.com with your order number and the new address. Once an order has shipped, we cannot change the destination address."
  },
  {
    category: "shipping",
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking information. Click the tracking link in the email or copy the tracking number to the carrier's website. If you haven't received a shipping confirmation within 3 business days, please contact us."
  },

  // Returns (5)
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items in their original, unopened packaging. Items must be in new, resalable condition with all original materials. Some products may have different return terms, which will be noted on the product page. Please review our full Shipping & Returns page for complete details."
  },
  {
    category: "returns",
    question: "How do I start a return?",
    answer: "To initiate a return, contact us at contact@nationtechmart.com or call 1-800-555-1234 with your order number and reason for return. We'll review your request and provide a Return Merchandise Authorization (RMA) number along with shipping instructions. Do not ship items back without an RMA number."
  },
  {
    category: "returns",
    question: "Who pays for return shipping?",
    answer: "For standard returns (change of mind, ordered wrong item, etc.), the customer is responsible for return shipping costs. If you received a defective or incorrect item, please contact us and we'll provide a prepaid return label or arrange for the return at no cost to you."
  },
  {
    category: "returns",
    question: "How long do refunds take to process?",
    answer: "Once we receive your returned item, we'll inspect it within 2-3 business days. After approval, refunds are processed within 5-7 business days to your original payment method. Depending on your bank or credit card company, it may take an additional 3-5 business days to appear on your statement."
  },
  {
    category: "returns",
    question: "Can I return an opened product?",
    answer: "Generally, we only accept returns of unopened products in their original packaging. Opened products typically cannot be returned unless they are defective. If you've opened a product and discovered a defect, please contact us immediately with photos and your order number so we can help resolve the issue."
  },

  // Warranty (4)
  {
    category: "warranty",
    question: "What warranty do products come with?",
    answer: "Products include applicable manufacturer standard warranty coverage where offered; terms vary by product and brand. Specific warranty information is available on individual product pages. NationTechMart does not provide additional warranty coverage unless explicitly stated."
  },
  {
    category: "warranty",
    question: "How do I make a warranty claim?",
    answer: "Warranty claims are typically handled directly with the manufacturer. We can provide proof of purchase and assist with the process. Contact us with your order number and a description of the issue, and we'll help guide you through the manufacturer's warranty claim process."
  },
  {
    category: "warranty",
    question: "Does buying from NationTechMart affect manufacturer warranty?",
    answer: "Most manufacturer warranties are honored regardless of where the product is purchased. However, some manufacturers may have specific requirements about purchasing from authorized retailers. Please verify with the manufacturer if warranty coverage is a concern for your purchase."
  },
  {
    category: "warranty",
    question: "Do you offer extended warranties?",
    answer: "Extended warranty options may be available for select products. When available, these options will be shown on the product page or during checkout. Extended warranties are provided through third-party warranty providers and have their own terms and conditions."
  },

  // Payments (4)
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed through secure, PCI-compliant payment processors. We do not accept personal checks, money orders, or cryptocurrency at this time."
  },
  {
    category: "payments",
    question: "Is my payment information secure?",
    answer: "Yes. We use industry-standard SSL encryption to protect your data during transmission. We never store your complete credit card information on our servers. All payment processing is handled by PCI-DSS compliant third-party processors who specialize in secure payment handling."
  },
  {
    category: "payments",
    question: "When will my card be charged?",
    answer: "Your payment method is authorized when you place your order and charged when the order ships. If an item is backordered or there's a delay, you won't be charged until the item actually ships. Pre-authorizations may appear on your statement but will be released if the order doesn't ship."
  },
  {
    category: "payments",
    question: "Do you charge sales tax?",
    answer: "Sales tax is calculated at checkout based on your shipping address and applicable state and local tax laws. The exact tax amount will be displayed before you complete your purchase. We are required to collect sales tax in states where we have a tax obligation."
  },

  // Product Info (4)
  {
    category: "product",
    question: "Are your products new and genuine?",
    answer: "Yes, we sell new, genuine products sourced from reputable suppliers including authorized distributors and established wholesalers. We do not sell used, refurbished, or counterfeit products. If you have concerns about a specific product's authenticity, please contact us before purchasing."
  },
  {
    category: "product",
    question: "Why are your prices different from the manufacturer's website?",
    answer: "As an independent retailer, our pricing is based on our costs from suppliers, market conditions, and competitive factors. Prices may be higher or lower than the manufacturer's suggested retail price. We strive to offer competitive pricing."
  },
  {
    category: "product",
    question: "Can I get product recommendations?",
    answer: "While we're not able to provide personalized technical consultations, our product descriptions include specifications and use cases to help you make informed decisions. For specific technical questions, please consult the manufacturer's website."
  },
  {
    category: "product",
    question: "What if a product is out of stock?",
    answer: "Product availability is shown on each product page. If an item is out of stock, you may see an estimated restock date when available. We cannot guarantee restock dates as they depend on supplier availability. Consider signing up for notifications if that option is available for the product."
  },

  // Account (3)
  {
    category: "account",
    question: "Do I need an account to place an order?",
    answer: "You can check out as a guest without creating an account. However, creating an account allows you to easily track orders, view order history, and speeds up future checkouts. Account creation is free and only requires an email address and password."
  },
  {
    category: "account",
    question: "How do I update my account information?",
    answer: "If you have an account, you can update your information by logging in and accessing your account settings. To update information on a pending order, please contact us directly. For privacy-related requests, email us at contact@nationtechmart.com."
  },
  {
    category: "account",
    question: "How can I delete my account?",
    answer: "To request account deletion, please email contact@nationtechmart.com with the subject line 'Account Deletion Request' from the email address associated with your account. We'll process your request and confirm deletion within 5-7 business days."
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | "all">("all");

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const groupedFAQs = useMemo(() => {
    if (selectedCategory !== "all") {
      return { [selectedCategory]: filteredFAQs };
    }
    return filteredFAQs.reduce((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    }, {} as Record<FAQCategory, FAQ[]>);
  }, [filteredFAQs, selectedCategory]);

  const getCategoryInfo = (categoryId: FAQCategory) => {
    return categories.find((c) => c.id === categoryId);
  };

  return (
    <Layout>
      <SEO
        title="FAQ - Shipping, Returns, Warranty & More"
        description="Frequently asked questions about NationTechMart. Find answers about shipping, returns, warranty, payments, and product information for home printers, office printers, and scanners."
        keywords="FAQ, printer questions, shipping FAQ, returns FAQ, warranty FAQ, printer help"
        canonicalUrl="/faq"
      />
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/30 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about shopping with NationTechMart.
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base rounded-xl border-border/60 bg-card shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-background border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className="rounded-full"
            >
              All Topics
            </Button>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any FAQs matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                  Clear search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {Object.entries(groupedFAQs).map(([categoryId, categoryFaqs]) => {
                  const categoryInfo = getCategoryInfo(categoryId as FAQCategory);
                  if (!categoryInfo || categoryFaqs.length === 0) return null;
                  const Icon = categoryInfo.icon;

                  return (
                    <div key={categoryId}>
                      <div className="flex items-center space-x-3 mb-6 group/header">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/header:bg-primary group-hover/header:scale-110">
                          <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover/header:text-primary-foreground" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{categoryInfo.label}</h2>
                        <span className="text-sm text-muted-foreground">({categoryFaqs.length})</span>
                      </div>
                      
                      <Accordion type="single" collapsible className="space-y-3">
                        {categoryFaqs.map((faq, index) => (
                          <AccordionItem
                            key={`${categoryId}-${index}`}
                            value={`${categoryId}-${index}`}
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
                  );
                })}
              </div>
            )}

            {/* Results count */}
            {filteredFAQs.length > 0 && searchQuery && (
              <p className="text-sm text-muted-foreground text-center mt-8">
                Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 md:py-20 bg-muted/20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/shipping">Shipping Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;