import fastShippingIcon from "@/assets/fast-shipping-icon.png";
import easyReturnsIcon from "@/assets/easy-returns-icon.png";
import secureShoppingIcon from "@/assets/secure-shopping-icon.png";
import transparentPricingIcon from "@/assets/transparent-pricing-icon.png";

const benefits = [
  {
    title: "Fast Delivery",
    description: "Shipping details are shown at checkout. Fast, reliable delivery to your doorstep.",
    icon: null,
    customIcon: fastShippingIcon,
  },
  {
    title: "Easy Returns",
    description: "30-day return window on eligible items. Straightforward process with clear instructions (exclusions may apply).",
    icon: null,
    customIcon: easyReturnsIcon,
  },
  {
    title: "Secure Shopping",
    description: "Browse and buy with confidence. Your transactions are protected with industry-standard SSL encryption.",
    icon: null,
    customIcon: secureShoppingIcon,
  },
  {
    title: "Transparent Pricing",
    description: "Competitive rates with no hidden fees or surprise charges at checkout.",
    icon: null,
    customIcon: transparentPricingIcon,
  },
];

const WhyNationTechMart = () => {
  return (
    <section className="py-16 md:py-20 bg-background" data-testid="section-why-nationtechmart">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-why-heading">
            Why NationTechMart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on what matters: quality products, fair prices, and a hassle-free experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/60 p-6 text-center"
              data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 group">
                {benefit.customIcon ? (
                  <img
                    src={benefit.customIcon}
                    alt={benefit.title}
                    className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110 hover:translate-x-1"
                  />
                ) : (
                  benefit.icon && (
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                  )
                )}
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNationTechMart;
