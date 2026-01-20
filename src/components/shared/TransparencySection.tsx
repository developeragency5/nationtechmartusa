import { Link } from "react-router-dom";
import { DollarSign, Truck, RotateCcw, Shield } from "lucide-react";

const transparencyItems = [
  {
    icon: DollarSign,
    title: "Pricing & Taxes",
    description:
      "All prices are listed in USD. Applicable sales tax will be calculated at checkout based on your shipping address. Final pricing may vary based on product availability and market conditions.",
  },
  {
    icon: Truck,
    title: "Shipping",
    description:
      "Shipping costs are calculated at checkout based on your address and order details. Standard delivery takes 3-7 business days after processing. See our shipping page for complete policy details.",
    link: { href: "/shipping", label: "View Shipping Policy" },
  },
  {
    icon: RotateCcw,
    title: "Returns",
    description:
      "Most unopened items may be returned within 30 days of delivery. Some restrictions and exclusions apply. Please review our full policy for eligibility and return procedures.",
    link: { href: "/shipping", label: "View Returns Policy" },
  },
  {
    icon: Shield,
    title: "Warranty Information",
    description:
      "Products include applicable manufacturer standard warranty coverage where offered; terms vary by product and brand. Warranty details are available on individual product pages. NationTechMart does not provide additional warranty coverage unless otherwise stated.",
  },
];

const TransparencySection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Transparency & Policies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in clear, honest communication. Here's what you can expect when shopping with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {transparencyItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border/60 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      to={item.link.href}
                      className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      {item.link.label}
                      <span className="ml-1">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-5 bg-card rounded-xl border border-border/60">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Note:</strong> Information provided on this page is for general guidance only. 
              Specific terms, conditions, and availability may vary. Please refer to individual product 
              pages and our complete policies for detailed information applicable to your purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;