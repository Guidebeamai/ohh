import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { links } from "@/lib/links";

const questions = [
  {
    question: "Can I keep my rates private with v0.2?",
    answer: (
      <>
        No. v0.2 publishes the whole harness as one public file, so a section marked
        permissioned or private can still be read by anyone. Publish only what you&apos;d make
        public until v0.3, which serves protected sections from a separate address.{" "}
        <a href={links.security} className="text-foreground underline underline-offset-4">
          Read the details
        </a>
        .
      </>
    ),
  },
  {
    question: "Do I need Guidebeam to use a harness?",
    answer:
      "No. The specification is open under the Apache License 2.0, and nothing in it needs Guidebeam's software or accounts. Guidebeam stewards the standard and runs this site.",
  },
  {
    question: "Does OHH score or rank people?",
    answer:
      "No. From v0.3 every claim records where it came from, so a reader can tell a self-declared skill from an attested one. The standard labels the evidence and never turns it into a score or a ranking.",
  },
  {
    question: "How do AI assistants use a harness?",
    answer:
      "They read the public file like anyone else. To see a protected section they make a request with a purpose, the same as a recruiting platform. The owner's own assistant can also connect over MCP as one of the owner's apps.",
  },
  {
    question: "Can students have a harness?",
    answer:
      "That's planned for v0.3.1, with stricter rules: no public file by default, never indexed, and a guardian approves requests alongside the student.",
  },
  {
    question: "How are changes to the specification decided?",
    answer: (
      <>
        Anyone can open an issue. Breaking changes need a written proposal that stays open for
        comment for at least 14 days.{" "}
        <a href={links.governance} className="text-foreground underline underline-offset-4">
          Read the governance
        </a>
        .
      </>
    ),
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="mx-auto grid gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">Questions</h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Something not covered here?{" "}
              <a href={links.issues} className="underline underline-offset-4">
                Open an issue on GitHub
              </a>
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full border-t">
            {questions.map((item, i) => (
              <AccordionItem key={item.question} value={`q-${i}`}>
                <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
