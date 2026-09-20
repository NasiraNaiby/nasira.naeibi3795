import { useEffect, useState } from "react";

type ScrollBehavior = "auto" | "smooth";

function reducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useScrollBehavior(): ScrollBehavior {
  return reducedMotion() ? "auto" : "smooth";
}

/** Tracks which section is currently in view (for active nav highlighting). */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|")]);

  return active;
}