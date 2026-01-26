import React, { useState, useEffect, useRef } from "react";
import { IoLogoElectron, IoLogoPython, IoLogoAndroid } from "react-icons/io5";
import { SiSelenium, SiChakraui, SiThreedotjs, SiJupyter, SiIeee, SiKotlin} from "react-icons/si";
import { FaGithub, FaLink, FaReact, FaPython, FaJava, FaAndroid} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";

const projects = [
  {
    name: "Calcademy",
    image: "/projects/calcademy.png",
    shortDescription: "Calculate your grades easily.",
    description: "Calculate your grades easily. This is a customizable grade calculator that helps students track their academic performance. It features an adjustable grading scale, local storage, and a user-friendly interface.",
    tech: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      { name: "Chakra UI", icon: <SiChakraui className="w-6 h-6 text-teal-400" /> }
    ],
    gradientStyle: { background:'linear-gradient(to bottom, #c04848, #480048)'},
    github: "https://github.com/daniellalimbag/calcademy",
    demo: "https://calcademy.vercel.app/"
  },
  {
    name: "Dishcord",
    image: "/projects/dishcord.png",
    shortDescription: "Share your dining experiences, explore hidden gems, and connect with fellow food lovers.",
    description: "Share your dining experiences, explore hidden gems, and connect with fellow food lovers. Dishcord is a social food review platform where users can discover, rate, and discuss local restaurants.",
    tech: [
      { name: "Next.js", icon: <RiNextjsFill className="w-6 h-6 text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-6 h-6 text-sky-400" /> },
      { name: "MongoDB", icon: <BiLogoMongodb className="w-6 h-6 text-green-600" /> }
    ],
    gradientStyle: {  background: 'linear-gradient(to top, #09203f 0%, #537895 100%)'},
    github: "https://github.com/daniellalimbag/dishcord",
    demo: "#"
  },
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
    name: "EloMetrics",
    image: "/projects/elometrics.png",
    shortDescription: "A data modeling project that uses logistic regression to predict the outcomes of chess games based on Elo rating differences and move counts.",
    description: "A data modeling project that uses logistic regression to predict the outcomes of chess games based on Elo rating differences and move counts. The model analyzes games from Lichess and developed with Jupyter Notebook. Published in the 2025 ICEIC, this study explores the limits of Elo-based prediction.",
    tech: [
      { name: "Python", icon: <FaPython className="w-6 h-6 text-yellow-500" /> },
      { name: "Jupyter", icon: <SiJupyter className="w-6 h-6 text-orange-400" /> }
    ],
    gradientStyle: {  background: 'linear-gradient(to bottom, #434343 0%, black 100%)'},
    paper: "https://ieeexplore.ieee.org/abstract/document/10879733"
  },
  {
    name: "Portfolio",
    image: "/projects/portfolio.png",
    shortDescription: "Where I showcase my projects, skills, and experiences as a developer.",
    description: "Where I showcase my projects, skills, and experiences as a developer.",
    tech: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-6 h-6 text-sky-400" /> },
      { name: "Three.js", icon: <SiThreedotjs className="w-6 h-6 text-yellow-500" /> }
    ],
    gradientStyle: {  background: 'linear-gradient(-20deg, #3c2e68 0%, #8c8c9b 100%)'},
    github: "https://github.com/daniellalimbag/daniellalimbag.github.io",
    demo: "https://daniellalimbag.github.io"
  },
  /*
  {
    name: "PokeBuild",
    image: "/projects/pokebuild.png",
    shortDescription: "Build your perfect Pokémon team.",
    description: "Build your perfect Pokémon team. A mobile app developed with Android Studio that uses PokéAPI to helps trainers create and customize their ideal Pokémon teams.",
    tech: [
      { name: "Java", icon: <FaJava className="w-6 h-6 text-orange-700" /> },
      { name: "SQLite", icon: <DiSqllite className="w-6 h-6 text-blue-800" /> }
    ],
    gradientStyle: { background: 'linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)'},
    github: "https://github.com/daniellalimbag/PokeBuild",
    demo: "#"
  },*/
  {
    name: "DORY",
    image: "/projects/dory.png",
    shortDescription: "A user-centered system for swimming activity analytics and coaching.",
    description: "Developed as an undergraduate thesis, DORY (Data Oriented Reporting for Your Swim) is a user-centered analytics system designed to bridge the gap between coaches and swimmers. By utilizing signal processing techniques on smartwatch sensor data, the app automates the collection of deep performance metrics such as stroke count and swimming velocity.",    tech: [
      { name: "Kotlin", icon: <SiKotlin className="w-6 h-6 text-purple-600" /> },
      { name: "Android SDK", icon: <IoLogoAndroid className="w-6 h-6 text-green-600" /> },
    ],
    gradientStyle: { background: 'linear-gradient(-225deg, #54b6ca 0%, #348756 100%)'},
    github: "https://github.com/daniellalimbag/dory-app",
    demo: "#"
  },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="p-3 sm:p-6 rounded-xl shadow-2xl max-w-xl w-full relative animate-pop flex flex-col items-start transition-transform transition-opacity duration-300 ease-out transform scale-100 opacity-100 mx-2 sm:mx-auto"
        style={{ ...project.gradientStyle, animation: 'modalPopIn 0.3s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-gray-200 hover:text-red-400 z-50 cursor-pointer" style={{ zIndex: 100 }}>&times;</button>
        <div className="w-full text-left mb-2">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{project.name}</h3>
          <p className="mb-2 text-sm text-white/90 drop-shadow">{project.description}</p>
        </div>
        <div className="flex gap-3 sm:gap-5 items-center justify-center mb-6 w-full flex-wrap">
          {project.tech.map((tech) => (
            <div key={tech.name} className="flex items-center gap-1 sm:gap-2 justify-center w-auto h-8 sm:h-10 bg-[color:var(--bg)] rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-0.5 px-2 sm:px-3">
              {React.cloneElement(tech.icon, { className: 'w-4 h-4 sm:w-5 sm:h-5 ' + (tech.icon.props.className || '') })}
              <span className="text-text text-xs sm:text-sm font-medium drop-shadow">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-h-64 mb-3 bg-bg rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center aspect-[16/10]" style={{ aspectRatio: '16/10' }}>
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-4 mt-2 w-full justify-center">
          {project.name === "EloMetrics" && project.paper ? (
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg font-semibold shadow hover:bg-white flex items-center gap-2 text-sm">
              <SiIeee className="w-5 h-5" /> Publication
            </a>
          ) : (
            <>
              <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg font-semibold shadow hover:bg-white flex items-center gap-2 text-sm">
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              {project.demo && project.demo !== "#" && project.demo.trim() !== "" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg font-semibold shadow hover:bg-white flex items-center gap-2 text-sm">
                  <FaLink className="w-5 h-5" /> Live
                </a>
              )}
            </>
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
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--green)] dark:bg-gradient-to-br dark:from-[color:var(--bg)] dark:to-[color:var(--blue)] flex flex-col items-center border-t border-t-[color:var(--text)] px-4 md:px-12 xl:px-25">
      <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center mb-10">Projects</h2>
      <div className="mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className={`relative rounded-xl overflow-hidden shadow-lg group bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--blue)] border border-white/30 cursor-pointer transition-all duration-700 ${animate ? 'opacity-100 animate-slide-in' : 'opacity-0'} `}
            style={project.gradientStyle}
            onClick={() => setSelected(project)}
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setSelected(project); }}
          >
            <div className="flex flex-row gap-2 absolute top-3 right-3 z-20">
              {project.tech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-[color:var(--bg)] rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-0.5">
                  {React.cloneElement(tech.icon, { className: 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ' + (tech.icon.props.className || '') })}
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