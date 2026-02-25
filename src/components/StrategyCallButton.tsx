import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

export function StrategyCallButton({
  className,
  fullWidth,
  showSupportingText,
  size,
}: {
  className?: string;
  fullWidth?: boolean;
  showSupportingText?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <div className={cn("flex flex-col", fullWidth ? "w-full" : "w-fit", className)}>
      <Button
        href={site.calendly}
        external
        size={size}
        className={cn(
          "font-semibold shadow-sm shadow-white/10",
          fullWidth && "w-full",
        )}
      >
        {site.primaryCtaLabel}
      </Button>
      {showSupportingText ? (
        <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
          {site.primaryCtaSupportingText}
        </p>
      ) : null}
    </div>
  );
}

