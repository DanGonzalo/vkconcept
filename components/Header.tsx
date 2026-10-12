import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "VK Concept" },
  { href: "/portage-salarial-vietnam", label: "Portage" },
  { href: "/developpement-logiciel", label: "Développement" },
  { href: "/intelligence-artificielle", label: "IA" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0A0F1C]/90 backdrop-blur-md">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4">
        <Link href="/" aria-label="VK Concept — Accueil" onClick={() => setOpen(false)}>
          <Image src="/logo-nav-v2.svg" alt="VK Concept" width={160} height={40} priority />
        </Link>
        <button type="button" className="rounded-lg border border-white/20 px-4 py-2 text-white lg:hidden" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
          {open ? "Fermer" : "Menu"}
        </button>
        <div id="navigation-links" className={`${open ? "flex" : "hidden"} w-full flex-col gap-2 pt-4 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-3 lg:pt-0`}>
          {links.map(({ href, label }) => {
            const active = !href.includes("#") && router.asPath.split("#")[0] === href;
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`rounded px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${active ? "bg-white/10 text-[#4DBDE8]" : "text-white"}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
