// components/Hero.tsx
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Hero() {
  // simple “mounted” state pour déclencher l’animation au montage
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-32 md:py-48 overflow-hidden"
    >
      <h1
        className={`max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 transform transition duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        VK CONCEPT, votre passerelle <br className="hidden sm:inline" /> IT
        France – Vietnam
      </h1>

      <p
        className={`max-w-xl text-lg sm:text-xl text-gray-300 mb-8 transform transition duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Basée au Vietnam, <span className="font-semibold text-white">
          VK CONCEPT
        </span>{" "}
        propose aux entreprises françaises des solutions IT sur-mesure : portage
        salarial, développement logiciel & IA.
        <br />
        Grâce à notre ancrage local et à l’écosystème tech vietnamien, nous
        garantissons une{" "}
        <span className="font-semibold text-white">
          transformation digitale
        </span>{" "}
        de qualité à{" "}
        <span className="font-semibold text-blue-400">coûts maîtrisés</span>.
      </p>

      <div
        className={`flex flex-col sm:flex-row gap-4 transform transition duration-700 delay-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Link
          href="#contact"
          className="inline-block bg-gradient-to-r from-[#4DBDE8] to-[#3AA7D0] text-white font-semi bold py-3 px-6 rounded-lg shadow-lg"
        >
          Contactez-nous
        </Link>
        <Link
          href="#services"
          className="inline-block border border-[#4DBDE8] text-[#4DBDE8] font-semibold py-3 px-6 rounded-lg hover:bg-white/10"
        >
          Nos services
        </Link>
      </div>
    </section>
  );
}
