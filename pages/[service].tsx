import ContactForm from "../components/ContactForm";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import SEO from "../components/SEO";
import { services, ServiceSlug } from "../data/services";
import { pricing } from "../data/pricing";
import config from "../next-seo.config";
export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services[slug];
  const url = `${config.url}/${slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: service.title, description: service.description, url, provider: { "@type": "Organization", name: "VK Concept", url: config.url }, areaServed: [{ "@type": "Country", name: "France" }, { "@type": "Country", name: "Vietnam" }] },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: config.url }, { "@type": "ListItem", position: 2, name: service.title, item: url }] },
  ] };
  return <><SEO title={`${service.title} | VK Concept`} description={service.description} path={`/${slug}`} schema={schema} />
    <section className="section-shell pb-10 pt-36 md:pt-40"><nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-3 text-sm"><Link href="/" className="text-[#4DBDE8] hover:underline">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav><p className="eyebrow">Expertises France – Vietnam</p><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">{service.title}</h1><p className="mt-6 max-w-3xl text-2xl text-[#4DBDE8]">{service.subtitle}</p><p className="section-intro max-w-3xl">{service.intro}</p><Link href="#contact" className="button-primary mt-8">Parlons de votre besoin ↗</Link></section>
    <section className="section-shell"><p className="eyebrow">Nos prestations</p><h2 className="section-title">Un accompagnement adapté à vos objectifs.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{service.offers.map(([name, text]) => <article key={name} className="rounded-2xl border border-white/10 bg-white/5 p-7"><h3 className="text-xl font-semibold text-white">{name}</h3><p className="mt-4 leading-relaxed text-gray-300">{text}</p></article>)}</div></section>
    <section className="section-shell grid gap-10 md:grid-cols-2"><div><p className="eyebrow">Compétences et approche</p><h2 className="section-title">{service.heading}</h2><p className="section-intro">{service.approach}</p></div><ul className="space-y-4 rounded-2xl border border-white/10 bg-[#0A0F1C]/30 p-7">{service.capabilities.map(item => <li key={item} className="flex gap-3 leading-relaxed"><span aria-hidden="true" className="text-[#4DBDE8]">↗</span>{item}</li>)}</ul></section>
    <section id="tarifs" className="section-shell"><p className="eyebrow">Tarifs indicatifs</p><h2 className="section-title">Des repères pour préparer votre projet.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{pricing[slug].map(offer => <article key={offer.name} className="flex flex-col rounded-2xl border border-[#4DBDE8]/30 bg-white/5 p-7"><h3 className="text-xl font-semibold text-white">{offer.name}</h3><p className="mb-7 mt-4 leading-relaxed">{offer.description}</p><p className="mt-auto text-2xl font-bold text-[#4DBDE8]">{offer.price}</p><Link href="#contact" className="button-secondary mt-6">Demander un devis</Link></article>)}</div><p className="mt-6 text-sm leading-relaxed text-gray-300">Tarifs indicatifs. Le périmètre, les livrables et les conditions applicables sont précisés dans votre proposition personnalisée.</p>{slug === "portage-salarial-vietnam" && <p className="mt-3 text-sm text-gray-300">Accompagnement : gestion RH, contrats, conformité et interface française, selon le périmètre convenu.</p>}</section>
    <section className="section-shell"><p className="eyebrow">Questions fréquentes</p><h2 className="section-title">Précisons votre besoin.</h2><div className="mt-8">{service.faq.map(([question, answer]) => <details key={question} className="border-b border-white/15 py-5"><summary className="cursor-pointer text-lg font-medium text-white">{question}</summary><p className="mt-4 max-w-3xl leading-relaxed">{answer}</p></details>)}</div></section>
    <ContactForm interest={slug === "portage-salarial-vietnam" ? "Portage salarial IT" : slug === "developpement-logiciel" ? "Développement logiciel" : "Intelligence artificielle"} /><section className="section-shell pt-0"><nav aria-label="Autres expertises" className="mt-10 flex flex-wrap gap-5">{Object.entries(services).filter(([key]) => key !== slug).map(([key, item]) => <Link href={`/${key}`} key={key} className="text-[#4DBDE8] underline underline-offset-4">{item.title}</Link>)}</nav></section>
  </>;
}
export const getStaticPaths: GetStaticPaths = async () => ({ paths: Object.keys(services).map(service => ({ params: { service } })), fallback: false });
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.service;
  if (typeof slug !== "string" || !Object.prototype.hasOwnProperty.call(services, slug)) return { notFound: true };
  return { props: { slug } };
};
