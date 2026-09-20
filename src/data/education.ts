import type { EducationItem, LanguageItem } from "../types";

// =============================================================================
// Parcours — diplômes, formations et langues.
// =============================================================================

export const education: EducationItem[] = [
  {
    id: "ada-tech-school",
    school: "Ada Tech School",
    degree: "Expert·e en Architecture et Développement Logiciel",
    format: "Bac+5 — Alternance",
    period: "2025 — aujourd'hui",
    current: true,
    location: "Paris",
  },
  {
    id: "afpa-amiens",
    school: "AFPA Amiens",
    degree: "Concepteur Développeur d'Applications",
    format: "Bac+3",
    period: "2025",
    location: "Amiens",
  },
  {
    id: "sistech-paris",
    school: "Sistech — Paris",
    degree: "Springboard — Reconversion Professionnelle",
    period: "2024",
    location: "Paris",
  },
  {
    id: "universite-kateb",
    school: "Université Kateb",
    degree: "Bachelor en Sciences Informatiques",
    period: "2017",
    location: "Afghanistan",
  },
];

export const languages: LanguageItem[] = [
  {
    name: "Persan",
    level: "Langue maternelle",
    note: "Langue maternelle — utilisée au quotidien",
  },
  {
    name: "Français",
    level: "B1",
    note: "Langue de travail et de formation",
  },
  {
    name: "Anglais",
    level: "B1",
    note: "Lecture de documentation technique",
  },
];