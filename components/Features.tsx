import FeatureCard from "./FeatureCard";
import { features } from "../data/features";
export default function Features() {
  return <section id="services" className="section-shell">
    <p className="eyebrow">Nos expertises</p><h2 className="section-title">Les bons leviers pour votre projet IT.</h2><p className="section-intro">Trois expertises complémentaires pour relier vos ambitions à l’écosystème technologique vietnamien.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{features.map(({ key, ...feature }) => <FeatureCard key={key} {...feature} />)}</div>

  </section>;
}
