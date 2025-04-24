import React from "react";
import LaptopContainer from "./LaptopContainer";

const About = () => (
  <section className="w-full min-h-[300px] h-auto md:h-[60vw] md:max-h-[70vh] mx-0 relative flex flex-col md:flex-row items-center justify-center bg-[color:var(--bg)] rounded-none shadow-none mt-0 border-t border-t-[color:var(--text)] px-4 md:px-12 xl:px-25" id="about">
    <div className="w-full md:flex-1 flex flex-col items-center md:items-start justify-center px-6 md:px-20 py-8">
      <h2 className="text-3xl font-bold py-4 md:py-6 text-center md:text-left text-[color:var(--text)] w-full">About Me</h2>
      <p className="text-lg md:text-xl text-[color:var(--text)] mb-4 text-center md:text-left max-w-2xl">
        Hi! I’m Daniella Limbag.<br />
        I’m a passionate developer and designer who loves building beautiful, functional digital experiences.
      </p>
      <a
        href="/CV_LIMBAG_DANIELLA.pdf"
        download
        className="mt-4 inline-block px-4 py-2 bg-[color:var(--violet)] hover:bg-[color:var(--green)] text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-base"
      >
        Download Resume
      </a>
    </div>
    <div className="w-full md:flex-1 flex flex-col items-center justify-center h-64 md:h-full pb-6 md:pb-0 md:justify-center md:items-center pt-8">
      <LaptopContainer />
    </div>
  </section>
);

export default About;
