'use client';

import { type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log('Particles engine initialized');
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#00FF85',
      },
      links: {
        color: '#00FF85',
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" options={particlesOptions} />;
};

export default ParticleBackground;
