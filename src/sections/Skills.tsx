import { Sparkles } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { skillGroups } from "../data/skills";
import { cn } from "../utils/cn";
import { Tag } from "../components/Tag";

export function Skills() {
  return (
    <section id="competences" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Compétences"
          title="Une base technique solide, en consolidation continue."
          intro="Les compétences sont classées par domaine sans indice artificiel : ce qui compte, c'est la maîtrise réelle et la capacité à produire."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 0.06}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-6 shadow-panel transition-shadow",
                  group.evolving
                    ? "border-accent/30 bg-card"
                    : "border-line bg-card hover:border-primary/30"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {group.label}
                  </h3>
                  {group.evolving && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-accent"
                      title="Catégorie en cours d'élargissement"
                    >
                      <Sparkles size={11} aria-hidden="true" />
                      En cours
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs leading-relaxed text-faint">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {group.skills.map((skill) => (
                    <Tag key={skill.name}>
                      {skill.name}
                      {skill.detail ? ` · ${skill.detail}` : ""}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl rounded-xl border border-line bg-surface/60 px-5 py-4 text-[13px] leading-relaxed text-muted">
            Le domaine <span className="font-medium text-ink">Data & IA</span>{" "}
            est volontairement présenté à son niveau actuel : il s&apos;enrichira au
            fil de l&apos;alternance chez BNP Paribas Cardif, sans revendication
            d&apos;outils qui ne seraient pas réellement pratiqués.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}