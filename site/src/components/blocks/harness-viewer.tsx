"use client";

import { useState } from "react";

import { Check, LockKeyhole } from "lucide-react";

import { cn } from "@/lib/utils";

type View = "anyone" | "approved";

const VIEWS: { id: View; label: string }[] = [
  { id: "anyone", label: "Anyone" },
  { id: "approved", label: "ClientCo's agent" },
];

const K = ({ children }: { children: string }) => (
  <span className="text-code-key">&quot;{children}&quot;</span>
);
const S = ({ children }: { children: string }) => (
  <span className="text-code-str">&quot;{children}&quot;</span>
);
const N = ({ children }: { children: number }) => <span className="text-code-num">{children}</span>;

const Block = ({
  tone,
  tag,
  children,
}: {
  tone: "sealed" | "released";
  tag: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      "relative -mx-2.5 my-1 block rounded-r-md border-l-[3px] px-2.5 py-1",
      tone === "sealed" &&
        "bg-seal text-seal-foreground border-muted-foreground/60 [&_span]:text-inherit",
      tone === "released" &&
        "bg-released border-released-edge motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500",
    )}
  >
    <span className="font-text bg-background/80 text-foreground! mb-1 flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] leading-none font-medium md:absolute md:top-1.5 md:right-2 md:mb-0">
      {tone === "sealed" ? <LockKeyhole className="size-3" /> : <Check className="size-3" />}
      {tag}
    </span>
    {children}
  </span>
);

const NOTES: Record<View, { title: string; body: string; points: string[] }> = {
  anyone: {
    title: "What anyone can read",
    body: "This is the public file at Sam's well-known address. Rates and availability appear only as pointers to a protected address, so there's nothing private here to leak.",
    points: [
      "Identity and skills are public, by Sam's choice",
      "Rates are sealed until Sam approves a request",
      "Availability is private and asks Sam every time",
    ],
  },
  approved: {
    title: "What ClientCo's agent can read",
    body: "ClientCo's agent asked for Sam's rates for a three-month pipeline build. ClientCo's harness confirms the agent acts for it, and Sam's rules share rates with confirmed employers, so it can read them for 30 days.",
    points: [
      "Access covers the rates section only",
      "It expires after 30 days, or sooner if Sam revokes it",
      "Availability is private and still sealed",
    ],
  },
};

export const HarnessViewer = () => {
  const [view, setView] = useState<View>("anyone");
  const note = NOTES[view];

  return (
    <figure className="bg-card overflow-hidden rounded-2xl border shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 md:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div aria-hidden="true" className="flex gap-1.5">
            <span className="bg-border size-2.5 rounded-full" />
            <span className="bg-border size-2.5 rounded-full" />
            <span className="bg-border size-2.5 rounded-full" />
          </div>
          <span className="text-muted-foreground truncate font-mono text-xs">
            sam-taylor.example/.well-known/hiring-harness.json
          </span>
        </div>
        <div
          role="group"
          aria-label="Read the harness as"
          className="bg-muted inline-flex h-9 items-center rounded-lg p-[3px]"
        >
          {VIEWS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={view === option.id}
              onClick={() => setView(option.id)}
              className={cn(
                "text-muted-foreground hover:text-foreground h-full rounded-md border border-transparent px-3 text-sm font-medium whitespace-nowrap transition-colors",
                view === option.id &&
                  "bg-background text-foreground dark:border-input dark:bg-input/30 shadow-sm",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <pre
          aria-label="Simplified v0.3 harness"
          className="overflow-x-auto px-5 py-5 font-mono text-[12px] leading-[1.75] md:px-7 md:py-6 md:text-[13.5px]"
        >
          <code className="inline-block min-w-full">
            {"{\n  "}
            <K>version</K>: <S>0.3.0</S>
            {",\n  "}
            <K>profile</K>
            {": { "}
            <K>kind</K>: <S>independent</S>
            {" },\n  "}
            <K>identity</K>
            {": {\n    "}
            <K>visibility</K>: <S>public</S>
            {",\n    "}
            <K>data</K>
            {": {\n      "}
            <K>display_name</K>: <S>Sam Taylor</S>
            {",\n      "}
            <K>tagline</K>: <S>Data engineer, Python and Spark</S>
            {"\n    }\n  },\n  "}
            <K>skills</K>
            {": [{\n    "}
            <K>name</K>: <S>Apache Spark</S>
            {",\n    "}
            <K>provenance</K>
            {": {\n      "}
            <K>source</K>: <S>attested</S>
            {",\n      "}
            <K>issuer</K>: <S>Northwind Analytics</S>
            {"\n    }\n  }],"}
            {view === "anyone" ? (
              <Block tone="sealed" tag="Sealed until Sam approves">
                {"  "}
                <K>rates</K>
                {": {\n    "}
                <K>visibility</K>: <S>permissioned</S>
                {",\n    "}
                <K>href</K>: <S>https://host.example/h/sam/rates</S>
                {",\n    "}
                <K>scopes_required</K>
                {": ["}
                <S>ohh:rates.read</S>
                {"]\n  },"}
              </Block>
            ) : (
              <Block key="released" tone="released" tag="Released to ClientCo for 30 days">
                {"  "}
                <K>rates</K>
                {": {\n    "}
                <K>visibility</K>: <S>permissioned</S>
                {",\n    "}
                <K>data</K>
                {": { "}
                <K>currency</K>: <S>AUD</S>, <K>day</K>: <N>{1200}</N>
                {" }\n  },"}
              </Block>
            )}
            <Block tone="sealed" tag="Private: asks Sam every time">
              {"  "}
              <K>availability_detail</K>
              {": {\n    "}
              <K>visibility</K>: <S>private</S>
              {",\n    "}
              <K>href</K>: <S>https://host.example/h/sam/availability</S>
              {"\n  }"}
            </Block>
            {"}"}
          </code>
        </pre>

        <figcaption className="bg-muted/50 border-t p-5 md:p-7 lg:border-t-0 lg:border-l">
          <h2 className="font-text text-foreground font-semibold">{note.title}</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{note.body}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {note.points.map((point, i) => {
              const sealed = point.includes("sealed") || point.includes("private");
              const Icon = sealed ? LockKeyhole : Check;
              return (
                <li key={`${view}-${i}`} className="flex gap-2.5">
                  <Icon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                  <span>{point}</span>
                </li>
              );
            })}
          </ul>
        </figcaption>
      </div>
    </figure>
  );
};
