import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your shipping policy?",
    answer:
      "Shipping details are shown at checkout. Orders typically ship within 1-2 business days and standard delivery takes 3-7 business days. See our shipping page for full details.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items in their original, unopened packaging. Some products may have different return windows and exclusions apply. Please visit our Shipping & Returns page for complete details on our return process and any exceptions.",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "Products sold by NationTechMart include applicable manufacturer standard warranty coverage where offered. Warranty terms vary by product and manufacturer. Please check individual product listings for specific warranty information.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can use this tracking number on the carrier's website to monitor your package's progress.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use industry-standard SSL encryption to protect your personal and payment information. We never store your complete credit card information on our servers. All transactions are processed through secure, PCI-compliant payment processors.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. See our shipping page for full policy details.",
  },
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleMouseEnter = (index: number) => {
    setOpenItem(`item-${index}`);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about shopping with NationTechMart.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/60 rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => handleMouseEnter(index)}
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