import { HelpCircle } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const RebuiltProfiles = () => (
  <div className="relative h-full">
    {["Job board profile", "Marketplace profile", "Recruiter's record"].map((label, i) => (
      <div
        key={label}
        className="bg-background absolute w-[78%] rounded-xl border p-3 shadow-sm"
        style={{ top: `${12 + i * 26}%`, left: `${4 + i * 9}%` }}
      >
        <p className="text-muted-foreground text-xs font-medium">{label}</p>
        <div className="mt-2 space-y-1.5">
          <div className="bg-muted h-1.5 w-4/5 rounded-full" />
          <div className="bg-muted h-1.5 w-3/5 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

const UntrackedReads = () => (
  <div className="flex h-full flex-col justify-center gap-2.5 px-2">
    <div className="bg-background rounded-xl border p-3 shadow-sm">
      <p className="text-muted-foreground text-xs">Day rate</p>
      <p className="font-display text-lg font-semibold">AUD 1,200</p>
    </div>
    {["Read by an unknown app", "Copied into a spreadsheet", "Sent to another agency"].map(
      (event) => (
        <div
          key={event}
          className="text-muted-foreground flex items-center gap-2 rounded-lg border border-dashed px-3 py-1.5 text-xs"
        >
          <HelpCircle className="size-3.5 shrink-0" />
          {event}
        </div>
      ),
    )}
  </div>
);

const IdenticalClaims = () => (
  <div className="flex h-full flex-col justify-center gap-2.5 px-2">
    {["Job board", "CV upload", "Recruiter notes"].map((place) => (
      <div
        key={place}
        className="bg-background flex items-center justify-between gap-3 rounded-xl border p-3 shadow-sm"
      >
        <span className="text-sm font-medium">Expert in Spark</span>
        <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
          <HelpCircle className="size-3" />
          Source unknown
        </span>
      </div>
    ))}
  </div>
);

const items = [
  {
    title: "You rebuild yourself everywhere",
    description:
      "Every marketplace, job board and recruiting tool wants the same profile in its own format, and keeps your reputation when you leave.",
    visual: RebuiltProfiles,
  },
  {
    title: "Private details travel without you",
    description:
      "Once rates, references or availability are in a profile, you lose track of who has read them and why.",
    visual: UntrackedReads,
  },
  {
    title: "Claims all look the same",
    description:
      "“Expert in Spark” reads the same whoever said it. With AI writing every CV, where a claim came from is the whole signal.",
    visual: IdenticalClaims,
  },
];

export const Why = () => {
  return (
    <section id="why" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            Publish once. Share on approval.
          </span>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">Why it exists</h2>
          <p className="text-muted-foreground leading-snug">
            Your working life is scattered across platforms that own it, and the parts that
            matter most are either locked away or leaked.
          </p>
        </div>

        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => {
              const Visual = item.visual;
              return (
                <div key={item.title} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-4 md:p-6">
                    <div
                      aria-hidden="true"
                      className="bg-muted/60 relative aspect-[1.28/1] overflow-hidden rounded-2xl p-3"
                    >
                      <Visual />
                    </div>
                    <h3 className="font-display mt-5 text-2xl leading-tight font-bold tracking-tight md:mt-6">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {i < items.length - 1 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < items.length - 1 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
