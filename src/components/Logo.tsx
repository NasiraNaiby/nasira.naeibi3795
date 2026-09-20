import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  /** Shows the wordmark next to the mark. */
  withWordmark?: boolean;
}

/** Minimal "NN" monogram mark, optionally with the wordmark. */
export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-lg border border-line bg-card font-mono text-sm font-medium text-primary shadow-panel"
      >
        NN
      </span>
      {withWordmark && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          Nasira<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}