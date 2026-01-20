import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-16 bg-primary/5" data-testid="section-newsletter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h2 
          className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          data-testid="text-newsletter-heading"
        >
          Stay Updated
        </h2>
        <p 
          className="text-muted-foreground mb-6 max-w-lg mx-auto"
          data-testid="text-newsletter-description"
        >
          Subscribe to our newsletter for the latest deals, new arrivals, and exclusive offers on printers and scanners.
        </p>

        {submitted ? (
          <div 
            className="flex items-center justify-center gap-2 text-primary font-medium py-4"
            data-testid="text-newsletter-success"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            data-testid="form-newsletter"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button type="submit" data-testid="button-newsletter-submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
