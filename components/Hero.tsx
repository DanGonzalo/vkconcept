import Link from "next/link";
export default function Hero() {
  return <section id="hero" className="relative mx-auto flex min-h-[85svh] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-40 text-center">
    <p className="eyebrow mb-6">Un lien local. Une ambition internationale.</p>
    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">Votre passerelle IT<br /><span className="text-[#4DBDE8]">France – Vietnam</span></h1>
    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300">De l’équipe au produit, donnez une nouvelle dimension à vos projets numériques. VK Concept accompagne les entreprises françaises au Vietnam en portage salarial, développement logiciel et intelligence artificielle.</p>
    <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"><Link href="#contact" className="button-primary">Parlons de votre projet <span aria-hidden="true">↗</span></Link><Link href="#services" className="button-secondary">Découvrir nos expertises</Link></div>
    <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-300"><span>Implantation au Vietnam</span><span aria-hidden="true" className="hidden sm:inline text-[#4DBDE8]">•</span><span>Entreprises françaises</span><span aria-hidden="true" className="hidden sm:inline text-[#4DBDE8]">•</span><span>Solutions sur mesure</span></div>
  </section>;
}
