import { Briefcase, Mail, MapPin } from "lucide-react";
import { Container } from "../components/Container";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

const details = [
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    external: false,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: site.linkedin,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: site.github,
    external: true,
    Icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/60 bg-surface/40 py-20 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(40rem 28rem at 50% 0%, var(--primary-soft), transparent 65%)",
        }}
      />

      <Container className="text-center">
        <Reveal>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Construisons quelque chose d&apos;<span className="text-primary">utile</span> ensemble.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            Recruteurs, équipes techniques et professionnels : je suis ouverte aux
            opportunités en développement logiciel, Full-Stack, Data et IA — en
            présentiel comme en hybride. Échangeons sur la façon dont je peux
            contribuer à vos projets.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {details.map(({ label, value, href, external, Icon }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                <span className="grid size-11 place-items-center rounded-full border border-line bg-card text-primary transition-transform group-hover:-translate-y-0.5 sm:size-10">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="sr-only">{label}</span>
                <span className="hidden sm:inline">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={site.emailHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white shadow-[0_10px_24px_-10px_var(--primary)] transition-colors hover:bg-primary-strong sm:w-auto"
            >
              <Mail size={16} aria-hidden="true" />
              M&apos;envoyer un email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-card px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-card px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
            >
              <GithubIcon size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2">
              <MapPin size={13} className="text-primary" aria-hidden="true" />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2">
              <Briefcase size={13} className="text-primary" aria-hidden="true" />
              {site.workModes}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}