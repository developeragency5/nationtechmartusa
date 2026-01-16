import { Heart, CheckCircle } from "lucide-react";

const commitments = [
  {
    title: "Genuine Products",
    description: "We offer authentic equipment with original manufacturer warranties and specifications.",
  },
  {
    title: "Transparent Pricing",
    description: "Competitive rates with no hidden fees or surprise charges at checkout.",
  },
  {
    title: "Reliable Fulfillment",
    description: "Secure payment options with order tracking information provided for every purchase.",
  },
  {
    title: "Professional Guides",
    description: "Comprehensive educational resources to help you make informed decisions throughout your buying journey.",
  },
];

const OurCommitment = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12">
          <div className="flex flex-col items-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
              Our Commitment to You
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="group flex items-start gap-4 p-4 -ml-4 rounded-xl transition-all duration-300 hover:bg-primary/5 cursor-default">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <CheckCircle className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{commitment.title}:</span>{" "}
                  <span className="text-muted-foreground">{commitment.description}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're purchasing your first home office printer or upgrading an entire corporate print fleet,{" "}
            <span className="font-semibold text-foreground">NationTechMart provides the guidance, selection, and care</span>{" "}
            you need for a confident purchasing experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
