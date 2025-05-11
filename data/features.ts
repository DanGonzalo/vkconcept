// data/features.ts
export interface Feature {
  key: string;
  icon: React.ReactNode; // si tu utilises que des emojis, tu peux remplacer par string
  title: string;
  link: string;
}

// Ici j'utilise React.ReactNode, donc ajoute cette ligne en haut
import React from "react";

export const features: Feature[] = [
  {
    key: "portage",
    icon: "👔",
    title: "Portage salarial",
    link: "#services-portage",
  },
  {
    key: "dev",
    icon: "💻",
    title: "Développement logiciel",
    link: "#services-dev",
  },
  {
    key: "ia",
    icon: "🤖",
    title: "Expertise IA",
    link: "#services-ia",
  },
];
