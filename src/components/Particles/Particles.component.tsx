import { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="absolute"
      options={{
        detectRetina: true,
        particles: {
          color: {
            value: "#a855f7",
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 35,
          },
          move: {
            direction: "outside",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.7,
            straight: false,
          },
          shape: {
            type: ["circle"],
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.4,
            },
          },
          size: {
            value: {
              min: 1,
              max: 6,
            },
          },
        },
      }}
    />
  );
};
