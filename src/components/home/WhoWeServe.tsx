import { Users, Briefcase, Home, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Beginners",
    description: "who need clear explanations without technical jargon",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Home,
    title: "Home Office Workers",
    description: "seeking reliable, cost-effective printing solutions",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: Briefcase,
    title: "Small Business Owners",
    description: "balancing performance needs with budget constraints",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    icon: Building2,
    title: "IT Professionals",
    description: "looking for detailed specifications, fleet management insights, and enterprise deployment guidance",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="bg-card rounded-xl border border-border p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Who We Serve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className={`group p-5 rounded-xl ${audience.bgColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default border border-transparent hover:border-primary/20`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-background flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <audience.icon className={`h-6 w-6 ${audience.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${audience.color} mb-1 transition-all duration-300`}>
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center text-sm">
            No matter your experience level, our product selection and guidance adapts to provide the information you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
