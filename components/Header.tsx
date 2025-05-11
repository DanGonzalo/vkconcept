import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 z-20 bg-transparent">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-nav.png" alt="VK Concept" width={100} height={40} />
        </Link>
        <div className="space-x-6 text-white font-medium">
          <Link href="#services" className="hover:underline">
            Services
          </Link>
          <Link href="#about" className="hover:underline">
            À propos
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
