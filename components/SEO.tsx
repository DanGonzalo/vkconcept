import Head from "next/head";
import config from "../next-seo.config";
import { assetPath } from "./assetPath";
export default function SEO({ title, description, path = "/", schema }: { title: string; description: string; path?: string; schema?: object }) {
  const url = `${config.url}${path}`;
  return <Head><title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={url} />
    <link rel="icon" type="image/svg+xml" href={assetPath("/favicon.svg")} /><meta name="robots" content={config.url.includes("github.io") ? "noindex,nofollow" : "index,follow"} /><meta name="theme-color" content="#0A0F1C" />
    <meta property="og:type" content="website" /><meta property="og:locale" content="fr_FR" /><meta property="og:site_name" content="VK Concept" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:image" content={`${config.url}/social-card.png`} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="VK Concept — France – Vietnam" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={`${config.url}/social-card.png`} />
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
  </Head>;
}
