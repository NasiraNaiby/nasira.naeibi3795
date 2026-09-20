import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Small tech tag. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-card px-2.5 py-1 font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}