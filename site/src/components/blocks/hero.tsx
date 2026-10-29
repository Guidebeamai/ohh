import { ArrowRight, BadgeCheck, ChevronRight, Globe, KeyRound, LockKeyhole } from "lucide-react";

import { HarnessViewer } from "@/components/blocks/harness-viewer";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";

const features = [
  {
    title: "A public file you host",
    description: "Anyone can read the public part at a well-known address on your own domain.",
    icon: Globe,
  },
  {
    title: "Sections that stay sealed",
    description: "Rates, availability and references are released one approved request at a time.",
    icon: LockKeyhole,
  },
  {
    title: "A source on every claim",
    description: "Each skill says whether you typed it, a test measured it or someone vouched for it.",
    icon: BadgeCheck,
  },
  {
    title: "Standard OAuth underneath",
    description: "UMA 2.0 for requests and approvals. No home-made security.",
    icon: KeyRound,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <a
            href={links.proposal}
            className="group bg-background/70 hover:bg-background mb-8 inline-flex max-w-full items-center gap-3 rounded-2xl border py-1 pr-3 pl-1 text-sm leading-snug shadow-sm transition-colors sm:rounded-full"
          >
            <span className="bg-primary text-primary-foreground shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
              v0.3 draft
            </span>
            <span className="min-w-0 py-0.5 sm:truncate">
              Private sections, verified requesters and a source on every claim
            </span>
            <ChevronRight className="text-muted-foreground size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="text-foreground max-w-160 text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
            One profile every hiring platform can read
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-snug md:text-xl">
            The Open Hiring Harness is an open standard for a professional profile you own: a
            file on your own website that describes your skills, work and rates. Recruiters,
            hiring platforms and AI assistants read the public part directly. Your rates,
            availability and references stay sealed until you approve a specific request.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="shadow-md" asChild>
              <a href={links.proposal}>Read the v0.3 proposal</a>
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
