import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import photoPng from "../assets/photoo.png";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(38rem 30rem at 85% 8%, var(--primary-soft), transparent 60%), radial-gradient(30rem 24rem at 0% 95%, var(--primary-soft), transparent 55%)",
        }}
      />
      <div className="flex min-h-[calc(100vh-4rem)] items-center">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-xs text-muted shadow-panel">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Développeuse Full-Stack • Data & IA
              </p>

              <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Je conçois des applications{" "}
                <span className="text-primary">robustes, utiles</span> et centrées
                sur l&apos;<span className="text-primary">expérience utilisateur</span>.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Alternante Développeuse Data & IA chez BNP Paribas Cardif et
                étudiante en Bac+5 Expert·e en Architecture et Développement
                Logiciel à Ada Tech School. Mon parcours combine développement
                Full-Stack, données, conception logicielle et transmission des
                connaissances.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#projets" variant="primary">
                  Découvrir mes projets
                </ButtonLink>
                <ButtonLink href="#contact">Me contacter</ButtonLink>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil GitHub"
                  className="grid size-11 place-items-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-primary/50 hover:text-primary sm:size-10"
                >
                  <GithubIcon size={19} aria-hidden="true" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Profil LinkedIn"
                  className="grid size-11 place-items-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-primary/50 hover:text-primary sm:size-10"
                >
                  <LinkedinIcon size={19} aria-hidden="true" />
                </a>
              </div>

              <a
                href="#parcours"
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-faint transition-colors hover:text-primary"
              >
                <ArrowDown size={14} aria-hidden="true" />
                Voir mon parcours
              </a>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative">
                {/* Photo card */}
                <div className="relative mx-auto aspect-square w-[min(72vw,17rem)] sm:w-72 lg:w-full lg:max-w-[22rem] overflow-hidden rounded-3xl border border-line bg-surface shadow-panel">
                  <img
                    src={photoPng}
                    alt="Illustration de Nasira Naeibi, développeuse full-stack"
                    width={500}
                    height={500}
                    loading="eager"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>

                {/* Code card */}
                <div
                  className="absolute left-0 top-1/2 hidden -translate-y-[85%] -translate-x-6 rotate-[-2deg] rounded-2xl border border-line bg-card p-4 shadow-panel sm:block"
                  style={{ width: "15rem" }}
                >
                  <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-[#f87171]" />
                    <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                    <span className="size-2.5 rounded-full bg-[#34d399]" />
                  </div>
                  <pre className="overflow-hidden font-mono text-[11px] leading-relaxed text-muted">
                    <code>
                      {`const stack = [
  "Full-Stack",
  "Data",
  "IA",
];`}
                    </code>
                  </pre>
                </div>

                {/* Role badge */}
                <div className="absolute -right-3 bottom-6 flex items-center gap-2.5 rounded-xl border border-line bg-card px-3.5 py-2.5 shadow-panel sm:-right-8">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  <div className="text-xs leading-tight">
                    <p className="font-medium text-ink">Alternance Data & IA</p>
                    <p className="text-faint">BNP Paribas Cardif</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}