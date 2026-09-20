import { Code2, ExternalLink, ShoppingCart, BarChart3, Boxes } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Tag } from "../components/Tag";
import { projects } from "../data/projects";
import { cn } from "../utils/cn";

const featureIcons = [Boxes, ShoppingCart, BarChart3];

/** Decorative, non-functioning preview of the built ecosystem. */
function AppPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-panel"
      aria-hidden="true"
    >
      {/* Window bar */}
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#f87171]" />
        <span className="size-2.5 rounded-full bg-[#fbbf24]" />
        <span className="size-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-2 font-mono text-[10px] text-faint">
          village-green · e-commerce
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3.5 py-2.5">
          <span className="h-2 w-24 rounded-full bg-line" />
          <span className="flex gap-2">
            <span className="h-2 w-12 rounded-full bg-primary/40" />
            <span className="h-2 w-12 rounded-full bg-primary/25" />
          </span>
        </div>

        <div className="rounded-xl border border-line bg-card p-3.5">
          <span className="mb-2.5 block h-2.5 w-3/5 rounded-full bg-line" />
          <span className="block h-2 w-4/5 rounded-full bg-line/70" />
          <div className="mt-3 flex gap-2">
            <span className="h-6 w-20 rounded-md bg-primary/15" />
            <span className="h-6 w-20 rounded-md bg-primary/10" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="rounded-lg border border-line bg-card p-2.5">
              <span className="mb-2 block aspect-square rounded-md bg-primary/10" />
              <span className="block h-1.5 w-4/5 rounded-full bg-line/80" />
              <span className="mt-1 block h-1.5 w-3/5 rounded-full bg-primary/30" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
    </div>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section
      id="projets"
      className="border-y border-line/60 bg-surface/40 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projets"
          title="Une réalisation complète, de la donnée à l'interface."
          intro="Projet de fin de formation : un écosystème applicatif conçu, modélisé et développé de bout en bout avec Symfony et SQL."
        />

        {featured && (
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-line bg-card shadow-panel">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Content */}
                <div className="p-6 sm:p-9 lg:p-11">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-md border border-line bg-card px-2.5 py-1 font-mono text-[11px] font-medium text-muted">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {featured.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-primary">
                    {featured.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {featured.description}
                  </p>

                  <h4 className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.18em] text-faint">
                    Fonctionnalités principales
                  </h4>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {featured.features.map((f, i) => {
                      const Icon = featureIcons[i % featureIcons.length];
                      return (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[13px] leading-snug text-muted"
                        >
                          <Icon
                            size={14}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {f}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                    {featured.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {featured.repoUrl && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={featured.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
                      >
                        <Code2 size={16} aria-hidden="true" />
                        Voir le code
                      </a>
                      <a
                        href={featured.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-primary"
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                        Dépôt GitHub
                      </a>
                    </div>
                  )}

                  <p className="mt-6 flex items-start gap-2 font-mono text-xs text-faint">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                    Démo en ligne non disponible : l&apos;application est documentée dans le dépôt.
                  </p>
                </div>

                {/* Preview */}
                <div className={cn("relative border-t border-line bg-surface/50 p-6 sm:p-9 lg:border-l lg:border-t-0")}>
                  <div className="mx-auto max-w-sm">
                    <AppPreview />
                    <p className="mt-3 text-center font-mono text-[11px] text-faint">
                      Aperçu d&apos;illustration de l&apos;écosystème développé
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-dashed border-line px-5 py-4">
            <span
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft font-mono text-sm text-primary"
              aria-hidden="true"
            >
              +
            </span>
            <p className="text-[13px] leading-relaxed text-muted">
              Les prochaines réalisations — notamment autour de la{" "}
              <span className="font-medium text-ink">Data & IA</span> — seront
              ajoutées ici dès leur validation.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}