"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { Logo } from "@/components/Logo";
import { StrategyCallButton } from "@/components/StrategyCallButton";

function stripLocale(pathname: string) {
  if (pathname === "/sv") return "/";
  if (pathname.startsWith("/sv/")) return pathname.replace("/sv", "");
  return pathname;
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const isSwedish = pathname === "/sv" || pathname.startsWith("/sv/");
  const base = isSwedish ? "/sv" : "";

  const nav = isSwedish
    ? [
        { href: `${base}/tjanster`, label: "Tjänster" },
        { href: `${base}/case`, label: "Case" },
        { href: `${base}/insikter`, label: "Insikter" },
        { href: `${base}/kontakt`, label: "Kontakt" },
      ]
    : [
        { href: `${base}/services`, label: "Services" },
        { href: `${base}/case-studies`, label: "Case studies" },
        { href: `${base}/insights`, label: "Insights" },
        { href: `${base}/contact`, label: "Contact" },
      ];

  const homeHref = isSwedish ? "/sv" : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Logo href={homeHref} />
          <div className="hidden items-center gap-1 text-xs text-white/60 lg:flex">
            <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              {site.tagline}
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const current = stripLocale(pathname) === stripLocale(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white",
                  current && "bg-white/5 text-white ring-1 ring-white/10",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch />
          <StrategyCallButton
            size="sm"
            className="hidden sm:flex"
          />
        </div>
      </div>
    </header>
  );
}

