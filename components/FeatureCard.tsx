import Link from "next/link";
interface Props { icon: string; title: string; description: string; link: string }
export default function FeatureCard({ icon, title, description, link }: Props) {
  return <Link href={link} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-[#4DBDE8]/50 hover:bg-white/10">
    <span aria-hidden="true" className="mb-8 text-sm font-semibold text-[#4DBDE8]">{icon} /</span>
    <h3 className="text-xl font-semibold text-white">{title}</h3><p className="mb-7 mt-4 leading-relaxed text-gray-300">{description}</p>
    <span className="mt-auto text-sm font-semibold text-[#4DBDE8]">Explorer cette expertise <span aria-hidden="true">↗</span></span>
  </Link>;
}
