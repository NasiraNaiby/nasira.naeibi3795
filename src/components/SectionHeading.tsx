import { cn } from "../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

/** Section header : eyebrow mono + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-px w-16 bg-primary",
          align === "center" && "mx-auto"
        )}
        aria-hidden="true"
      />
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[15px] leading-relaxed text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}