import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

/** Accessible theme toggle (sun/moon). */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="grid size-11 place-items-center rounded-lg border border-line bg-card text-muted transition-colors hover:text-primary sm:size-10"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}