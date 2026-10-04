import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function FAQList({ faqs }: { faqs: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <Card className="p-2 md:p-4">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.q} value={`faq-${index}`}>
            <AccordionTrigger className="px-3 text-left md:px-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-4 text-muted-foreground md:px-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
