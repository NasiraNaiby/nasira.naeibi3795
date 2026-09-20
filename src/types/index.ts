export type ExperienceType = "alternance" | "stage" | "experience" | "formation";

export interface ExperienceItem {
  /** Stable id used for anchor highlights and keys. */
  id: string;
  company: string;
  role: string;
  kind: ExperienceType;
  period: string;
  location: string;
  /** Concise factual summary shown on the site. */
  summary: string;
  responsibilities: string[];
  technologies?: string[];
  /** "current" items get a visual badge and sit at the top of the timeline. */
  current?: boolean;
  /** Free-form internal notes (never rendered on the site). */
  notes?: string[];
}

export type ProjectStatus = "Terminé" | "En cours";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  repoUrl?: string;
  demoUrl?: string;
  /** Optional local asset (imported) or URL used by the decorative preview. */
  image?: string;
  category: string;
  featured: boolean;
  status: ProjectStatus;
}

export interface SkillEntry {
  name: string;
  /** Optional clarifying detail (e.g. "JWT", "Merise / MCD"). */
  detail?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  /** Short contextual line under the group title. */
  description: string;
  skills: SkillEntry[];
  /** When true, the group is rendered with a different visual tone. */
  evolving?: boolean;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  /** e.g. "Alternance", "Formation professionnelle". */
  format?: string;
  period: string;
  current?: boolean;
  location?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  note: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}