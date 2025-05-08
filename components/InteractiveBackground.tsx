"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function InteractiveBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // on charge la version slim pour alléger le bundle
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    background: { color: { value: "#000" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick:  { enable: true, mode: "push" },
        onHover:  { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        push:   { quantity: 4 },
        repulse:{ distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color:      { value: "#fff" },
      links:      { color: "#fff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move:       { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 2, straight: false },
      number:     { density: { enable: true, area: 800 }, value: 80 },
      opacity:    { value: 0.5 },
      shape:      { type: "circle" },
      size:       { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
