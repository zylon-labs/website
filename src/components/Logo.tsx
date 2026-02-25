import Link from "next/link";

import { cn } from "@/lib/cn";

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white",
        className,
      )}
      aria-label="Zylon Labs"
    >
      <span className="grid size-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
        <span className="text-xs">Z</span>
      </span>
      <span className="leading-none">
        Zylon <span className="text-white/70">Labs</span>
      </span>
    </Link>
  );
}

