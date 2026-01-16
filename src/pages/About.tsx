import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import ImageCard from "@/components/shared/ImageCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    title: "Customer First",
    description: "Your satisfaction is our top priority. We listen, respond, and work to exceed your expectations with every interaction.",
    image: "/assets/images/values-customer.jpg",
    alt: "Customer partnership illustration with handshake",
  },
  {
    title: "Quality Focus",
    description: "We carefully select products that meet high standards for reliability and performance, so you can shop with confidence.",
    image: "/assets/images/values-quality.jpg",
    alt: "Quality assurance concept with target and checkmark",
  },
  {
    title: "Honest Business",
    description: "Transparency in pricing, policies, and communication. No hidden fees, no misleading claims—just straightforward business.",
    image: "/assets/images/values-integrity.jpg",
    alt: "Transparency and honesty concept with open book",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us - Independent Technology Retailer"
        description="Learn about NationTechMart, an independent online retailer specializing in home printers, office printers, and document scanners. Quality products at competitive prices."
        keywords="about NationTechMart, printer retailer, technology store, office equipment supplier"
        canonicalUrl="/about"
      />

      {/* Hero Banner with Image - responsive, no cropping */}
      <section className="relative w-full bg-muted max-h-[400px] md:max-h-[500px] overflow-hidden">
        <img
          src="/assets/images/about-banner.jpg"
          alt="Happy diverse executive business people working together in meeting"
          className="w-full h-full object-contain"
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
            <div className="max-w-xl bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                About NationTechMart
              </h1>
              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                We're an independent retailer dedicated to providing quality technology 
                products. No manufacturer affiliations—just 
                honest business.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-3 justify-start">
                <Button asChild size="lg">
                  <Link to="/shop">
                    Shop Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section - 2 Column */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <ImageCard
                src="/assets/images/trust.jpg"
                alt="Trust and security shield with checkmark"
                size="w-full h-[300px] md:h-[400px]"
                rounded="2xl"
                shadow="lg"
              />
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Transparency & Trust
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an independent retailer, we operate with complete transparency. We're not 
                affiliated with any manufacturer—we simply source quality products and sell 
                them at fair prices.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Clear Pricing</p>
                    <p className="text-sm text-muted-foreground">What you see is what you pay. No hidden fees or surprise charges.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Honest Policies</p>
                    <p className="text-sm text-muted-foreground">30-day returns, manufacturer warranties, and fair terms clearly stated.</p>
                  </div>
                </li>
                              </ul>

              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link to="/trust-center">
                    Visit Trust Center
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <ImageCard
                  src={value.image}
                  alt={value.alt}
                  size="w-full h-[200px]"
                  rounded="sm"
                  shadow="none"
                />
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                NationTechMart was founded with a simple vision: to create a trustworthy 
                online destination for technology products where customers can shop with 
                confidence.
              </p>
              <p>
                As an independent retailer, we're not bound to any single manufacturer. 
                This independence allows us to focus solely on what matters most—finding 
                the best products at competitive prices.
              </p>
              <p>
                We understand that purchasing technology can be overwhelming. That's why 
                we've built our business around transparency and clear communication. When you shop with us, you're not just a 
                transaction—you're part of our community.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border/60">
              <p className="text-muted-foreground mb-6">Ready to experience the difference?</p>
              <Button asChild size="lg">
                <Link to="/shop">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
