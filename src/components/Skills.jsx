import { FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiKotlin, SiJupyter } from "react-icons/si";

const Skills = () => (
  <section className="w-full min-h-[120px] py-8 mx-0 flex flex-col items-center justify-center py-16 px-0 w-full bg-[color:var(--bg)] border-t border-t-[color:var(--text)]">
    <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center w-fit">Skills</h2> 
    <div className="flex flex-row md:flex-nowrap flex-wrap gap-6 justify-center items-center w-full max-w-5xl mb-4 mt-8">
      {/* HTML5 */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaHtml5 size={48} color="#E44D26" title="HTML5" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">HTML5</span>
      </div>
      {/* CSS3 */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaCss3Alt size={48} color="#1572B6" title="CSS3" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">CSS3</span>
      </div>
      {/* TailwindCSS */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <RiTailwindCssFill size={48} color="#38BDF8" title="TailwindCSS" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">TailwindCSS</span>
      </div>
      {/* Python */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaPython size={48} color="#3776AB" title="Python" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Python</span>
      </div>
      {/* Node.js */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaNodeJs size={48} color="#339933" title="Node.js" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Node.js</span>
      </div>
      {/* ReactJS */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaReact size={48} color="#61DAFB" title="ReactJS" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">ReactJS</span>
      </div>
      {/* Next.js */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <RiNextjsFill size={48} color="#000" title="Next.js" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Next.js</span>
      </div>
      {/* MongoDB */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <BiLogoMongodb size={48} color="#47A248" title="MongoDB" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">MongoDB</span>
      </div>
      {/* JavaScript */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <IoLogoJavascript size={48} color="#F7DF1E" title="JavaScript" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">JavaScript</span>
      </div>
      {/* Java */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <FaJava size={48} color="#007396" title="Java" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Java</span>
      </div>
      {/* Kotlin */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <SiKotlin size={48} color="#7F52FF" title="Kotlin" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Kotlin</span>
      </div>
      {/* Jupyter */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
        <SiJupyter size={48} color="#F37626" title="Jupyter" className="z-10" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Jupyter</span>
      </div>
    </div>
  </section>
);

export default Skills;