import { Blocks, User } from "lucide-react";

import { Card } from "@/components/ui/card";

const groups = [
  {
    title: "People",
    icon: User,
    items: [
      {
        name: "Independents",
        detail: "Freelancers, contractors and consultants who quote rates and take engagements.",
      },
      {
        name: "Job seekers",
        detail: "One record of roles you want and evidence of what you can do, readable by any platform.",
      },
      { name: "Employees", detail: "A portable record that stays yours when you change jobs." },
      {
        name: "Students, from v0.3.1",
        detail: "With stricter rules: no public file by default, never indexed, and a guardian approves alongside the student.",
      },
    ],
  },
  {
    title: "Builders",
    icon: Blocks,
    items: [
      {
        name: "Employers and recruiters",
        detail: "Publish a harness of your own, so candidates and their agents can check who you are before they share.",
      },
      {
        name: "Platforms and recruiting tools",
        detail: "Read a standard profile instead of scraping, and ask for more through one consent flow.",
      },
      {
        name: "AI assistants",
        detail: "Read the public file, request protected sections like any other requester, or connect over MCP as the owner's own app.",
      },
      {
        name: "Hosts",
        detail: "Schools, career services and employers can host harnesses for many people, one address each.",
      },
    ],
  },
];

export const Audiences = () => {
  return (
    <section id="who" className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="grid items-center gap-3 md:gap-0 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">Who it&apos;s for</h2>
          <p className="text-muted-foreground leading-snug lg:pl-10">
            v0.2 assumed every harness belonged to a freelancer. v0.3 covers job seekers and
            employees, and the hiring side too.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 lg:mt-16">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title} className="rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="bg-muted grid size-9 place-items-center rounded-full">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <ul className="divide-border mt-6 divide-y border-t">
                  {group.items.map((item) => (
                    <li key={item.name} className="py-4 text-sm leading-relaxed">
                      <span className="font-semibold">{item.name}.</span>{" "}
                      <span className="text-muted-foreground">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
