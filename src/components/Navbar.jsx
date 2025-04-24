import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

// i need to replace these later
const GITHUB_URL = "https://github.com/yourusername";
const FACEBOOK_URL = "https://facebook.com/yourusername";
const LINKEDIN_URL = "https://linkedin.com/in/yourusername";

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-lg shadow-none">
      <span className="text-lg md:text-xl font-extrabold text-bg drop-shadow-md tracking-tight">Daniella Limbag</span>
      <div className="flex items-center space-x-6 md:space-x-8">
        <button
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleDark}
          className="focus:outline-none p-1 rounded-full hover:bg-[color:var(--slate)]/20 transition-colors"
        >
          {dark ? (
            <IoMoonOutline className="w-6 h-6 text-[color:var(--text)]" />
          ) : (
            <IoSunnyOutline className="w-6 h-6 text-[color:var(--text)]" />
          )}
        </button>
        <a href={"https://github.com/daniellalimbag"} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-bg transition-colors">
          <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href={"https://www.facebook.com/daniella.limbag.9/"} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-bg transition-colors">
          <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        {/*<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-bg transition-colors">
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>*/}
      </div>
    </nav>
  );
};

export default Navbar;