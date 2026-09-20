import { Reveal } from "../components/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

const highlights = [
  "Développement Full-Stack",
  "Données & Intelligence Artificielle",
  "Architecture logicielle",
  "Pédagogie & transmission",
];

export function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="À propos"
          title="Un parcours orienté vers l'impact, la rigueur et la transmission."
          intro="Je suis développeuse logiciel. Après un Bac+3 CDA, j'ai rejoint Ada Tech School pour un Bac+5 Expert·e en Architecture et Développement Logiciel, en alternance chez BNP Paribas Cardif, où je développe mes compétences en Data et Intelligence Artificielle."
        />

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                Mon expérience professionnelle couvre le développement Full-Stack
                avec <span className="font-medium text-ink">Symfony</span> et{" "}
                <span className="font-medium text-ink">React</span>, la conception
                de bases de données, l&apos;intégration d&apos;API REST et la mise en
                place d&apos;authentification sécurisée. Avant le développement
                applicatif, j&apos;ai enseigné le développement web et accompagné des
                apprenants dans la construction de leurs projets.
              </p>
              <p>
                Cette expérience d&apos;enseignante — 4 ans à transmettre HTML, CSS et
                JavaScript — a forgé ma communication, ma pédagogie, ma
                collaboration et ma capacité à résoudre des problèmes techniques.
                C&apos;est aujourd&apos;hui un atout : expliquer, documenter et partager
                fait partie intégrante de la manière dont je conçois le métier
                d&apos;ingénieure.
              </p>
              <p>
                Je cherche aujourd&apos;hui à allier cette culture du concret à une
                vision plus large de l&apos;ingénierie logicielle, de la donnée et de
                l&apos;architecture des systèmes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-card p-6 shadow-panel sm:p-7">
              <h3 className="font-display text-sm font-semibold text-ink">
                Domaines d&apos;intérêt
              </h3>
              <ul className="mt-5 space-y-4">
                {highlights.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-primary-soft font-mono text-[11px] font-medium text-primary"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}