import Link from "next/link";

import { cn } from "@/lib/cn";

export function Card({
  href,
  title,
  description,
  eyebrow,
  className,
}: {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05]",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
          {eyebrow}
        </div>
      ) : null}
      <div className="mt-2 text-base font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
      <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
        Read more <span aria-hidden>→</span>
      </div>
    </Link>
  );
}

