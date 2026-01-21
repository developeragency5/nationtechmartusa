import { Link } from "react-router-dom";
import { DollarSign, Truck, RotateCcw, Shield } from "lucide-react";

const transparencyItems = [
  {
    icon: DollarSign,
    title: "Pricing & Taxes",
    description:
      "All prices are listed in USD. The system calculates applicable sales tax at checkout based on your shipping address.",
  },
  {
    icon: Truck,
    title: "Shipping",
    description:
      "Orders are typically processed within 1-2 business days. Delivery times vary by destination and carrier and typically range from 3-7 business days.",
    link: { href: "/shipping", label: "View Shipping Policy" },
  },
  {
    icon: RotateCcw,
    title: "Returns",
    description:
      "Most unopened items may be returned within 30 days of delivery. Restrictions and exclusions apply.",
    link: { href: "/shipping", label: "View Returns Policy" },
  },
  {
    icon: Shield,
    title: "Warranty Information",
    description:
      "Products include applicable manufacturer standard warranty coverage where offered. Warranty terms vary by product and brand.",
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
      </div>
    </section>
  );
};

export default TransparencySection;