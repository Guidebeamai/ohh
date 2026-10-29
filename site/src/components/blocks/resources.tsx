import { ArrowUpRight } from "lucide-react";

import { links } from "@/lib/links";

const resources = [
  { title: "v0.3 proposal", description: "Protected access, provenance and profile kinds", href: links.proposal },
  {
    title: "v0.2 JSON Schema",
    description: "The current release. It can't keep sections private yet",
    href: links.schema,
  },
  { title: "v0.2 example harness", description: "A complete, valid harness", href: links.example },
  { title: "README", description: "Concepts, discovery and design principles", href: links.readme },
  { title: "MCP interface", description: "How AI assistants connect", href: links.mcp },
  { title: "Governance", description: "How changes are decided", href: links.governance },
  { title: "Two-way trust draft", description: "Agents on both sides, revealing more in stages", href: links.agentTrust },
  { title: "llms.txt", description: "A summary for AI tools", href: links.llms },
];

export const Resources = () => {
  return (
    <section id="read-the-spec" className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <h2 className="text-center text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Read the spec
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:mt-16 lg:grid-cols-4">
          {resources.map((resource) => (
            <li key={resource.title}>
              <a
                href={resource.href}
                className="group bg-background hover:border-foreground/20 flex h-full flex-col justify-between gap-6 rounded-2xl border p-5 shadow-sm transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-snug">
                    {resource.description}
                  </p>
                </div>
                <span className="w-fit rounded-full border p-1.5">
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
