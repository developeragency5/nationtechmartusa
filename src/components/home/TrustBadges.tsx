import { Shield, Truck, RotateCcw, Lock, Headphones, Award } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    description: "SSL encrypted payments",
  },
  {
    icon: Shield,
    title: "Quality Products",
    description: "Carefully selected items",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "Your happiness matters",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Why Shop With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing an excellent shopping experience with every purchase.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;