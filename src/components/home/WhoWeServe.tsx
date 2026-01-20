import { Users, Briefcase, Home, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Beginners",
    description: "who need clear explanations without technical jargon",
  },
  {
    icon: Home,
    title: "Home Office Workers",
    description: "seeking reliable, cost-effective printing solutions",
  },
  {
    icon: Briefcase,
    title: "Small Business Owners",
    description: "balancing performance needs with budget constraints",
  },
  {
    icon: Building2,
    title: "IT Professionals",
    description: "looking for detailed specifications and deployment information",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30" data-testid="section-who-we-serve">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="bg-card rounded-xl border border-border p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground" data-testid="text-who-we-serve-heading">Who We Serve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="p-5 rounded-xl bg-primary/5 border border-primary/10"
                data-testid={`audience-${audience.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-background flex items-center justify-center shrink-0 shadow-sm">
                    <audience.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-primary mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center text-sm">
            No matter your experience level, our product listings provide the information you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
