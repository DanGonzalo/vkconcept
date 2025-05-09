// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo + titre */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="VK Concept"
          width={40}
          height={40}
          priority
        />
        <span className="text-white font-bold text-lg">VK Concept</span>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="#services"
          className="text-white hover:text-brand-blue transition"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="text-white hover:text-brand-blue transition"
        >
          À propos
        </Link>
        <Link
          href="#contact"
          className="text-white hover:text-brand-blue transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
