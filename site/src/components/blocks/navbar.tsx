"use client";

import { useState } from "react";

import { Github } from "lucide-react";

import { LogoMark } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "How access works", href: "#how-access-works" },
  { label: "Provenance", href: "#provenance" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Read the spec", href: "#read-the-spec" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(92%,780px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-3">
        <a href="#main" className="flex shrink-0 items-center gap-2">
          <LogoMark />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Open Hiring Harness
          </span>
        </a>

        <nav aria-label="Main" className="max-lg:hidden">
          <ul className="flex items-center gap-5">
            {ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-75"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={links.repo}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>

          <button
            type="button"
            className="text-muted-foreground relative flex size-8 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-foreground/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
