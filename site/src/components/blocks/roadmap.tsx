import { DashedLine } from "@/components/dashed-line";
import { Card } from "@/components/ui/card";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";

const stages = [
  {
    version: "v0.2",
    state: "Current",
    title: "The format and how to find it",
    description:
      "Schema, discovery at a well-known address, and a consent model on paper. Can't keep sections private.",
  },
  {
    version: "v0.3",
    state: "In design",
    title: "Protected access, provenance and profile kinds",
    description:
      "Public and protected parts, access through OAuth, a source on every claim, and room for job seekers and employees.",
    link: { label: "Read the proposal", href: links.proposal },
  },
  {
    version: "v0.3.1",
    state: "Planned",
    title: "Students and guardian consent",
    description:
      "Harnesses for people in school, with no public file by default and approval from a guardian as well as the student.",
  },
  {
    version: "v0.4",
    state: "Planned",
    title: "Claims anyone can check",
    description:
      "References and results issued as W3C Verifiable Credentials, building on Open Badges 3.0, so an attested claim can be verified rather than trusted.",
  },
  {
    version: "Later",
    state: "Proposal",
    title: "AI agents as hireable entities",
    description:
      "Agents that work on someone's behalf, or offer services themselves, under the same consent rules.",
    link: { label: "Read the proposal", href: links.agentProposal },
  },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-28 lg:py-32">
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">Roadmap</h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Breaking changes are proposed in the open and stay open for comment for at least
            14 days.
          </p>
        </div>

        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-16">
          <ol>
            {stages.map((stage, i) => (
              <li key={stage.version} className="relative">
                <div className="grid gap-2 p-6 md:grid-cols-[110px_minmax(0,1fr)_auto] md:gap-8 md:px-8">
                  <span className="font-mono text-sm font-medium md:pt-0.5">{stage.version}</span>
                  <div>
                    <h3 className="font-semibold">{stage.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {stage.description}{" "}
                      {stage.link && (
                        <a
                          href={stage.link.href}
                          className="text-foreground font-medium underline underline-offset-4"
                        >
                          {stage.link.label}
                        </a>
                      )}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "h-fit w-fit rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap max-md:order-first",
                      i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {stage.state}
                  </span>
                </div>
                {i < stages.length - 1 && <DashedLine className="absolute inset-x-0 bottom-0" />}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </section>
  );
};
