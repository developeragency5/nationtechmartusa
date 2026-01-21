import fastShippingIcon from "@/assets/fast-shipping-icon.png";
import easyReturnsIcon from "@/assets/easy-returns-icon.png";
import secureShoppingIcon from "@/assets/secure-shopping-icon.png";
import transparentPricingIcon from "@/assets/transparent-pricing-icon.png";

const benefits = [
  {
    title: "Fast Delivery",
    description: "The checkout process clearly displays shipping details, provides reliable delivery timelines, and offers order tracking.",
    icon: null,
    customIcon: fastShippingIcon,
  },
  {
    title: "Easy Returns",
    description: "You can return eligible items within 30 days of delivery. Our return process is straightforward, with clear instructions and transparent eligibility criteria.",
    icon: null,
    customIcon: easyReturnsIcon,
  },
  {
    title: "Secure Shopping",
    description: "Industry-standard SSL encryption protects your personal and payment information.",
    icon: null,
    customIcon: secureShoppingIcon,
  },
  {
    title: "Transparent Pricing",
    description: "We offer competitive pricing with no hidden charges or unexpected fees at checkout.",
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
            We focus on what matters most: quality products, fair pricing, and a smooth shopping experience from starting to finishing.
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
