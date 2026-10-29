import { Ban, Code, Lock, Scale, Unplug, UserCheck } from "lucide-react";

const principles = [
  {
    title: "You're the source of truth",
    description: "Platforms read your harness under your rules. They don't own it.",
    icon: UserCheck,
  },
  {
    title: "Private means private",
    description: "Nothing leaves the protected part without an approved, time-limited, revocable request.",
    icon: Lock,
  },
  {
    title: "Evidence, not scores",
    description: "The standard says where a claim came from. It never ranks people.",
    icon: Scale,
  },
  {
    title: "Existing standards first",
    description: "OAuth for access, Verifiable Credentials for proof, standard occupation codes for skills.",
    icon: Code,
  },
  {
    title: "Anyone can implement it",
    description: "Nothing in the specification needs Guidebeam's software or accounts.",
    icon: Unplug,
  },
  {
    title: "People aren't inventory",
    description: "No engagement tricks, no attention capture, no selling access to people.",
    icon: Ban,
  },
];

export const Principles = () => {
  return (
    <section id="principles" className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <h2 className="text-center text-2xl tracking-tight md:text-4xl lg:text-5xl">Principles</h2>
        <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-12 lg:mt-16 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <li key={principle.title} className="flex gap-4">
                <span className="bg-background grid size-10 shrink-0 place-items-center rounded-xl border shadow-sm">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="font-semibold">{principle.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
