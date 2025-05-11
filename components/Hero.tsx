'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 opacity-0 animate-fadeIn max-w-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Consulting IT
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Votre partenaire de confiance pour externaliser vos projets IT et accélérer votre croissance.
        </p>
        <div className="space-x-4">
          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#4DBDE8] to-[#3AA7D0] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Contactez-nous
          </Link>
          <Link
            href="#services"
            className="inline-block border border-[#4DBDE8] text-[#4DBDE8] font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition"
          >
            Nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
