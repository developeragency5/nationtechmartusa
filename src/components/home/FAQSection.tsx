import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-7 business days within the continental United States. Express shipping options are available at checkout for faster delivery. Please note that processing time (1-2 business days) is not included in shipping estimates.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items in their original, unopened packaging. Some products may have different return windows. Please visit our Shipping & Returns page for complete details on our return process and any exceptions.",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "All products sold by NationTechMart include the manufacturer's standard warranty. Warranty terms vary by product and manufacturer. Extended warranty options may be available for select items. Please check individual product listings for specific warranty information.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can use this tracking number on the carrier's website to monitor your package's progress. If you have any issues tracking your order, our customer support team is here to help.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, absolutely. We use industry-standard SSL encryption to protect your personal and payment information. We never store your complete credit card information on our servers. All transactions are processed through secure, PCI-compliant payment processors.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. We're working on expanding our shipping options to serve international customers in the future. Please check back for updates or subscribe to our newsletter for announcements.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about shopping with NationTechMart.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/60 rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;