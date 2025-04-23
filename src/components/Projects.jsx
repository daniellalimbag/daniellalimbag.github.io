import React, { useState } from "react";
import { IoLogoElectron, IoLogoPython } from "react-icons/io5";
import { SiSelenium, SiChakraui } from "react-icons/si";
import { FaGithub, FaLink, FaReact } from "react-icons/fa";

const projects = [
  {
    name: "Snipey",
    image: "/projects/snipey.png",
    shortDescription: "A web scraper app that checks for course availability.",
    description: "A web scraper app that checks for course availability. Users receive real-time notifications through a connected Discord bot.",
    tech: [
      { name: "Electron", icon: <IoLogoElectron className="w-6 h-6 text-blue-400" /> },
      { name: "Python", icon: <IoLogoPython className="w-6 h-6 text-yellow-500" /> },
      { name: "Selenium", icon: <SiSelenium className="w-6 h-6 text-green-500" /> }
    ],
    gradientStyle: { background: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)' },
    github: "https://github.com/daniellalimbag/snipey",
    demo: "#"
  },
  {
    name: "Calcademy",
    image: "/projects/calcademy.png",
    shortDescription: "Calculate your grades easily.",
    description: "Calculate your grades easily. This is a customizable grade calculator that helps students track their academic performance. It features an adjustable grading scale, local storage, and a user-friendly interface.",
    tech: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      { name: "Chakra UI", icon: <SiChakraui className="w-6 h-6 text-teal-400" /> }
    ],
    gradientStyle: { background: 'linear-gradient(to top, #09203f 0%, #537895 100%)' },
    github: "https://github.com/daniellalimbag/calcademy",
    demo: "https://calcademy.vercel.app/"
  },
  // add more projects later
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="p-6 rounded-xl shadow-2xl max-w-xl w-full relative animate-pop flex flex-col items-start transition-transform transition-opacity duration-300 ease-out transform scale-100 opacity-100"
        style={{ ...project.gradientStyle, animation: 'modalPopIn 0.3s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-gray-200 hover:text-red-400 z-50 cursor-pointer" style={{ zIndex: 100 }}>&times;</button>
        <div className="w-full text-left mb-2">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{project.name}</h3>
          <p className="mb-2 text-sm text-white/90 drop-shadow">{project.description}</p>
        </div>
        <div className="flex gap-5 items-center justify-center mb-6 w-full">
          {project.tech.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 justify-center w-auto h-10 bg-[color:var(--bg)] rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-0.5 px-3">
              {tech.icon}
              <span className="text-text text-sm font-medium drop-shadow">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-h-64 mb-3 bg-bg rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center aspect-[16/10]" style={{ aspectRatio: '16/10' }}>
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-4 mt-2 w-full justify-center">
          <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg font-semibold shadow hover:bg-white flex items-center gap-2 text-sm">
            <FaGithub className="w-5 h-5" /> GitHub
          </a>
          {project.demo && project.demo !== "#" && project.demo.trim() !== "" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg font-semibold shadow hover:bg-white flex items-center gap-2 text-sm">
              <FaLink className="w-5 h-5" /> Live Demo
            </a>
          )}
        </div>
      </div>
      <style>
        {`@keyframes modalPopIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }`}
      </style>
    </div>
  );
}

const Projects = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--green)] dark:bg-gradient-to-br dark:from-[color:var(--bg)] dark:to-[color:var(--blue)] flex flex-col items-center border-t border-t-[color:var(--text)]">
      <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className={`relative z-10 flex flex-col justify-between items-start rounded-2xl shadow-xl cursor-pointer overflow-hidden group border border-gray-200 dark:border-gray-700 p-0`}
            style={project.gradientStyle}
            onClick={() => setSelected(project)}
          >
            <div className="flex flex-row gap-2 absolute top-3 right-3 z-20">
              {project.tech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-center w-7 h-7 bg-[color:var(--bg)] rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-0.5">
                  {React.cloneElement(tech.icon, { className: 'w-4 h-4 ' + (tech.icon.props.className || '') })}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full h-full z-10 items-start justify-center px-8 py-6 text-left">
              <h3 className="text-3xl md:text-2xl font-extrabold mb-3 text-white drop-shadow-lg tracking-tight w-full text-left">{project.name}</h3>
              <p className="text-base md:text-l mb-6 text-white/90 drop-shadow w-full max-w-xl mx-0 text-left">{project.shortDescription}</p>
              <div className="relative w-full mb-4" style={{ aspectRatio: '16/10' }}>
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg bg-black/10 border border-white/30" />
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none group-hover:bg-black/5 transition-all" />
          </div>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;