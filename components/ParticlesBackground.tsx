// components/ParticlesBackground.tsx
'use client';

import { useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

const particlesOptions: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      // onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 180, links: { opacity: 0.2 } },
      // push: { quantity: 4 },
    },
  },
  particles: {
    color: { value: '#4DBDE8' },
    links: {
      enable: true,
      distance: 120,
      opacity: 0.1,
      width: 1,
      color: '#3AA7D0',
    },
    move: {
      enable: true,
      speed: 0.4,
      outModes: { default: 'bounce' },
    },
    number: {
      value: 60,
      density: { enable: true },
    },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: {
      value: { min: 2, max: 4 },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    });
  }, []);

  return (
    <div
      className="
        absolute inset-0 -z-10
        bg-gradient-to-br
        from-[#0A0F1C] via-[#122537] to-[#175A8D]
      "
    >
      <Particles id="tsparticles" options={particlesOptions} />
    </div>
  );
}
