// Retirez entièrement le "use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import logo from "../public/logo.png";

// On charge le fond animé uniquement côté client (pas de SSR)
const ParticlesBackground = dynamic(
  () => import("./ParticlesBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center gradient-animated text-center px-4 overflow-hidden"
    >
      {/* Fond animé */}
      <ParticlesBackground />

      {/* Logo */}
      <div className="mb-8 z-10">
        <Image
          src={logo}
          alt="VK Concept"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* Titre */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white z-10">
        Outsourcing &amp;{" "}
        <span className="text-brand-blue">Consulting IT</span>
      </h1>

      {/* Sous-titre */}
      <p className="mt-4 max-w-2xl text-lg text-gray-200 z-10">
        Votre partenaire de confiance pour externaliser vos projets IT et
        accélérer votre croissance.
      </p>

      {/* Boutons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <Link
          href="#contact"
          className="inline-block bg-brand-blue text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Contactez-nous
        </Link>
        <Link
          href="#services"
          className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Nos services
        </Link>
      </div>
    </section>
  );
}
