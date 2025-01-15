import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is SwachhKarma?",
      answer: "SwachhKarma is a community-driven platform that incentivizes waste management and environmental conservation. Users can report waste, participate in clean-up activities, and earn tokens for their efforts."
    },
    {
      question: "How do I earn tokens?",
      answer: "You can earn tokens by reporting waste locations, participating in clean-up events, and completing waste collection tasks. The more you contribute, the more tokens you earn!"
    },
    {
      question: "What can I do with the tokens I earn?",
      answer: "Tokens can be redeemed for various rewards, including eco-friendly products, discounts at participating stores, or even converted to charitable donations for environmental causes."
    },
    {
      question: "How does SwachhKarma verify waste reports?",
      answer: "We use a combination of community verification and AI-powered image recognition to validate waste reports. Multiple reports of the same location also help in verification."
    },
    {
      question: "Can businesses participate in SwachhKarma?",
      answer: "Businesses can partner with SwachhKarma to sponsor clean-up events, offer rewards, or implement our system in their waste management processes."
    }
  ]
  
  export default function FAQ() {
    return (
      <section className="py-12 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  