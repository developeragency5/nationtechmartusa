import { Heart, CheckCircle } from "lucide-react";

const commitments = [
  {
    title: "Authentic Products",
    description: "We sell new, authentic products sourced through lawful distribution channels. Warranty coverage varies by product and brand.",
  },
  {
    title: "Transparent Pricing",
    description: "The system clearly displays all pricing, and it calculates taxes and shipping at checkout.",
  },
  {
    title: "Reliable Fulfillment",
    description: "Secure payment processing and tracking details are provided for every order.",
  },
  {
    title: "Clear Product Information",
    description: "You can find detailed specifications, compatibility information, supported features, and performance expectations on each product page. This helps you choose with confidence.",
  },
];

const OurCommitment = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12 animate-fade-in-up">
          <div className="flex flex-col items-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 animate-pulse-glow">
              <Heart className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
              Our Commitment to You
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
            {commitments.map((commitment, index) => (
              <div 
                key={commitment.title} 
                className="group flex items-start gap-4 p-4 -ml-4 rounded-xl transition-all duration-300 hover:bg-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <CheckCircle className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div>
                  <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{commitment.title}:</span>{" "}
                  <span className="text-muted-foreground">{commitment.description}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you need a home printer, an office workgroup solution, or a high-speed laser printer,{" "}
            <span className="font-semibold text-foreground">NationTechMart offers a wide selection</span>{" "}
            of printers and scanners from well-known manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
