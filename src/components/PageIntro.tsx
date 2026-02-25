import { cn } from "@/lib/cn";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-base leading-7 text-white/70">{description}</p>
      ) : null}
    </div>
  );
}

