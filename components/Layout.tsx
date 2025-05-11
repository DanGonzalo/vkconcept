import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Fond animé couvrant toute la page */}
      <ParticlesBackground />

      {/* Contenu au-dessus du fond */}
      <Header />
      <main className="flex-grow pt-4 pb-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
