import { Bot, UserCheck } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Card } from "@/components/ui/card";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";

const stages = [
  {
    name: "Who are you?",
    person: "Name and headline skills",
    organisation: "Verified domain and business registration",
  },
  {
    name: "What are you after?",
    person: "Experience, proof of work, redacted references",
    organisation: "The opening and how hiring works",
  },
  {
    name: "Is it worth talking?",
    person: "Rate band and rough availability",
    organisation: "Pay band and the team",
  },
  {
    name: "Let's talk",
    person: "Exact rates, contact details, full references",
    organisation: "Hiring manager and interview slots",
    human: true,
  },
];

const Side = ({ label, icon: Icon }: { label: string; icon: typeof Bot }) => (
  <div className="flex items-center gap-2 text-sm font-semibold">
    <span className="bg-muted grid size-7 place-items-center rounded-full">
      <Icon className="size-3.5" />
    </span>
    {label}
  </div>
);

export const Agents = () => {
  return (
    <section id="agents" className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="grid items-center gap-3 md:gap-0 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Agents on both sides of hiring
          </h2>
          <p className="text-muted-foreground leading-snug lg:pl-10">
            Candidates already use agents that apply, and employers use agents that source.
            With a harness on each side, they can get to know each other the way people do: a
            little at a time, each step matched by the other side.
          </p>
        </div>

        <Card className="mt-8 overflow-hidden rounded-3xl md:mt-12 lg:mt-16">
          <div className="bg-muted/50 hidden grid-cols-[minmax(0,1fr)_200px_minmax(0,1fr)] items-center gap-6 border-b px-8 py-4 md:grid">
            <Side label="Sam's agent shares" icon={Bot} />
            <span className="text-muted-foreground text-center text-sm">Stage</span>
            <div className="flex justify-end">
              <Side label="ClientCo's agent shares" icon={Bot} />
            </div>
          </div>
          <ol>
            {stages.map((stage, i) => (
              <li key={stage.name} className="relative">
                <div className="grid gap-3 px-6 py-5 md:grid-cols-[minmax(0,1fr)_200px_minmax(0,1fr)] md:items-center md:gap-6 md:px-8">
                  <p className="text-sm max-md:order-2">
                    <span className="text-muted-foreground font-medium md:hidden">Sam: </span>
                    {stage.person}
                  </p>
                  <div className="flex flex-col items-start gap-1.5 md:items-center md:text-center max-md:order-1">
                    <span className="text-muted-foreground font-mono text-xs">{i + 1}</span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-sm font-medium",
                        stage.human ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      {stage.name}
                    </span>
                    {stage.human && (
                      <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        <UserCheck className="size-3.5" />
                        Each person approves
                      </span>
                    )}
                  </div>
                  <p className="text-sm max-md:order-3 md:text-right">
                    <span className="text-muted-foreground font-medium md:hidden">ClientCo: </span>
                    {stage.organisation}
                  </p>
                </div>
                {i < stages.length - 1 && <DashedLine className="absolute inset-x-0 bottom-0" />}
              </li>
            ))}
          </ol>
        </Card>

        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-balance">
          Each stage opens only when the other side has shown enough of its own. If the bands
          don&apos;t overlap, either agent ends the exchange and neither side has seen the
          other&apos;s exact figures. This is an early draft for v0.5; v0.3 lays the
          foundations.{" "}
          <a href={links.agentTrust} className="text-foreground underline underline-offset-4">
            Read the draft
          </a>
        </p>
      </div>
    </section>
  );
};
