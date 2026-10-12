import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), { ssr: false });
export default function Layout({ children }: { children: ReactNode }) {
  return <div className="relative isolate flex min-h-screen flex-col">
    <a href="#main" className="skip-link">Aller au contenu</a>
    <ParticlesBackground /><Header />
    <main id="main" className="flex-grow">{children}</main><Footer />
  </div>;
}
