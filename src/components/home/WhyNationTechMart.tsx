import { Link } from "react-router-dom";
import ImageCard from "@/components/shared/ImageCard";
import { Truck, RotateCcw } from "lucide-react";

const benefits = [
  {
    title: "Quick Processing",
    description: "Most orders are processed within 1–2 business days, subject to availability and carrier conditions.",
    image: "/assets/images/shipping.jpg",
    alt: "Shipping and delivery illustration with packages and delivery truck",
    icon: Truck,
    link: "/shipping",
  },
  {
    title: "Easy Returns",
    description: "30-day return window on eligible items. Hassle-free process with clear instructions.",
    image: "/assets/images/returns.jpg",
    alt: "Returns process illustration with circular arrows",
    icon: RotateCcw,
    link: "/shipping",
  },
];

const WhyNationTechMart = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Why NationTechMart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on what matters: quality products and fair prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Link
              key={index}
              to={benefit.link}
              className="group block"
            >
              <div className="bg-card rounded-2xl border border-border/60 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <benefit.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNationTechMart;
