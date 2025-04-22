import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const getColorFromCSS = (variable, fallback) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable) || fallback;

const getCurrentParticleColor = () =>
  document.documentElement.classList.contains("dark")
    ? getColorFromCSS("--green", "#A9CAB4")
    : getColorFromCSS("--violet", "#696C94");

const ParticleBackground = (props) => {

  const [init, setInit] = useState(false);
  const [particleColor, setParticleColor] = useState(getCurrentParticleColor());

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setParticleColor(getCurrentParticleColor());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [particleColor]
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticleBackground;