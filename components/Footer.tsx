import Link from "next/link";
import Image from "next/image";
import { assetPath } from "./assetPath";

const links = [
  ["/", "Accueil"], ["/a-propos", "VK Concept"],
  ["/portage-salarial-vietnam", "Portage IT"], ["/developpement-logiciel", "Développement"],
  ["/intelligence-artificielle", "Intelligence artificielle"], ["/#contact", "Contact"],
];
export default function Footer() {
  return <footer className="border-t border-white/10 bg-gray-900/50 py-6 text-sm text-gray-300 backdrop-blur-sm">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link href="/" aria-label="VK Concept — Accueil"><Image src={assetPath("/logo-nav-v2.svg")} alt="VK Concept" width={140} height={35} /></Link>
        <a href="mailto:david.revert@vkconceptvn.com" className="break-all py-2 text-[#4DBDE8] hover:underline">david.revert@vkconceptvn.com</a>
      </div>
      <nav aria-label="Navigation de bas de page" className="mt-3 grid grid-cols-2 gap-x-4 sm:flex sm:flex-wrap sm:gap-x-5">
        {links.map(([href, label]) => <Link key={href} href={href} className="flex min-h-11 items-center py-2 hover:text-white hover:underline">{label}</Link>)}
      </nav>
      <p className="mt-3 border-t border-white/10 pt-4 text-xs text-gray-400">© {new Date().getFullYear()} VK Concept. Tous droits réservés.</p>
    </div>
  </footer>;
}
