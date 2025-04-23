import { FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiKotlin, SiJupyter } from "react-icons/si";

const Skills = () => (
  <section className="w-full min-h-[120px] py-8 flex flex-col items-center justify-center bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--green)] dark:bg-gradient-to-br dark:from-[color:var(--bg)] dark:to-[color:var(--blue)] overflow-hidden border-t border-t-[color:var(--text)]">
    <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center w-fit">Skills</h2> 
    <div className="flex flex-row md:flex-nowrap flex-wrap gap-6 justify-center items-center w-full max-w-5xl mb-4 mt-8 relative z-10">
      {/* HTML5 */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaHtml5 size={48} color="#E44D26" title="HTML5" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">HTML5</span>
      </div>
      {/* CSS3 */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaCss3Alt size={48} color="#1572B6" title="CSS3" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">CSS3</span>
      </div>
      {/* TailwindCSS */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <RiTailwindCssFill size={48} color="#38BDF8" title="TailwindCSS" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">TailwindCSS</span>
      </div>
      {/* Python */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaPython size={48} color="#3776AB" title="Python" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Python</span>
      </div>
      {/* Node.js */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaNodeJs size={48} color="#339933" title="Node.js" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Node.js</span>
      </div>
      {/* ReactJS */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaReact size={48} color="#61DAFB" title="ReactJS" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">ReactJS</span>
      </div>
      {/* Next.js */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <RiNextjsFill size={48} color="#000" title="Next.js" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Next.js</span>
      </div>
      {/* MongoDB */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <BiLogoMongodb size={48} color="#47A248" title="MongoDB" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">MongoDB</span>
      </div>
      {/* JavaScript */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <IoLogoJavascript size={48} color="#F7DF1E" title="JavaScript" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">JavaScript</span>
      </div>
      {/* Java */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <FaJava size={48} color="#007396" title="Java" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Java</span>
      </div>
      {/* Kotlin */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <SiKotlin size={48} color="#7F52FF" title="Kotlin" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Kotlin</span>
      </div>
      {/* Jupyter */}
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <SiJupyter size={48} color="#F37626" title="Jupyter" />
        <span className="mt-2 font-semibold text-sm md:text-base bg-[color:var(--bg)] text-[color:var(--text)] px-2 py-0.5 rounded shadow">Jupyter</span>
      </div>
    </div>
  </section>
);

export default Skills;