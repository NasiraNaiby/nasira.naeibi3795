import { GraduationCap, Languages as LanguagesIcon, MapPin } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { education, languages } from "../data/education";
import { cn } from "../utils/cn";

const journey = [
  { label: "Bachelor — Info", detail: "2017" },
  { label: "Enseignement", detail: "2018 — 2022" },
  { label: "CDA Bac+3", detail: "2025" },
  { label: "Data & IA", detail: "2025 · ...", current: true },
  { label: "Bac+5 Architecture", detail: "Aujourd'hui", current: true },
];

export function Parcours() {
  return (
    <section id="parcours" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Parcours"
          title="Une progression cohérente, de la science informatique à l'architecture logicielle."
          intro="Du Bachelor en sciences informatiques à l'alternance Data & IA en passant par l'enseignement du développement web : un chemin construit pas à pas."
        />

        {/* Progression strip */}
        <Reveal>
          <nav
            aria-label="Étapes du parcours"
            className="mb-14 flex flex-wrap items-center gap-x-2 gap-y-3"
          >
            {journey.map((step, i) => (
              <span key={step.label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex flex-col rounded-lg border px-3 py-2 text-left",
                    step.current
                      ? "border-primary/40 bg-primary-soft"
                      : "border-line bg-card"
                  )}
                >
                  <span
                    className={cn(
                      "whitespace-nowrap font-mono text-xs font-medium",
                      step.current ? "text-primary" : "text-ink"
                    )}
                  >
                    {step.label}
                  </span>
                  <span className="mt-0.5 whitespace-nowrap font-mono text-[10px] text-faint">
                    {step.detail}
                  </span>
                </span>
                {i < journey.length - 1 && (
                  <span className="text-faint" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Education timeline */}
          <div>
            <div className="mb-7 flex items-center gap-2.5">
              <GraduationCap size={18} className="text-primary" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-ink">
                Diplômes & formations
              </h3>
            </div>

            <ol className="relative space-y-8 border-l border-line pl-7 sm:pl-9">
              {education.map((ed, i) => (
                <Reveal key={ed.id} delay={i * 0.05}>
                  <li className="relative">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -left-[2.35rem] top-1.5 size-2.5 rounded-full border",
                        ed.current
                          ? "border-primary bg-primary ring-4 ring-primary/20"
                          : "-left-[2.35rem] top-1.5 size-2.5 rounded-full border border-line bg-card"
                      )}
                    />
                    <div
                      className={cn(
                        "rounded-xl border p-5",
                        ed.current
                          ? "border-primary/30 bg-card shadow-panel"
                          : "border-line bg-card"
                      )}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {ed.current && (
                          <span className="rounded-md bg-primary-soft px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-primary">
                            En cours
                          </span>
                        )}
                        <span className="ml-auto font-mono text-xs text-faint">
                          {ed.period}
                        </span>
                      </div>
                      <h4 className="mt-2.5 font-display text-base font-semibold text-ink">
                        {ed.degree}
                      </h4>
                      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                        <span className="font-medium text-primary">{ed.school}</span>
                        <span aria-hidden="true">·</span>
                        <span>{ed.format}</span>
                        {ed.location && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={12} aria-hidden="true" />
                              {ed.location}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Languages */}
          <div>
            <div className="mb-7 flex items-center gap-2.5">
              <LanguagesIcon size={18} className="text-primary" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-ink">Langues</h3>
            </div>

            <Reveal>
              <div className="rounded-2xl border border-line bg-card p-6 shadow-panel">
                <ul className="divide-y divide-line">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="font-display text-base font-semibold text-ink">
                          {lang.name}
                        </p>
                        <p className="mt-0.5 text-sm text-muted">{lang.note}</p>
                      </div>
                      <span className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[11px] font-medium text-muted">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 rounded-xl border border-line bg-surface/60 p-5 text-[13px] leading-relaxed text-muted">
                Mon parcours en sciences informatiques a débuté avec un{" "}
                <span className="font-medium text-ink">Bachelor en sciences informatiques</span>,{" "}
                suivi de plusieurs années consacrées à{" "}
                <span className="font-medium text-ink">l&apos;enseignement du développement web</span>.
                Après une reconversion certifiée (CDA Bac+3), je poursuis aujourd&apos;hui
                vers l&apos;architecture logicielle et la donnée.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}