import { ArrowLeftRight, ArrowRight, ChevronRight, FileText, LockKeyhole, ScanSearch } from "lucide-react";

import { HarnessViewer } from "@/components/blocks/harness-viewer";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";

const features = [
  {
    title: "One file, on your own site",
    description: "Your skills, experience and what you're looking for, in a standard format. Write it once.",
    icon: FileText,
  },
  {
    title: "Readable by any platform or agent",
    description: "Job boards, recruiters and AI agents read the public part directly. No re-typing, no scraping.",
    icon: ScanSearch,
  },
  {
    title: "Private details on your terms",
    description: "Rates, availability and contact details go only to those you approve, a step at a time.",
    icon: LockKeyhole,
  },
  {
    title: "Both sides show their hand",
    description: "Employers publish one too, so you can check who's asking before you share.",
    icon: ArrowLeftRight,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <a
            href="#agents"
            className="group bg-background/70 hover:bg-background mb-8 inline-flex max-w-full items-center gap-3 rounded-2xl border py-1 pr-3 pl-1 text-sm leading-snug shadow-sm transition-colors sm:rounded-full"
          >
            <span className="bg-primary text-primary-foreground shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
              New
            </span>
            <span className="min-w-0 py-0.5 sm:truncate">
              Built for AI agents on both sides of hiring
            </span>
            <ChevronRight className="text-muted-foreground size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="text-foreground max-w-160 text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
            Your open professional profile, for you and your agents
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-snug md:text-xl">
            The Open Hiring Harness is an open standard for describing your work in one file on
            your own website. Job platforms, recruiters and AI agents read the public part.
            Your rates, availability and contact details are shared only with those you approve.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="shadow-md" asChild>
              <a href="#how-access-works">See how it works</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent py-2 shadow-md"
              asChild
            >
              <a href={links.repo}>
                View on GitHub
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:max-w-md lg:pl-10">
          <DashedLine orientation="vertical" className="absolute top-0 left-0 max-lg:hidden" />
          <DashedLine orientation="horizontal" className="absolute top-0 lg:hidden" />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-12 md:mt-20 lg:mt-24">
        <HarnessViewer />
      </div>
    </section>
  );
};
