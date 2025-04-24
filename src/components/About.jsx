import React from "react";
import LaptopContainer from "./LaptopContainer";
import { RiFileDownloadLine } from "react-icons/ri";

const About = () => (
  <section className="w-full min-h-[300px] h-auto lg:h-[60vw] lg:max-h-[70vh] mx-0 relative flex flex-col lg:flex-row items-center justify-center bg-[color:var(--bg)] rounded-none shadow-none mt-0 border-t border-t-[color:var(--text)] px-3 sm:px-4 md:px-8 lg:px-12 xl:px-25" id="about">
    <div className="w-full lg:flex-1 flex flex-col items-center sm:items-center lg:items-start justify-center px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8">
      <h2 className="text-2xl sm:text-3xl font-bold py-3 sm:py-4 lg:py-6 text-center sm:text-center lg:text-left text-[color:var(--text)] w-full">About Me</h2>
      <p className="text-xs sm:text-sm md:text-base text-[color:var(--text)] mb-3 sm:mb-4 text-center sm:text-center lg:text-left max-w-2xl">
        I’m Daniella Limbag, a passionate developer who loves learning new things and building digital solutions. I enjoy working with modern web technologies, learning new tools, and collaborating on exciting projects. Outside of coding, you might find me exploring indie games or watching YouTube tutorials and suddenly rethinking my entire tech stack.
      </p>
      <a
        href="/CV_LIMBAG_DANIELLA.pdf"
        download
        className="mt-3 sm:mt-4 inline-block px-4 py-2 bg-[color:var(--violet)] hover:bg-[color:var(--green)] text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-sm sm:text-base flex items-center gap-2"
      >
        <RiFileDownloadLine className="text-base sm:text-lg" /> Resume
      </a>
    </div>
    <div className="w-full lg:flex-1 flex flex-col items-center justify-center h-48 sm:h-56 md:h-64 lg:h-full pb-4 sm:pb-6 lg:pb-0 pt-6 sm:pt-8 lg:pt-8">
      <LaptopContainer />
    </div>
  </section>
);

export default About;
