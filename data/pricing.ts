import type { ServiceSlug } from "./services";
export const pricing: Record<ServiceSlug, { name: string; description: string; price: string }[]> = {
  "portage-salarial-vietnam": [
    { name: "Freelance IT en portage", description: "Un expert IT au Vietnam, facturé en France.", price: "À partir de 200 € HT / jour" },
    { name: "CTO fractionné", description: "Un CTO senior pilotant votre stratégie technique à distance.", price: "À partir de 350 € HT / jour" },
    { name: "Équipe dédiée externalisée", description: "Une équipe projet de 3 à 5 développeurs avec chef de projet.", price: "À partir de 900 € HT / jour" },
  ],
  "developpement-logiciel": [
    { name: "MVP Start", description: "Une application web ou mobile fonctionnelle.", price: "À partir de 8 000 €" },
    { name: "Développement de produit SaaS", description: "Le développement complet de votre SaaS.", price: "À partir de 15 000 €" },
    { name: "Maintenance et support", description: "Un accompagnement pour vos applications existantes.", price: "Sur devis" },
  ],
  "intelligence-artificielle": [
    { name: "Audit IA et stratégie", description: "Identification des cas d’usage IA.", price: "2 000 € au forfait" },
    { name: "Développement IA sur mesure", description: "Modèles de recommandation, NLP et prédiction.", price: "À partir de 300 € / jour" },
    { name: "Intégration de chatbot IA", description: "Un chatbot multilingue de type GPT.", price: "À partir de 5 000 €" },
  ],
};
