import ContactForm from "./ContactForm";
import Link from "next/link";
const questions = [
  ["À qui s’adressent vos services ?", "Nous accompagnons les entreprises françaises qui souhaitent développer un projet numérique ou collaborer avec des équipes IT au Vietnam."],
  ["Peut-on vous contacter avec un projet encore en réflexion ?", "Oui. Un premier échange permet de clarifier votre besoin, vos contraintes et les pistes à explorer avant de définir le périmètre du projet."],
  ["Comment sont définis le budget et les délais ?", "Ils dépendent du périmètre, de la complexité et de l’organisation du projet. Ces éléments sont discutés lors du cadrage pour construire une proposition adaptée."],
  ["Pouvez-vous intervenir sur un logiciel existant ?", "Nous pouvons échanger sur votre environnement actuel, vos objectifs d’évolution et les contraintes techniques afin d’évaluer l’accompagnement pertinent."],
];
export default function Sections() {
  return <>
    <section id="about" className="section-shell grid gap-10 md:grid-cols-2 md:items-center"><div><p className="eyebrow">À propos de VK Concept</p><h2 className="section-title">La proximité, au-delà des frontières.</h2></div><div className="space-y-5 text-lg leading-relaxed text-gray-300"><p>Basée au Vietnam, VK Concept fait le lien entre les besoins des entreprises françaises et l’écosystème tech vietnamien.</p><p>Un référent local francophone, des compétences adaptées à votre besoin et une gestion de projet structurée : nous vous aidons à construire une collaboration durable, avec des coûts maîtrisés et un suivi transparent.</p><Link href="/a-propos" className="inline-block text-base font-semibold text-[#4DBDE8] underline underline-offset-4">Découvrir VK Concept</Link></div></section>
    <section id="sectors" className="section-shell"><p className="eyebrow">Vos enjeux métier</p><h2 className="section-title">Des solutions pensées pour votre secteur.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{[
      ["Banque, assurance et fintech", "API, outils de gestion, automatisation et modernisation des systèmes."],
      ["Retail et e-commerce", "Plateformes e-commerce, gestion de stocks et intégrations ERP / CRM."],
      ["Industrie", "Applications métier, tableaux de bord et connecteurs logiciels."],
      ["Santé et medtech", "Applications, interfaces simplifiées et traitement de données selon les exigences du projet."],
      ["Secteur public et collectivités", "Sites accessibles, outils de gestion et plateformes participatives."],
      ["Entreprises et produits SaaS", "MVP, produits numériques et évolution de plateformes existantes."],
    ].map(([name, text]) => <article key={name} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="text-lg font-semibold text-white">{name}</h3><p className="mt-3 leading-relaxed">{text}</p></article>)}</div></section>
    <section id="method" className="section-shell"><p className="eyebrow">Notre approche</p><h2 className="section-title">Un projet clair, à chaque étape.</h2><ol className="mt-10 grid gap-6 md:grid-cols-3">{[
      ["Échanger", "Votre contexte, vos objectifs et vos contraintes : nous commençons par comprendre ce qui compte pour vous."],
      ["Cadrer", "Nous définissons ensemble les priorités, le périmètre et les modalités de collaboration."],
      ["Construire", "Le projet avance avec des points de suivi et des retours pour ajuster les prochaines étapes."],
    ].map(([title, text], index) => <li key={title} className="border-t border-[#4DBDE8]/40 pt-6"><span className="text-sm text-[#4DBDE8]">0{index + 1}</span><h3 className="mb-3 mt-5 text-xl font-semibold text-white">{title}</h3><p className="leading-relaxed text-gray-300">{text}</p></li>)}</ol></section>
    <section id="faq" className="section-shell"><p className="eyebrow">Questions fréquentes</p><h2 className="section-title">Avant de nous rencontrer.</h2><div className="mt-10">{questions.map(([question, answer]) => <details key={question} className="border-b border-white/15 py-5"><summary className="cursor-pointer rounded text-lg font-medium text-white">{question}</summary><p className="mt-4 max-w-3xl leading-relaxed text-gray-300">{answer}</p></details>)}</div></section>
    <ContactForm />
  </>;
}
