import { BadgeCheck, Clock, KeyRound, ShieldCheck } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { cn } from "@/lib/utils";

const Request = () => (
  <div className="bg-background rounded-2xl border p-4 shadow-sm">
    <p className="text-muted-foreground text-xs font-medium">New request</p>
    <p className="mt-1 font-semibold">ClientCo Recruiting wants your rates</p>
    <p className="text-muted-foreground mt-3 text-xs">Purpose</p>
    <p className="text-sm">Evaluate fit for a three-month data pipeline build.</p>
  </div>
);

const Verified = () => (
  <div className="bg-background rounded-2xl border p-4 shadow-sm">
    <div className="flex items-center justify-between gap-3">
      <span className="font-mono text-sm">clientco.example</span>
      <span className="bg-released text-foreground inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium">
        <BadgeCheck className="text-released-edge size-3.5" />
        Verified domain
      </span>
    </div>
    <div className="text-muted-foreground mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs">
      <span>Asks for</span>
      <span className="text-foreground font-mono">ohh:rates.read</span>
      <span>Calls itself</span>
      <span className="text-foreground">ClientCo Recruiting</span>
    </div>
  </div>
);

const Approve = () => (
  <div className="bg-background rounded-2xl border p-4 shadow-sm">
    <p className="text-sm">Share your rates with ClientCo for 30 days?</p>
    <div className="mt-3 flex flex-wrap gap-2">
      <span className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-xs font-medium">
        Approve
      </span>
      <span className="rounded-md border px-3 py-1.5 text-xs font-medium">Decline</span>
    </div>
    <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-xs">
      <ShieldCheck className="size-3.5" />
      Private sections always ask you directly
    </p>
  </div>
);

const Grant = () => (
  <div className="bg-background rounded-2xl border p-4 shadow-sm">
    <div className="flex items-center gap-2 text-sm font-medium">
      <KeyRound className="size-4" />
      ClientCo can read your rates
    </div>
    <div className="text-muted-foreground mt-3 flex items-center justify-between gap-3 text-xs">
      <span className="flex items-center gap-1.5">
        <Clock className="size-3.5" />
        Expires in 30 days
      </span>
      <span className="text-foreground rounded-md border px-2 py-1 font-medium">Revoke</span>
    </div>
  </div>
);

const steps = [
  {
    title: "A platform asks, and says why.",
    description: "A recruiter's platform requests one section of your harness, with a stated purpose.",
    visual: Request,
  },
  {
    title: "You see who is really asking.",
    description:
      "The request shows the platform's verified domain, not just the name it gives itself.",
    visual: Verified,
  },
  {
    title: "You approve, or your rules do.",
    description: "Rules you set can approve routine requests for you.",
    visual: Approve,
  },
  {
    title: "They get that section, for a limited time.",
    description:
      "The key works only for what you approved and only until it expires. Revoke it and it stops working within five minutes.",
    visual: Grant,
  },
];

export const Access = () => {
  return (
    <section id="how-access-works" className="overflow-hidden pb-28 lg:pb-32">
      <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
        How access works
      </h2>
      <p className="text-muted-foreground container mt-5 max-w-2xl text-center leading-snug text-balance">
        A harness has two parts: a public file anyone can read, and protected sections that
        are released one request at a time. In v0.3 a request works like this.
      </p>

      <div className="mt-8 md:mt-12 lg:mt-20">
        <DashedLine orientation="horizontal" className="container scale-x-105" />
        <ol className="relative container grid md:grid-cols-2">
          {steps.slice(0, 2).map((step, i) => (
            <Step key={step.title} step={step} number={i + 1} isLast={i === 1} />
          ))}
        </ol>
        <DashedLine orientation="horizontal" className="container max-w-7xl scale-x-110" />
        <ol start={3} className="relative container grid md:grid-cols-2">
          {steps.slice(2).map((step, i) => (
            <Step key={step.title} step={step} number={i + 3} isLast={i === 1} />
          ))}
        </ol>
        <DashedLine orientation="horizontal" className="container max-w-7xl scale-x-110" />
      </div>

      <p className="text-muted-foreground container mt-10 max-w-2xl text-center text-sm leading-relaxed text-balance">
        This is standard OAuth, using the UMA 2.0 grant designed for one person approving
        another&apos;s access. OHH adds the vocabulary, not a new security protocol. Every
        approval, refusal and revocation is recorded for you, and that record is never
        published.
      </p>
    </section>
  );
};

const Step = ({
  step,
  number,
  isLast,
}: {
  step: (typeof steps)[number];
  number: number;
  isLast: boolean;
}) => {
  const Visual = step.visual;
  return (
    <li className={cn("relative flex flex-col justify-between gap-6 px-0 py-6 md:px-6 md:py-8")}>
      <div className="text-balance">
        <span className="text-muted-foreground mr-2 font-mono text-sm">{number}</span>
        <h3 className="inline font-semibold">{step.title} </h3>
        <span className="text-muted-foreground"> {step.description}</span>
      </div>
      <div aria-hidden="true" className="max-w-md">
        <Visual />
      </div>
      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine orientation="horizontal" className="absolute inset-x-0 bottom-0 md:hidden" />
        </>
      )}
    </li>
  );
};
