import { Logo } from "../components/Logo";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8">
        <Logo />

        <p className="text-sm text-muted">
          {site.role.replace(" • ", " · ")}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Profil GitHub"
            className="grid size-11 place-items-center rounded-lg sm:size-10 border border-line bg-card text-muted transition-colors hover:text-primary"
          >
            <GithubIcon size={18} aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn"
            className="grid size-11 place-items-center rounded-lg sm:size-10 border border-line bg-card text-muted transition-colors hover:text-primary"
          >
            <LinkedinIcon size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="font-mono text-xs text-faint">© 2026 Nasira Naeibi</p>
      </div>
    </footer>
  );
}