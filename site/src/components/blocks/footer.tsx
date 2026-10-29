import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";

const navigation = [
  { name: "How access works", href: "#how-access-works" },
  { name: "Provenance", href: "#provenance" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Questions", href: "#faq" },
];

const external = [
  { name: "GitHub", href: links.repo },
  { name: "Guidebeam", href: links.guidebeam },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 overflow-hidden pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">Help shape v0.3</h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          The proposal is open for comment. Read it, then tell us what&apos;s missing in a
          GitHub issue.
        </p>
        <div>
          <Button size="lg" className="mt-4 shadow-md" asChild>
            <a href={links.proposal}>Read the v0.3 proposal</a>
          </Button>
        </div>
      </div>

      <nav aria-label="Footer" className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="font-medium transition-opacity hover:opacity-75">
                {item.name}
              </a>
            </li>
          ))}
          {external.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <div className="text-muted-foreground max-w-2xl space-y-1 text-center text-sm text-balance">
          <p>
            The specification is open under the{" "}
            <a href={links.license} className="underline underline-offset-4">
              Apache License 2.0
            </a>{" "}
            and stewarded by{" "}
            <a href={links.guidebeam} className="underline underline-offset-4">
              Guidebeam
            </a>
            .
          </p>
          <p>
            Report security problems privately through{" "}
            <a href={links.securityReport} className="underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
      </nav>

      <div aria-hidden="true" className="text-tint mt-6 w-full select-none md:mt-10">
        <svg viewBox="0 0 1600 180" className="w-full" fill="none">
          <defs>
            <linearGradient id="footer-wordmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <text
            x="800"
            y="152"
            textAnchor="middle"
            textLength="1580"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#footer-wordmark)"
            className="font-display"
            style={{ fontSize: 174, fontWeight: 600, letterSpacing: "-0.04em" }}
          >
            Open Hiring Harness
          </text>
        </svg>
      </div>
    </footer>
  );
}
