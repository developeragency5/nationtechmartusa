import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 1-2 business days.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact NationTechMart. Get help with orders, shipping, returns, or product questions. Email, phone, or send us a message online."
        keywords="contact NationTechMart, printer help, order help"
        canonicalUrl="/contact"
      />

      {/* Hero Banner - responsive, full image visible */}
      <section className="relative w-full bg-muted">
        <img
          src="/assets/images/support.jpg"
          alt="Friendly customer interaction with package delivery"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-start">
            <div className="max-w-xl bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Contact Us
              </h1>
              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                Have a question or need assistance? Our friendly team is here to help 
                you with orders, products, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/assets/images/trust.jpg"
                    alt="Contact our team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're here to help with your printer and technology needs. Reach out through any of these channels.
                  </p>
                  
                  <div className="space-y-3">
                    <a href="mailto:contact@nationtechmart.com" className="group flex items-start space-x-4 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Mail className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">Email</h4>
                        <span className="text-muted-foreground text-sm">
                          contact@nationtechmart.com
                        </span>
                      </div>
                    </a>

                    <a href="tel:+18005551234" className="group flex items-start space-x-4 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Phone className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">Phone</h4>
                        <span className="text-muted-foreground text-sm">
                          1-800-555-1234
                        </span>
                      </div>
                    </a>

                    <div className="group flex items-start space-x-4 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <MapPin className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">Address</h4>
                        <p className="text-muted-foreground text-sm">
                          123 Technology Drive, Suite 100<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Clock className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">Business Hours</h4>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden h-64">
              <img
                src="/assets/images/shipping.jpg"
                alt="Fast and reliable delivery"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Response Times & Expectations
              </h2>
              <p className="text-muted-foreground mb-6">
                We strive to respond to all inquiries as quickly as possible during business hours. 
                Here's what you can expect:
              </p>
              <ul className="space-y-2">
                <li className="group flex items-start gap-3 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <div className="w-2 h-2 rounded-full bg-primary transition-colors duration-300 group-hover:bg-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <strong className="text-foreground group-hover:text-primary transition-colors duration-300">Email inquiries:</strong> Response within 1-2 business days
                  </span>
                </li>
                <li className="group flex items-start gap-3 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <div className="w-2 h-2 rounded-full bg-primary transition-colors duration-300 group-hover:bg-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <strong className="text-foreground group-hover:text-primary transition-colors duration-300">Phone:</strong> Available during business hours (Mon-Fri, 9 AM - 6 PM EST)
                  </span>
                </li>
                <li className="group flex items-start gap-3 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <div className="w-2 h-2 rounded-full bg-primary transition-colors duration-300 group-hover:bg-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <strong className="text-foreground group-hover:text-primary transition-colors duration-300">Order issues:</strong> Priority handling, typically same-day response
                  </span>
                </li>
                <li className="group flex items-start gap-3 p-3 -ml-3 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-default">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <div className="w-2 h-2 rounded-full bg-primary transition-colors duration-300 group-hover:bg-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <strong className="text-foreground group-hover:text-primary transition-colors duration-300">Weekend messages:</strong> Reviewed first thing Monday morning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
