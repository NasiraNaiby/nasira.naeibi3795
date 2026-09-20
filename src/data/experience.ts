import type { ExperienceItem } from "../types";

// =============================================================================
// Expérience — éditez ce fichier pour mettre à jour la section Expérience.
//
// BNP PARIBAS CARDIF
// TODO: Ajouter les responsabilités validées de l'alternance (projets internes,
// technologies Data/IA, périmètre métier) et les technologies associées.
// TODO: Ces éléments sont confidentiels tant qu'ils ne sont pas validés.
// =============================================================================

export const experiences: ExperienceItem[] = [
  {
    id: "bnp-paribas-cardif",
    company: "BNP Paribas Cardif",
    role: "Alternante Développeuse Data & IA",
    kind: "alternance",
    period: "2025 — aujourd'hui",
    location: "Paris",
    current: true,
    summary:
      "Développement de compétences en Data, Intelligence Artificielle et ingénierie logicielle dans le cadre de mon alternance chez BNP Paribas Cardif.",
    responsibilities: [
      "Montée en compétences continue en Data, IA et ingénierie logicielle",
      "Contribution aux problématiques techniques de l'équipe (périmètre à préciser)",
    ],
    technologies: [],
    notes: [
      "TODO: Ajouter les responsabilités validées de l'alternance BNP Paribas Cardif.",
      "TODO: Aucune technologie, métrique ou projet interne ne doit être ajouté sans validation.",
    ],
  },
  {
    id: "gaea21",
    company: "Gaea21",
    role: "Stage — Développement Full-Stack",
    kind: "stage",
    period: "Sept. 2025 — Déc. 2025",
    location: "À distance",
    summary:
      "Développement full-stack sur le projet réel « Répertoire Vert », au sein d'une équipe agile, avec un fort accent sur la qualité et la maintenabilité du code.",
    responsibilities: [
      "Développement Full-Stack avec Symfony et React",
      "Conception et modélisation de base de données",
      "Implémentation d'un système d'authentification basé sur JWT / tokens",
      "Intégration et consommation d'API REST, notamment GaeaUser",
      "Création et gestion d'entités et de leurs relations",
      "Validation des données",
      "Développement de fonctionnalités d'inscription et de connexion",
      "Développement de fonctionnalités de gestion d'entreprise",
      "Travail collaboratif et versioning Git",
      "Attention portée à la maintenabilité du code",
    ],
    technologies: ["Symfony", "PHP", "React", "JavaScript", "REST API", "JWT", "SQL", "Git"],
  },
  {
    id: "womanity-formatrice",
    company: "Womanity Foundation",
    role: "Formatrice Web",
    kind: "formation",
    period: "2020 — 2022",
    location: "Kaboul",
    summary:
      "Une expérience qui a forgé mes compétences en communication, pédagogie et résolution de problèmes techniques.",
    responsibilities: [
      "Enseignement HTML, CSS et JavaScript",
      "Préparation et animation des cours",
      "Accompagnement des apprenants dans leurs projets",
      "Création d'exercices pratiques",
      "Évaluation des progrès",
      "Résolution de problématiques techniques",
      "Transmission des bonnes pratiques",
      "Encouragement du travail collaboratif",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "womanity-assistante",
    company: "Womanity Foundation",
    role: "Assistante Formatrice Web",
    kind: "formation",
    period: "2018 — 2019",
    location: "Kaboul",
    summary:
      "Première expérience dans le partage des connaissances et l'accompagnement technique.",
    responsibilities: [
      "Assistance à la préparation des cours",
      "Accompagnement technique des étudiants",
      "Aide au debugging",
      "Suivi des exercices et projets",
      "Feedback individuel",
      "Soutien administratif et logistique",
      "Animation et participation des apprenants",
    ],
  },
];