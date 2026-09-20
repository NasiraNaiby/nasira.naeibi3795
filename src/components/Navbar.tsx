import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { cn } from "../utils/cn";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const scrolled = useScrolled(16);
  const active = useActiveSection(navItems.map((item) => item.id));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#accueil"
          onClick={close}
          aria-label="Retour à l'accueil"
          className="shrink-0"
        >
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active === item.id
                      ? "text-primary"
                      : "text-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-strong sm:inline-flex"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid size-11 place-items-center rounded-lg border border-line bg-card text-ink lg:hidden sm:size-10"
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "border-t border-line/70 bg-bg/95 backdrop-blur-md lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 pb-6 pt-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={close}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                active === item.id
                  ? "bg-primary-soft text-primary"
                  : "text-muted hover:bg-primary-soft hover:text-ink"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-3 rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-white hover:bg-primary-strong"
          >
            {site.email}
          </a>
        </Container>
      </div>
    </header>
  );
}