import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Sections from "../components/Sections";
import config from "../next-seo.config";
const organization = { "@context": "https://schema.org", "@type": "Organization", name: "VK Concept", url: config.url, logo: `${config.url}/logo-nav-v2.svg`, email: "david.revert@vkconceptvn.com", description: config.description };
export default function Home() {
  return <><SEO title={config.title} description={config.description} schema={organization} /><Hero /><Features /><Sections /></>;
}
