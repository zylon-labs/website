import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-zinc-950 hover:bg-zinc-200 focus-visible:outline-white/60",
  secondary:
    "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 focus-visible:outline-white/60",
  ghost:
    "bg-transparent text-white/90 hover:bg-white/10 ring-1 ring-white/10 focus-visible:outline-white/60",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const targetProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cls} {...targetProps}>
      {children}
    </Link>
  );
}

