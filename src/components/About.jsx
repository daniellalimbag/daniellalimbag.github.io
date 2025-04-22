import React from "react";
import LaptopContainer from "./LaptopContainer";

const About = () => (
  <section className="w-full min-h-[300px] h-auto md:h-[60vw] md:max-h-[70vh] mx-0 relative flex flex-col md:flex-row items-center justify-center bg-[color:var(--bg)] rounded-none shadow-none mt-0 border-t-2" style={{ borderTopColor: 'var(--text)' }}>
    <div className="w-full md:flex-1 flex flex-col items-center md:items-start justify-center px-6 md:px-20 py-8">
      <h2 className="text-3xl font-bold py-4 md:py-6 text-center md:text-left text-[color:var(--text)] w-full">About Me</h2>
      <p className="text-center md:text-left text-[color:var(--text)] max-w-xl text-base md:text-lg w-full mb-4">
        Hi! I'm Daniella, a passionate developer who loves building interactive web experiences. I enjoy working with modern web technologies, learning new tools, and collaborating on exciting projects. Outside of coding, you might find me exploring new tech trends or enjoying coffee with friends.
      </p>
      <a
        href="/CV_LIMBAG_DANIELLA.pdf"
        download
        className="mt-4 inline-block px-4 py-2 bg-[color:var(--violet)] hover:bg-[color:var(--green)] text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-base"
      >
        Download Resume
      </a>
    </div>
    <div className="w-full md:flex-1 flex flex-col items-center justify-center h-64 md:h-full pb-6 md:pb-0">
      <LaptopContainer />
    </div>
  </section>
);

export default About;
