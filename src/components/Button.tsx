import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 w-auto select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_8px_20px_-8px_var(--primary)] hover:bg-primary-strong hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-line bg-card text-ink hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 shadow-panel",
  ghost: "text-muted hover:text-primary hover:bg-primary-soft",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = "secondary", className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({ variant = "secondary", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}