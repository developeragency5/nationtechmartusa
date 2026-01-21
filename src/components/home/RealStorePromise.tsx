import { Search, ShieldCheck, Truck } from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Research & Compare",
    description: "Check the detailed specifications. Compare features like duplex printing, print speed, and supported media types. Choose what meets your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Shop with Confidence",
    description: "Enjoy secure checkout, transparent pricing, and clear policies you can rely on.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Order tracking and shipping notifications keep you informed at every step.",
  },
];

const OurApproach = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30" data-testid="section-our-approach">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How we make your shopping experience better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/60 p-6 text-center"
              data-testid={`approach-${approach.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <approach.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {approach.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
