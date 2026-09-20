import type { Project } from "../types";

// =============================================================================
// Projets — ajoutez une entrée pour chaque nouvelle réalisation.
// Chaque projet supporte : technologies, fonctionnalités, lien repo/démo, image.
// De futurs projets Data & IA peuvent être ajoutés ici simplement.
// =============================================================================

export const projects: Project[] = [
  {
    id: "village-green",
    title: "Village Green",
    subtitle: "Plateforme e-commerce & gestion interne",
    description:
      "Développement complet d'un écosystème applicatif pour un distributeur de produits musicaux : un site e-commerce à destination des clients privés et professionnels, couplé à une application interne de gestion (catalogue, ventes, suivi et reporting).",
    features: [
      "Plateforme e-commerce",
      "Gestion des clients privés et professionnels",
      "Catalogue produits",
      "Panier d'achat",
      "Gestion des commandes",
      "Authentification",
      "Profil client",
      "Historique de commandes",
      "Gestion interne du catalogue",
      "Suivi des ventes",
      "KPI / reporting",
      "Fonctionnalités orientées mobile",
      "Gestion des prix",
      "Remises",
      "Adresses de livraison",
      "Adresses de facturation",
    ],
    technologies: ["Symfony", "PHP", "SQL", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/NasiraNaiby/sf_green_village_v2.git",
    category: "E-commerce & gestion",
    featured: true,
    status: "Terminé",
  },
];