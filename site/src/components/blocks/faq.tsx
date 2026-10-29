import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { links } from "@/lib/links";

const questions = [
  {
    question: "Can I keep some sections private today?",
    answer: (
      <>
        Protected sections arrive in v0.3. The current release publishes a harness as a
        single file, so for now include only what you&apos;re happy for anyone to read.{" "}
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
    question: "How do AI agents use a harness?",
    answer:
      "They read the public file like anyone else. From v0.3, an agent requests a protected section like any other requester, and must say it's an agent and who it acts for. Your own agent can approve routine requests for you, but never private sections. The early draft for v0.5 goes further: agents on both sides reveal more in stages, each unlocked by what the other side has shown.",
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
