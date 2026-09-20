import { ArrowUpRight, Lock } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Tag } from "../components/Tag";
import { experiences } from "../data/experience";
import type { ExperienceItem } from "../types";
import { cn } from "../utils/cn";

const kindLabel: Record<ExperienceItem["kind"], string> = {
  alternance: "Alternance",
  stage: "Stage",
  experience: "Expérience",
  formation: "Pédagogie",
};

const kindTone: Record<ExperienceItem["kind"], string> = {
  alternance: "border-primary/30 bg-primary-soft text-primary",
  stage: "border-line bg-card text-muted",
  experience: "border-line bg-card text-muted",
  formation: "border-accent/30 bg-accent/10 text-accent",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-line/60 bg-surface/40 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Expérience"
          title="Un parcours qui combine production logicielle et transmission."
          intro="Du développement Full-Stack en environnement professionnel à l'enseignement du développement web, chaque étape a construit ma posture d'ingénieure."
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.05}>
              <div className="grid grid-cols-[1.75rem_1fr] gap-4 sm:gap-5">
                {/* Timeline marker */}
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1.5 grid size-[1.35rem] place-items-center rounded-full border",
                      exp.current
                        ? "border-primary bg-primary shadow-[0_0_0_4px_var(--primary-soft)]"
                        : "border-line bg-card"
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        exp.current ? "bg-bg" : "bg-faint"
                      )}
                    />
                  </span>
                  {i < experiences.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-[1.7rem] h-[calc(100%-1.1rem)] w-px -translate-x-1/2 bg-line"
                    />
                  )}
                </div>

                {/* Card */}
                <article
                  className={cn(
                    "mb-8 rounded-2xl border p-5 shadow-panel transition-shadow sm:p-7",
                    exp.current
                      ? "border-primary/25 bg-card"
                      : "border-line bg-card hover:border-primary/30"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={cn(
                        "rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium",
                        kindTone[exp.kind]
                      )}
                    >
                      {kindLabel[exp.kind]}
                    </span>
                    {exp.current && (
                      <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
                        Actuellement
                      </span>
                    )}
                    <span className="ml-auto font-mono text-xs text-faint">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {exp.role}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                    <span className="font-medium text-primary">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {exp.summary}
                  </p>

                  {exp.responsibilities.length > 0 && (
                    <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-[13px] leading-snug text-muted"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                      {exp.technologies.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  )}

                  {exp.notes && exp.notes.length > 0 && (
                    <p className="mt-5 flex items-start gap-2 rounded-lg bg-primary-soft/60 px-3.5 py-3 text-xs leading-relaxed text-muted">
                      <Lock size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                      Détails de la mission en cours de finalisation — cette zone
                      sera mise à jour avec les informations validées.
                    </p>
                  )}
                </article>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
            >
              Discutons de vos opportunités
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}