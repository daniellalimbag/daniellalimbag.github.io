import React from "react";
import CursorFollower from "./CursorFollower";
import ParticleBackground from "./ParticleBackground";

const Hero = () => (
  <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--green)] dark:bg-gradient-to-br dark:from-[color:var(--bg)] dark:to-[color:var(--blue)] overflow-hidden py-12">
    <ParticleBackground />
    <CursorFollower />
    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--blue)/.6] via-transparent to-[color:var(--gold)/.6] pointer-events-none" />
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-6 py-12 gap-10">
      <img
        src="/photo.png"
        alt="Profile"
        className="rounded-full shadow-xl object-cover border-4 border-white mb-8 md:mb-0 md:mr-10 transition-transform duration-300 hover:scale-105 bg-[color:var(--bg)] w-44 h-44 md:w-56 md:h-56 flex-shrink-0"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
      <h1 className="text-5xl md:text-5xl font-extrabold text-[color:var(--text)] dark:text-[color:var(--text)] drop-shadow-lg mb-6">
        Hello, I'm <span className="font-extrabold text-[color:var(--violet)] dark:text-[color:var(--green)]">Daniella</span>
      </h1>
        <p className="text-lg md:text-l text-[color:var(--text)] dark:text-[color:var(--text)] font-normal mb-4">
          I'm a tech enthusiast based in the <span className="font-semibold">Philippines</span> studying computer science at <span className="font-semibold">De La Salle University</span>.
        </p>
        <p className="text-lg md:text-l text-[color:var(--text)] dark:text-[color:var(--text)] font-normal max-w-xl">
          I'm interested in <span className="font-semibold">software development</span>, <span className="font-semibold">design</span>, and building creative digital solutions.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;