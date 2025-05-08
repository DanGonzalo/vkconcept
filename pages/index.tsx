import InteractiveBackground from "../components/InteractiveBackground";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <InteractiveBackground />
      <h1 className="absolute top-10 w-full text-center text-4xl text-blue-500">
        🎉 Tailwind fonctionne !
      </h1>
    </div>
  );
}
