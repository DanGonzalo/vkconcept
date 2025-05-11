import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm text-gray-400 py-8 z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">VK Concept</h3>
          <p>Expert en outsourcing & consulting IT pour accompagner vos projets numériques.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">À propos</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>
            David Revert<br />
            <a href="mailto:david.revert@vkconceptvn.com" className="hover:underline text-white">
              david.revert@vkconceptvn.com
            </a>
          </p>
        </div>
      </div>
      <p className="mt-8 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} VK Concept. Tous droits réservés.
      </p>
    </footer>
  );
}
