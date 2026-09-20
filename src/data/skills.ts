import type { SkillGroup } from "../types";

// =============================================================================
// Compétences — ajoutez librement de nouvelles entrées.
// Les groupes "evolving" sont rendus avec un ton différent.
// =============================================================================

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Front-End",
    description: "Interfaces web modernes, responsive et accessibles.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "Responsive Design" },
      { name: "Figma" },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    description: "API, logique métier et sécurité.",
    skills: [
      { name: "PHP" },
      { name: "Symfony" },
      { name: "REST APIs" },
      { name: "Authentication / JWT" },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Modélisation et exploitation de données.",
    skills: [
      { name: "SQL" },
      { name: "Merise" },
      { name: "MCD" },
      { name: "Database modeling" },
      { name: "Stored procedures" },
      { name: "Triggers" },
    ],
  },
  {
    id: "engineering",
    label: "Software Engineering",
    description: "Outils, méthodes et qualité logicielle.",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "UML" },
      { name: "Agile methodology" },
      { name: "Unit testing" },
      { name: "Functional testing" },
    ],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    description:
      "Socle en cours de consolidation dans le cadre de l'alternance.",
    skills: [
      { name: "SQL" },
      { name: "Database modeling" },
      { name: "REST APIs" },
      { name: "Stored procedures & Triggers" },
    ],
    evolving: true,
  },
  {
    id: "architecture",
    label: "Architecture",
    description: "Conception orientée sur des bases solides.",
    skills: [
      { name: "Software Architecture" },
      { name: "UML" },
      { name: "API design" },
      { name: "Database modeling" },
    ],
  },
];