"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

function toSwedishPath(pathname: string) {
  if (pathname === "/") return "/sv";
  if (pathname.startsWith("/sv")) return pathname;
  return `/sv${pathname}`;
}

function toEnglishPath(pathname: string) {
  if (pathname === "/sv") return "/";
  if (pathname.startsWith("/sv/")) return pathname.replace("/sv", "");
  return pathname;
}

export function LocaleSwitch({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const isSwedish = pathname === "/sv" || pathname.startsWith("/sv/");

  const href = isSwedish ? toEnglishPath(pathname) : toSwedishPath(pathname);
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

