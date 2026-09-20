type ClassValue = string | false | null | undefined;

/** Tiny class-name combiner (no external dependency). */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}