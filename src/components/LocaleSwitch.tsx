"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

type Locale = "en" | "sv";

const EN_TO_SV_SEGMENT: Record<string, string> = {
  services: "tjanster",
  contact: "kontakt",
  insights: "insikter",
  "case-studies": "case",
  solutions: "losningar",
};

const SV_TO_EN_SEGMENT: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_SV_SEGMENT).map(([en, sv]) => [sv, en]),
) as Record<string, string>;

const EN_TO_SV_SOLUTION_SLUG: Record<string, string> = {
  "api-development-integrations": "api",
  "aws-cloudflare-consulting": "aws-cloudflare",
  "ai-automation-tools": "ai-automation",
  "custom-crm-development": "skraddarsytt-crm",
  "platform-maintenance-retainer": "forvaltning",
};

const SV_TO_EN_SOLUTION_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_SV_SOLUTION_SLUG).map(([en, sv]) => [sv, en]),
) as Record<string, string>;

function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  if (!pathname.startsWith("/")) return `/${pathname}`;
  return pathname;
}

function stripSvPrefix(pathname: string): string {
  if (pathname === "/sv") return "/";
  if (pathname.startsWith("/sv/")) return pathname.slice(3);
  return pathname;
}

function toLocalePath(pathname: string, target: Locale): string {
  const raw = normalizePathname(pathname);
  const current: Locale = raw === "/sv" || raw.startsWith("/sv/") ? "sv" : "en";
  if (current === target) return raw;

  const base = current === "sv" ? stripSvPrefix(raw) : raw;
  if (base === "/") return target === "sv" ? "/sv" : "/";

  const segments = base.split("/").filter(Boolean);
  const first = segments[0] ?? "";

  if (current === "en" && target === "sv") {
    const mappedFirst = EN_TO_SV_SEGMENT[first] ?? null;
    if (!mappedFirst) return "/sv";

    if (first === "solutions" && segments.length >= 2) {
      const slug = segments[1]!;
      const mappedSlug = EN_TO_SV_SOLUTION_SLUG[slug] ?? null;
      if (!mappedSlug) return "/sv/losningar";
      segments[0] = mappedFirst;
      segments[1] = mappedSlug;
    } else {
      segments[0] = mappedFirst;
    }

    return `/sv/${segments.join("/")}`;
  }

  if (current === "sv" && target === "en") {
    const mappedFirst = SV_TO_EN_SEGMENT[first] ?? null;
    if (!mappedFirst) return "/";

    if (first === "losningar" && segments.length >= 2) {
      const slug = segments[1]!;
      const mappedSlug = SV_TO_EN_SOLUTION_SLUG[slug] ?? null;
      if (!mappedSlug) return "/solutions";
      segments[0] = mappedFirst;
      segments[1] = mappedSlug;
    } else {
      segments[0] = mappedFirst;
    }

    return `/${segments.join("/")}`;
  }

  return target === "sv" ? "/sv" : "/";
}

export function LocaleSwitch({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const isSwedish = pathname === "/sv" || pathname.startsWith("/sv/");

  const href = isSwedish ? toLocalePath(pathname, "en") : toLocalePath(pathname, "sv");
  const label = isSwedish ? "EN" : "SV";
  const ariaLabel = isSwedish ? "Switch to English" : "Byt till svenska";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full bg-white/5 px-3 text-xs font-semibold tracking-wide text-white/85 ring-1 ring-white/10 transition-colors hover:bg-white/10",
        className,
      )}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
}

