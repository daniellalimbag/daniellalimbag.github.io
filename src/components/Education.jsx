import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool, IoBriefcase } from "react-icons/io5";

const educations = [
  {
    degree: "BS Computer Science Major in Software Technology",
    school: "De La Salle University, Manila",
    date: "Sep 2022 - Present",
    description: "Research Executive at Data Science Society. Documentations member at SDFO Paragons. Member of Human-X Interactions Lab.",
  },
  {
    degree: "High School",
    school: "The Nazareth School, Lipa City",
    date: "Aug 2017 - May 2022",
    description: "Graduated in STEM. Competed in math and chess competitions.",
  },
];

const experiences = [
  {
    title: "DBA Intern",
    company: "Chubb Asia Pacific PTE. LTD.",
    date: "Apr 2026 - Present",
    description: "Developed an RAG chatbot for database documentation to improve information retrieval.",
  },
  {
    title: "Research Executive",
    company: "Data Science Society — De La Salle University",
    date: "Oct 2024 - May 2025",
    description: "Contributed to the ideation of data-driven projects.",
  },
  {
    title: "Documentations Member",
    company: "SDFO Paragons — De La Salle University",
    date: "Feb 2024 - May 2026",
    description: "Managed documentation for student organization events and assisted in the creation of post-activity reports.",
  },
];

const TimelineItem = ({ entry, variant, index }) => {
  const isEducation = variant === "education";
  const icon = isEducation ? <IoSchool size={24} /> : <IoBriefcase size={24} />;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={entry.date}
      iconStyle={{ background: "var(--violet)", color: "#fff", textAlign: "center" }}
      icon={icon}
      key={`${variant}-${index}`}
      contentStyle={{
        background: "var(--bg)",
        color: "var(--text)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        border: "1px solid var(--violet)",
        borderRadius: "1rem",
        backdropFilter: "blur(2px)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--violet)" }}
    >
      <h3
        className="vertical-timeline-element-title font-bold text-[color:var(--violet)] dark:text-[color:var(--text)]"
        style={{ textAlign: "left" }}
      >
        {isEducation ? entry.degree : entry.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle text-[color:var(--green)]"
        style={{ textAlign: "left" }}
      >
        {isEducation ? entry.school : entry.company}
      </h4>
      <p
        className="text-[color:var(--violet)] dark:text-[color:var(--text)] text-base mt-2"
        style={{ textAlign: "left" }}
      >
        {entry.description}
      </p>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const [view, setView] = useState("experience");
  const isEducation = view === "education";
  const items = isEducation ? educations : experiences;

  return (
    <section
      id="education"
      className="relative z-0 py-16 px-0 w-full bg-[color:var(--bg)] border-t border-t-[color:var(--text)]"
    >
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mb-8 w-full gap-6">
          <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center w-fit">
            {isEducation ? "Education" : "Experience"}
          </h2>
          <div
            className="inline-flex rounded-full border border-[color:var(--violet)] p-1 bg-[color:var(--bg)] shadow-sm"
            role="tablist"
            aria-label="Education or experience"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isEducation}
              onClick={() => setView("education")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isEducation
                  ? "bg-[color:var(--violet)] text-white"
                  : "text-[color:var(--text)] hover:bg-[color:var(--slate)]/20"
              }`}
            >
              Education
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!isEducation}
              onClick={() => setView("experience")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                !isEducation
                  ? "bg-[color:var(--violet)] text-white"
                  : "text-[color:var(--text)] hover:bg-[color:var(--slate)]/20"
              }`}
            >
              Experience
            </button>
          </div>
        </div>
        <div className="w-full" key={view}>
          <VerticalTimeline lineColor="var(--violet)">
            {items.map((entry, i) => (
              <TimelineItem key={`${view}-${i}`} entry={entry} variant={view} index={i} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Education;
