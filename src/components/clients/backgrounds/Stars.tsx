'use client';
import { useCallback, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container } from '@tsparticles/engine';

export default function Stars() {
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log('particles were loaded');
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        autoPlay: true,
        clear: true,
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
        particles: {
          collisions: {
            absorb: {
              speed: 2,
            },
            enable: true,
            maxSpeed: 50,
            mode: 'bounce',
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          move: {
            center: {
              x: 50,
              y: 50,
              mode: 'percent',
              radius: 0,
            },
            direction: 'top',
            drift: 0,
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            size: true,
            speed: 1,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: true,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: false,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
            animation: {
              count: 0,
              enable: false,
              speed: 2,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
            },
          },
          reduceDuplicates: true,
          shape: {
            close: true,
            fill: true,
            options: {
              star: {
                sides: 5,
              },
            },
            type: 'star',
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 5,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
            },
          },
          zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
          destroy: {
            bounds: {},
            mode: 'none',
            split: {
              count: 1,
              factor: {
                value: 3,
              },
              rate: {
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 50,
              move: 10,
            },
          },
          rotate: {
            value: 10,
            animation: {
              enable: true,
              speed: 2,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            path: true,
          },
          links: {
            blink: false,
            color: {
              value: '#fff',
            },
            consent: true,
            distance: 100,
            enable: true,
            frequency: 1,
            opacity: 0.2,
            width: 0.5,
            warp: false,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        smooth: false,
        style: {},
        name: 'Stars',
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }}
    />
  );
}
