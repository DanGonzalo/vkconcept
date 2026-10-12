# VK Concept

Site vitrine français avec cinq pages pré-rendues : accueil, présentation, portage salarial au Vietnam, développement logiciel et intelligence artificielle.

## Lancer et vérifier

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm start`

## Contenu

Les prestations sont dans `data/services.ts`, les tarifs dans `data/pricing.ts`, les résumés de l’accueil dans `data/features.ts`. Les tarifs des tableaux transmis par le client sont retenus. Le prix de maintenance est coupé dans la capture source : il reste sur devis.

## Identité et référencement

La palette et les options des particules sont conservées dans `components/ParticlesBackground.tsx`. Les logos modernisés sont les fichiers `public/logo-*-v2.svg` ; les originaux PNG sont conservés. La version claire des logos est prévue pour les fonds sombres du site.

Le domaine officiel utilisé est `https://www.vkconceptvn.com`, à confirmer avant publication. En cas de changement, mettre à jour `next-seo.config.ts`, `public/robots.txt` et `public/sitemap.xml`. Chaque page possède ses métadonnées et son URL canonique.

Le formulaire de contact prépare un e-mail vers David Revert dans la messagerie du visiteur. Il ne confirme jamais un envoi automatique : aucun service d’envoi n’est configuré. Les données ne sont pas stockées par le site. Les informations légales de l’entreprise, ses coordonnées complètes et les références clients restent à fournir. Les chiffres de marché des captures, datés de 2025 et non sourcés, ne sont pas publiés comme des données actuelles.

Le portrait utilisé provient d’une extraction assistée par IA de la capture fournie. Remplacer `public/david-revert.png` par la photo originale avant publication pour garantir une fidélité exacte.
